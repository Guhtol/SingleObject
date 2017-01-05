(function (root) {

    root.sgObject = {
        create: create,
        setAtt: setAttributes
    }

    function createFrag() {
        return document.createDocumentFragment()
    }

    function create(tagName) {
        return function (obj) {
            var element = document.createElement(tagName)

            if (element === null) {
                throw new Error('tag name not valid')
            }
            var result = getNamesProperty(obj)
                .reduce(createElement, { element: element, obj: obj })

            return result.element
        }
    }
    function setAttributes(element) {
        return function (obj) {
            return getNamesProperty(obj)
                .reduce(function (acc, nameProperty) {
                    acc.setAttributes(nameProperty, obj[nameProperty])
                }, element)
        }
    }

    function getNamesProperty(obj) {
        return Object.keys(obj)
    }

    function createElement(acc, item) {
        switch (item) {
            case "class":
                acc.element['className'] = acc.obj[item]
                return acc
            default:
                if (item in acc.element)
                    acc.element[item] = acc.obj[item]
                return acc
        }
    }


})(this)