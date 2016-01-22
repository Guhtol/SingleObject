var sTag = (function () {
    var tag = {},
        nameProperty = "",
        tagOptions = ['id', 'name', 'class', 'value', 'text', 'type', 'href'];

    var i = 0,
        len = 0;

    return {
        create: createTag,
        createFrag:createFrag        
    };

    function createTag(obj) {
        
        if (typeof obj !== "object" || obj["tag"] === undefined) {
            throw new Error('Not object or missing property tag');
        };

        tag = document.createElement(obj.tag);

        resetWhile(tagOptions);

        while (i < len) {
            
            nameProperty = tagOptions[i];

            if (typeof obj[nameProperty] !== "undefined") {

                setTagElement(tag, obj, nameProperty);
            };

            i++;
        }
        return tag;

    };
    
    function createFrag(){
        
        return document.createDocumentFragment();    
    };
        
    function setTagElement(tag, obj, nameProperty) {
        
        switch (nameProperty) {
            case "name":
            
                tag.setAttribute(nameProperty, obj[nameProperty]);
                
                break;
            case "class":
            
                tag['className'] = obj[nameProperty];
                
                break;
            default:
            
                tag[nameProperty] = obj[nameProperty];
                
                break;
        }
    };
    function resetWhile(obj) {

        len = obj.length;

        i = 0;
    };
})();