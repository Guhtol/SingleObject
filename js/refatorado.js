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

            var reduceEl = reduce(configElement)
            var createEl = reduceEl({ element: element, obj: obj })

            return createEl(getNamesProperty(obj)).element
        }
    }
    function setAttributes(element) {
        return function (obj) {
            var reduceEl = reduce(createAttribute)
            var createEl = reduceEl({ element: element, obj: obj })

            return createEl(getNamesProperty(obj)).element
        }
    }

    function getNamesProperty(obj) {
        return Object.keys(obj)
    }

    function configElement(acc, item) {
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

    function createAttribute(acc, item) {
        acc.element.setAttribute(item, acc.obj[item])
        return acc
    }

    function reduce(fn) {
        return function (param) {
            return function (array) {
                return array.reduce(fn, param)
            }
        }
    }

})(this)