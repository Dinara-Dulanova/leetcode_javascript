var cancellable = function(fn, args, t) {
    let time = setTimeout(() => {
        return fn(args)
    }, t)
    return function  cancelFn () {
         clearTimeout(time)
    }
};