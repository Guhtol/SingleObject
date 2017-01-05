(function (root) {

    const createFrag = () => document.createDocumentFragment()

    const makeReduce = fn => param => array => array.reduce(fn, param)

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

        const mkReduce = makeReduce(configElement)
        const createEl = mkReduce({ element, obj })
        const compose = makeSimpleCompose(createEl, getNameProperty)

        return compose(obj).element
    }

    const makeSetAttribute = element => obj => {
        const mkReduce = makeReduce(createAttribute)
        const createEl = mkReduce({ element, obj })
        const compose = makeSimpleCompose(createEl, getNameProperty)

        return compose(obj).element
    }

    root.sgObject = {
        create: makeElement,
        setAtt: makeSetAttribute
    }


})(this)