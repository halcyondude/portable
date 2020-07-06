/*** UNDER NO CIRCUMSTANCES DO NOT EDIT THIS FILE. THIS FILE IS COPIED                                    ***/
/*** FROM OSS UI. ANY CHANGES TO BE MADE IN KUBEVIOUS OSS UI.                                             ***/
/*** SOURCE: ../kubevious/src/lib/routers/top.js                                                          ***/

module.exports = {
    url: '/',

    setup: ({ router, logger }) => {

        router.get('/', function (req, res) {
            return {};
        });
    
        router.get('/version', function (req, res) {
            return {
                version: require('../../version')
            };
        });
    
    }

}