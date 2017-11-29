document.addEventListener('DOMContentLoaded', function() {
  new Vue({
    el:   '#app',
    data: {
      name:         'x.ui',
      versionName:  'Finger-Lime',
      version:      '7.0.0',
      dependancies: ['xlcss 5.0.1', 'ec.icons 3.0.0'],
      authors:      {
        author: {
          name:   'Bernhard Ruoff',
          github: 'https://github.com/bernester'
        }
      },
      query:        '',
      config:       {
        colors: {
          title:     'colors',
          type:      'color',
          variables: {
            background: '#FFFFFF',
            text:       '#2D3A47',
            link:       '#E74A7A',
            super:      '#FC6563',
            minor:      '#D5DDE4',
            highlight:  '#A7FFEB'
          }
        }
      },
      grid:         {
        gridNumColumns: 12,
        breakpoints:    {
          xs:  0,
          sm:  480,
          md:  720,
          lg:  1024,
          xl:  1280,
          xxl: 1920
        }
      },
      atoms:        {
        btn:     {
          styles:    {
            default: '',
            minor:   'btn_minor',
            super:   'btn_super'
          },
          modifiers: {
            outlined: 'btn_outlined',
            clear:    'btn_clear',
            invert:   'btn_invert',
            mono:     'btn_mono',
            round:    'btn_round'
          },
          sizes:     {
            small: 'btn_small',
            big:   'btn_big'
          },
          width:     {
            wide:  'btn_wide',
            block: 'btn_block'
          }
        },
        tags:    {
          themeModifiers: ['tag_minor', 'tag_link', 'tag_super', 'tag_highlight', 'tag_invert'],
          stateModifiers: ['tag_info', 'tag_error', 'tag_success', 'tag_warning'],
          sizeModifiers:  ['tag_small', 'tag_big'],
          styleModifiers: ['tag_outlined', 'tag_round']
        },
        bubbles: {
          themeModifiers: ['bubble_minor', 'bubble_link', 'bubble_super', 'bubble_highlight', 'bubble_invert'],
          stateModifiers: ['bubble_info', 'bubble_error', 'bubble_success', 'bubble_warning'],
          sizeModifiers:  ['bubble_small', 'bubble_big']
        },
        input:   {
          modifiers: {
            raised: 'input_raised',
            round:  'input_round'
          },
          sizes:     {
            small: 'input_small',
            big:   'input_big'
          }
        }
      },
      molecules:    {
        alerts:   {
          themeModifiers: ['alert_minor', 'alert_link', 'alert_super', 'alert_highlight', 'alert_invert'],
          stateModifiers: ['alert_info', 'alert_error', 'alert_success', 'alert_warning'],
          styleModifiers: ['alert_outlined']
        },
        dropdown: {
          behaviorModifiers: ['dropdown_center', 'dropdown_right', 'dropdown_right', 'dropdown_full', 'dropdown_above']
        },
        well:     {
          sizeModifiers:  ['well_small', 'well_big'],
          styleModifiers: ['well_outlined']
        }
      },
      modifiers:    {
        type: {
          colorModifiers: ['text-default', 'text-light', 'text-lighter', 'text-lightest', 'text-minor', 'text-link',
                           'text-super', 'text-highlight', 'text-invert', 'text-info', 'text-disabled', 'text-error',
                           'text-success', 'text-warning']
        }
      }, // :before \{\n(.*)";\n}
      iconset:      ['add', 'add-circle', 'alarm', 'alarm-clock', 'alarm-silent', 'align-center', 'align-justify',
                     'align-left', 'align-right', 'all-caps', 'brackets', 'angle-tool', 'arrange-1-to-9',
                     'arrange-9-to-1', 'arrange-a-to-z', 'arrange-z-to-a', 'arrow-down', 'arrow-down-left',
                     'arrow-down-right', 'arrow-left', 'arrow-return', 'arrow-right', 'arrow-up', 'arrow-up-left',
                     'arrow-up-right', 'artboard', 'asterisk', 'at-sign', 'bank', 'bank-note', 'banking-debit-machine',
                     'barcode', 'trash', 'binoculars', 'bitcoin-coin', 'bold', 'bookmark', 'border-bottom',
                     'border-inside', 'border-inside-vertical', 'border-inside-horizontal', 'border-left',
                     'border-none', 'border-outside', 'border-right', 'border-top', 'box', 'briefcase', 'bus',
                     'graph-pie', 'scale', 'whiteboard', 'graph-plot', 'calculator', 'calculator-2', 'calendar',
                     'calendar-check', 'calendar-close', 'calendar-pencil', 'calendar-refresh-2', 'camera',
                     'brightness-1', 'camera-off', 'camera-pin', 'camera-refresh', 'car-6', 'dashboard', 'tape',
                     'center-point', 'chat-bubble-circle', 'chat-bubble-circle-active', 'chat-bubble-square',
                     'chat-bubble-square-active', 'chat-bubble-square-2', 'chat-bubbles-square', 'check-box', 'cloud',
                     'cloud-disable', 'cloud-download', 'cloud-refresh', 'cloud-upload', 'cloud-wifi',
                     'color-contrast-off', 'color-contrast-on', 'color-palette', 'computer-screen', 'contact-book',
                     'content-book', 'content-bookmark', 'filter', 'layers-hide', 'layers-show', 'note',
                     'content-view-array', 'content-view-content', 'content-view-list', 'content-view-module', 'crop',
                     'cursor-arrow', 'cursor-hand', 'cursor-move', 'cursor-select-area', 'cursor-tap', 'cursor-target',
                     'data-download', 'data-syncing', 'data-transfer', 'data-upload', 'delete', 'dial-pad', 'diamond',
                     'divide', 'email', 'email-read', 'envelope', 'equaliser', 'eraser', 'expand', 'expand-2',
                     'expand-vertical', 'expand-horizontal', 'exposure-level', 'file-add', 'file-copy', 'file-new',
                     'file-notes-document', 'file-notes-new', 'files', 'files-thumbs', 'flash', 'flash-off',
                     'flip-down', 'flip-left', 'flip-right', 'flip-up', 'focus', 'focus-off', 'folder-new', 'folders',
                     'font-color', 'font-size', 'format-clear', 'frame', 'gradient', 'hash', 'health-blood-drop',
                     'eye-closed', 'highlight', 'hourglass', 'id-card', 'inbox', 'indent-decrease', 'indent-increase',
                     'infinity-loop', 'interface-alert-circle', 'interface-information', 'interface-question-mark',
                     'intersect', 'italic', 'key', 'laptop', 'square', 'lightbulb', 'link', 'link-broken',
                     'list-bullets', 'list-number', 'location-direction', 'location-globe', 'location-gps-off',
                     'location-gps-on', 'location-plan', 'location-map', 'location-pin-1', 'location-pin-2',
                     'lock-closed', 'lock-open', 'leave', 'harry-potter', 'measuring-tool', 'minus-front',
                     'mobile-phone', 'money-note-coin', 'move-down', 'move-left', 'move-right', 'move-to-back',
                     'move-to-front', 'move-up', 'music-note', 'hamburger', 'more-horizontal', 'more-vertical',
                     'new-square', 'outbox', 'paint-brush', 'paint-bucket', 'paint-palette', 'paint-roll', 'paperclip',
                     'paperplane', 'paragraph', 'paragraph-left-to-right', 'paragraph-right-to-left',
                     'paragraph-spacing', 'pen-tool', 'pencil', 'percent', 'bug', 'photo-landscape', 'photo-portrait',
                     'photo-view-all', 'picture-layer', 'pin', 'home', 'power', 'printer', 'qr-code', 'quote-closing',
                     'quote-opening', 'reflect-left', 'reflect-right', 'close-x-big', 'ruler', 'scale-vertical',
                     'scissors', 'select-area', 'send-to-back', 'send-to-front', 'database', 'settings-slider', 'share',
                     'megaphone', 'rss', 'signal', 'signal-tower', 'shear-left', 'shear-right', 'shopping-bag-alt',
                     'shopping-basket', 'shopping-cart', 'shrink', 'shrink-diagonal', 'shrink-horizontal',
                     'shrink-vertical', 'command', 'sign-euro', 'sign-ramp-left', 'sign-ramp-right', 'skull', 'sliders',
                     'slider', 'small-caps', 'speaker-volume-decrease', 'speaker-volume-high',
                     'speaker-volume-increase', 'speaker-volume-low', 'speaker-volume-off', 'spelling-check',
                     'spray-paint', 'strike-through', 'subscript', 'substract', 'sunny', 'superscript', 'switch-left',
                     'switch-right', 'switches', 'bluetooth', 'wifi', 'repeat', 'synchronize', 'switch', 'price-tag',
                     'tank', 'text', 'text-eraser', 'rotate-right', 'rotate-left', 'text-vector', 'toolbox',
                     'underline', 'unite', 'user', 'vector-circle', 'vector-line', 'vector-square', 'video-call',
                     'video-clip', 'eject', 'next', 'pause', 'play', 'previous', 'stop', 'heart-outlined',
                     'star-outlined', 'thumbs-down', 'thumbs-up', 'zoom-in', 'zoom-out', 'glasses', 'save',
                     'chevron-left', 'chevron-right', 'move-vertical', 'settings-cog', 'drag-handle', 'user-chat',
                     'text-input', 'tablet', 'company', 'checkmark', 'android', 'apple', 'facebook', 'google',
                     'linkedin', 'twitter', 'xing', 'youtube', 'find', 'business-man', 'factory', 'building', 'fax',
                     'globe', 'phone', 'close-x-circle', 'ticket', 'key-enter', 'key-left', 'key-right', 'key-shift',
                     'img', 'smiley', 'arrow-next', 'arrow-prev', 'wand', 'cog', 'h-align-left', 'h-align-middle',
                     'h-align-right', 'v-align-bottom', 'v-align-middle', 'v-align-top', 'flip-h', 'flip-v',
                     'graph-bar', 'check', 'layer-down', 'layer-up', 'undo', 'redo', 'stackoverflow', 'kununu', 'totop',
                     'shopping-bag', 'profile-circle', 'heart-filled', 'github', 'glue', 'adhesive-tape', 'transparent',
                     'recycling', 'dumbbell', 'instagram', 'eye-open', 'water-bottle', 'close-x', 'star-filled',
                     'clock', 'appointment', 'save-date', 'whistle', 'weight', 'share-alt', 'coin-transfer',
                     'toggle-caret']
    }
  });
});
