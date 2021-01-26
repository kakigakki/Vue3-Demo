const handler = {
    get: (target, prop) => {
        const res = Reflect.get(target, prop)
        console.log("拦截了get方法");
        return res
    },
    set: () => {
        console.log("readonly ,拦截了set方法");
    },
    deleteProperty: () => {
        console.log("readonly ,拦截了deleteProperty方法");
    }
}

const shallowReadonly = (val) => {
    if (typeof val === "object") {
        return new Proxy(val, handler)
    }
    return val
}

const readonly = (val) => {
    if (typeof val === "object") {
        if (Array.isArray(val)) {
            val.forEach((item, index, arr) => {
                arr[index] = readonly(item)
            })
        } else {
            Object.keys(val).forEach((item) => {
                val[item] = readonly(val[item])
            })
        }
        return new Proxy(val, handler)
    }
    return val
}

const user = { name: "kaki", age: 24, gf: { name: "mikina", age: 25 }, hobby: ["busket", { name: "swiming", type: "frog" }] }

// const shallowUser = shallowReadonly(user)
const reactiveUser = readonly(user)

// shallowUser.gf.name = "mikina2"
// shallowUser.age = 25
// delete shallowUser.name
// console.log(shallowUser);

reactiveUser.hobby[1].name = "mikina2"
reactiveUser.age = 25
delete reactiveUser.name
console.log(reactiveUser);