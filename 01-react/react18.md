# API para o React 18

1. Children: {map: ƒ, forEach: ƒ, count: ƒ, toArray: ƒ, only: ƒ}
1. Component: ƒ Component(props, context, updater)
1. Fragment: Symbol(react.fragment)
1. Profiler: Symbol(react.profiler)
1. PureComponent: ƒ PureComponent(props, context, updater)
1. StrictMode: Symbol(react.strict_mode)
1. Suspense: Symbol(react.suspense)
1. cloneElement: ƒ cloneElementWithValidation(element, props, children)
1. createContext: ƒ createContext(defaultValue)
1. createElement: ƒ createElementWithValidation(type, props, children)
1. createFactory: ƒ createFactoryWithValidation(type)
1. createRef: ƒ createRef()
1. forwardRef: ƒ forwardRef(render)
1. isValidElement: ƒ isValidElement(object)
1. lazy: ƒ lazy(ctor)
1. memo: ƒ memo(type, compare)
1. startTransition: ƒ startTransition(scope, options)
1. unstable_act: ƒ act(callback)
1. useCallback: ƒ useCallback(callback, deps)
1. useContext: ƒ useContext(Context)
1. useDebugValue: ƒ useDebugValue(value, formatterFn)
1. useDeferredValue: ƒ useDeferredValue(value)
1. useEffect: ƒ useEffect(create, deps)
1. useId: ƒ useId()
1. useImperativeHandle: ƒ useImperativeHandle(ref, create, deps)
1. useInsertionEffect: ƒ useInsertionEffect(create, deps)
1. useLayoutEffect: ƒ useLayoutEffect(create, deps)
1. useMemo: ƒ useMemo(create, deps)
1. useReducer: ƒ useReducer(reducer, initialArg, init)
1. useRef: ƒ useRef(initialValue)
1. useState: ƒ useState(initialState)
1. useSyncExternalStore: ƒ useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
1. useTransition: ƒ useTransition()


# API do ReactDOM 18

1. createPortal: ƒ createPortal$1(children, container)
1. createRoot: ƒ createRoot$1(container, options)
1. findDOMNode: ƒ findDOMNode(componentOrElement)
1. flushSync: ƒ flushSync$1(fn)
1. hydrate: ƒ hydrate(element, container, callback)
1. hydrateRoot: ƒ hydrateRoot$1(container, initialChildren, options)
1. render: ƒ render(element, container, callback)
1. unmountComponentAtNode: ƒ unmountComponentAtNode(container)
1. unstable_batchedUpdates: ƒ batchedUpdates$1(fn, a)
1. unstable_renderSubtreeIntoContainer: ƒ renderSubtreeIntoContainer(parentComponent, element, containerNode, callback)