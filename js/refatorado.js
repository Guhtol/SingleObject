(function (root) {

    const createFrag = () => document.createDocumentFragment()

    const makeReduce = (fn, param) => array => array.reduce(fn, param)

    const makeSimpleCompose = (firstFn, secondFn) => obj => firstFn(secondFn(obj))

    const getNameProperty = obj => Object.keys(obj)

    const createAttribute = (acc, item) => {
        acc.element.setAttribute(item, acc.obj[item])
        return acc
    }

    const configElement = (acc, item) => {
        switch (item) {
            case "class":
                acc.element['className'] = acc.obj[item]
                return acc
            case "text":
                acc.element['textContent'] = acc.obj[item]
                return acc
            default:
                if (item in acc.element)
                    acc.element[item] = acc.obj[item]
                return acc
        }
    }

    const makeElement = tagName => obj => {
        const element = document.createElement(tagName)

        if (element === null)
            throw new Error('tag name not valid')

        const createEl = makeReduce(configElement, { element, obj })
        const compose = makeSimpleCompose(createEl, getNameProperty)

        return compose(obj).element
    }

    const makeSetAttribute = element => obj => {
        const createEl = makeReduce(createAttribute, { element, obj })
        const compose = makeSimpleCompose(createEl, getNameProperty)

        return compose(obj).element
    }

    root.sgObject = {
        create: makeElement,
        setAtt: makeSetAttribute
    }


})(this)