function reactive(target) {
    if (target && typeof target === "object") {
        //如何是数组
        if (Array.isArray(target)) {
            target.forEach((item, index, arr) =>
                arr[index] = reactive(item)
            )
        } else {
            //如果是对象
            for (const key in target) {
                target[key] = reactive(target[key])
            }
        }
        return new Proxy(target, Handler)
    }
    return target
}

const shallowRef = (val) => {
    return {
        _value: val,
        get value() {
            return this._value
        },
        set value(val) {
            this._value = val
        }
    }
}

const ref = (val) => {
    return {
        _value: reactive(val),
        get value() {
            return this._value
        },
        set value(val) {
            this._value = val
        }
    }
}