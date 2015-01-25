'use strict';
var $ = require('jquery');
module.exports = function(shariff) {
    var fbEncUrl = encodeURIComponent(shariff.getURL());
    return {
        popup: false,
        iframe: true,
        width: 130,
        shareText: {
            'de': 'gefällt mir',
            'en': 'like'
        },
        name: 'facebooklike',
        title: {
            'de': 'Gefällt mir bei Facebook ',
            'en': 'Like on Facebook'
        },
        shareUrl: 'http://www.facebook.com/plugins/like.php?href=' + fbEncUrl + shariff.getReferrerTrack() + '&width=80&layout=button_count&action=like&show_faces=false&share=false&height=30',
        clickAction: function(){
            $('iframe[name='+this.name+']').contents().find('.pluginButton').not('.hidden_elem').find('button').click();
        }
    };
};
