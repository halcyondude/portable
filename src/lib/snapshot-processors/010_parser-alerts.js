/*** UNDER NO CIRCUMSTANCES DO NOT EDIT THIS FILE. THIS FILE IS COPIED                                    ***/
/*** FROM OSS UI. ANY CHANGES TO BE MADE IN KUBEVIOUS OSS UI.                                             ***/
/*** SOURCE: ../kubevious.git/src/lib/snapshot-processors/010_parser-alerts.js                            ***/

module.exports = {
    order: 10,

    handler: ({logger, state}) => {

        state.traverseNodes((dn, node) => {

            var alerts = state.getAlerts(dn);
            for(var alert of alerts)
            {
                alert.source = {
                    kind: 'parser'
                };
            }

        })

    }
}