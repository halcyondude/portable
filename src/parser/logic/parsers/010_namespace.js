/*** UNDER NO CIRCUMSTANCES DO NOT EDIT THIS FILE. THIS FILE IS COPIED ***/ 
/*** FROM OSS UI. ANY CHANGES TO BE MADE IN KUBEVIOUS OSS UI. ***/ 
 
 module.exports = {
    target: {
        api: "v1",
        kind: "Namespace"
    },

    kind: 'ns',

    order: 10,

    handler: ({scope, item, createK8sItem}) =>
    {
        createK8sItem(scope.root);
    }
}