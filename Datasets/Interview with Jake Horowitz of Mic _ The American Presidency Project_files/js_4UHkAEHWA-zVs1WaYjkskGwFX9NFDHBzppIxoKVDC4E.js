(function ($, Drupal) {
    // I want some code to run on page load, so I use Drupal.behaviors
    Drupal.behaviors.udb = {
        attach: function (context, settings) {
            var mql = Drupal.behaviors.udb.mql();
            /*
            console.log('mql is: ');
            console.log(mql);
            console.log('mql v12 is: ');
            console.log(mql.viewport_12.matches);
            console.log('mql v9 is: ');
            console.log(mql.viewport_9.matches);
            console.log('mql v7 is: ');
            console.log(mql.viewport_7.matches);
            console.log('mql v4 is: ');
            console.log(mql.viewport_4.matches);
             */
            var device_supports_udb = true;
            var seconds_until_end_of_day = Drupal.behaviors.udb.secondsUntilEndOfDay();

            // Any code here will be run on page load.
            console.log("udb.behaviors.js loading ...");

            try {
                var expiredStorage = new ExpiredStorage();
            } catch (e) {
                console.log("Device does not support HTML5 LocalStorage API. Do not show popup as it can never be opted out of.")
                device_supports_udb = false;
            }

            // Check that cooldown is not in-progress or that the maximum requests have been made per day.
            var max_requests_per_day_reached = Boolean(expiredStorage.getItem('Drupal.udb.' + window.location.hostname + '.request_shown_count')) && (expiredStorage.getItem('Drupal.udb.' + window.location.hostname + '.request_shown_count') >= Drupal.settings.udb.max_donation_requests_per_day);
            var should_cooldown_now = Boolean(expiredStorage.getItem('Drupal.udb.' + window.location.hostname + '.request_made_count')) && (parseInt(expiredStorage.getItem('Drupal.udb.' + window.location.hostname + '.request_made_count')) % parseInt(Drupal.settings.udb.cooldown_interval) !== 0);
            var user_opted_out = Boolean(expiredStorage.getItem('Drupal.udb.' + window.location.hostname + '.optout'));

            // ExpiredStorage.getItem() will fetch item (if expired, will remove it and return null):
            if (device_supports_udb && !user_opted_out && !max_requests_per_day_reached && !should_cooldown_now) {
                var jspanel_config_obj = {
                    theme: 'primary',
                    headerTitle: settings.udb.popup_title,
                    /* https://jspanel.de/api.html#options/headerControls */
                    headerControls: {
                        close: 'remove',
                        maximize: 'remove',
                        normalize: 'remove',
                        minimize: 'remove',
                        smallify: 'remove'
                    },
                    position: 'center-top 0 58',
                    // Sets the dimensions of the complete panel whereas option contentSize sets the dimensions of the content section.
                    // @see https://jspanel.de/api.html#options/panelSize
                    panelSize: {
                        width: function() { return Math.min(730, window.innerWidth*0.7);},
                        height: function () {
                            return Math.min(325, window.innerHeight * 0.8);
                        }
                    },
                    // @see https://jspanel.de/api.html#options/contentOverflow
                    contentOverflow: 'auto auto',
                    // @see https://jspanel.de/api.html#options/contentSize
                    contentSize: {
                        width: function() { return Math.min(730, window.innerWidth*0.9);},
                        height: function () {
                            return Math.min(325, window.innerHeight * 0.5);
                        }
                    },
                    content: settings.udb.popup_donation_message,
                    callback: function () {
                        //console.log('this settings');
                        //console.log(this);
                        this.content.style.padding = '20px 20px 5px 20px';
                        this.headerbar.style.backgroundColor = Drupal.settings.udb.titlebar_bgcolor;
                        this.headertitle.style.setProperty('font-size', "2.5rem", "important");
                        // This is important or by default JSPanel ellipsis ... long titles.
                        this.headertitle.style.setProperty('white-space', 'initial', "important");
                        /*this.headerbar.titlebar.div.style.color = Drupal.settings.udb.titlebar_fgcolor;*/
                        this.content.style.backgroundColor = Drupal.settings.udb.content_bgcolor;
                        this.content.style.color = Drupal.settings.udb.content_fgcolor;
                        this.content.style.setProperty('font-size', Drupal.settings.udb.content_text_size + 'rem', 'important');
                    },
                };
                var udb_panel = (Drupal.settings.udb.popup_type === 'standard') ? jsPanel.create(jspanel_config_obj) : jsPanel.modal.create(jspanel_config_obj);

                // @see https://stackoverflow.com/a/27160954/1491507
                if (context == document) {
                    var optout_box = context.getElementById('udb_visitor_optout');
                    optout_box.addEventListener("change", Drupal.behaviors.udb.optoutOnChange, false);
                }

                // Track the donation request count.
                var current_request_count = parseInt(expiredStorage.getItem('Drupal.udb.' + window.location.hostname + '.request_made_count')) || 0;
                expiredStorage.setItem('Drupal.udb.' + window.location.hostname + '.request_made_count', current_request_count + 1, seconds_until_end_of_day);

                // Track the donation request was shown.
                // If the value is currently not set this converts any falsely value 0. It leaves any number a number.
                var current_shown_count = parseInt(expiredStorage.getItem('Drupal.udb.' + window.location.hostname + '.request_shown_count')) || 0;
                expiredStorage.setItem('Drupal.udb.' + window.location.hostname + '.request_shown_count', current_shown_count + 1, seconds_until_end_of_day);
            }
            if (should_cooldown_now) {
                var current_request_count = parseInt(expiredStorage.getItem('Drupal.udb.' + window.location.hostname + '.request_made_count')) || 0;
                expiredStorage.setItem('Drupal.udb.' + window.location.hostname + '.request_made_count', current_request_count + 1, seconds_until_end_of_day);
            }
        }
    };
    Drupal.behaviors.udb.optoutOnChange = function (event) {
        const SECONDS_PER_DAY = 86400;
        var source = event.target;
        var udb_panel = document.getElementById('jsPanel-1');
        if (source.checked) {
            var expiredStorage = new ExpiredStorage();
            expiredStorage.setItem('Drupal.udb.' + window.location.hostname + '.optout', 1, Drupal.settings.udb.optout_duration * SECONDS_PER_DAY);
            udb_panel.close();
        }
    };
    Drupal.behaviors.udb.secondsUntilEndOfDay = function () {
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();
        var seceod = (24 * 60 * 60) - (h * 60 * 60) - (m * 60) - s;
        return seceod;
    };
    Drupal.behaviors.udb.mql = function () {
        // Attempt to apply some CSS and Styling to the popup depending on
        // device proportions.
        //
        // These breakpoints are CSS framework agonstic and derived from:
        // https://ricostacruz.com/til/css-media-query-breakpoints
        var mql = {
            'viewport_4': window.matchMedia('screen and (min-width: 480px)'),
            'viewport_7': window.matchMedia('screen and (min-width: 768px)'),
            'viewport_9': window.matchMedia('screen and (min-width: 992px)'),
            'viewport_12': window.matchMedia('screen and (min-width: 1200px)'),
        };

        mql.viewport_4.min_width = 480;
        // For small devices the banner will fill 0.95 width and height of the device display.
        mql.viewport_4.popup_width = null;
        mql.viewport_4.popup_height = null;

        // For medium sized devices the popup will fill upto half the screen.
        mql.viewport_7.min_width = 768;
        mql.viewport_7.popup_width = null;
        mql.viewport_7.popup_height = null;

        mql.viewport_9.min_width = 992;
        mql.viewport_9.popup_width = null;
        mql.viewport_9.popup_height = null;

        // For large screens the popup will max out at 500px.
        mql.viewport_12.min_width = 1200;
        mql.viewport_12.popup_width = 700;
        mql.viewport_12.popup_height = 400;
        return mql;
    };
}(jQuery, Drupal));;

(function($) {

/**
 * Drupal FieldGroup object.
 */
Drupal.FieldGroup = Drupal.FieldGroup || {};
Drupal.FieldGroup.Effects = Drupal.FieldGroup.Effects || {};
Drupal.FieldGroup.groupWithfocus = null;

Drupal.FieldGroup.setGroupWithfocus = function(element) {
  element.css({display: 'block'});
  Drupal.FieldGroup.groupWithfocus = element;
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processFieldset = {
  execute: function (context, settings, type) {
    if (type == 'form') {
      // Add required fields mark to any fieldsets containing required fields
      $('fieldset.fieldset', context).once('fieldgroup-effects', function(i) {
        if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
          $('legend span.fieldset-legend', $(this)).eq(0).append(' ').append($('.form-required').eq(0).clone());
        }
        if ($('.error', $(this)).length) {
          $('legend span.fieldset-legend', $(this)).eq(0).addClass('error');
          Drupal.FieldGroup.setGroupWithfocus($(this));
        }
      });
    }
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processAccordion = {
  execute: function (context, settings, type) {
    $('div.field-group-accordion-wrapper', context).once('fieldgroup-effects', function () {
      var wrapper = $(this);

      // Get the index to set active.
      var active_index = false;
      wrapper.find('.accordion-item').each(function(i) {
        if ($(this).hasClass('field-group-accordion-active')) {
          active_index = i;
        }
      });

      wrapper.accordion({
        heightStyle: "content", // jQuery UI >= v1.9
        autoHeight: false,      // jQuery UI < v1.9
        active: active_index,
        collapsible: true,
        changestart: function(event, ui) {
          if ($(this).hasClass('effect-none')) {
            ui.options.animated = false;
          }
          else {
            ui.options.animated = 'slide';
          }
        }
      });

      if (type == 'form') {

        var $firstErrorItem = false;

        // Add required fields mark to any element containing required fields
        wrapper.find('div.field-group-accordion-item').each(function(i) {

          if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
            $('h3.ui-accordion-header a').eq(i).append(' ').append($('.form-required').eq(0).clone());
          }
          if ($('.error', $(this)).length) {
            // Save first error item, for focussing it.
            if (!$firstErrorItem) {
              $firstErrorItem = $(this).parent().accordion("option", "active", i);
            }
            $('h3.ui-accordion-header').eq(i).addClass('error');
          }
        });

        // Save first error item, for focussing it.
        if (!$firstErrorItem) {
          $('.ui-accordion-content-active', $firstErrorItem).css({height: 'auto', width: 'auto', display: 'block'});
        }

      }
    });
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processHtabs = {
  execute: function (context, settings, type) {
    if (type == 'form') {
      // Add required fields mark to any element containing required fields
      $('fieldset.horizontal-tabs-pane', context).once('fieldgroup-effects', function(i) {
        if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
          $(this).data('horizontalTab').link.find('strong:first').after($('.form-required').eq(0).clone()).after(' ');
        }
        if ($('.error', $(this)).length) {
          $(this).data('horizontalTab').link.parent().addClass('error');
          Drupal.FieldGroup.setGroupWithfocus($(this));
          $(this).data('horizontalTab').focus();
        }
      });
    }
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processTabs = {
  execute: function (context, settings, type) {
    if (type == 'form') {

      var errorFocussed = false;

      // Add required fields mark to any fieldsets containing required fields
      $('fieldset.vertical-tabs-pane', context).once('fieldgroup-effects', function(i) {
        if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
          $(this).data('verticalTab').link.find('strong:first').after($('.form-required').eq(0).clone()).after(' ');
        }
        if ($('.error', $(this)).length) {
          $(this).data('verticalTab').link.parent().addClass('error');
          // Focus the first tab with error.
          if (!errorFocussed) {
            Drupal.FieldGroup.setGroupWithfocus($(this));
            $(this).data('verticalTab').focus();
            errorFocussed = true;
          }
        }
      });
    }
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 *
 * TODO clean this up meaning check if this is really
 *      necessary.
 */
Drupal.FieldGroup.Effects.processDiv = {
  execute: function (context, settings, type) {

    $('div.collapsible', context).once('fieldgroup-effects', function() {
      var $wrapper = $(this);

      // Turn the legend into a clickable link, but retain span.field-group-format-toggler
      // for CSS positioning.

      var $toggler = $('span.field-group-format-toggler:first', $wrapper);
      var $link = $('<a class="field-group-format-title" href="#"></a>');
      $link.prepend($toggler.contents());

      // Add required field markers if needed
      if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
        $link.append(' ').append($('.form-required').eq(0).clone());
      }

      $link.appendTo($toggler);

      // .wrapInner() does not retain bound events.
      $link.click(function () {
        var wrapper = $wrapper.get(0);
        // Don't animate multiple times.
        if (!wrapper.animating) {
          wrapper.animating = true;
          var speed = $wrapper.hasClass('speed-fast') ? 300 : 1000;
          if ($wrapper.hasClass('effect-none') && $wrapper.hasClass('speed-none')) {
            $('> .field-group-format-wrapper', wrapper).toggle();
            wrapper.animating = false;
          }
          else if ($wrapper.hasClass('effect-blind')) {
            $('> .field-group-format-wrapper', wrapper).toggle('blind', {}, speed);
            wrapper.animating = false;
          }
          else {
            $('> .field-group-format-wrapper', wrapper).toggle(speed, function() {
              wrapper.animating = false;
            });
          }
        }
        $wrapper.toggleClass('collapsed');
        return false;
      });

    });
  }
};

/**
 * Behaviors.
 */
Drupal.behaviors.fieldGroup = {
  attach: function (context, settings) {
    settings.field_group = settings.field_group || Drupal.settings.field_group;
    if (settings.field_group == undefined) {
      return;
    }

    // Execute all of them.
    $.each(Drupal.FieldGroup.Effects, function (func) {
      // We check for a wrapper function in Drupal.field_group as
      // alternative for dynamic string function calls.
      var type = func.toLowerCase().replace("process", "");
      if (settings.field_group[type] != undefined && $.isFunction(this.execute)) {
        this.execute(context, settings, settings.field_group[type]);
      }
    });

    // Fixes css for fieldgroups under vertical tabs.
    $('.fieldset-wrapper .fieldset > legend').css({display: 'block'});
    $('.vertical-tabs fieldset.fieldset').addClass('default-fallback');

    // Add a new ID to each fieldset.
    $('.group-wrapper .horizontal-tabs-panes > fieldset', context).once('group-wrapper-panes-processed', function() {
      // Tats bad, but we have to keep the actual id to prevent layouts to break.
      var fieldgroupID = 'field_group-' + $(this).attr('id');
      $(this).attr('id', fieldgroupID);
    });
    // Set the hash in url to remember last userselection.
    $('.group-wrapper ul li').once('group-wrapper-ul-processed', function() {
      var fieldGroupNavigationListIndex = $(this).index();
      $(this).children('a').click(function() {
        var fieldset = $('.group-wrapper fieldset').get(fieldGroupNavigationListIndex);
        // Grab the first id, holding the wanted hashurl.
        var hashUrl = $(fieldset).attr('id').replace(/^field_group-/, '').split(' ')[0];
        window.location.hash = hashUrl;
      });
    });

  }
};

})(jQuery);
;
/**
 * @file
 * The RRSSB Drupal Behavior to configure settings.
 */

(function ($) {
    Drupal.behaviors.rrssb = {
      attach: function(context, settings) {
        rrssbConfigAll(settings.rrssb);
      }
    };
})(jQuery);;
+function(i,t,e){"use strict";var s={size:{min:.1,max:10,"default":1},shrink:{min:.2,max:1,"default":.8},regrow:{min:.2,max:1,"default":.8},minRows:{min:1,max:99,"default":1},maxRows:{min:1,max:99,"default":2},prefixReserve:{min:0,max:.8,"default":.3},prefixHide:{min:.1,max:10,"default":2},alignRight:{type:"boolean","default":!1}},n=function(){var i=t.fn.jquery.split(".");return 1==i[0]&&i[1]<8}();i.rrssbConfigAll=function(i){t(".rrssb").each(function(){t(this).rrssbConfig(i)})},t.fn.rrssbConfig=function(i){if(!t(this).data("settings")||i){var e={};for(var n in s)e[n]=s[n].default,i&&("boolean"==s[n].type?e[n]=Boolean(i[n]):isNaN(parseFloat(i[n]))||(e[n]=Math.min(s[n].max,Math.max(s[n].min,i[n]))));t(this).data("settings",e),o.call(this)}};var r,a=function(){var i=t(".rrssb-prefix",this),e=i.length?i.clone().css({visibility:"hidden","white-space":"nowrap",display:"inline"}).appendTo(this):null;t("ul").contents().filter(function(){return this.nodeType===Node.TEXT_NODE}).remove();var s={width:0,buttons:0,height:t("li",this).innerHeight(),fontSize:parseFloat(t(this).css("font-size")),prefixWidth:e?e.innerWidth():0};return t("li",this).each(function(){s.width=Math.max(s.width,t(this).innerWidth()),s.buttons++}),t(this).data("orig",s),e&&e.remove(),s},h=function(){t(".rrssb").each(o)},o=function(){var i=t(this).data("orig");i||(i=a.call(this));var e=t(this).data("settings"),s=i.width*e.size,r=i.buttons,h=t(this).innerWidth()-1,o=h<s*e.shrink?"":s;n?t("li",this).width(o):t("li",this).innerWidth(o);var l=h/e.shrink,c=i.prefixWidth*e.size;c>l*e.prefixHide?(c=0,t(".rrssb-prefix",this).css("display","none")):t(".rrssb-prefix",this).css("display","");var f=c<=h*e.prefixReserve?l-c:l,d=Math.floor(f/s);d*e.maxRows<r?(t(this).addClass("no-label"),s=i.height*e.size,d=Math.max(1,Math.floor(f/s))):t(this).removeClass("no-label");var u=e.minRows>1?Math.max(1,Math.ceil(r/(e.minRows-1))-1):r;d=Math.min(d,u),d=Math.ceil(r/Math.ceil(r/d)),u=Math.ceil(r/Math.ceil(r/u));var m=Math.floor(1e4/d)/100;t("li",this).css("max-width",m+"%");var p=s*d+c;p>l&&(p-=c,c=0);var g=u>d?e.regrow:1,b=Math.min(g,.95*h/p),x=i.fontSize*e.size*b;if(t(this).css("font-size",x+"px"),c){var v=Math.floor(1e4*c/p)/100;t(".rrssb-buttons",this).css("padding-left",v+"%"),t(".rrssb-prefix",this).css("position","absolute");var w=Math.ceil(r/d),M=w*i.height/i.fontSize;t(".rrssb-prefix",this).css("line-height",M+"em")}else t(".rrssb-buttons",this).css("padding-left",""),t(".rrssb-prefix",this).css("position",""),t(".rrssb-prefix",this).css("line-height","");var y=e.alignRight?"padding-left":"padding-right";if(b>=.999*g){var z=Math.floor(1e4*(h-p*b*1.02)/h)/100;t(this).css(y,z+"%")}else t(this).css(y,"")},l=function(t,s,n,r){var a=i.screenLeft!==e?i.screenLeft:screen.left,h=i.screenTop!==e?i.screenTop:screen.top,o=i.innerWidth?i.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,l=i.innerHeight?i.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,c=o/2-n/2+a,f=l/3-r/3+h,d=i.open(t,s,"scrollbars=yes, width="+n+", height="+r+", top="+f+", left="+c);d&&d.focus&&d.focus()},c=function(i){r&&clearTimeout(r),r=setTimeout(h,i?i:200)};t(document).ready(function(){t(".rrssb-buttons a.popup").click(function(i){l(t(this).attr("href"),t(this).find(".rrssb-text").html(),580,470),i.preventDefault()}),t(i).resize(c),t(document).ready(function(){rrssbConfigAll()})})}(window,jQuery);;
/**
 * @file
 */

(function ($) {

  'use strict';

  Drupal.extlink = Drupal.extlink || {};

  Drupal.extlink.attach = function (context, settings) {
    if (!settings.hasOwnProperty('extlink')) {
      return;
    }

    // Strip the host name down, removing ports, subdomains, or www.
    var pattern = /^(([^\/:]+?\.)*)([^\.:]{1,})((\.[a-z0-9]{1,253})*)(:[0-9]{1,5})?$/;
    var host = window.location.host.replace(pattern, '$2$3$6');
    var subdomain = window.location.host.replace(host, '');

    // Determine what subdomains are considered internal.
    var subdomains;
    if (settings.extlink.extSubdomains) {
      subdomains = '([^/]*\\.)?';
    }
    else if (subdomain === 'www.' || subdomain === '') {
      subdomains = '(www\\.)?';
    }
    else {
      subdomains = subdomain.replace('.', '\\.');
    }

    // Build regular expressions that define an internal link.
    var internal_link = new RegExp('^https?://([^@]*@)?' + subdomains + host, 'i');

    // Extra internal link matching.
    var extInclude = false;
    if (settings.extlink.extInclude) {
      extInclude = new RegExp(settings.extlink.extInclude.replace(/\\/, '\\'), 'i');
    }

    // Extra external link matching.
    var extExclude = false;
    if (settings.extlink.extExclude) {
      extExclude = new RegExp(settings.extlink.extExclude.replace(/\\/, '\\'), 'i');
    }

    // Extra external link CSS selector exclusion.
    var extCssExclude = false;
    if (settings.extlink.extCssExclude) {
      extCssExclude = settings.extlink.extCssExclude;
    }

    // Extra external link CSS selector explicit.
    var extCssExplicit = false;
    if (settings.extlink.extCssExplicit) {
      extCssExplicit = settings.extlink.extCssExplicit;
    }

    // Define the jQuery method (either 'append' or 'prepend') of placing the icon, defaults to 'append'.
    var extIconPlacement = settings.extlink.extIconPlacement || 'append';

    // Find all links which are NOT internal and begin with http as opposed
    // to ftp://, javascript:, etc. other kinds of links.
    // When operating on the 'this' variable, the host has been appended to
    // all links by the browser, even local ones.
    // In jQuery 1.1 and higher, we'd use a filter method here, but it is not
    // available in jQuery 1.0 (Drupal 5 default).
    var external_links = [];
    var mailto_links = [];
    $('a:not([data-extlink]), area:not([data-extlink])', context).each(function (el) {
      try {
        var url = '';
        if (typeof this.href == 'string') {
          url = this.href.toLowerCase();
        }
        // Handle SVG links (xlink:href).
        else if (typeof this.href == 'object') {
          url = this.href.baseVal;
        }
        if (url.indexOf('http') === 0
          && ((!url.match(internal_link) && !(extExclude && url.match(extExclude))) || (extInclude && url.match(extInclude)))
          && !(extCssExclude && $(this).is(extCssExclude))
          && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
          && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
          external_links.push(this);
        }
        // Do not include area tags with begin with mailto: (this prohibits
        // icons from being added to image-maps).
        else if (this.tagName !== 'AREA'
          && url.indexOf('mailto:') === 0
          && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
          && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
          mailto_links.push(this);
        }
      }
      // IE7 throws errors often when dealing with irregular links, such as:
      // <a href="node/10"></a> Empty tags.
      // <a href="http://user:pass@example.com">example</a> User:pass syntax.
      catch (error) {
        return false;
      }
    });

    if (settings.extlink.extClass) {
      Drupal.extlink.applyClassAndSpan(external_links, settings.extlink.extClass, extIconPlacement);
    }

    if (settings.extlink.mailtoClass) {
      Drupal.extlink.applyClassAndSpan(mailto_links, settings.extlink.mailtoClass, extIconPlacement);
    }

    if (settings.extlink.extTarget) {
      // Apply the target attribute to all links.
      $(external_links).attr('target', settings.extlink.extTarget);
      // Add rel attributes noopener and noreferrer.
      $(external_links).attr('rel', function (i, val) {
        // If no rel attribute is present, create one with the values noopener and noreferrer.
        if (val == null) {
          return 'noopener noreferrer';
        }
        // Check to see if rel contains noopener or noreferrer. Add what doesn't exist.
        if (val.indexOf('noopener') > -1 || val.indexOf('noreferrer') > -1) {
          if (val.indexOf('noopener') === -1) {
            return val + ' noopener';
          }
          if (val.indexOf('noreferrer') === -1) {
            return val + ' noreferrer';
          }
          // Both noopener and noreferrer exist. Nothing needs to be added.
          else {
            return val;
          }
        }
        // Else, append noopener and noreferrer to val.
        else {
          return val + ' noopener noreferrer';
        }
      });
    }

    Drupal.extlink = Drupal.extlink || {};

    // Set up default click function for the external links popup. This should be
    // overridden by modules wanting to alter the popup.
    Drupal.extlink.popupClickHandler = Drupal.extlink.popupClickHandler || function () {
      if (settings.extlink.extAlert) {
        return confirm(settings.extlink.extAlertText);
      }
    };

    $(external_links).click(function (e) {
      return Drupal.extlink.popupClickHandler(e, this);
    });
  };

  /**
   * Apply a class and a trailing <span> to all links not containing images.
   *
   * @param {object[]} links
   *   An array of DOM elements representing the links.
   * @param {string} class_name
   *   The class to apply to the links.
   * @param {string} icon_placement
   *   'append' or 'prepend' the icon to the link.
   */
  Drupal.extlink.applyClassAndSpan = function (links, class_name, icon_placement) {
    var $links_to_process;
    if (Drupal.settings.extlink.extImgClass) {
      $links_to_process = $(links);
    }
    else {
      var links_with_images = $(links).find('img').parents('a');
      $links_to_process = $(links).not(links_with_images);
    }
    // Add data-extlink attribute.
    $links_to_process.attr('data-extlink', '');
    var i;
    var length = $links_to_process.length;
    for (i = 0; i < length; i++) {
      var $link = $($links_to_process[i]);
      if ($link.css('display') === 'inline' || $link.css('display') === 'inline-block') {
        if (Drupal.settings.extlink.extUseFontAwesome) {
          if (class_name === Drupal.settings.extlink.mailtoClass) {
            $link[icon_placement]('<span class="fa-' + class_name + ' extlink"><span class="fa fa-envelope-o" title="' + Drupal.settings.extlink.mailtoLabel + '"></span><span class="element-invisible">' + Drupal.settings.extlink.mailtoLabel + '</span></span>');
          }
          else {
            $link[icon_placement]('<span class="fa-' + class_name + ' extlink"><span class="fa fa-external-link" title="' + Drupal.settings.extlink.extLabel + '"></span><span class="element-invisible">' + Drupal.settings.extlink.extLabel + '</span></span>');
          }
        }
        else {
          if (class_name === Drupal.settings.extlink.mailtoClass) {
            $link[icon_placement]('<span class="' + class_name + '"><span class="element-invisible">' + Drupal.settings.extlink.mailtoLabel + '</span></span>');
          }
          else {
            $link[icon_placement]('<span class="' + class_name + '"><span class="element-invisible">' + Drupal.settings.extlink.extLabel + '</span></span>');
          }
        }
      }
    }
  };

  Drupal.behaviors.extlink = Drupal.behaviors.extlink || {};
  Drupal.behaviors.extlink.attach = function (context, settings) {
    // Backwards compatibility, for the benefit of modules overriding extlink
    // functionality by defining an "extlinkAttach" global function.
    if (typeof extlinkAttach === 'function') {
      extlinkAttach(context);
    }
    else {
      Drupal.extlink.attach(context, settings);
    }
  };

})(jQuery);
;
