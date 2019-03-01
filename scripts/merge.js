! function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (T, t) {
    "use strict";
    var e = [],
        C = T.document,
        n = Object.getPrototypeOf,
        a = e.slice,
        m = e.concat,
        l = e.push,
        r = e.indexOf,
        i = {},
        s = i.toString,
        g = i.hasOwnProperty,
        o = g.toString,
        u = o.call(Object),
        v = {},
        _ = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        y = function (t) {
            return null != t && t === t.window
        },
        h = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function b(t, e, i) {
        var n, r = (e = e || C).createElement("script");
        if (r.text = t, i)
            for (n in h) i[n] && (r[n] = i[n]);
        e.head.appendChild(r).parentNode.removeChild(r)
    }

    function x(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[s.call(t)] || "object" : typeof t
    }
    var P = function (t, e) {
            return new P.fn.init(t, e)
        },
        c = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function d(t) {
        var e = !!t && "length" in t && t.length,
            i = x(t);
        return !_(t) && !y(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    P.fn = P.prototype = {
        jquery: "3.3.1",
        constructor: P,
        length: 0,
        toArray: function () {
            return a.call(this)
        },
        get: function (t) {
            return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function (t) {
            var e = P.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function (t) {
            return P.each(this, t)
        },
        map: function (i) {
            return this.pushStack(P.map(this, function (t, e) {
                return i.call(t, e, t)
            }))
        },
        slice: function () {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= i && i < e ? [this[i]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: e.sort,
        splice: e.splice
    }, P.extend = P.fn.extend = function () {
        var t, e, i, n, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || _(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = o[e], o !== (n = t[e]) && (u && n && (P.isPlainObject(n) || (r = Array.isArray(n))) ? (s = r ? (r = !1, i && Array.isArray(i) ? i : []) : i && P.isPlainObject(i) ? i : {}, o[e] = P.extend(u, s, n)) : void 0 !== n && (o[e] = n));
        return o
    }, P.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isPlainObject: function (t) {
            var e, i;
            return !(!t || "[object Object]" !== s.call(t) || (e = n(t)) && ("function" != typeof (i = g.call(e, "constructor") && e.constructor) || o.call(i) !== u))
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        globalEval: function (t) {
            b(t)
        },
        each: function (t, e) {
            var i, n = 0;
            if (d(t))
                for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n])) break;
            return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(c, "")
        },
        makeArray: function (t, e) {
            var i = e || [];
            return null != t && (d(Object(t)) ? P.merge(i, "string" == typeof t ? [t] : t) : l.call(i, t)), i
        },
        inArray: function (t, e, i) {
            return null == e ? -1 : r.call(e, t, i)
        },
        merge: function (t, e) {
            for (var i = +e.length, n = 0, r = t.length; n < i; n++) t[r++] = e[n];
            return t.length = r, t
        },
        grep: function (t, e, i) {
            for (var n = [], r = 0, s = t.length, o = !i; r < s; r++) !e(t[r], r) !== o && n.push(t[r]);
            return n
        },
        map: function (t, e, i) {
            var n, r, s = 0,
                o = [];
            if (d(t))
                for (n = t.length; s < n; s++) null != (r = e(t[s], s, i)) && o.push(r);
            else
                for (s in t) null != (r = e(t[s], s, i)) && o.push(r);
            return m.apply([], o)
        },
        guid: 1,
        support: v
    }), "function" == typeof Symbol && (P.fn[Symbol.iterator] = e[Symbol.iterator]), P.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        i["[object " + e + "]"] = e.toLowerCase()
    });
    var f = function (i) {
        var t, f, b, s, r, p, c, m, x, l, u, w, T, o, C, g, a, h, v, P = "sizzle" + 1 * new Date,
            _ = i.document,
            k = 0,
            n = 0,
            d = ot(),
            y = ot(),
            S = ot(),
            O = function (t, e) {
                return t === e && (u = !0), 0
            },
            A = {}.hasOwnProperty,
            e = [],
            R = e.pop,
            D = e.push,
            E = e.push,
            M = e.slice,
            $ = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e) return i;
                return -1
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            N = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            j = "\\[" + N + "*(" + L + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + N + "*\\]",
            z = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
            F = new RegExp(N + "+", "g"),
            q = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
            H = new RegExp("^" + N + "*," + N + "*"),
            B = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
            W = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"),
            X = new RegExp(z),
            U = new RegExp("^" + L + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + j),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
            tt = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            it = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            nt = function () {
                w()
            },
            rt = _t(function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            E.apply(e = M.call(_.childNodes), _.childNodes), e[_.childNodes.length].nodeType
        } catch (i) {
            E = {
                apply: e.length ? function (t, e) {
                    D.apply(t, M.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }

        function st(t, e, i, n) {
            var r, s, o, a, l, u, h, c = e && e.ownerDocument,
                d = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return i;
            if (!n && ((e ? e.ownerDocument || e : _) !== T && w(e), e = e || T, C)) {
                if (11 !== d && (l = Z.exec(t)))
                    if (r = l[1]) {
                        if (9 === d) {
                            if (!(o = e.getElementById(r))) return i;
                            if (o.id === r) return i.push(o), i
                        } else if (c && (o = c.getElementById(r)) && v(e, o) && o.id === r) return i.push(o), i
                    } else {
                        if (l[2]) return E.apply(i, e.getElementsByTagName(t)), i;
                        if ((r = l[3]) && f.getElementsByClassName && e.getElementsByClassName) return E.apply(i, e.getElementsByClassName(r)), i
                    } if (f.qsa && !S[t + " "] && (!g || !g.test(t))) {
                    if (1 !== d) c = e, h = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(et, it) : e.setAttribute("id", a = P), s = (u = p(t)).length; s--;) u[s] = "#" + a + " " + vt(u[s]);
                        h = u.join(","), c = K.test(t) && mt(e.parentNode) || e
                    }
                    if (h) try {
                        return E.apply(i, c.querySelectorAll(h)), i
                    } catch (t) {} finally {
                        a === P && e.removeAttribute("id")
                    }
                }
            }
            return m(t.replace(q, "$1"), e, i, n)
        }

        function ot() {
            var n = [];
            return function t(e, i) {
                return n.push(e + " ") > b.cacheLength && delete t[n.shift()], t[e + " "] = i
            }
        }

        function at(t) {
            return t[P] = !0, t
        }

        function lt(t) {
            var e = T.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ut(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) b.attrHandle[i[n]] = e
        }

        function ht(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function ct(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function dt(i) {
            return function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === i
            }
        }

        function ft(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && rt(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function pt(o) {
            return at(function (s) {
                return s = +s, at(function (t, e) {
                    for (var i, n = o([], t.length, s), r = n.length; r--;) t[i = n[r]] && (t[i] = !(e[i] = t[i]))
                })
            })
        }

        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (t in f = st.support = {}, r = st.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, w = st.setDocument = function (t) {
                var e, i, n = t ? t.ownerDocument || t : _;
                return n !== T && 9 === n.nodeType && n.documentElement && (o = (T = n).documentElement, C = !r(T), _ !== T && (i = T.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", nt, !1) : i.attachEvent && i.attachEvent("onunload", nt)), f.attributes = lt(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), f.getElementsByTagName = lt(function (t) {
                    return t.appendChild(T.createComment("")), !t.getElementsByTagName("*").length
                }), f.getElementsByClassName = Q.test(T.getElementsByClassName), f.getById = lt(function (t) {
                    return o.appendChild(t).id = P, !T.getElementsByName || !T.getElementsByName(P).length
                }), f.getById ? (b.filter.ID = function (t) {
                    var e = t.replace(J, tt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }, b.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && C) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }) : (b.filter.ID = function (t) {
                    var i = t.replace(J, tt);
                    return function (t) {
                        var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return e && e.value === i
                    }
                }, b.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && C) {
                        var i, n, r, s = e.getElementById(t);
                        if (s) {
                            if ((i = s.getAttributeNode("id")) && i.value === t) return [s];
                            for (r = e.getElementsByName(t), n = 0; s = r[n++];)
                                if ((i = s.getAttributeNode("id")) && i.value === t) return [s]
                        }
                        return []
                    }
                }), b.find.TAG = f.getElementsByTagName ? function (t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var i, n = [],
                        r = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" !== t) return s;
                    for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }, b.find.CLASS = f.getElementsByClassName && function (t, e) {
                    if (void 0 !== e.getElementsByClassName && C) return e.getElementsByClassName(t)
                }, a = [], g = [], (f.qsa = Q.test(T.querySelectorAll)) && (lt(function (t) {
                    o.appendChild(t).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + N + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + N + "*(?:value|" + I + ")"), t.querySelectorAll("[id~=" + P + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + P + "+*").length || g.push(".#.+[+~]")
                }), lt(function (t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = T.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + N + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), o.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                })), (f.matchesSelector = Q.test(h = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && lt(function (t) {
                    f.disconnectedMatch = h.call(t, "*"), h.call(t, "[s!='']:x"), a.push("!=", z)
                }), g = g.length && new RegExp(g.join("|")), a = a.length && new RegExp(a.join("|")), e = Q.test(o.compareDocumentPosition), v = e || Q.test(o.contains) ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, O = e ? function (t, e) {
                    if (t === e) return u = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === i ? t === T || t.ownerDocument === _ && v(_, t) ? -1 : e === T || e.ownerDocument === _ && v(_, e) ? 1 : l ? $(l, t) - $(l, e) : 0 : 4 & i ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return u = !0, 0;
                    var i, n = 0,
                        r = t.parentNode,
                        s = e.parentNode,
                        o = [t],
                        a = [e];
                    if (!r || !s) return t === T ? -1 : e === T ? 1 : r ? -1 : s ? 1 : l ? $(l, t) - $(l, e) : 0;
                    if (r === s) return ht(t, e);
                    for (i = t; i = i.parentNode;) o.unshift(i);
                    for (i = e; i = i.parentNode;) a.unshift(i);
                    for (; o[n] === a[n];) n++;
                    return n ? ht(o[n], a[n]) : o[n] === _ ? -1 : a[n] === _ ? 1 : 0
                }), T
            }, st.matches = function (t, e) {
                return st(t, null, null, e)
            }, st.matchesSelector = function (t, e) {
                if ((t.ownerDocument || t) !== T && w(t), e = e.replace(W, "='$1']"), f.matchesSelector && C && !S[e + " "] && (!a || !a.test(e)) && (!g || !g.test(e))) try {
                    var i = h.call(t, e);
                    if (i || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return 0 < st(e, T, null, [t]).length
            }, st.contains = function (t, e) {
                return (t.ownerDocument || t) !== T && w(t), v(t, e)
            }, st.attr = function (t, e) {
                (t.ownerDocument || t) !== T && w(t);
                var i = b.attrHandle[e.toLowerCase()],
                    n = i && A.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !C) : void 0;
                return void 0 !== n ? n : f.attributes || !C ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, st.escape = function (t) {
                return (t + "").replace(et, it)
            }, st.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, st.uniqueSort = function (t) {
                var e, i = [],
                    n = 0,
                    r = 0;
                if (u = !f.detectDuplicates, l = !f.sortStable && t.slice(0), t.sort(O), u) {
                    for (; e = t[r++];) e === t[r] && (n = i.push(r));
                    for (; n--;) t.splice(i[n], 1)
                }
                return l = null, t
            }, s = st.getText = function (t) {
                var e, i = "",
                    n = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += s(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[n++];) i += s(e);
                return i
            }, (b = st.selectors = {
                cacheLength: 50,
                createPseudo: at,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, i = !t[6] && t[2];
                        return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && X.test(i) && (e = p(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(J, tt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = d[t + " "];
                        return e || (e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) && d(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (i, n, r) {
                        return function (t) {
                            var e = st.attr(t, i);
                            return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(F, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function (p, t, e, m, g) {
                        var v = "nth" !== p.slice(0, 3),
                            _ = "last" !== p.slice(-4),
                            y = "of-type" === t;
                        return 1 === m && 0 === g ? function (t) {
                            return !!t.parentNode
                        } : function (t, e, i) {
                            var n, r, s, o, a, l, u = v !== _ ? "nextSibling" : "previousSibling",
                                h = t.parentNode,
                                c = y && t.nodeName.toLowerCase(),
                                d = !i && !y,
                                f = !1;
                            if (h) {
                                if (v) {
                                    for (; u;) {
                                        for (o = t; o = o[u];)
                                            if (y ? o.nodeName.toLowerCase() === c : 1 === o.nodeType) return !1;
                                        l = u = "only" === p && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [_ ? h.firstChild : h.lastChild], _ && d) {
                                    for (f = (a = (n = (r = (s = (o = h)[P] || (o[P] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[p] || [])[0] === k && n[1]) && n[2], o = a && h.childNodes[a]; o = ++a && o && o[u] || (f = a = 0) || l.pop();)
                                        if (1 === o.nodeType && ++f && o === t) {
                                            r[p] = [k, a, f];
                                            break
                                        }
                                } else if (d && (f = a = (n = (r = (s = (o = t)[P] || (o[P] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[p] || [])[0] === k && n[1]), !1 === f)
                                    for (;
                                        (o = ++a && o && o[u] || (f = a = 0) || l.pop()) && ((y ? o.nodeName.toLowerCase() !== c : 1 !== o.nodeType) || !++f || (d && ((r = (s = o[P] || (o[P] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[p] = [k, f]), o !== t)););
                                return (f -= g) === m || f % m == 0 && 0 <= f / m
                            }
                        }
                    },
                    PSEUDO: function (t, s) {
                        var e, o = b.pseudos[t] || b.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                        return o[P] ? o(s) : 1 < o.length ? (e = [t, t, "", s], b.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function (t, e) {
                            for (var i, n = o(t, s), r = n.length; r--;) t[i = $(t, n[r])] = !(e[i] = n[r])
                        }) : function (t) {
                            return o(t, 0, e)
                        }) : o
                    }
                },
                pseudos: {
                    not: at(function (t) {
                        var n = [],
                            r = [],
                            a = c(t.replace(q, "$1"));
                        return a[P] ? at(function (t, e, i, n) {
                            for (var r, s = a(t, null, n, []), o = t.length; o--;)(r = s[o]) && (t[o] = !(e[o] = r))
                        }) : function (t, e, i) {
                            return n[0] = t, a(n, null, i, r), n[0] = null, !r.pop()
                        }
                    }),
                    has: at(function (e) {
                        return function (t) {
                            return 0 < st(e, t).length
                        }
                    }),
                    contains: at(function (e) {
                        return e = e.replace(J, tt),
                            function (t) {
                                return -1 < (t.textContent || t.innerText || s(t)).indexOf(e)
                            }
                    }),
                    lang: at(function (i) {
                        return U.test(i || "") || st.error("unsupported lang: " + i), i = i.replace(J, tt).toLowerCase(),
                            function (t) {
                                var e;
                                do {
                                    if (e = C ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var e = i.location && i.location.hash;
                        return e && e.slice(1) === t.id
                    },
                    root: function (t) {
                        return t === o
                    },
                    focus: function (t) {
                        return t === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: ft(!1),
                    disabled: ft(!0),
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !b.pseudos.empty(t)
                    },
                    header: function (t) {
                        return G.test(t.nodeName)
                    },
                    input: function (t) {
                        return Y.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: pt(function () {
                        return [0]
                    }),
                    last: pt(function (t, e) {
                        return [e - 1]
                    }),
                    eq: pt(function (t, e, i) {
                        return [i < 0 ? i + e : i]
                    }),
                    even: pt(function (t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t
                    }),
                    odd: pt(function (t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t
                    }),
                    lt: pt(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; 0 <= --n;) t.push(n);
                        return t
                    }),
                    gt: pt(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[t] = ct(t);
        for (t in {
                submit: !0,
                reset: !0
            }) b.pseudos[t] = dt(t);

        function gt() {}

        function vt(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function _t(a, t, e) {
            var l = t.dir,
                u = t.next,
                h = u || l,
                c = e && "parentNode" === h,
                d = n++;
            return t.first ? function (t, e, i) {
                for (; t = t[l];)
                    if (1 === t.nodeType || c) return a(t, e, i);
                return !1
            } : function (t, e, i) {
                var n, r, s, o = [k, d];
                if (i) {
                    for (; t = t[l];)
                        if ((1 === t.nodeType || c) && a(t, e, i)) return !0
                } else
                    for (; t = t[l];)
                        if (1 === t.nodeType || c)
                            if (r = (s = t[P] || (t[P] = {}))[t.uniqueID] || (s[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[l] || t;
                            else {
                                if ((n = r[h]) && n[0] === k && n[1] === d) return o[2] = n[2];
                                if ((r[h] = o)[2] = a(t, e, i)) return !0
                            } return !1
            }
        }

        function yt(r) {
            return 1 < r.length ? function (t, e, i) {
                for (var n = r.length; n--;)
                    if (!r[n](t, e, i)) return !1;
                return !0
            } : r[0]
        }

        function bt(t, e, i, n, r) {
            for (var s, o = [], a = 0, l = t.length, u = null != e; a < l; a++)(s = t[a]) && (i && !i(s, n, r) || (o.push(s), u && e.push(a)));
            return o
        }

        function xt(f, p, m, g, v, t) {
            return g && !g[P] && (g = xt(g)), v && !v[P] && (v = xt(v, t)), at(function (t, e, i, n) {
                var r, s, o, a = [],
                    l = [],
                    u = e.length,
                    h = t || function (t, e, i) {
                        for (var n = 0, r = e.length; n < r; n++) st(t, e[n], i);
                        return i
                    }(p || "*", i.nodeType ? [i] : i, []),
                    c = !f || !t && p ? h : bt(h, a, f, i, n),
                    d = m ? v || (t ? f : u || g) ? [] : e : c;
                if (m && m(c, d, i, n), g)
                    for (r = bt(d, l), g(r, [], i, n), s = r.length; s--;)(o = r[s]) && (d[l[s]] = !(c[l[s]] = o));
                if (t) {
                    if (v || f) {
                        if (v) {
                            for (r = [], s = d.length; s--;)(o = d[s]) && r.push(c[s] = o);
                            v(null, d = [], r, n)
                        }
                        for (s = d.length; s--;)(o = d[s]) && -1 < (r = v ? $(t, o) : a[s]) && (t[r] = !(e[r] = o))
                    }
                } else d = bt(d === e ? d.splice(u, d.length) : d), v ? v(null, e, d, n) : E.apply(e, d)
            })
        }

        function wt(t) {
            for (var r, e, i, n = t.length, s = b.relative[t[0].type], o = s || b.relative[" "], a = s ? 1 : 0, l = _t(function (t) {
                    return t === r
                }, o, !0), u = _t(function (t) {
                    return -1 < $(r, t)
                }, o, !0), h = [function (t, e, i) {
                    var n = !s && (i || e !== x) || ((r = e).nodeType ? l(t, e, i) : u(t, e, i));
                    return r = null, n
                }]; a < n; a++)
                if (e = b.relative[t[a].type]) h = [_t(yt(h), e)];
                else {
                    if ((e = b.filter[t[a].type].apply(null, t[a].matches))[P]) {
                        for (i = ++a; i < n && !b.relative[t[i].type]; i++);
                        return xt(1 < a && yt(h), 1 < a && vt(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(q, "$1"), e, a < i && wt(t.slice(a, i)), i < n && wt(t = t.slice(i)), i < n && vt(t))
                    }
                    h.push(e)
                } return yt(h)
        }
        return gt.prototype = b.filters = b.pseudos, b.setFilters = new gt, p = st.tokenize = function (t, e) {
            var i, n, r, s, o, a, l, u = y[t + " "];
            if (u) return e ? 0 : u.slice(0);
            for (o = t, a = [], l = b.preFilter; o;) {
                for (s in i && !(n = H.exec(o)) || (n && (o = o.slice(n[0].length) || o), a.push(r = [])), i = !1, (n = B.exec(o)) && (i = n.shift(), r.push({
                        value: i,
                        type: n[0].replace(q, " ")
                    }), o = o.slice(i.length)), b.filter) !(n = V[s].exec(o)) || l[s] && !(n = l[s](n)) || (i = n.shift(), r.push({
                    value: i,
                    type: s,
                    matches: n
                }), o = o.slice(i.length));
                if (!i) break
            }
            return e ? o.length : o ? st.error(t) : y(t, a).slice(0)
        }, c = st.compile = function (t, e) {
            var i, g, v, _, y, n, r = [],
                s = [],
                o = S[t + " "];
            if (!o) {
                for (e || (e = p(t)), i = e.length; i--;)(o = wt(e[i]))[P] ? r.push(o) : s.push(o);
                (o = S(t, (g = s, v = r, _ = 0 < v.length, y = 0 < g.length, n = function (t, e, i, n, r) {
                    var s, o, a, l = 0,
                        u = "0",
                        h = t && [],
                        c = [],
                        d = x,
                        f = t || y && b.find.TAG("*", r),
                        p = k += null == d ? 1 : Math.random() || .1,
                        m = f.length;
                    for (r && (x = e === T || e || r); u !== m && null != (s = f[u]); u++) {
                        if (y && s) {
                            for (o = 0, e || s.ownerDocument === T || (w(s), i = !C); a = g[o++];)
                                if (a(s, e || T, i)) {
                                    n.push(s);
                                    break
                                } r && (k = p)
                        }
                        _ && ((s = !a && s) && l--, t && h.push(s))
                    }
                    if (l += u, _ && u !== l) {
                        for (o = 0; a = v[o++];) a(h, c, e, i);
                        if (t) {
                            if (0 < l)
                                for (; u--;) h[u] || c[u] || (c[u] = R.call(n));
                            c = bt(c)
                        }
                        E.apply(n, c), r && !t && 0 < c.length && 1 < l + v.length && st.uniqueSort(n)
                    }
                    return r && (k = p, x = d), h
                }, _ ? at(n) : n))).selector = t
            }
            return o
        }, m = st.select = function (t, e, i, n) {
            var r, s, o, a, l, u = "function" == typeof t && t,
                h = !n && p(t = u.selector || t);
            if (i = i || [], 1 === h.length) {
                if (2 < (s = h[0] = h[0].slice(0)).length && "ID" === (o = s[0]).type && 9 === e.nodeType && C && b.relative[s[1].type]) {
                    if (!(e = (b.find.ID(o.matches[0].replace(J, tt), e) || [])[0])) return i;
                    u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (r = V.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !b.relative[a = o.type]);)
                    if ((l = b.find[a]) && (n = l(o.matches[0].replace(J, tt), K.test(s[0].type) && mt(e.parentNode) || e))) {
                        if (s.splice(r, 1), !(t = n.length && vt(s))) return E.apply(i, n), i;
                        break
                    }
            }
            return (u || c(t, h))(n, e, !C, i, !e || K.test(t) && mt(e.parentNode) || e), i
        }, f.sortStable = P.split("").sort(O).join("") === P, f.detectDuplicates = !!u, w(), f.sortDetached = lt(function (t) {
            return 1 & t.compareDocumentPosition(T.createElement("fieldset"))
        }), lt(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || ut("type|href|height|width", function (t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), f.attributes && lt(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || ut("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), lt(function (t) {
            return null == t.getAttribute("disabled")
        }) || ut(I, function (t, e, i) {
            var n;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), st
    }(T);
    P.find = f, P.expr = f.selectors, P.expr[":"] = P.expr.pseudos, P.uniqueSort = P.unique = f.uniqueSort, P.text = f.getText, P.isXMLDoc = f.isXML, P.contains = f.contains, P.escapeSelector = f.escape;
    var p = function (t, e, i) {
            for (var n = [], r = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && P(t).is(i)) break;
                    n.push(t)
                } return n
        },
        w = function (t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        k = P.expr.match.needsContext;

    function S(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function A(t, i, n) {
        return _(i) ? P.grep(t, function (t, e) {
            return !!i.call(t, e, t) !== n
        }) : i.nodeType ? P.grep(t, function (t) {
            return t === i !== n
        }) : "string" != typeof i ? P.grep(t, function (t) {
            return -1 < r.call(i, t) !== n
        }) : P.filter(i, t, n)
    }
    P.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? P.find.matchesSelector(n, t) ? [n] : [] : P.find.matches(t, P.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, P.fn.extend({
        find: function (t) {
            var e, i, n = this.length,
                r = this;
            if ("string" != typeof t) return this.pushStack(P(t).filter(function () {
                for (e = 0; e < n; e++)
                    if (P.contains(r[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) P.find(t, r[e], i);
            return 1 < n ? P.uniqueSort(i) : i
        },
        filter: function (t) {
            return this.pushStack(A(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(A(this, t || [], !0))
        },
        is: function (t) {
            return !!A(this, "string" == typeof t && k.test(t) ? P(t) : t || [], !1).length
        }
    });
    var R, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (P.fn.init = function (t, e, i) {
        var n, r;
        if (!t) return this;
        if (i = i || R, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : _(t) ? void 0 !== i.ready ? i.ready(t) : t(P) : P.makeArray(t, this);
        if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : D.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
        if (n[1]) {
            if (e = e instanceof P ? e[0] : e, P.merge(this, P.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : C, !0)), O.test(n[1]) && P.isPlainObject(e))
                for (n in e) _(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
            return this
        }
        return (r = C.getElementById(n[2])) && (this[0] = r, this.length = 1), this
    }).prototype = P.fn, R = P(C);
    var E = /^(?:parents|prev(?:Until|All))/,
        M = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function $(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    P.fn.extend({
        has: function (t) {
            var e = P(t, this),
                i = e.length;
            return this.filter(function () {
                for (var t = 0; t < i; t++)
                    if (P.contains(this, e[t])) return !0
            })
        },
        closest: function (t, e) {
            var i, n = 0,
                r = this.length,
                s = [],
                o = "string" != typeof t && P(t);
            if (!k.test(t))
                for (; n < r; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (o ? -1 < o.index(i) : 1 === i.nodeType && P.find.matchesSelector(i, t))) {
                            s.push(i);
                            break
                        } return this.pushStack(1 < s.length ? P.uniqueSort(s) : s)
        },
        index: function (t) {
            return t ? "string" == typeof t ? r.call(P(t), this[0]) : r.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(P.uniqueSort(P.merge(this.get(), P(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), P.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return p(t, "parentNode")
        },
        parentsUntil: function (t, e, i) {
            return p(t, "parentNode", i)
        },
        next: function (t) {
            return $(t, "nextSibling")
        },
        prev: function (t) {
            return $(t, "previousSibling")
        },
        nextAll: function (t) {
            return p(t, "nextSibling")
        },
        prevAll: function (t) {
            return p(t, "previousSibling")
        },
        nextUntil: function (t, e, i) {
            return p(t, "nextSibling", i)
        },
        prevUntil: function (t, e, i) {
            return p(t, "previousSibling", i)
        },
        siblings: function (t) {
            return w((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return w(t.firstChild)
        },
        contents: function (t) {
            return S(t, "iframe") ? t.contentDocument : (S(t, "template") && (t = t.content || t), P.merge([], t.childNodes))
        }
    }, function (n, r) {
        P.fn[n] = function (t, e) {
            var i = P.map(this, r, t);
            return "Until" !== n.slice(-5) && (e = t), e && "string" == typeof e && (i = P.filter(e, i)), 1 < this.length && (M[n] || P.uniqueSort(i), E.test(n) && i.reverse()), this.pushStack(i)
        }
    });
    var I = /[^\x20\t\r\n\f]+/g;

    function N(t) {
        return t
    }

    function L(t) {
        throw t
    }

    function j(t, e, i, n) {
        var r;
        try {
            t && _(r = t.promise) ? r.call(t).done(e).fail(i) : t && _(r = t.then) ? r.call(t, e, i) : e.apply(void 0, [t].slice(n))
        } catch (t) {
            i.apply(void 0, [t])
        }
    }
    P.Callbacks = function (n) {
        var t, i;
        n = "string" == typeof n ? (t = n, i = {}, P.each(t.match(I) || [], function (t, e) {
            i[e] = !0
        }), i) : P.extend({}, n);
        var r, e, s, o, a = [],
            l = [],
            u = -1,
            h = function () {
                for (o = o || n.once, s = r = !0; l.length; u = -1)
                    for (e = l.shift(); ++u < a.length;) !1 === a[u].apply(e[0], e[1]) && n.stopOnFalse && (u = a.length, e = !1);
                n.memory || (e = !1), r = !1, o && (a = e ? [] : "")
            },
            c = {
                add: function () {
                    return a && (e && !r && (u = a.length - 1, l.push(e)), function i(t) {
                        P.each(t, function (t, e) {
                            _(e) ? n.unique && c.has(e) || a.push(e) : e && e.length && "string" !== x(e) && i(e)
                        })
                    }(arguments), e && !r && h()), this
                },
                remove: function () {
                    return P.each(arguments, function (t, e) {
                        for (var i; - 1 < (i = P.inArray(e, a, i));) a.splice(i, 1), i <= u && u--
                    }), this
                },
                has: function (t) {
                    return t ? -1 < P.inArray(t, a) : 0 < a.length
                },
                empty: function () {
                    return a && (a = []), this
                },
                disable: function () {
                    return o = l = [], a = e = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return o = l = [], e || r || (a = e = ""), this
                },
                locked: function () {
                    return !!o
                },
                fireWith: function (t, e) {
                    return o || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), r || h()), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!s
                }
            };
        return c
    }, P.extend({
        Deferred: function (t) {
            var s = [["notify", "progress", P.Callbacks("memory"), P.Callbacks("memory"), 2], ["resolve", "done", P.Callbacks("once memory"), P.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", P.Callbacks("once memory"), P.Callbacks("once memory"), 1, "rejected"]],
                r = "pending",
                o = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function (t) {
                        return o.then(null, t)
                    },
                    pipe: function () {
                        var r = arguments;
                        return P.Deferred(function (n) {
                            P.each(s, function (t, e) {
                                var i = _(r[e[4]]) && r[e[4]];
                                a[e[1]](function () {
                                    var t = i && i.apply(this, arguments);
                                    t && _(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[e[0] + "With"](this, i ? [t] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    then: function (e, i, n) {
                        var l = 0;

                        function u(r, s, o, a) {
                            return function () {
                                var i = this,
                                    n = arguments,
                                    t = function () {
                                        var t, e;
                                        if (!(r < l)) {
                                            if ((t = o.apply(i, n)) === s.promise()) throw new TypeError("Thenable self-resolution");
                                            e = t && ("object" == typeof t || "function" == typeof t) && t.then, _(e) ? a ? e.call(t, u(l, s, N, a), u(l, s, L, a)) : (l++, e.call(t, u(l, s, N, a), u(l, s, L, a), u(l, s, N, s.notifyWith))) : (o !== N && (i = void 0, n = [t]), (a || s.resolveWith)(i, n))
                                        }
                                    },
                                    e = a ? t : function () {
                                        try {
                                            t()
                                        } catch (t) {
                                            P.Deferred.exceptionHook && P.Deferred.exceptionHook(t, e.stackTrace), l <= r + 1 && (o !== L && (i = void 0, n = [t]), s.rejectWith(i, n))
                                        }
                                    };
                                r ? e() : (P.Deferred.getStackHook && (e.stackTrace = P.Deferred.getStackHook()), T.setTimeout(e))
                            }
                        }
                        return P.Deferred(function (t) {
                            s[0][3].add(u(0, t, _(n) ? n : N, t.notifyWith)), s[1][3].add(u(0, t, _(e) ? e : N)), s[2][3].add(u(0, t, _(i) ? i : L))
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? P.extend(t, o) : o
                    }
                },
                a = {};
            return P.each(s, function (t, e) {
                var i = e[2],
                    n = e[5];
                o[e[1]] = i.add, n && i.add(function () {
                    r = n
                }, s[3 - t][2].disable, s[3 - t][3].disable, s[0][2].lock, s[0][3].lock), i.add(e[3].fire), a[e[0]] = function () {
                    return a[e[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[e[0] + "With"] = i.fireWith
            }), o.promise(a), t && t.call(a, a), a
        },
        when: function (t) {
            var i = arguments.length,
                e = i,
                n = Array(e),
                r = a.call(arguments),
                s = P.Deferred(),
                o = function (e) {
                    return function (t) {
                        n[e] = this, r[e] = 1 < arguments.length ? a.call(arguments) : t, --i || s.resolveWith(n, r)
                    }
                };
            if (i <= 1 && (j(t, s.done(o(e)).resolve, s.reject, !i), "pending" === s.state() || _(r[e] && r[e].then))) return s.then();
            for (; e--;) j(r[e], o(e), s.reject);
            return s.promise()
        }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    P.Deferred.exceptionHook = function (t, e) {
        T.console && T.console.warn && t && z.test(t.name) && T.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
    }, P.readyException = function (t) {
        T.setTimeout(function () {
            throw t
        })
    };
    var F = P.Deferred();

    function q() {
        C.removeEventListener("DOMContentLoaded", q), T.removeEventListener("load", q), P.ready()
    }
    P.fn.ready = function (t) {
        return F.then(t).catch(function (t) {
            P.readyException(t)
        }), this
    }, P.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (t) {
            (!0 === t ? --P.readyWait : P.isReady) || ((P.isReady = !0) !== t && 0 < --P.readyWait || F.resolveWith(C, [P]))
        }
    }), P.ready.then = F.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? T.setTimeout(P.ready) : (C.addEventListener("DOMContentLoaded", q), T.addEventListener("load", q));
    var H = function (t, e, i, n, r, s, o) {
            var a = 0,
                l = t.length,
                u = null == i;
            if ("object" === x(i))
                for (a in r = !0, i) H(t, e, a, i[a], !0, s, o);
            else if (void 0 !== n && (r = !0, _(n) || (o = !0), u && (e = o ? (e.call(t, n), null) : (u = e, function (t, e, i) {
                    return u.call(P(t), i)
                })), e))
                for (; a < l; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
            return r ? t : u ? e.call(t) : l ? e(t[0], i) : s
        },
        B = /^-ms-/,
        W = /-([a-z])/g;

    function X(t, e) {
        return e.toUpperCase()
    }

    function U(t) {
        return t.replace(B, "ms-").replace(W, X)
    }
    var V = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function Y() {
        this.expando = P.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, V(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function (t, e, i) {
            var n, r = this.cache(t);
            if ("string" == typeof e) r[U(e)] = i;
            else
                for (n in e) r[U(n)] = e[n];
            return r
        },
        get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][U(e)]
        },
        access: function (t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function (t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    i = (e = Array.isArray(e) ? e.map(U) : (e = U(e)) in n ? [e] : e.match(I) || []).length;
                    for (; i--;) delete n[e[i]]
                }(void 0 === e || P.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !P.isEmptyObject(e)
        }
    };
    var G = new Y,
        Q = new Y,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function J(t, e, i) {
        var n, r;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(K, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Z.test(r) ? JSON.parse(r) : r)
                } catch (t) {}
                Q.set(t, e, i)
            } else i = void 0;
        return i
    }
    P.extend({
        hasData: function (t) {
            return Q.hasData(t) || G.hasData(t)
        },
        data: function (t, e, i) {
            return Q.access(t, e, i)
        },
        removeData: function (t, e) {
            Q.remove(t, e)
        },
        _data: function (t, e, i) {
            return G.access(t, e, i)
        },
        _removeData: function (t, e) {
            G.remove(t, e)
        }
    }), P.fn.extend({
        data: function (i, t) {
            var e, n, r, s = this[0],
                o = s && s.attributes;
            if (void 0 !== i) return "object" == typeof i ? this.each(function () {
                Q.set(this, i)
            }) : H(this, function (t) {
                var e;
                if (s && void 0 === t) {
                    if (void 0 !== (e = Q.get(s, i))) return e;
                    if (void 0 !== (e = J(s, i))) return e
                } else this.each(function () {
                    Q.set(this, i, t)
                })
            }, null, t, 1 < arguments.length, null, !0);
            if (this.length && (r = Q.get(s), 1 === s.nodeType && !G.get(s, "hasDataAttrs"))) {
                for (e = o.length; e--;) o[e] && 0 === (n = o[e].name).indexOf("data-") && (n = U(n.slice(5)), J(s, n, r[n]));
                G.set(s, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function (t) {
            return this.each(function () {
                Q.remove(this, t)
            })
        }
    }), P.extend({
        queue: function (t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = G.get(t, e), i && (!n || Array.isArray(i) ? n = G.access(t, e, P.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var i = P.queue(t, e),
                n = i.length,
                r = i.shift(),
                s = P._queueHooks(t, e);
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, function () {
                P.dequeue(t, e)
            }, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return G.get(t, i) || G.access(t, i, {
                empty: P.Callbacks("once memory").add(function () {
                    G.remove(t, [e + "queue", i])
                })
            })
        }
    }), P.fn.extend({
        queue: function (e, i) {
            var t = 2;
            return "string" != typeof e && (i = e, e = "fx", t--), arguments.length < t ? P.queue(this[0], e) : void 0 === i ? this : this.each(function () {
                var t = P.queue(this, e, i);
                P._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && P.dequeue(this, e)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                P.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var i, n = 1,
                r = P.Deferred(),
                s = this,
                o = this.length,
                a = function () {
                    --n || r.resolveWith(s, [s])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(i = G.get(s[o], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
        it = ["Top", "Right", "Bottom", "Left"],
        nt = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && P.contains(t.ownerDocument, t) && "none" === P.css(t, "display")
        },
        rt = function (t, e, i, n) {
            var r, s, o = {};
            for (s in e) o[s] = t.style[s], t.style[s] = e[s];
            for (s in r = i.apply(t, n || []), e) t.style[s] = o[s];
            return r
        };

    function st(t, e, i, n) {
        var r, s, o = 20,
            a = n ? function () {
                return n.cur()
            } : function () {
                return P.css(t, e, "")
            },
            l = a(),
            u = i && i[3] || (P.cssNumber[e] ? "" : "px"),
            h = (P.cssNumber[e] || "px" !== u && +l) && et.exec(P.css(t, e));
        if (h && h[3] !== u) {
            for (l /= 2, u = u || h[3], h = +l || 1; o--;) P.style(t, e, h + u), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (o = 0), h /= s;
            h *= 2, P.style(t, e, h + u), i = i || []
        }
        return i && (h = +h || +l || 0, r = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = h, n.end = r)), r
    }
    var ot = {};

    function at(t, e) {
        for (var i, n, r = [], s = 0, o = t.length; s < o; s++)(n = t[s]).style && (i = n.style.display, e ? ("none" === i && (r[s] = G.get(n, "display") || null, r[s] || (n.style.display = "")), "" === n.style.display && nt(n) && (r[s] = (c = u = l = void 0, u = (a = n).ownerDocument, h = a.nodeName, (c = ot[h]) || (l = u.body.appendChild(u.createElement(h)), c = P.css(l, "display"), l.parentNode.removeChild(l), "none" === c && (c = "block"), ot[h] = c)))) : "none" !== i && (r[s] = "none", G.set(n, "display", i)));
        var a, l, u, h, c;
        for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]);
        return t
    }
    P.fn.extend({
        show: function () {
            return at(this, !0)
        },
        hide: function () {
            return at(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                nt(this) ? P(this).show() : P(this).hide()
            })
        }
    });
    var lt = /^(?:checkbox|radio)$/i,
        ut = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ht = /^$|^module$|\/(?:java|ecma)script/i,
        ct = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function dt(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && S(t, e) ? P.merge([t], i) : i
    }

    function ft(t, e) {
        for (var i = 0, n = t.length; i < n; i++) G.set(t[i], "globalEval", !e || G.get(e[i], "globalEval"))
    }
    ct.optgroup = ct.option, ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead, ct.th = ct.td;
    var pt, mt, gt = /<|&#?\w+;/;

    function vt(t, e, i, n, r) {
        for (var s, o, a, l, u, h, c = e.createDocumentFragment(), d = [], f = 0, p = t.length; f < p; f++)
            if ((s = t[f]) || 0 === s)
                if ("object" === x(s)) P.merge(d, s.nodeType ? [s] : s);
                else if (gt.test(s)) {
            for (o = o || c.appendChild(e.createElement("div")), a = (ut.exec(s) || ["", ""])[1].toLowerCase(), l = ct[a] || ct._default, o.innerHTML = l[1] + P.htmlPrefilter(s) + l[2], h = l[0]; h--;) o = o.lastChild;
            P.merge(d, o.childNodes), (o = c.firstChild).textContent = ""
        } else d.push(e.createTextNode(s));
        for (c.textContent = "", f = 0; s = d[f++];)
            if (n && -1 < P.inArray(s, n)) r && r.push(s);
            else if (u = P.contains(s.ownerDocument, s), o = dt(c.appendChild(s), "script"), u && ft(o), i)
            for (h = 0; s = o[h++];) ht.test(s.type || "") && i.push(s);
        return c
    }
    pt = C.createDocumentFragment().appendChild(C.createElement("div")), (mt = C.createElement("input")).setAttribute("type", "radio"), mt.setAttribute("checked", "checked"), mt.setAttribute("name", "t"), pt.appendChild(mt), v.checkClone = pt.cloneNode(!0).cloneNode(!0).lastChild.checked, pt.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!pt.cloneNode(!0).lastChild.defaultValue;
    var _t = C.documentElement,
        yt = /^key/,
        bt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xt = /^([^.]*)(?:\.(.+)|)/;

    function wt() {
        return !0
    }

    function Tt() {
        return !1
    }

    function Ct() {
        try {
            return C.activeElement
        } catch (t) {}
    }

    function Pt(t, e, i, n, r, s) {
        var o, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), e) Pt(t, a, i, n, e[a], s);
            return t
        }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = Tt;
        else if (!r) return t;
        return 1 === s && (o = r, (r = function (t) {
            return P().off(t), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = P.guid++)), t.each(function () {
            P.event.add(this, e, r, n, i)
        })
    }
    P.event = {
        global: {},
        add: function (e, t, i, n, r) {
            var s, o, a, l, u, h, c, d, f, p, m, g = G.get(e);
            if (g)
                for (i.handler && (i = (s = i).handler, r = s.selector), r && P.find.matchesSelector(_t, r), i.guid || (i.guid = P.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function (t) {
                        return void 0 !== P && P.event.triggered !== t.type ? P.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(I) || [""]).length; u--;) f = m = (a = xt.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), f && (c = P.event.special[f] || {}, f = (r ? c.delegateType : c.bindType) || f, c = P.event.special[f] || {}, h = P.extend({
                    type: f,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && P.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, s), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, n, p, o) || e.addEventListener && e.addEventListener(f, o)), c.add && (c.add.call(e, h), h.handler.guid || (h.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), P.event.global[f] = !0)
        },
        remove: function (t, e, i, n, r) {
            var s, o, a, l, u, h, c, d, f, p, m, g = G.hasData(t) && G.get(t);
            if (g && (l = g.events)) {
                for (u = (e = (e || "").match(I) || [""]).length; u--;)
                    if (f = m = (a = xt.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                        for (c = P.event.special[f] || {}, d = l[f = (n ? c.delegateType : c.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = d.length; s--;) h = d[s], !r && m !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (d.splice(s, 1), h.selector && d.delegateCount--, c.remove && c.remove.call(t, h));
                        o && !d.length && (c.teardown && !1 !== c.teardown.call(t, p, g.handle) || P.removeEvent(t, f, g.handle), delete l[f])
                    } else
                        for (f in l) P.event.remove(t, f + e[u], i, n, !0);
                P.isEmptyObject(l) && G.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            var e, i, n, r, s, o, a = P.event.fix(t),
                l = new Array(arguments.length),
                u = (G.get(this, "events") || {})[a.type] || [],
                h = P.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, a)) {
                for (o = P.event.handlers.call(this, a, u), e = 0;
                    (r = o[e++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, i = 0;
                        (s = r.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (n = ((P.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (t, e) {
            var i, n, r, s, o, a = [],
                l = e.delegateCount,
                u = t.target;
            if (l && u.nodeType && !("click" === t.type && 1 <= t.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                        for (s = [], o = {}, i = 0; i < l; i++) void 0 === o[r = (n = e[i]).selector + " "] && (o[r] = n.needsContext ? -1 < P(r, this).index(u) : P.find(r, this, null, [u]).length), o[r] && s.push(n);
                        s.length && a.push({
                            elem: u,
                            handlers: s
                        })
                    } return u = this, l < e.length && a.push({
                elem: u,
                handlers: e.slice(l)
            }), a
        },
        addProp: function (e, t) {
            Object.defineProperty(P.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: _(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (t) {
            return t[P.expando] ? t : new P.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== Ct() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === Ct() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && S(this, "input")) return this.click(), !1
                },
                _default: function (t) {
                    return S(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, P.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, P.Event = function (t, e) {
        if (!(this instanceof P.Event)) return new P.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? wt : Tt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && P.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[P.expando] = !0
    }, P.Event.prototype = {
        constructor: P.Event,
        isDefaultPrevented: Tt,
        isPropagationStopped: Tt,
        isImmediatePropagationStopped: Tt,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = wt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = wt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = wt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, P.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && yt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && bt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, P.event.addProp), P.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, r) {
        P.event.special[t] = {
            delegateType: r,
            bindType: r,
            handle: function (t) {
                var e, i = t.relatedTarget,
                    n = t.handleObj;
                return i && (i === this || P.contains(this, i)) || (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = r), e
            }
        }
    }), P.fn.extend({
        on: function (t, e, i, n) {
            return Pt(this, t, e, i, n)
        },
        one: function (t, e, i, n) {
            return Pt(this, t, e, i, n, 1)
        },
        off: function (t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, P(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" != typeof t) return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = Tt), this.each(function () {
                P.event.remove(this, t, i, e)
            });
            for (r in t) this.off(r, e, t[r]);
            return this
        }
    });
    var kt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        St = /<script|<style|<link/i,
        Ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
        At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Rt(t, e) {
        return S(t, "table") && S(11 !== e.nodeType ? e : e.firstChild, "tr") && P(t).children("tbody")[0] || t
    }

    function Dt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Et(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function Mt(t, e) {
        var i, n, r, s, o, a, l, u;
        if (1 === e.nodeType) {
            if (G.hasData(t) && (s = G.access(t), o = G.set(e, s), u = s.events))
                for (r in delete o.handle, o.events = {}, u)
                    for (i = 0, n = u[r].length; i < n; i++) P.event.add(e, r, u[r][i]);
            Q.hasData(t) && (a = Q.access(t), l = P.extend({}, a), Q.set(e, l))
        }
    }

    function $t(i, n, r, s) {
        n = m.apply([], n);
        var t, e, o, a, l, u, h = 0,
            c = i.length,
            d = c - 1,
            f = n[0],
            p = _(f);
        if (p || 1 < c && "string" == typeof f && !v.checkClone && Ot.test(f)) return i.each(function (t) {
            var e = i.eq(t);
            p && (n[0] = f.call(this, t, e.html())), $t(e, n, r, s)
        });
        if (c && (e = (t = vt(n, i[0].ownerDocument, !1, i, s)).firstChild, 1 === t.childNodes.length && (t = e), e || s)) {
            for (a = (o = P.map(dt(t, "script"), Dt)).length; h < c; h++) l = t, h !== d && (l = P.clone(l, !0, !0), a && P.merge(o, dt(l, "script"))), r.call(i[h], l, h);
            if (a)
                for (u = o[o.length - 1].ownerDocument, P.map(o, Et), h = 0; h < a; h++) l = o[h], ht.test(l.type || "") && !G.access(l, "globalEval") && P.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? P._evalUrl && P._evalUrl(l.src) : b(l.textContent.replace(At, ""), u, l))
        }
        return i
    }

    function It(t, e, i) {
        for (var n, r = e ? P.filter(e, t) : t, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || P.cleanData(dt(n)), n.parentNode && (i && P.contains(n.ownerDocument, n) && ft(dt(n, "script")), n.parentNode.removeChild(n));
        return t
    }
    P.extend({
        htmlPrefilter: function (t) {
            return t.replace(kt, "<$1></$2>")
        },
        clone: function (t, e, i) {
            var n, r, s, o, a, l, u, h = t.cloneNode(!0),
                c = P.contains(t.ownerDocument, t);
            if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || P.isXMLDoc(t)))
                for (o = dt(h), n = 0, r = (s = dt(t)).length; n < r; n++) a = s[n], l = o[n], void 0, "input" === (u = l.nodeName.toLowerCase()) && lt.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (e)
                if (i)
                    for (s = s || dt(t), o = o || dt(h), n = 0, r = s.length; n < r; n++) Mt(s[n], o[n]);
                else Mt(t, h);
            return 0 < (o = dt(h, "script")).length && ft(o, !c && dt(t, "script")), h
        },
        cleanData: function (t) {
            for (var e, i, n, r = P.event.special, s = 0; void 0 !== (i = t[s]); s++)
                if (V(i)) {
                    if (e = i[G.expando]) {
                        if (e.events)
                            for (n in e.events) r[n] ? P.event.remove(i, n) : P.removeEvent(i, n, e.handle);
                        i[G.expando] = void 0
                    }
                    i[Q.expando] && (i[Q.expando] = void 0)
                }
        }
    }), P.fn.extend({
        detach: function (t) {
            return It(this, t, !0)
        },
        remove: function (t) {
            return It(this, t)
        },
        text: function (t) {
            return H(this, function (t) {
                return void 0 === t ? P.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function () {
            return $t(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Rt(this, t).appendChild(t)
            })
        },
        prepend: function () {
            return $t(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = Rt(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return $t(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return $t(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (P.cleanData(dt(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return P.clone(this, t, e)
            })
        },
        html: function (t) {
            return H(this, function (t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !St.test(t) && !ct[(ut.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = P.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (P.cleanData(dt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var i = [];
            return $t(this, arguments, function (t) {
                var e = this.parentNode;
                P.inArray(this, i) < 0 && (P.cleanData(dt(this)), e && e.replaceChild(t, this))
            }, i)
        }
    }), P.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, o) {
        P.fn[t] = function (t) {
            for (var e, i = [], n = P(t), r = n.length - 1, s = 0; s <= r; s++) e = s === r ? this : this.clone(!0), P(n[s])[o](e), l.apply(i, e.get());
            return this.pushStack(i)
        }
    });
    var Nt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
        Lt = function (t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = T), e.getComputedStyle(t)
        },
        jt = new RegExp(it.join("|"), "i");

    function zt(t, e, i) {
        var n, r, s, o, a = t.style;
        return (i = i || Lt(t)) && ("" !== (o = i.getPropertyValue(e) || i[e]) || P.contains(t.ownerDocument, t) || (o = P.style(t, e)), !v.pixelBoxStyles() && Nt.test(o) && jt.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function Ft(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function t() {
            if (l) {
                a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", _t.appendChild(a).appendChild(l);
                var t = T.getComputedStyle(l);
                i = "1%" !== t.top, o = 12 === e(t.marginLeft), l.style.right = "60%", s = 36 === e(t.right), n = 36 === e(t.width), l.style.position = "absolute", r = 36 === l.offsetWidth || "absolute", _t.removeChild(a), l = null
            }
        }

        function e(t) {
            return Math.round(parseFloat(t))
        }
        var i, n, r, s, o, a = C.createElement("div"),
            l = C.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, P.extend(v, {
            boxSizingReliable: function () {
                return t(), n
            },
            pixelBoxStyles: function () {
                return t(), s
            },
            pixelPosition: function () {
                return t(), i
            },
            reliableMarginLeft: function () {
                return t(), o
            },
            scrollboxSize: function () {
                return t(), r
            }
        }))
    }();
    var qt = /^(none|table(?!-c[ea]).+)/,
        Ht = /^--/,
        Bt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Wt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Xt = ["Webkit", "Moz", "ms"],
        Ut = C.createElement("div").style;

    function Vt(t) {
        var e = P.cssProps[t];
        return e || (e = P.cssProps[t] = function (t) {
            if (t in Ut) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = Xt.length; i--;)
                if ((t = Xt[i] + e) in Ut) return t
        }(t) || t), e
    }

    function Yt(t, e, i) {
        var n = et.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function Gt(t, e, i, n, r, s) {
        var o = "width" === e ? 1 : 0,
            a = 0,
            l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === i && (l += P.css(t, i + it[o], !0, r)), n ? ("content" === i && (l -= P.css(t, "padding" + it[o], !0, r)), "margin" !== i && (l -= P.css(t, "border" + it[o] + "Width", !0, r))) : (l += P.css(t, "padding" + it[o], !0, r), "padding" !== i ? l += P.css(t, "border" + it[o] + "Width", !0, r) : a += P.css(t, "border" + it[o] + "Width", !0, r));
        return !n && 0 <= s && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - .5))), l
    }

    function Qt(t, e, i) {
        var n = Lt(t),
            r = zt(t, e, n),
            s = "border-box" === P.css(t, "boxSizing", !1, n),
            o = s;
        if (Nt.test(r)) {
            if (!i) return r;
            r = "auto"
        }
        return o = o && (v.boxSizingReliable() || r === t.style[e]), ("auto" === r || !parseFloat(r) && "inline" === P.css(t, "display", !1, n)) && (r = t["offset" + e[0].toUpperCase() + e.slice(1)], o = !0), (r = parseFloat(r) || 0) + Gt(t, e, i || (s ? "border" : "content"), o, n, r) + "px"
    }

    function Zt(t, e, i, n, r) {
        return new Zt.prototype.init(t, e, i, n, r)
    }
    P.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = zt(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = U(e),
                    l = Ht.test(e),
                    u = t.style;
                if (l || (e = Vt(a)), o = P.cssHooks[e] || P.cssHooks[a], void 0 === i) return o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : u[e];
                "string" == (s = typeof i) && (r = et.exec(i)) && r[1] && (i = st(t, e, r), s = "number"), null != i && i == i && ("number" === s && (i += r && r[3] || (P.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (u[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, n)) || (l ? u.setProperty(e, i) : u[e] = i))
            }
        },
        css: function (t, e, i, n) {
            var r, s, o, a = U(e);
            return Ht.test(e) || (e = Vt(a)), (o = P.cssHooks[e] || P.cssHooks[a]) && "get" in o && (r = o.get(t, !0, i)), void 0 === r && (r = zt(t, e, n)), "normal" === r && e in Wt && (r = Wt[e]), "" === i || i ? (s = parseFloat(r), !0 === i || isFinite(s) ? s || 0 : r) : r
        }
    }), P.each(["height", "width"], function (t, a) {
        P.cssHooks[a] = {
            get: function (t, e, i) {
                if (e) return !qt.test(P.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Qt(t, a, i) : rt(t, Bt, function () {
                    return Qt(t, a, i)
                })
            },
            set: function (t, e, i) {
                var n, r = Lt(t),
                    s = "border-box" === P.css(t, "boxSizing", !1, r),
                    o = i && Gt(t, a, i, s, r);
                return s && v.scrollboxSize() === r.position && (o -= Math.ceil(t["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - Gt(t, a, "border", !1, r) - .5)), o && (n = et.exec(e)) && "px" !== (n[3] || "px") && (t.style[a] = e, e = P.css(t, a)), Yt(0, e, o)
            }
        }
    }), P.cssHooks.marginLeft = Ft(v.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(zt(t, "marginLeft")) || t.getBoundingClientRect().left - rt(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), P.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (r, s) {
        P.cssHooks[r + s] = {
            expand: function (t) {
                for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[r + it[e] + s] = n[e] || n[e - 2] || n[0];
                return i
            }
        }, "margin" !== r && (P.cssHooks[r + s].set = Yt)
    }), P.fn.extend({
        css: function (t, e) {
            return H(this, function (t, e, i) {
                var n, r, s = {},
                    o = 0;
                if (Array.isArray(e)) {
                    for (n = Lt(t), r = e.length; o < r; o++) s[e[o]] = P.css(t, e[o], !1, n);
                    return s
                }
                return void 0 !== i ? P.style(t, e, i) : P.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }), ((P.Tween = Zt).prototype = {
        constructor: Zt,
        init: function (t, e, i, n, r, s) {
            this.elem = t, this.prop = i, this.easing = r || P.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (P.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var t = Zt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Zt.propHooks._default.get(this)
        },
        run: function (t) {
            var e, i = Zt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = P.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Zt.propHooks._default.set(this), this
        }
    }).init.prototype = Zt.prototype, (Zt.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = P.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function (t) {
                P.fx.step[t.prop] ? P.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[P.cssProps[t.prop]] && !P.cssHooks[t.prop] ? t.elem[t.prop] = t.now : P.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = Zt.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, P.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, P.fx = Zt.prototype.init, P.fx.step = {};
    var Kt, Jt, te, ee, ie = /^(?:toggle|show|hide)$/,
        ne = /queueHooks$/;

    function re() {
        Jt && (!1 === C.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(re) : T.setTimeout(re, P.fx.interval), P.fx.tick())
    }

    function se() {
        return T.setTimeout(function () {
            Kt = void 0
        }), Kt = Date.now()
    }

    function oe(t, e) {
        var i, n = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; n < 4; n += 2 - e) r["margin" + (i = it[n])] = r["padding" + i] = t;
        return e && (r.opacity = r.width = t), r
    }

    function ae(t, e, i) {
        for (var n, r = (le.tweeners[e] || []).concat(le.tweeners["*"]), s = 0, o = r.length; s < o; s++)
            if (n = r[s].call(i, e, t)) return n
    }

    function le(s, t, e) {
        var i, o, n = 0,
            r = le.prefilters.length,
            a = P.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (o) return !1;
                for (var t = Kt || se(), e = Math.max(0, u.startTime + u.duration - t), i = 1 - (e / u.duration || 0), n = 0, r = u.tweens.length; n < r; n++) u.tweens[n].run(i);
                return a.notifyWith(s, [u, i, e]), i < 1 && r ? e : (r || a.notifyWith(s, [u, 1, 0]), a.resolveWith(s, [u]), !1)
            },
            u = a.promise({
                elem: s,
                props: P.extend({}, t),
                opts: P.extend(!0, {
                    specialEasing: {},
                    easing: P.easing._default
                }, e),
                originalProperties: t,
                originalOptions: e,
                startTime: Kt || se(),
                duration: e.duration,
                tweens: [],
                createTween: function (t, e) {
                    var i = P.Tween(s, u.opts, t, e, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (t) {
                    var e = 0,
                        i = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; e < i; e++) u.tweens[e].run(1);
                    return t ? (a.notifyWith(s, [u, 1, 0]), a.resolveWith(s, [u, t])) : a.rejectWith(s, [u, t]), this
                }
            }),
            h = u.props;
        for (function (t, e) {
                var i, n, r, s, o;
                for (i in t)
                    if (r = e[n = U(i)], s = t[i], Array.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (o = P.cssHooks[n]) && "expand" in o)
                        for (i in s = o.expand(s), delete t[n], s) i in t || (t[i] = s[i], e[i] = r);
                    else e[n] = r
            }(h, u.opts.specialEasing); n < r; n++)
            if (i = le.prefilters[n].call(u, s, h, u.opts)) return _(i.stop) && (P._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
        return P.map(h, ae, u), _(u.opts.start) && u.opts.start.call(s, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), P.fx.timer(P.extend(l, {
            elem: s,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    P.Animation = P.extend(le, {
        tweeners: {
            "*": [function (t, e) {
                var i = this.createTween(t, e);
                return st(i.elem, t, et.exec(e), i), i
            }]
        },
        tweener: function (t, e) {
            for (var i, n = 0, r = (t = _(t) ? (e = t, ["*"]) : t.match(I)).length; n < r; n++) i = t[n], le.tweeners[i] = le.tweeners[i] || [], le.tweeners[i].unshift(e)
        },
        prefilters: [function (t, e, i) {
            var n, r, s, o, a, l, u, h, c = "width" in e || "height" in e,
                d = this,
                f = {},
                p = t.style,
                m = t.nodeType && nt(t),
                g = G.get(t, "fxshow");
            for (n in i.queue || (null == (o = P._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function () {
                    o.unqueued || a()
                }), o.unqueued++, d.always(function () {
                    d.always(function () {
                        o.unqueued--, P.queue(t, "fx").length || o.empty.fire()
                    })
                })), e)
                if (r = e[n], ie.test(r)) {
                    if (delete e[n], s = s || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[n]) continue;
                        m = !0
                    }
                    f[n] = g && g[n] || P.style(t, n)
                } if ((l = !P.isEmptyObject(e)) || !P.isEmptyObject(f))
                for (n in c && 1 === t.nodeType && (i.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = g && g.display) && (u = G.get(t, "display")), "none" === (h = P.css(t, "display")) && (u ? h = u : (at([t], !0), u = t.style.display || u, h = P.css(t, "display"), at([t]))), ("inline" === h || "inline-block" === h && null != u) && "none" === P.css(t, "float") && (l || (d.done(function () {
                        p.display = u
                    }), null == u && (h = p.display, u = "none" === h ? "" : h)), p.display = "inline-block")), i.overflow && (p.overflow = "hidden", d.always(function () {
                        p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
                    })), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = G.access(t, "fxshow", {
                    display: u
                }), s && (g.hidden = !m), m && at([t], !0), d.done(function () {
                    for (n in m || at([t]), G.remove(t, "fxshow"), f) P.style(t, n, f[n])
                })), l = ae(m ? g[n] : 0, n, d), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function (t, e) {
            e ? le.prefilters.unshift(t) : le.prefilters.push(t)
        }
    }), P.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? P.extend({}, t) : {
            complete: i || !i && e || _(t) && t,
            duration: t,
            easing: i && e || e && !_(e) && e
        };
        return P.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in P.fx.speeds ? n.duration = P.fx.speeds[n.duration] : n.duration = P.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            _(n.old) && n.old.call(this), n.queue && P.dequeue(this, n.queue)
        }, n
    }, P.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(nt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function (e, t, i, n) {
            var r = P.isEmptyObject(e),
                s = P.speed(t, i, n),
                o = function () {
                    var t = le(this, P.extend({}, e), s);
                    (r || G.get(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function (r, t, s) {
            var o = function (t) {
                var e = t.stop;
                delete t.stop, e(s)
            };
            return "string" != typeof r && (s = t, t = r, r = void 0), t && !1 !== r && this.queue(r || "fx", []), this.each(function () {
                var t = !0,
                    e = null != r && r + "queueHooks",
                    i = P.timers,
                    n = G.get(this);
                if (e) n[e] && n[e].stop && o(n[e]);
                else
                    for (e in n) n[e] && n[e].stop && ne.test(e) && o(n[e]);
                for (e = i.length; e--;) i[e].elem !== this || null != r && i[e].queue !== r || (i[e].anim.stop(s), t = !1, i.splice(e, 1));
                !t && s || P.dequeue(this, r)
            })
        },
        finish: function (o) {
            return !1 !== o && (o = o || "fx"), this.each(function () {
                var t, e = G.get(this),
                    i = e[o + "queue"],
                    n = e[o + "queueHooks"],
                    r = P.timers,
                    s = i ? i.length : 0;
                for (e.finish = !0, P.queue(this, o, []), n && n.stop && n.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === o && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete e.finish
            })
        }
    }), P.each(["toggle", "show", "hide"], function (t, n) {
        var r = P.fn[n];
        P.fn[n] = function (t, e, i) {
            return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(oe(n, !0), t, e, i)
        }
    }), P.each({
        slideDown: oe("show"),
        slideUp: oe("hide"),
        slideToggle: oe("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (t, n) {
        P.fn[t] = function (t, e, i) {
            return this.animate(n, t, e, i)
        }
    }), P.timers = [], P.fx.tick = function () {
        var t, e = 0,
            i = P.timers;
        for (Kt = Date.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || P.fx.stop(), Kt = void 0
    }, P.fx.timer = function (t) {
        P.timers.push(t), P.fx.start()
    }, P.fx.interval = 13, P.fx.start = function () {
        Jt || (Jt = !0, re())
    }, P.fx.stop = function () {
        Jt = null
    }, P.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, P.fn.delay = function (n, t) {
        return n = P.fx && P.fx.speeds[n] || n, t = t || "fx", this.queue(t, function (t, e) {
            var i = T.setTimeout(t, n);
            e.stop = function () {
                T.clearTimeout(i)
            }
        })
    }, te = C.createElement("input"), ee = C.createElement("select").appendChild(C.createElement("option")), te.type = "checkbox", v.checkOn = "" !== te.value, v.optSelected = ee.selected, (te = C.createElement("input")).value = "t", te.type = "radio", v.radioValue = "t" === te.value;
    var ue, he = P.expr.attrHandle;
    P.fn.extend({
        attr: function (t, e) {
            return H(this, P.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function (t) {
            return this.each(function () {
                P.removeAttr(this, t)
            })
        }
    }), P.extend({
        attr: function (t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? P.prop(t, e, i) : (1 === s && P.isXMLDoc(t) || (r = P.attrHooks[e.toLowerCase()] || (P.expr.match.bool.test(e) ? ue : void 0)), void 0 !== i ? null === i ? void P.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : null == (n = P.find.attr(t, e)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!v.radioValue && "radio" === e && S(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var i, n = 0,
                r = e && e.match(I);
            if (r && 1 === t.nodeType)
                for (; i = r[n++];) t.removeAttribute(i)
        }
    }), ue = {
        set: function (t, e, i) {
            return !1 === e ? P.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, P.each(P.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var o = he[e] || P.find.attr;
        he[e] = function (t, e, i) {
            var n, r, s = e.toLowerCase();
            return i || (r = he[s], he[s] = n, n = null != o(t, e, i) ? s : null, he[s] = r), n
        }
    });
    var ce = /^(?:input|select|textarea|button)$/i,
        de = /^(?:a|area)$/i;

    function fe(t) {
        return (t.match(I) || []).join(" ")
    }

    function pe(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function me(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(I) || []
    }
    P.fn.extend({
        prop: function (t, e) {
            return H(this, P.prop, t, e, 1 < arguments.length)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[P.propFix[t] || t]
            })
        }
    }), P.extend({
        prop: function (t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && P.isXMLDoc(t) || (e = P.propFix[e] || e, r = P.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = P.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ce.test(t.nodeName) || de.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.optSelected || (P.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), P.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        P.propFix[this.toLowerCase()] = this
    }), P.fn.extend({
        addClass: function (e) {
            var t, i, n, r, s, o, a, l = 0;
            if (_(e)) return this.each(function (t) {
                P(this).addClass(e.call(this, t, pe(this)))
            });
            if ((t = me(e)).length)
                for (; i = this[l++];)
                    if (r = pe(i), n = 1 === i.nodeType && " " + fe(r) + " ") {
                        for (o = 0; s = t[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        r !== (a = fe(n)) && i.setAttribute("class", a)
                    } return this
        },
        removeClass: function (e) {
            var t, i, n, r, s, o, a, l = 0;
            if (_(e)) return this.each(function (t) {
                P(this).removeClass(e.call(this, t, pe(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = me(e)).length)
                for (; i = this[l++];)
                    if (r = pe(i), n = 1 === i.nodeType && " " + fe(r) + " ") {
                        for (o = 0; s = t[o++];)
                            for (; - 1 < n.indexOf(" " + s + " ");) n = n.replace(" " + s + " ", " ");
                        r !== (a = fe(n)) && i.setAttribute("class", a)
                    } return this
        },
        toggleClass: function (r, e) {
            var s = typeof r,
                o = "string" === s || Array.isArray(r);
            return "boolean" == typeof e && o ? e ? this.addClass(r) : this.removeClass(r) : _(r) ? this.each(function (t) {
                P(this).toggleClass(r.call(this, t, pe(this), e), e)
            }) : this.each(function () {
                var t, e, i, n;
                if (o)
                    for (e = 0, i = P(this), n = me(r); t = n[e++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== r && "boolean" !== s || ((t = pe(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === r ? "" : G.get(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && -1 < (" " + fe(pe(i)) + " ").indexOf(e)) return !0;
            return !1
        }
    });
    var ge = /\r/g;
    P.fn.extend({
        val: function (i) {
            var n, t, r, e = this[0];
            return arguments.length ? (r = _(i), this.each(function (t) {
                var e;
                1 === this.nodeType && (null == (e = r ? i.call(this, t, P(this).val()) : i) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = P.map(e, function (t) {
                    return null == t ? "" : t + ""
                })), (n = P.valHooks[this.type] || P.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : e ? (n = P.valHooks[e.type] || P.valHooks[e.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(ge, "") : null == t ? "" : t : void 0
        }
    }), P.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = P.find.attr(t, "value");
                    return null != e ? e : fe(P.text(t))
                }
            },
            select: {
                get: function (t) {
                    var e, i, n, r = t.options,
                        s = t.selectedIndex,
                        o = "select-one" === t.type,
                        a = o ? null : [],
                        l = o ? s + 1 : r.length;
                    for (n = s < 0 ? l : o ? s : 0; n < l; n++)
                        if (((i = r[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !S(i.parentNode, "optgroup"))) {
                            if (e = P(i).val(), o) return e;
                            a.push(e)
                        } return a
                },
                set: function (t, e) {
                    for (var i, n, r = t.options, s = P.makeArray(e), o = r.length; o--;)((n = r[o]).selected = -1 < P.inArray(P.valHooks.option.get(n), s)) && (i = !0);
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), P.each(["radio", "checkbox"], function () {
        P.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = -1 < P.inArray(P(t).val(), e)
            }
        }, v.checkOn || (P.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), v.focusin = "onfocusin" in T;
    var ve = /^(?:focusinfocus|focusoutblur)$/,
        _e = function (t) {
            t.stopPropagation()
        };
    P.extend(P.event, {
        trigger: function (t, e, i, n) {
            var r, s, o, a, l, u, h, c, d = [i || C],
                f = g.call(t, "type") ? t.type : t,
                p = g.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = o = i = i || C, 3 !== i.nodeType && 8 !== i.nodeType && !ve.test(f + P.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), l = f.indexOf(":") < 0 && "on" + f, (t = t[P.expando] ? t : new P.Event(f, "object" == typeof t && t)).isTrigger = n ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : P.makeArray(e, [t]), h = P.event.special[f] || {}, n || !h.trigger || !1 !== h.trigger.apply(i, e))) {
                if (!n && !h.noBubble && !y(i)) {
                    for (a = h.delegateType || f, ve.test(a + f) || (s = s.parentNode); s; s = s.parentNode) d.push(s), o = s;
                    o === (i.ownerDocument || C) && d.push(o.defaultView || o.parentWindow || T)
                }
                for (r = 0;
                    (s = d[r++]) && !t.isPropagationStopped();) c = s, t.type = 1 < r ? a : h.bindType || f, (u = (G.get(s, "events") || {})[t.type] && G.get(s, "handle")) && u.apply(s, e), (u = l && s[l]) && u.apply && V(s) && (t.result = u.apply(s, e), !1 === t.result && t.preventDefault());
                return t.type = f, n || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(d.pop(), e) || !V(i) || l && _(i[f]) && !y(i) && ((o = i[l]) && (i[l] = null), P.event.triggered = f, t.isPropagationStopped() && c.addEventListener(f, _e), i[f](), t.isPropagationStopped() && c.removeEventListener(f, _e), P.event.triggered = void 0, o && (i[l] = o)), t.result
            }
        },
        simulate: function (t, e, i) {
            var n = P.extend(new P.Event, i, {
                type: t,
                isSimulated: !0
            });
            P.event.trigger(n, null, e)
        }
    }), P.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                P.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return P.event.trigger(t, e, i, !0)
        }
    }), v.focusin || P.each({
        focus: "focusin",
        blur: "focusout"
    }, function (i, n) {
        var r = function (t) {
            P.event.simulate(n, t.target, P.event.fix(t))
        };
        P.event.special[n] = {
            setup: function () {
                var t = this.ownerDocument || this,
                    e = G.access(t, n);
                e || t.addEventListener(i, r, !0), G.access(t, n, (e || 0) + 1)
            },
            teardown: function () {
                var t = this.ownerDocument || this,
                    e = G.access(t, n) - 1;
                e ? G.access(t, n, e) : (t.removeEventListener(i, r, !0), G.remove(t, n))
            }
        }
    });
    var ye = T.location,
        be = Date.now(),
        xe = /\?/;
    P.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            e = (new T.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || P.error("Invalid XML: " + t), e
    };
    var we = /\[\]$/,
        Te = /\r?\n/g,
        Ce = /^(?:submit|button|image|reset|file)$/i,
        Pe = /^(?:input|select|textarea|keygen)/i;

    function ke(i, t, n, r) {
        var e;
        if (Array.isArray(t)) P.each(t, function (t, e) {
            n || we.test(i) ? r(i, e) : ke(i + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, n, r)
        });
        else if (n || "object" !== x(t)) r(i, t);
        else
            for (e in t) ke(i + "[" + e + "]", t[e], n, r)
    }
    P.param = function (t, e) {
        var i, n = [],
            r = function (t, e) {
                var i = _(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (Array.isArray(t) || t.jquery && !P.isPlainObject(t)) P.each(t, function () {
            r(this.name, this.value)
        });
        else
            for (i in t) ke(i, t[i], e, r);
        return n.join("&")
    }, P.fn.extend({
        serialize: function () {
            return P.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = P.prop(this, "elements");
                return t ? P.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !P(this).is(":disabled") && Pe.test(this.nodeName) && !Ce.test(t) && (this.checked || !lt.test(t))
            }).map(function (t, e) {
                var i = P(this).val();
                return null == i ? null : Array.isArray(i) ? P.map(i, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(Te, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Te, "\r\n")
                }
            }).get()
        }
    });
    var Se = /%20/g,
        Oe = /#.*$/,
        Ae = /([?&])_=[^&]*/,
        Re = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        De = /^(?:GET|HEAD)$/,
        Ee = /^\/\//,
        Me = {},
        $e = {},
        Ie = "*/".concat("*"),
        Ne = C.createElement("a");

    function Le(s) {
        return function (t, e) {
            "string" != typeof t && (e = t, t = "*");
            var i, n = 0,
                r = t.toLowerCase().match(I) || [];
            if (_(e))
                for (; i = r[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (s[i] = s[i] || []).unshift(e)) : (s[i] = s[i] || []).push(e)
        }
    }

    function je(e, r, s, o) {
        var a = {},
            l = e === $e;

        function u(t) {
            var n;
            return a[t] = !0, P.each(e[t] || [], function (t, e) {
                var i = e(r, s, o);
                return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (r.dataTypes.unshift(i), u(i), !1)
            }), n
        }
        return u(r.dataTypes[0]) || !a["*"] && u("*")
    }

    function ze(t, e) {
        var i, n, r = P.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && P.extend(!0, t, n), t
    }
    Ne.href = ye.href, P.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ye.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ye.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ie,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": P.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? ze(ze(t, P.ajaxSettings), e) : ze(P.ajaxSettings, t)
        },
        ajaxPrefilter: Le(Me),
        ajaxTransport: Le($e),
        ajax: function (t, e) {
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var h, c, d, i, f, n, p, m, r, s, g = P.ajaxSetup({}, e),
                v = g.context || g,
                _ = g.context && (v.nodeType || v.jquery) ? P(v) : P.event,
                y = P.Deferred(),
                b = P.Callbacks("once memory"),
                x = g.statusCode || {},
                o = {},
                a = {},
                l = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (p) {
                            if (!i)
                                for (i = {}; e = Re.exec(d);) i[e[1].toLowerCase()] = e[2];
                            e = i[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return p ? d : null
                    },
                    setRequestHeader: function (t, e) {
                        return null == p && (t = a[t.toLowerCase()] = a[t.toLowerCase()] || t, o[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return null == p && (g.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (p) w.always(t[w.status]);
                            else
                                for (e in t) x[e] = [x[e], t[e]];
                        return this
                    },
                    abort: function (t) {
                        var e = t || l;
                        return h && h.abort(e), u(0, e), this
                    }
                };
            if (y.promise(w), g.url = ((t || g.url || ye.href) + "").replace(Ee, ye.protocol + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(I) || [""], null == g.crossDomain) {
                n = C.createElement("a");
                try {
                    n.href = g.url, n.href = n.href, g.crossDomain = Ne.protocol + "//" + Ne.host != n.protocol + "//" + n.host
                } catch (t) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = P.param(g.data, g.traditional)), je(Me, g, e, w), p) return w;
            for (r in (m = P.event && g.global) && 0 == P.active++ && P.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !De.test(g.type), c = g.url.replace(Oe, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Se, "+")) : (s = g.url.slice(c.length), g.data && (g.processData || "string" == typeof g.data) && (c += (xe.test(c) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (c = c.replace(Ae, "$1"), s = (xe.test(c) ? "&" : "?") + "_=" + be++ + s), g.url = c + s), g.ifModified && (P.lastModified[c] && w.setRequestHeader("If-Modified-Since", P.lastModified[c]), P.etag[c] && w.setRequestHeader("If-None-Match", P.etag[c])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && w.setRequestHeader("Content-Type", g.contentType), w.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Ie + "; q=0.01" : "") : g.accepts["*"]), g.headers) w.setRequestHeader(r, g.headers[r]);
            if (g.beforeSend && (!1 === g.beforeSend.call(v, w, g) || p)) return w.abort();
            if (l = "abort", b.add(g.complete), w.done(g.success), w.fail(g.error), h = je($e, g, e, w)) {
                if (w.readyState = 1, m && _.trigger("ajaxSend", [w, g]), p) return w;
                g.async && 0 < g.timeout && (f = T.setTimeout(function () {
                    w.abort("timeout")
                }, g.timeout));
                try {
                    p = !1, h.send(o, u)
                } catch (t) {
                    if (p) throw t;
                    u(-1, t)
                }
            } else u(-1, "No Transport");

            function u(t, e, i, n) {
                var r, s, o, a, l, u = e;
                p || (p = !0, f && T.clearTimeout(f), h = void 0, d = n || "", w.readyState = 0 < t ? 4 : 0, r = 200 <= t && t < 300 || 304 === t, i && (a = function (t, e, i) {
                    for (var n, r, s, o, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                        for (r in a)
                            if (a[r] && a[r].test(n)) {
                                l.unshift(r);
                                break
                            } if (l[0] in i) s = l[0];
                    else {
                        for (r in i) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            o || (o = r)
                        }
                        s = s || o
                    }
                    if (s) return s !== l[0] && l.unshift(s), i[s]
                }(g, w, i)), a = function (t, e, i, n) {
                    var r, s, o, a, l, u = {},
                        h = t.dataTypes.slice();
                    if (h[1])
                        for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
                    for (s = h.shift(); s;)
                        if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = h.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                        if (!(o = u[l + " " + s] || u["* " + s]))
                            for (r in u)
                                if ((a = r.split(" "))[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === o ? o = u[r] : !0 !== u[r] && (s = a[0], h.unshift(a[1]));
                                    break
                                } if (!0 !== o)
                            if (o && t.throws) e = o(e);
                            else try {
                                e = o(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: o ? t : "No conversion from " + l + " to " + s
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(g, a, w, r), r ? (g.ifModified && ((l = w.getResponseHeader("Last-Modified")) && (P.lastModified[c] = l), (l = w.getResponseHeader("etag")) && (P.etag[c] = l)), 204 === t || "HEAD" === g.type ? u = "nocontent" : 304 === t ? u = "notmodified" : (u = a.state, s = a.data, r = !(o = a.error))) : (o = u, !t && u || (u = "error", t < 0 && (t = 0))), w.status = t, w.statusText = (e || u) + "", r ? y.resolveWith(v, [s, u, w]) : y.rejectWith(v, [w, u, o]), w.statusCode(x), x = void 0, m && _.trigger(r ? "ajaxSuccess" : "ajaxError", [w, g, r ? s : o]), b.fireWith(v, [w, u]), m && (_.trigger("ajaxComplete", [w, g]), --P.active || P.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function (t, e, i) {
            return P.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return P.get(t, void 0, e, "script")
        }
    }), P.each(["get", "post"], function (t, r) {
        P[r] = function (t, e, i, n) {
            return _(e) && (n = n || i, i = e, e = void 0), P.ajax(P.extend({
                url: t,
                type: r,
                dataType: n,
                data: e,
                success: i
            }, P.isPlainObject(t) && t))
        }
    }), P._evalUrl = function (t) {
        return P.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, P.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (_(t) && (t = t.call(this[0])), e = P(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function (i) {
            return _(i) ? this.each(function (t) {
                P(this).wrapInner(i.call(this, t))
            }) : this.each(function () {
                var t = P(this),
                    e = t.contents();
                e.length ? e.wrapAll(i) : t.append(i)
            })
        },
        wrap: function (e) {
            var i = _(e);
            return this.each(function (t) {
                P(this).wrapAll(i ? e.call(this, t) : e)
            })
        },
        unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                P(this).replaceWith(this.childNodes)
            }), this
        }
    }), P.expr.pseudos.hidden = function (t) {
        return !P.expr.pseudos.visible(t)
    }, P.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, P.ajaxSettings.xhr = function () {
        try {
            return new T.XMLHttpRequest
        } catch (t) {}
    };
    var Fe = {
            0: 200,
            1223: 204
        },
        qe = P.ajaxSettings.xhr();
    v.cors = !!qe && "withCredentials" in qe, v.ajax = qe = !!qe, P.ajaxTransport(function (r) {
        var s, o;
        if (v.cors || qe && !r.crossDomain) return {
            send: function (t, e) {
                var i, n = r.xhr();
                if (n.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (i in r.xhrFields) n[i] = r.xhrFields[i];
                for (i in r.mimeType && n.overrideMimeType && n.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) n.setRequestHeader(i, t[i]);
                s = function (t) {
                    return function () {
                        s && (s = o = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null, "abort" === t ? n.abort() : "error" === t ? "number" != typeof n.status ? e(0, "error") : e(n.status, n.statusText) : e(Fe[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                            binary: n.response
                        } : {
                            text: n.responseText
                        }, n.getAllResponseHeaders()))
                    }
                }, n.onload = s(), o = n.onerror = n.ontimeout = s("error"), void 0 !== n.onabort ? n.onabort = o : n.onreadystatechange = function () {
                    4 === n.readyState && T.setTimeout(function () {
                        s && o()
                    })
                }, s = s("abort");
                try {
                    n.send(r.hasContent && r.data || null)
                } catch (t) {
                    if (s) throw t
                }
            },
            abort: function () {
                s && s()
            }
        }
    }), P.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), P.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return P.globalEval(t), t
            }
        }
    }), P.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), P.ajaxTransport("script", function (i) {
        var n, r;
        if (i.crossDomain) return {
            send: function (t, e) {
                n = P("<script>").prop({
                    charset: i.scriptCharset,
                    src: i.url
                }).on("load error", r = function (t) {
                    n.remove(), r = null, t && e("error" === t.type ? 404 : 200, t.type)
                }), C.head.appendChild(n[0])
            },
            abort: function () {
                r && r()
            }
        }
    });
    var He, Be = [],
        We = /(=)\?(?=&|$)|\?\?/;
    P.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Be.pop() || P.expando + "_" + be++;
            return this[t] = !0, t
        }
    }), P.ajaxPrefilter("json jsonp", function (t, e, i) {
        var n, r, s, o = !1 !== t.jsonp && (We.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && We.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) return n = t.jsonpCallback = _(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(We, "$1" + n) : !1 !== t.jsonp && (t.url += (xe.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function () {
            return s || P.error(n + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = T[n], T[n] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === r ? P(T).removeProp(n) : T[n] = r, t[n] && (t.jsonpCallback = e.jsonpCallback, Be.push(n)), s && _(r) && r(s[0]), s = r = void 0
        }), "script"
    }), v.createHTMLDocument = ((He = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === He.childNodes.length), P.parseHTML = function (t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (v.createHTMLDocument ? ((n = (e = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, e.head.appendChild(n)) : e = C), s = !i && [], (r = O.exec(t)) ? [e.createElement(r[1])] : (r = vt([t], e, s), s && s.length && P(s).remove(), P.merge([], r.childNodes)));
        var n, r, s
    }, P.fn.load = function (t, e, i) {
        var n, r, s, o = this,
            a = t.indexOf(" ");
        return -1 < a && (n = fe(t.slice(a)), t = t.slice(0, a)), _(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < o.length && P.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            s = arguments, o.html(n ? P("<div>").append(P.parseHTML(t)).find(n) : t)
        }).always(i && function (t, e) {
            o.each(function () {
                i.apply(this, s || [t.responseText, e, t])
            })
        }), this
    }, P.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        P.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), P.expr.pseudos.animated = function (e) {
        return P.grep(P.timers, function (t) {
            return e === t.elem
        }).length
    }, P.offset = {
        setOffset: function (t, e, i) {
            var n, r, s, o, a, l, u = P.css(t, "position"),
                h = P(t),
                c = {};
            "static" === u && (t.style.position = "relative"), a = h.offset(), s = P.css(t, "top"), l = P.css(t, "left"), r = ("absolute" === u || "fixed" === u) && -1 < (s + l).indexOf("auto") ? (o = (n = h.position()).top, n.left) : (o = parseFloat(s) || 0, parseFloat(l) || 0), _(e) && (e = e.call(t, i, P.extend({}, a))), null != e.top && (c.top = e.top - a.top + o), null != e.left && (c.left = e.left - a.left + r), "using" in e ? e.using.call(t, c) : h.css(c)
        }
    }, P.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                P.offset.setOffset(this, e, t)
            });
            var t, i, n = this[0];
            return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: t.top + i.pageYOffset,
                left: t.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, i, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === P.css(n, "position")) e = n.getBoundingClientRect();
                else {
                    for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === P.css(t, "position");) t = t.parentNode;
                    t && t !== n && 1 === t.nodeType && ((r = P(t).offset()).top += P.css(t, "borderTopWidth", !0), r.left += P.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - r.top - P.css(n, "marginTop", !0),
                    left: e.left - r.left - P.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === P.css(t, "position");) t = t.offsetParent;
                return t || _t
            })
        }
    }), P.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, r) {
        var s = "pageYOffset" === r;
        P.fn[e] = function (t) {
            return H(this, function (t, e, i) {
                var n;
                if (y(t) ? n = t : 9 === t.nodeType && (n = t.defaultView), void 0 === i) return n ? n[r] : t[e];
                n ? n.scrollTo(s ? n.pageXOffset : i, s ? i : n.pageYOffset) : t[e] = i
            }, e, t, arguments.length)
        }
    }), P.each(["top", "left"], function (t, i) {
        P.cssHooks[i] = Ft(v.pixelPosition, function (t, e) {
            if (e) return e = zt(t, i), Nt.test(e) ? P(t).position()[i] + "px" : e
        })
    }), P.each({
        Height: "height",
        Width: "width"
    }, function (o, a) {
        P.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        }, function (n, s) {
            P.fn[s] = function (t, e) {
                var i = arguments.length && (n || "boolean" != typeof t),
                    r = n || (!0 === t || !0 === e ? "margin" : "border");
                return H(this, function (t, e, i) {
                    var n;
                    return y(t) ? 0 === s.indexOf("outer") ? t["inner" + o] : t.document.documentElement["client" + o] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + o], n["scroll" + o], t.body["offset" + o], n["offset" + o], n["client" + o])) : void 0 === i ? P.css(t, e, r) : P.style(t, e, i, r)
                }, a, i ? t : void 0, i)
            }
        })
    }), P.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, i) {
        P.fn[i] = function (t, e) {
            return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
        }
    }), P.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), P.fn.extend({
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), P.proxy = function (t, e) {
        var i, n, r;
        if ("string" == typeof e && (i = t[e], e = t, t = i), _(t)) return n = a.call(arguments, 2), (r = function () {
            return t.apply(e || this, n.concat(a.call(arguments)))
        }).guid = t.guid = t.guid || P.guid++, r
    }, P.holdReady = function (t) {
        t ? P.readyWait++ : P.ready(!0)
    }, P.isArray = Array.isArray, P.parseJSON = JSON.parse, P.nodeName = S, P.isFunction = _, P.isWindow = y, P.camelCase = U, P.type = x, P.now = Date.now, P.isNumeric = function (t) {
        var e = P.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return P
    });
    var Xe = T.jQuery,
        Ue = T.$;
    return P.noConflict = function (t) {
        return T.$ === P && (T.$ = Ue), t && T.jQuery === P && (T.jQuery = Xe), P
    }, t || (T.jQuery = T.$ = P), P
}),
function (l) {
    var a = {
        sectionContainer: "section",
        easing: "ease",
        animationTime: 1e3,
        pagination: !0,
        updateURL: !1,
        keyboard: !0,
        beforeMove: null,
        afterMove: null,
        loop: !0,
        responsiveFallback: !1,
        direction: "vertical"
    };
    l.fn.swipeEvents = function () {
        return this.each(function () {
            var r, s, o = l(this);

            function a(t) {
                var e = t.originalEvent.touches;
                if (e && e.length) {
                    var i = r - e[0].pageX,
                        n = s - e[0].pageY;
                    20 <= i && o.trigger("swipeLeft"), i <= -20 && o.trigger("swipeRight"), 20 <= n && o.trigger("swipeUp"), n <= -20 && o.trigger("swipeDown"), (20 <= Math.abs(i) || 20 <= Math.abs(n)) && o.unbind("touchmove", a)
                }
            }
            o.bind("touchstart", function (t) {
                var e = t.originalEvent.touches;
                e && e.length && (r = e[0].pageX, s = e[0].pageY, o.unbind("touchmove", a), o.bind("touchmove", a))
            })
        })
    }, l.fn.onepage_scroll = function (t) {
        var n = l.extend({}, a, t),
            r = l(this),
            e = l(n.sectionContainer);

        function i() {
            var t = !1,
                e = typeof n.responsiveFallback;
            "number" == e && (t = l(window).width() < n.responsiveFallback), "boolean" == e && (t = n.responsiveFallback), "function" == e && (valFunction = n.responsiveFallback(), t = valFunction, typeOFv = typeof t, "number" == typeOFv && (t = l(window).width() < valFunction)), t ? (l("body").addClass("disabled-onepage-scroll"), l(document).unbind("mousewheel DOMMouseScroll MozMousePixelScroll"), r.swipeEvents().unbind("swipeDown swipeUp")) : (l("body").hasClass("disabled-onepage-scroll") && (l("body").removeClass("disabled-onepage-scroll"), l("html, body, .wrapper").animate({
                scrollTop: 0
            }, "fast")), r.swipeEvents().bind("swipeDown", function (t) {
                l("body").hasClass("disabled-onepage-scroll") || t.preventDefault(), r.moveUp()
            }).bind("swipeUp", function (t) {
                l("body").hasClass("disabled-onepage-scroll") || t.preventDefault(), r.moveDown()
            }), l(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (t) {
                t.preventDefault(), s(t, t.originalEvent.wheelDelta || -t.originalEvent.detail)
            }))
        }

        function s(t, e) {
            deltaOfInterest = e;
            var i = (new Date).getTime();
            i - lastAnimation < quietPeriod + n.animationTime ? t.preventDefault() : (deltaOfInterest < 0 ? r.moveDown() : r.moveUp(), lastAnimation = i)
        }
        if (total = e.length, status = "off", topPos = 0, leftPos = 0, lastAnimation = 0, quietPeriod = 500, paginationList = "", l.fn.transformPage = function (e, t, i) {
                if ("function" == typeof e.beforeMove && e.beforeMove(i), l("html").hasClass("ie8"))
                    if ("horizontal" == e.direction) {
                        var n = r.width() / 100 * t;
                        l(this).animate({
                            left: n + "px"
                        }, e.animationTime)
                    } else {
                        n = r.height() / 100 * t;
                        l(this).animate({
                            top: n + "px"
                        }, e.animationTime)
                    }
                else l(this).css({
                    "-webkit-transform": "horizontal" == e.direction ? "translate3d(" + t + "%, 0, 0)" : "translate3d(0, " + t + "%, 0)",
                    "-webkit-transition": "all " + e.animationTime + "ms " + e.easing,
                    "-moz-transform": "horizontal" == e.direction ? "translate3d(" + t + "%, 0, 0)" : "translate3d(0, " + t + "%, 0)",
                    "-moz-transition": "all " + e.animationTime + "ms " + e.easing,
                    "-ms-transform": "horizontal" == e.direction ? "translate3d(" + t + "%, 0, 0)" : "translate3d(0, " + t + "%, 0)",
                    "-ms-transition": "all " + e.animationTime + "ms " + e.easing,
                    transform: "horizontal" == e.direction ? "translate3d(" + t + "%, 0, 0)" : "translate3d(0, " + t + "%, 0)",
                    transition: "all " + e.animationTime + "ms " + e.easing
                });
                l(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (t) {
                    "function" == typeof e.afterMove && e.afterMove(i)
                })
            }, l.fn.moveDown = function () {
                var t = l(this);
                if (index = l(n.sectionContainer + ".active").data("index"), current = l(n.sectionContainer + "[data-index='" + index + "']"), next = l(n.sectionContainer + "[data-index='" + (index + 1) + "']"), next.length < 1) {
                    if (1 != n.loop) return;
                    pos = 0, next = l(n.sectionContainer + "[data-index='1']")
                } else pos = 100 * index * -1;
                if ("function" == typeof n.beforeMove && n.beforeMove(next.data("index")), current.removeClass("active"), next.addClass("active"), 1 == n.pagination && (l(".onepage-pagination li a[data-index='" + index + "']").removeClass("active"), l(".onepage-pagination li a[data-index='" + next.data("index") + "']").addClass("active")), l("body")[0].className = l("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, ""), l("body").addClass("viewing-page-" + next.data("index")), history.replaceState && 1 == n.updateURL) {
                    var e = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (index + 1);
                    history.pushState({}, document.title, e)
                }
                t.transformPage(n, pos, next.data("index"))
            }, l.fn.moveUp = function () {
                var t = l(this);
                if (index = l(n.sectionContainer + ".active").data("index"), current = l(n.sectionContainer + "[data-index='" + index + "']"), next = l(n.sectionContainer + "[data-index='" + (index - 1) + "']"), next.length < 1) {
                    if (1 != n.loop) return;
                    pos = 100 * (total - 1) * -1, next = l(n.sectionContainer + "[data-index='" + total + "']")
                } else pos = 100 * (next.data("index") - 1) * -1;
                if ("function" == typeof n.beforeMove && n.beforeMove(next.data("index")), current.removeClass("active"), next.addClass("active"), 1 == n.pagination && (l(".onepage-pagination li a[data-index='" + index + "']").removeClass("active"), l(".onepage-pagination li a[data-index='" + next.data("index") + "']").addClass("active")), l("body")[0].className = l("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, ""), l("body").addClass("viewing-page-" + next.data("index")), history.replaceState && 1 == n.updateURL) {
                    var e = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (index - 1);
                    history.pushState({}, document.title, e)
                }
                t.transformPage(n, pos, next.data("index"))
            }, l.fn.moveTo = function (t) {
                if (current = l(n.sectionContainer + ".active"), next = l(n.sectionContainer + "[data-index='" + t + "']"), 0 < next.length) {
                    if ("function" == typeof n.beforeMove && n.beforeMove(next.data("index")), current.removeClass("active"), next.addClass("active"), l(".onepage-pagination li a.active").removeClass("active"), l(".onepage-pagination li a[data-index='" + t + "']").addClass("active"), l("body")[0].className = l("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, ""), l("body").addClass("viewing-page-" + next.data("index")), pos = 100 * (t - 1) * -1, history.replaceState && 1 == n.updateURL) {
                        var e = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (t - 1);
                        history.pushState({}, document.title, e)
                    }
                    r.transformPage(n, pos, t)
                }
            }, r.addClass("onepage-wrapper").css("position", "relative"), l.each(e, function (t) {
                l(this).css({
                    position: "absolute",
                    top: topPos + "%"
                }).addClass("section").attr("data-index", t + 1), l(this).css({
                    position: "absolute",
                    left: "horizontal" == n.direction ? leftPos + "%" : 0,
                    top: "vertical" == n.direction || "horizontal" != n.direction ? topPos + "%" : 0
                }), "horizontal" == n.direction ? leftPos += 100 : topPos += 100, 1 == n.pagination && (paginationList += "<li><a data-index='" + (t + 1) + "' href='#" + (t + 1) + "'></a></li>")
            }), r.swipeEvents().bind("swipeDown", function (t) {
                l("body").hasClass("disabled-onepage-scroll") || t.preventDefault(), r.moveUp()
            }).bind("swipeUp", function (t) {
                l("body").hasClass("disabled-onepage-scroll") || t.preventDefault(), r.moveDown()
            }), 1 == n.pagination && (l("ul.onepage-pagination").length < 1 && l("<ul class='onepage-pagination'></ul>").prependTo("body"), "horizontal" == n.direction ? (posLeft = r.find(".onepage-pagination").width() / 2 * -1, r.find(".onepage-pagination").css("margin-left", posLeft)) : (posTop = r.find(".onepage-pagination").height() / 2 * -1, r.find(".onepage-pagination").css("margin-top", posTop)), l("ul.onepage-pagination").html(paginationList)), "" != window.location.hash && "#1" != window.location.hash)
            if (init_index = window.location.hash.replace("#", ""), parseInt(init_index) <= total && 0 < parseInt(init_index)) {
                if (l(n.sectionContainer + "[data-index='" + init_index + "']").addClass("active"), l("body").addClass("viewing-page-" + init_index), 1 == n.pagination && l(".onepage-pagination li a[data-index='" + init_index + "']").addClass("active"), next = l(n.sectionContainer + "[data-index='" + init_index + "']"), next && (next.addClass("active"), 1 == n.pagination && l(".onepage-pagination li a[data-index='" + init_index + "']").addClass("active"), l("body")[0].className = l("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, ""), l("body").addClass("viewing-page-" + next.data("index")), history.replaceState && 1 == n.updateURL)) {
                    var o = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + init_index;
                    history.pushState({}, document.title, o)
                }
                pos = 100 * (init_index - 1) * -1, r.transformPage(n, pos, init_index)
            } else l(n.sectionContainer + "[data-index='1']").addClass("active"), l("body").addClass("viewing-page-1"), 1 == n.pagination && l(".onepage-pagination li a[data-index='1']").addClass("active");
        else l(n.sectionContainer + "[data-index='1']").addClass("active"), l("body").addClass("viewing-page-1"), 1 == n.pagination && l(".onepage-pagination li a[data-index='1']").addClass("active");
        return 1 == n.pagination && l(".onepage-pagination li a").click(function () {
            var t = l(this).data("index");
            r.moveTo(t)
        }), l(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (t) {
            t.preventDefault();
            var e = t.originalEvent.wheelDelta || -t.originalEvent.detail;
            l("body").hasClass("disabled-onepage-scroll") || s(t, e)
        }), 0 != n.responsiveFallback && (l(window).resize(function () {
            i()
        }), i()), 1 == n.keyboard && l(document).keydown(function (t) {
            var e = t.target.tagName.toLowerCase();
            if (!l("body").hasClass("disabled-onepage-scroll")) switch (t.which) {
                case 38:
                    "input" != e && "textarea" != e && r.moveUp();
                    break;
                case 40:
                case 32:
                    "input" != e && "textarea" != e && r.moveDown();
                    break;
                case 33:
                    "input" != e && "textarea" != e && r.moveUp();
                    break;
                case 34:
                    "input" != e && "textarea" != e && r.moveDown();
                    break;
                case 36:
                    r.moveTo(1);
                    break;
                case 35:
                    r.moveTo(total);
                    break;
                default:
                    return
            }
        }), !1
    }
}(window.jQuery),
function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.sal = e() : t.sal = e()
}(this, function () {
    return function (i) {
        function n(t) {
            if (r[t]) return r[t].exports;
            var e = r[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return i[t].call(e.exports, e, e.exports, n), e.l = !0, e.exports
        }
        var r = {};
        return n.m = i, n.c = r, n.d = function (t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "dist/", n(n.s = 0)
    }([function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        };
        i(1);
        var r = {
                rootMargin: "0% 50%",
                threshold: .5,
                animateClassName: "sal-animate",
                disabledClassName: "sal-disabled",
                selector: "[data-sal]",
                once: !0,
                disabled: !1
            },
            s = [],
            o = null,
            a = function () {
                document.body.classList.add(r.disabledClassName)
            },
            l = function (t, e) {
                t.forEach(function (t) {
                    t.intersectionRatio >= r.threshold ? (t.target.classList.add(r.animateClassName), r.once && e.unobserve(t.target)) : r.once || t.target.classList.remove(r.animateClassName)
                })
            },
            u = function () {
                a(), o.disconnect(), o = null
            },
            h = function () {
                document.body.classList.remove(r.disabledClassName), o = new IntersectionObserver(l, {
                    rootMargin: r.rootMargin,
                    threshold: r.threshold
                }), (s = [].filter.call(document.querySelectorAll(r.selector), function (t) {
                    return e = t, r.animateClassName, !e.classList.contains(r.animateClassName);
                    var e
                })).forEach(function (t) {
                    return o.observe(t)
                })
            };
        e.default = function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r;
            if (t !== r && (r = n({}, r, t)), !window.IntersectionObserver) throw a(), Error("\n      Your browser does not support IntersectionObserver!\n      Get a polyfill from here:\n      https://github.com/w3c/IntersectionObserver/tree/master/polyfill\n    ");
            return r.disabled || "function" == typeof r.disabled && r.disabled() ? a() : h(), {
                elements: s,
                disable: u,
                enable: h
            }
        }
    }, function (t, e) {}]).default
}),
function (o) {
    var s = function () {
            for (var t = ["webkit", "moz", "ms"], e = document.createElement("div").style, i = ("transform" in e ? "transform" : void 0), n = 0, r = t.length; n < r; n++) {
                var s = t[n] + "Transform";
                if (s in e) {
                    i = s;
                    break
                }
            }
            return i
        }(),
        a = function (t, r) {
            if ("IMG" === ((t.item = this).element = t).tagName ? (this.fullWidth = t.width, this.fullHeight = t.height) : (t.style.display = "inline-block", this.fullWidth = t.offsetWidth, this.fullHeight = t.offsetHeight), t.style.position = "absolute", r.mirror && "IMG" === this.element.tagName) {
                this.reflection = o(t).reflect(r.mirror).next()[0];
                var e = o(this.reflection);
                this.reflection.fullHeight = e.height(), e.css("margin-top", r.mirror.gap + "px"), e.css("width", "100%"), t.style.width = "100%", this.element = this.element.parentNode, (this.element.item = this).element.alt = t.alt, this.element.title = t.title
            }
            s && r.transforms && (this.element.style[s + "Origin"] = "0 0"), this.moveTo = function (t, e, i) {
                this.width = this.fullWidth * i, this.height = this.fullHeight * i, this.x = t, this.y = e, this.scale = i;
                var n = this.element.style;
                n.zIndex = "" + 100 * i | 0, s && r.transforms ? n[s] = "translate(" + t + "px, " + e + "px) scale(" + i + ")" : (r.mirror && "IMG" === this.element.tagName && (this.reflection.style.marginTop = r.mirror.gap * i + "px"), n.width = this.width + "px", n.left = t + "px", n.top = e + "px")
            }
        },
        l = window.performance && window.performance.now ? function () {
            return performance.now()
        } : function () {
            return +new Date
        },
        u = window.cancelAnimationFrame || window.cancelRequestAnimationFrame,
        h = window.requestAnimationFrame;
    ! function () {
        for (var t = ["webkit", "moz", "ms"], e = 0, i = t.length; e < i && !u; e++) u = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"], h = h && window[t[e] + "RequestAnimationFrame"]
    }();
    var e = function (t, n) {
        var r = this,
            i = o(t);
        this.items = [], this.xOrigin = null === n.xOrigin ? .5 * i.width() : n.xOrigin, this.yOrigin = null === n.yOrigin ? .1 * i.height() : n.yOrigin, this.xRadius = null === n.xRadius ? i.width() / 2.3 : n.xRadius, this.yRadius = null === n.yRadius ? i.height() / 6 : n.yRadius, this.farScale = n.farScale, this.rotation = this.destRotation = Math.PI / 2, this.speed = n.speed, this.smooth = n.smooth, this.fps = n.fps, this.timer = 0, this.autoPlayAmount = n.autoPlay, this.autoPlayDelay = n.autoPlayDelay, this.autoPlayTimer = 0, this.frontItemClass = n.frontItemClass, this.onLoaded = n.onLoaded, this.onRendered = n.onRendered, this.onAnimationFinished = n.onAnimationFinished, this.itemOptions = {
            transforms: n.transforms
        }, n.mirror && (this.itemOptions.mirror = o.extend({
            gap: 2
        }, n.mirror)), i.css({
            position: "relative"
        }), this.renderItem = function (t, e) {
            var i = this.items[t],
                n = Math.sin(e),
                r = this.farScale,
                s = r + (1 - r) * (n + 1) * .5;
            return i.moveTo(this.xOrigin + s * (Math.cos(e) * this.xRadius - .5 * i.fullWidth), this.yOrigin + s * n * this.yRadius, s), i
        }, this.render = function () {
            for (var t = this.items.length, e = 2 * Math.PI / t, i = this.rotation, n = this.nearestIndex(), r = 0; r < t; r++) {
                var s = this.renderItem(r, i);
                r === n ? (screen.width <= 600 && o(s.element).css({
                    "-webkit-filter": "blur(0px)",
                    filter: "blur0px)",
                    opacity: 1
                }), o(s.element).addClass(this.frontItemClass)) : (screen.width <= 600 && o(s.element).css({
                    "-webkit-filter": "blur(2px)",
                    filter: "blur2px)",
                    opacity: .6
                }), o(s.element).removeClass(this.frontItemClass)), i += e
            }
            "function" == typeof this.onRendered && this.onRendered(this)
        }, this.playFrame = function () {
            var t = r.destRotation - r.rotation,
                e = l(),
                i = .002 * (e - r.lastTime);
            r.lastTime = e, Math.abs(t) < .003 ? (r.rotation = r.destRotation, r.pause(), "function" == typeof r.onAnimationFinished && r.onAnimationFinished()) : (r.rotation = r.destRotation - t / (1 + r.speed * i), r.scheduleNextFrame()), r.render()
        }, this.scheduleNextFrame = function () {
            this.lastTime = l(), this.timer = this.smooth && u ? h(r.playFrame) : setTimeout(r.playFrame, 1e3 / this.fps)
        }, this.itemsRotated = function () {
            return this.items.length * (Math.PI / 2 - this.rotation) / (2 * Math.PI)
        }, this.floatIndex = function () {
            var t = this.items.length,
                e = this.itemsRotated() % t;
            return e < 0 ? e + t : e
        }, this.nearestIndex = function () {
            return Math.round(this.floatIndex()) % this.items.length
        }, this.nearestItem = function () {
            return this.items[this.nearestIndex()]
        }, this.play = function () {
            0 === this.timer && this.scheduleNextFrame()
        }, this.pause = function () {
            this.smooth && u ? u(this.timer) : clearTimeout(this.timer), this.timer = 0
        }, this.go = function (t) {
            this.destRotation += 2 * Math.PI / this.items.length * t, this.play()
        }, this.goTo = function (t) {
            var e = this.items.length,
                i = t - this.floatIndex() % e;
            return 2 * Math.abs(i) > e && (i -= 0 < i ? e : -e), this.destRotation = this.rotation, this.go(-i), i
        }, this.deactivate = function () {
            this.pause(), clearInterval(this.autoPlayTimer), n.buttonLeft && n.buttonLeft.unbind("click"), n.buttonRight && n.buttonRight.unbind("click"), i.unbind(".cloud9")
        }, this.autoPlay = function () {
            this.autoPlayTimer = setInterval(function () {
                r.go(r.autoPlayAmount)
            }, this.autoPlayDelay)
        }, this.enableAutoPlay = function () {
            i.bind("mouseover.cloud9", function () {
                clearInterval(r.autoPlayTimer)
            }), i.bind("mouseout.cloud9", function () {
                r.autoPlay()
            }), this.autoPlay()
        }, this.bindControls = function () {
            n.buttonLeft && n.buttonLeft.bind("click", function () {
                return r.go(-1), !1
            }), n.buttonRight && n.buttonRight.bind("click", function () {
                return r.go(1), !1
            }), n.mouseWheel && i.bind("mousewheel.cloud9", function (t, e) {
                return r.go(0 < e ? 1 : -1), !1
            }), n.bringToFront && i.bind("click.cloud9", function (t) {
                var e = o(t.target).closest("." + n.itemClass);
                if (0 !== e.length) {
                    var i = r.goTo(r.items.indexOf(e[0].item));
                    .5 < Math.abs(i) && t.preventDefault()
                }
            })
        };
        var s = i.find("." + n.itemClass);
        this.finishInit = function () {
            for (var t = 0; t < s.length; t++) {
                var e = s[t];
                if ("IMG" === e.tagName && (void 0 === e.width || void 0 !== e.complete && !e.complete)) return
            }
            for (clearInterval(this.initTimer), t = 0; t < s.length; t++) this.items.push(new a(s[t], this.itemOptions));
            i.bind("mousedown onselectstart", function () {
                return !1
            }), 0 !== this.autoPlayAmount && this.enableAutoPlay(), this.bindControls(), this.render(), "function" == typeof this.onLoaded && this.onLoaded(this)
        }, this.initTimer = setInterval(function () {
            r.finishInit()
        }, 50)
    };
    o.fn.Cloud9Carousel = function (t) {
        return this.each(function () {
            t = o.extend({
                xOrigin: null,
                yOrigin: null,
                xRadius: null,
                yRadius: null,
                farScale: .5,
                transforms: !0,
                smooth: !0,
                fps: 30,
                speed: 4,
                autoPlay: 0,
                autoPlayDelay: 4e3,
                bringToFront: !1,
                itemClass: "cloud9-item",
                frontItemClass: null,
                handle: "carousel"
            }, t), o(this).data(t.handle, new e(this, t))
        })
    }
}(window.jQuery || window.Zepto);
var _slicedToArray = function (t, e) {
    if (Array.isArray(t)) return t;
    if (Symbol.iterator in Object(t)) return function (t, e) {
        var i = [],
            n = !0,
            r = !1,
            s = void 0;
        try {
            for (var o, a = t[Symbol.iterator](); !(n = (o = a.next()).done) && (i.push(o.value), !e || i.length !== e); n = !0);
        } catch (t) {
            r = !0, s = t
        } finally {
            try {
                !n && a.return && a.return()
            } finally {
                if (r) throw s
            }
        }
        return i
    }(t, e);
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
};

function timeline(t, m) {
    var g = [],
        v = "Timeline:",
        e = window.innerWidth,
        i = void 0,
        u = 0,
        _ = {
            forceVerticalMode: {
                type: "integer",
                defaultValue: 600
            },
            horizontalStartPosition: {
                type: "string",
                acceptedValues: ["bottom", "top"],
                defaultValue: "top"
            },
            mode: {
                type: "string",
                acceptedValues: ["horizontal", "vertical"],
                defaultValue: "vertical"
            },
            moveItems: {
                type: "integer",
                defaultValue: 1
            },
            startIndex: {
                type: "integer",
                defaultValue: 0
            },
            verticalStartPosition: {
                type: "string",
                acceptedValues: ["left", "right"],
                defaultValue: "left"
            },
            verticalTrigger: {
                type: "string",
                defaultValue: "15%"
            },
            visibleItems: {
                type: "integer",
                defaultValue: 3
            }
        };

    function h(t, e, i) {
        e.classList.add(i), t.parentNode.insertBefore(e, t), e.appendChild(t)
    }

    function c(t, e) {
        var i = t.getBoundingClientRect(),
            n = window.innerHeight || document.documentElement.clientHeight,
            r = _.verticalTrigger.defaultValue.match(/(\d*\.?\d*)(.*)/),
            s = e.unit,
            o = e.value,
            a = n;
        if ("px" === s && n <= o) {
            console.warn('The value entered for the setting "verticalTrigger" is larger than the window height. The default value will be used instead.');
            var l = _slicedToArray(r, 3);
            o = l[1], s = l[2]
        }
        return "px" === s ? a = parseInt(a - o, 10) : "%" === s && (a = parseInt(a * ((100 - o) / 100), 10)), i.top <= a && i.left <= (window.innerWidth || document.documentElement.clientWidth) && 0 <= i.top + i.height && 0 <= i.left + i.width
    }

    function d(t, e) {
        t.style.webkitTransform = e, t.style.msTransform = e, t.style.transform = e
    }

    function f(t) {
        var e = "translate3d(-" + t.items[u].offsetLeft + "px, 0, 0)";
        d(t.scroller, e)
    }

    function n() {
        g.forEach(function (t) {
            var e, s, i, n, r, o, a, l;
            t.timelineEl.style.opacity = 0, t.timelineEl.classList.contains("timeline--loaded") || t.items.forEach(function (t) {
                    h(t.querySelector(".timeline__content"), document.createElement("div"), "timeline__content__wrap"), h(t.querySelector(".timeline__content__wrap"), document.createElement("div"), "timeline__item__inner")
                }),
                function (t) {
                    t.timelineEl.classList.remove("timeline--horizontal", "timeline--mobile"), t.scroller.removeAttribute("style"), t.items.forEach(function (t) {
                        t.removeAttribute("style"), t.classList.remove("animated", "fadeIn", "timeline__item--left", "timeline__item--right")
                    });
                    var e = t.timelineEl.querySelectorAll(".timeline-nav-button");
                    [].forEach.call(e, function (t) {
                        t.parentNode.removeChild(t)
                    })
                }(t), window.innerWidth <= t.settings.forceVerticalMode && t.timelineEl.classList.add("timeline--mobile"), "horizontal" === t.settings.mode && window.innerWidth > t.settings.forceVerticalMode ? (u = (e = t).settings.startIndex, e.timelineEl.classList.add("timeline--horizontal"), s = e, window.innerWidth > s.settings.forceVerticalMode && (s.itemWidth = s.wrap.offsetWidth / s.settings.visibleItems, s.items.forEach(function (t) {
                    t.style.width = s.itemWidth + "px"
                }), s.scrollerWidth = s.itemWidth * s.items.length, s.scroller.style.width = s.scrollerWidth + "px", function () {
                    var n = 0,
                        r = 0;
                    if (screen.width <= 600) {
                        s.items.forEach(function (t, e) {
                            t.style.height = "auto";
                            var i = t.offsetHeight;
                            e % 2 == 0 ? r = r < i ? i : r : n = n < i ? i : n
                        });
                        var i = "translateY(0px)";
                        s.items.forEach(function (t, e) {
                            e % 2 == 0 ? (t.style.height = r + "px", "bottom" === s.settings.horizontalStartPosition ? (t.classList.add("timeline__item--top"), d(t, i)) : t.classList.add("timeline__item--top")) : (t.style.height = r + "px", "bottom" !== s.settings.horizontalStartPosition ? (t.classList.add("timeline__item--top"), d(t, i)) : t.classList.add("timeline__item--top"))
                        }), s.scroller.style.height = r + n + "px"
                    } else s.items.forEach(function (t, e) {
                        t.style.height = "auto";
                        var i = t.offsetHeight;
                        e % 2 == 0 ? r = r < i ? i : r : n = n < i ? i : n
                    }), i = "translateY(" + r + "px)", s.items.forEach(function (t, e) {
                        e % 2 == 0 ? (t.style.height = r + "px", "bottom" === s.settings.horizontalStartPosition ? (t.classList.add("timeline__item--bottom"), d(t, i)) : t.classList.add("timeline__item--top")) : (t.style.height = n + "px", "bottom" !== s.settings.horizontalStartPosition ? (t.classList.add("timeline__item--bottom"), d(t, i)) : t.classList.add("timeline__item--top"))
                    }), s.scroller.style.height = r + n + "px"
                }()), f(e), function (t) {
                    if (t.items.length > t.settings.visibleItems) {
                        var e = document.createElement("button"),
                            i = document.createElement("button"),
                            n = t.items[0].offsetHeight;
                        e.className = "timeline-nav-button timeline-nav-button--prev", i.className = "timeline-nav-button timeline-nav-button--next", e.textContent = "Previous", i.textContent = "Next", e.style.top = n + "px", i.style.top = n + "px", 0 === u ? e.disabled = !0 : u === t.items.length - t.settings.visibleItems && (i.disabled = !0), t.timelineEl.appendChild(e), t.timelineEl.appendChild(i)
                    }
                }(e), function (t) {
                    var e = t.timelineEl.querySelector(".timeline-divider");
                    e && t.timelineEl.removeChild(e);
                    var i = t.items[0].offsetHeight,
                        n = document.createElement("span");
                    n.className = "timeline-divider", n.style.top = i + "px", t.timelineEl.appendChild(n)
                }(e), n = (i = e).timelineEl.querySelectorAll(".timeline-nav-button"), r = i.timelineEl.querySelector(".timeline-nav-button--prev"), o = i.timelineEl.querySelector(".timeline-nav-button--next"), a = i.items.length - i.settings.visibleItems, l = parseInt(i.settings.moveItems, 10), [].forEach.call(n, function (t) {
                    t.addEventListener("click", function (t) {
                        t.preventDefault(), 0 === (u = this.classList.contains("timeline-nav-button--next") ? u += l : u -= l) || u < 0 ? (u = 0, r.disabled = !0, o.disabled = !1) : o.disabled = u === a || a < u ? (u = a, !(r.disabled = !1)) : r.disabled = !1, f(i)
                    })
                })) : function (i) {
                    var n = 0;
                    i.items.forEach(function (t, e) {
                        t.classList.remove("animated", "fadeIn"), !c(t, i.settings.verticalTrigger) && 0 < e ? t.classList.add("animated") : n = e, e % 2 == ("left" === i.settings.verticalStartPosition ? 1 : 0) && window.innerWidth > i.settings.forceVerticalMode ? t.classList.add("timeline__item--right") : t.classList.add("timeline__item--left")
                    });
                    for (var t = 0; t < n; t += 1) i.items[t].classList.remove("animated", "fadeIn");
                    window.addEventListener("scroll", function () {
                        i.items.forEach(function (t) {
                            c(t, i.settings.verticalTrigger) && t.classList.add("fadeIn")
                        })
                    })
                }(t), t.timelineEl.classList.add("timeline--loaded"), setTimeout(function () {
                    t.timelineEl.style.opacity = 1
                }, 500)
        })
    }
    t.length && [].forEach.call(t, function (t) {
        var e = t.id ? "#" + t.id : "." + t.className,
            i = "could not be found as a direct descendant of",
            n = t.dataset,
            r = void 0,
            s = void 0,
            o = void 0,
            a = {};
        try {
            if (!(r = t.querySelector(".timeline__wrap"))) throw new Error(v + " .timeline__wrap " + i + " " + e);
            if (!(s = r.querySelector(".timeline__items"))) throw new Error(v + " .timeline__items " + i + " .timeline__wrap");
            o = [].slice.call(s.children, 0)
        } catch (t) {
            return console.warn(t.message), !1
        }
        Object.keys(_).forEach(function (t) {
            var e, i;
            a[t] = _[t].defaultValue, n[t] ? a[t] = n[t] : m && m[t] && (a[t] = m[t]), "integer" === _[t].type ? a[t] && ("number" == typeof (e = a[i = t]) || e % 1 == 0 || (console.warn(v + ' The value "' + e + '" entered for the setting "' + i + '" is not an integer.'), 0)) || (a[t] = _[t].defaultValue) : "string" === _[t].type && _[t].acceptedValues && -1 === _[t].acceptedValues.indexOf(a[t]) && (console.warn(v + ' The value "' + a[t] + '" entered for the setting "' + t + '" was not recognised.'), a[t] = _[t].defaultValue)
        });
        var l = _.verticalTrigger.defaultValue.match(/(\d*\.?\d*)(.*)/),
            u = a.verticalTrigger.match(/(\d*\.?\d*)(.*)/),
            h = _slicedToArray(u, 3),
            c = h[1],
            d = h[2],
            f = !0;
        if (c || (console.warn(v + " No numercial value entered for the 'verticalTrigger' setting."), f = !1), "px" !== d && "%" !== d && (console.warn(v + " The setting 'verticalTrigger' must be a percentage or pixel value."), f = !1), "%" === d && (100 < c || c < 0) ? (console.warn(v + " The 'verticalTrigger' setting value must be between 0 and 100 if using a percentage value."), f = !1) : "px" === d && c < 0 && (console.warn(v + " The 'verticalTrigger' setting value must be above 0 if using a pixel value."), f = !1), !1 === f) {
            var p = _slicedToArray(l, 3);
            c = p[1], d = p[2]
        }
        a.verticalTrigger = {
            unit: d,
            value: c
        }, a.moveItems > a.visibleItems && (console.warn(v + ' The value of "moveItems" (' + a.moveItems + ') is larger than the number of "visibleItems" (' + a.visibleItems + '). The value of "visibleItems" has been used instead.'), a.moveItems = a.visibleItems), a.startIndex >= o.length - a.visibleItems ? (console.warn(v + " The 'startIndex' setting must be between 0 and " + (o.length - a.visibleItems) + " for this timeline. The value of " + (o.length - a.visibleItems) + " has been used instead."), a.startIndex = o.length - a.visibleItems) : a.startIndex < 0 && (console.warn(v + " The 'startIndex' setting must be between 0 and " + (o.length - a.visibleItems) + " for this timeline. The value of 0 has been used instead."), a.startIndex = 0), g.push({
            timelineEl: t,
            wrap: r,
            scroller: s,
            items: o,
            settings: a
        })
    }), n(), window.addEventListener("resize", function () {
        clearTimeout(i), i = setTimeout(function () {
            var t = window.innerWidth;
            t !== e && (n(), e = t)
        }, 250)
    })
}
window.jQuery && (window.jQuery.fn.timeline = function (t) {
        return timeline(this, t), this
    }),
    function (i) {
        "function" == typeof define && define.amd ? define(["jquery"], i) : "object" == typeof module && module.exports ? module.exports = function (t, e) {
            return void 0 === e && (e = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), i(e), e
        } : i(jQuery)
    }(function (u) {
        function h(t) {
            return 9 === t ? -1 !== navigator.appVersion.indexOf("MSIE 9.") : (userAgent = navigator.userAgent, -1 < userAgent.indexOf("MSIE ") || -1 < userAgent.indexOf("Trident/"))
        }

        function c(t) {
            return parseInt(String(t).split(/%|px|em|cm|vh|vw/)[0])
        }
        var d = u(window),
            s = u(document),
            f = "iziModal",
            r = "closing",
            o = "closed",
            p = "opening",
            m = "opened",
            e = "destroyed",
            a = function () {
                var t, e = document.createElement("fakeelement"),
                    i = {
                        animation: "animationend",
                        OAnimation: "oAnimationEnd",
                        MozAnimation: "animationend",
                        WebkitAnimation: "webkitAnimationEnd"
                    };
                for (t in i)
                    if (void 0 !== e.style[t]) return i[t]
            }(),
            l = !!/Mobi/.test(navigator.userAgent);
        window.$iziModal = {}, window.$iziModal.autoOpen = 0, window.$iziModal.history = !1;
        var g = function (t, e) {
            this.init(t, e)
        };
        return g.prototype = {
            constructor: g,
            init: function (t, n) {
                var r = this;
                this.$element = u(t), void 0 !== this.$element[0].id && "" !== this.$element[0].id ? this.id = this.$element[0].id : (this.id = f + Math.floor(1e7 * Math.random() + 1), this.$element.attr("id", this.id)), this.classes = void 0 !== this.$element.attr("class") ? this.$element.attr("class") : "", this.content = this.$element.html(), this.state = o, this.options = n, this.width = 0, this.timer = null, this.timerTimeout = null, this.progressBar = null, this.isPaused = !1, this.isFullscreen = !1, this.headerHeight = 0, this.modalHeight = 0, this.$overlay = u('<div class="' + f + '-overlay" style="background-color:' + n.overlayColor + '"></div>'), this.$navigate = u('<div class="' + f + '-navigate"><div class="' + f + '-navigate-caption">Use</div><button class="' + f + '-navigate-prev"></button><button class="' + f + '-navigate-next"></button></div>'), this.group = {
                    name: this.$element.attr("data-" + f + "-group"),
                    index: null,
                    ids: []
                }, this.$element.attr("aria-hidden", "true"), this.$element.attr("aria-labelledby", this.id), this.$element.attr("role", "dialog"), this.$element.hasClass("iziModal") || this.$element.addClass("iziModal"), void 0 === this.group.name && "" !== n.group && (this.group.name = n.group, this.$element.attr("data-" + f + "-group", n.group)), !0 === this.options.loop && this.$element.attr("data-" + f + "-loop", !0), u.each(this.options, function (t, e) {
                    var i = r.$element.attr("data-" + f + "-" + t);
                    try {
                        void 0 !== i && (n[t] = "" === i || "true" == i || "false" != i && ("function" == typeof e ? new Function(i) : i))
                    } catch (t) {}
                }), !1 !== n.appendTo && this.$element.appendTo(n.appendTo), !0 === n.iframe ? (this.$element.html('<div class="' + f + '-wrap"><div class="' + f + '-content"><iframe class="' + f + '-iframe"></iframe>' + this.content + "</div></div>"), null !== n.iframeHeight && this.$element.find("." + f + "-iframe").css("height", n.iframeHeight)) : this.$element.html('<div class="' + f + '-wrap"><div class="' + f + '-content">' + this.content + "</div></div>"), null !== this.options.background && this.$element.css("background", this.options.background), this.$wrap = this.$element.find("." + f + "-wrap"), null === n.zindex || isNaN(parseInt(n.zindex)) || (this.$element.css("z-index", n.zindex), this.$navigate.css("z-index", n.zindex - 100), this.$overlay.css("z-index", n.zindex - 200)), "" !== n.radius && this.$element.css("border-radius", n.radius), "" !== n.padding && this.$element.find("." + f + "-content").css("padding", n.padding), "" !== n.theme && ("light" === n.theme ? this.$element.addClass(f + "-light") : this.$element.addClass(n.theme)), !0 === n.rtl && this.$element.addClass(f + "-rtl"), !0 === n.openFullscreen && (this.isFullscreen = !0, this.$element.addClass("isFullscreen")), this.createHeader(), this.recalcWidth(), this.recalcVerticalPos(), !r.options.afterRender || "function" != typeof r.options.afterRender && "object" != typeof r.options.afterRender || r.options.afterRender(r)
            },
            createHeader: function () {
                this.$header = u('<div class="' + f + '-header"><h2 class="' + f + '-header-title">' + this.options.title + '</h2><p class="' + f + '-header-subtitle">' + this.options.subtitle + '</p><div class="' + f + '-header-buttons"></div></div>'), !0 === this.options.closeButton && this.$header.find("." + f + "-header-buttons").append('<a href="javascript:void(0)" class="' + f + "-button " + f + '-button-close" data-' + f + "-close></a>"), !0 === this.options.fullscreen && this.$header.find("." + f + "-header-buttons").append('<a href="javascript:void(0)" class="' + f + "-button " + f + '-button-fullscreen" data-' + f + "-fullscreen></a>"), !0 === this.options.timeoutProgressbar && this.$header.prepend('<div class="' + f + '-progressbar"><div style="background-color:' + this.options.timeoutProgressbarColor + '"></div></div>'), "" === this.options.subtitle && this.$header.addClass(f + "-noSubtitle"), "" !== this.options.title && (null !== this.options.headerColor && (!0 === this.options.borderBottom && this.$element.css("border-bottom", "3px solid " + this.options.headerColor), this.$header.css("background", this.options.headerColor)), null === this.options.icon && null === this.options.iconText || (this.$header.prepend('<i class="' + f + '-header-icon"></i>'), null !== this.options.icon && this.$header.find("." + f + "-header-icon").addClass(this.options.icon).css("color", this.options.iconColor), null !== this.options.iconText && this.$header.find("." + f + "-header-icon").html(this.options.iconText)), this.$element.css("overflow", "hidden").prepend(this.$header))
            },
            setGroup: function (t) {
                var i = this,
                    e = this.group.name || t;
                if (this.group.ids = [], void 0 !== t && t !== this.group.name && (e = t, this.group.name = e, this.$element.attr("data-" + f + "-group", e)), void 0 !== e && "" !== e) {
                    var n = 0;
                    u.each(u("." + f + "[data-" + f + "-group=" + e + "]"), function (t, e) {
                        i.group.ids.push(u(this)[0].id), i.id == u(this)[0].id && (i.group.index = n), n++
                    })
                }
            },
            toggle: function () {
                this.state == m && this.close(), this.state == o && this.open()
            },
            startProgress: function (t) {
                var e = this;
                this.isPaused = !1, clearTimeout(this.timerTimeout), !0 === this.options.timeoutProgressbar ? (this.progressBar = {
                    hideEta: null,
                    maxHideTime: null,
                    currentTime: (new Date).getTime(),
                    el: this.$element.find("." + f + "-progressbar > div"),
                    updateProgress: function () {
                        if (!e.isPaused) {
                            e.progressBar.currentTime = e.progressBar.currentTime + 10;
                            var t = (e.progressBar.hideEta - e.progressBar.currentTime) / e.progressBar.maxHideTime * 100;
                            e.progressBar.el.width(t + "%"), t < 0 && e.close()
                        }
                    }
                }, 0 < t && (this.progressBar.maxHideTime = parseFloat(t), this.progressBar.hideEta = (new Date).getTime() + this.progressBar.maxHideTime, this.timerTimeout = setInterval(this.progressBar.updateProgress, 10))) : this.timerTimeout = setTimeout(function () {
                    e.close()
                }, e.options.timeout)
            },
            pauseProgress: function () {
                this.isPaused = !0
            },
            resumeProgress: function () {
                this.isPaused = !1
            },
            resetProgress: function (t) {
                clearTimeout(this.timerTimeout), this.progressBar = {}, this.$element.find("." + f + "-progressbar > div").width("100%")
            },
            open: function (i) {
                function n() {
                    r.state = m, r.$element.trigger(m), !r.options.onOpened || "function" != typeof r.options.onOpened && "object" != typeof r.options.onOpened || r.options.onOpened(r)
                }
                var r = this;
                try {
                    void 0 !== i && !1 === i.preventClose && u.each(u("." + f), function (t, e) {
                        if (void 0 !== u(e).data().iziModal) {
                            var i = u(e).iziModal("getState");
                            "opened" != i && "opening" != i || u(e).iziModal("close")
                        }
                    })
                } catch (t) {}
                if (function () {
                        if (r.options.history) {
                            var t = document.title;
                            document.title = t + " - " + r.options.title, e = "#" + r.id, i = e.replace(/^.*#/, ""), (n = u(e)).attr("id", i + "-tmp"), window.location.hash = e, n.attr("id", i), document.title = t, window.$iziModal.history = !0
                        } else window.$iziModal.history = !1;
                        var e, i, n
                    }(), this.state == o) {
                    if (r.$element.off("click", "[data-" + f + "-close]").on("click", "[data-" + f + "-close]", function (t) {
                            t.preventDefault();
                            var e = u(t.currentTarget).attr("data-" + f + "-transitionOut");
                            void 0 !== e ? r.close({
                                transition: e
                            }) : r.close()
                        }), r.$element.off("click", "[data-" + f + "-fullscreen]").on("click", "[data-" + f + "-fullscreen]", function (t) {
                            t.preventDefault(), !0 === r.isFullscreen ? (r.isFullscreen = !1, r.$element.removeClass("isFullscreen")) : (r.isFullscreen = !0, r.$element.addClass("isFullscreen")), r.options.onFullscreen && "function" == typeof r.options.onFullscreen && r.options.onFullscreen(r), r.$element.trigger("fullscreen", r)
                        }), r.$navigate.off("click", "." + f + "-navigate-next").on("click", "." + f + "-navigate-next", function (t) {
                            r.next(t)
                        }), r.$element.off("click", "[data-" + f + "-next]").on("click", "[data-" + f + "-next]", function (t) {
                            r.next(t)
                        }), r.$navigate.off("click", "." + f + "-navigate-prev").on("click", "." + f + "-navigate-prev", function (t) {
                            r.prev(t)
                        }), r.$element.off("click", "[data-" + f + "-prev]").on("click", "[data-" + f + "-prev]", function (t) {
                            r.prev(t)
                        }), this.setGroup(), this.state = p, this.$element.trigger(p), this.$element.attr("aria-hidden", "false"), !0 === this.options.timeoutProgressbar && this.$element.find("." + f + "-progressbar > div").width("100%"), !0 === this.options.iframe) {
                        this.$element.find("." + f + "-content").addClass(f + "-content-loader"), this.$element.find("." + f + "-iframe").on("load", function () {
                            u(this).parent().removeClass(f + "-content-loader")
                        });
                        var t = null;
                        try {
                            t = "" !== u(i.currentTarget).attr("href") ? u(i.currentTarget).attr("href") : null
                        } catch (t) {}
                        if (null === this.options.iframeURL || null != t || (t = this.options.iframeURL), null == t) throw new Error("Failed to find iframe URL");
                        this.$element.find("." + f + "-iframe").attr("src", t)
                    }(this.options.bodyOverflow || l) && (u("html").addClass(f + "-isOverflow"), l && u("body").css("overflow", "hidden")), this.options.onOpening && "function" == typeof this.options.onOpening && this.options.onOpening(this),
                        function () {
                            if (1 < r.group.ids.length) {
                                r.$navigate.appendTo("body"), r.$navigate.addClass("fadeIn"), !0 === r.options.navigateCaption && r.$navigate.find("." + f + "-navigate-caption").show();
                                var t = r.$element.outerWidth();
                                !1 !== r.options.navigateArrows ? "closeScreenEdge" === r.options.navigateArrows ? (r.$navigate.find("." + f + "-navigate-prev").css("left", 0).show(), r.$navigate.find("." + f + "-navigate-next").css("right", 0).show()) : (r.$navigate.find("." + f + "-navigate-prev").css("margin-left", -(t / 2 + 84)).show(), r.$navigate.find("." + f + "-navigate-next").css("margin-right", -(t / 2 + 84)).show()) : (r.$navigate.find("." + f + "-navigate-prev").hide(), r.$navigate.find("." + f + "-navigate-next").hide()), 0 === r.group.index && (0 === u("." + f + "[data-" + f + '-group="' + r.group.name + '"][data-' + f + "-loop]").length && !1 === r.options.loop && r.$navigate.find("." + f + "-navigate-prev").hide()), r.group.index + 1 === r.group.ids.length && (0 === u("." + f + "[data-" + f + '-group="' + r.group.name + '"][data-' + f + "-loop]").length && !1 === r.options.loop && r.$navigate.find("." + f + "-navigate-next").hide())
                            }!0 === r.options.overlay && (!1 === r.options.appendToOverlay ? r.$overlay.appendTo("body") : r.$overlay.appendTo(r.options.appendToOverlay)), r.options.transitionInOverlay && r.$overlay.addClass(r.options.transitionInOverlay);
                            var e = r.options.transitionIn;
                            "object" == typeof i && (void 0 === i.transition && void 0 === i.transitionIn || (e = i.transition || i.transitionIn), void 0 !== i.zindex && r.setZindex(i.zindex)), "" !== e && void 0 !== a ? (r.$element.addClass("transitionIn " + e).show(), r.$wrap.one(a, function () {
                                r.$element.removeClass(e + " transitionIn"), r.$overlay.removeClass(r.options.transitionInOverlay), r.$navigate.removeClass("fadeIn"), n()
                            })) : (r.$element.show(), n()), !0 !== r.options.pauseOnHover || !0 !== r.options.pauseOnHover || !1 === r.options.timeout || isNaN(parseInt(r.options.timeout)) || !1 === r.options.timeout || 0 === r.options.timeout || (r.$element.off("mouseenter").on("mouseenter", function (t) {
                                t.preventDefault(), r.isPaused = !0
                            }), r.$element.off("mouseleave").on("mouseleave", function (t) {
                                t.preventDefault(), r.isPaused = !1
                            }))
                        }(), !1 === this.options.timeout || isNaN(parseInt(this.options.timeout)) || !1 === this.options.timeout || 0 === this.options.timeout || r.startProgress(this.options.timeout), this.options.overlayClose && !this.$element.hasClass(this.options.transitionOut) && this.$overlay.click(function () {
                            r.close()
                        }), this.options.focusInput && this.$element.find(":input:not(button):enabled:visible:first").focus(),
                        function t() {
                            r.recalcLayout(), r.timer = setTimeout(t, 300)
                        }(), s.on("keydown." + f, function (t) {
                            r.options.closeOnEscape && 27 === t.keyCode && r.close()
                        })
                }
            },
            close: function (t) {
                function e() {
                    i.state = o, i.$element.trigger(o), !0 === i.options.iframe && i.$element.find("." + f + "-iframe").attr("src", ""), (i.options.bodyOverflow || l) && (u("html").removeClass(f + "-isOverflow"), l && u("body").css("overflow", "hidden")), i.options.onClosed && "function" == typeof i.options.onClosed && i.options.onClosed(i), !0 === i.options.restoreDefaultContent && i.$element.find("." + f + "-content").html(i.content), 0 === u("." + f + ":visible").length && u("html").removeClass(f + "-isAttached")
                }
                var i = this;
                if (this.state == m || this.state == p) {
                    s.off("keydown." + f), this.state = r, this.$element.trigger(r), this.$element.attr("aria-hidden", "true"), clearTimeout(this.timer), clearTimeout(this.timerTimeout), i.options.onClosing && "function" == typeof i.options.onClosing && i.options.onClosing(this);
                    var n = this.options.transitionOut;
                    "object" == typeof t && (void 0 === t.transition && void 0 === t.transitionOut || (n = t.transition || t.transitionOut)), !1 === n || "" === n || void 0 === a ? (this.$element.hide(), this.$overlay.remove(), this.$navigate.remove(), e()) : (this.$element.attr("class", [this.classes, f, n, "light" == this.options.theme ? f + "-light" : this.options.theme, !0 === this.isFullscreen ? "isFullscreen" : "", this.options.rtl ? f + "-rtl" : ""].join(" ")), this.$overlay.attr("class", f + "-overlay " + this.options.transitionOutOverlay), !1 === i.options.navigateArrows || l || this.$navigate.attr("class", f + "-navigate fadeOut"), this.$element.one(a, function () {
                        i.$element.hasClass(n) && i.$element.removeClass(n + " transitionOut").hide(), i.$overlay.removeClass(i.options.transitionOutOverlay).remove(), i.$navigate.removeClass("fadeOut").remove(), e()
                    }))
                }
            },
            next: function (t) {
                var n = this,
                    r = "fadeInRight",
                    e = "fadeOutLeft",
                    i = u("." + f + ":visible"),
                    s = {};
                s.out = this, void 0 !== t && "object" != typeof t ? (t.preventDefault(), i = u(t.currentTarget), r = i.attr("data-" + f + "-transitionIn"), e = i.attr("data-" + f + "-transitionOut")) : void 0 !== t && (void 0 !== t.transitionIn && (r = t.transitionIn), void 0 !== t.transitionOut && (e = t.transitionOut)), this.close({
                    transition: e
                }), setTimeout(function () {
                    for (var t = u("." + f + "[data-" + f + '-group="' + n.group.name + '"][data-' + f + "-loop]").length, e = n.group.index + 1; e <= n.group.ids.length; e++) {
                        try {
                            s.in = u("#" + n.group.ids[e]).data().iziModal
                        } catch (t) {}
                        if (void 0 !== s.in) {
                            u("#" + n.group.ids[e]).iziModal("open", {
                                transition: r
                            });
                            break
                        }
                        if (e == n.group.ids.length && 0 < t || !0 === n.options.loop)
                            for (var i = 0; i <= n.group.ids.length; i++)
                                if (s.in = u("#" + n.group.ids[i]).data().iziModal, void 0 !== s.in) {
                                    u("#" + n.group.ids[i]).iziModal("open", {
                                        transition: r
                                    });
                                    break
                                }
                    }
                }, 200), u(document).trigger(f + "-group-change", s)
            },
            prev: function (t) {
                var n = this,
                    r = "fadeInLeft",
                    e = "fadeOutRight",
                    i = u("." + f + ":visible"),
                    s = {};
                s.out = this, void 0 !== t && "object" != typeof t ? (t.preventDefault(), i = u(t.currentTarget), r = i.attr("data-" + f + "-transitionIn"), e = i.attr("data-" + f + "-transitionOut")) : void 0 !== t && (void 0 !== t.transitionIn && (r = t.transitionIn), void 0 !== t.transitionOut && (e = t.transitionOut)), this.close({
                    transition: e
                }), setTimeout(function () {
                    for (var t = u("." + f + "[data-" + f + '-group="' + n.group.name + '"][data-' + f + "-loop]").length, e = n.group.index; 0 <= e; e--) {
                        try {
                            s.in = u("#" + n.group.ids[e - 1]).data().iziModal
                        } catch (t) {}
                        if (void 0 !== s.in) {
                            u("#" + n.group.ids[e - 1]).iziModal("open", {
                                transition: r
                            });
                            break
                        }
                        if (0 === e && 0 < t || !0 === n.options.loop)
                            for (var i = n.group.ids.length - 1; 0 <= i; i--)
                                if (s.in = u("#" + n.group.ids[i]).data().iziModal, void 0 !== s.in) {
                                    u("#" + n.group.ids[i]).iziModal("open", {
                                        transition: r
                                    });
                                    break
                                }
                    }
                }, 200), u(document).trigger(f + "-group-change", s)
            },
            destroy: function () {
                var t = u.Event("destroy");
                this.$element.trigger(t), s.off("keydown." + f), clearTimeout(this.timer), clearTimeout(this.timerTimeout), !0 === this.options.iframe && this.$element.find("." + f + "-iframe").remove(), this.$element.html(this.$element.find("." + f + "-content").html()), this.$element.off("click", "[data-" + f + "-close]"), this.$element.off("click", "[data-" + f + "-fullscreen]"), this.$element.off("." + f).removeData(f).attr("style", ""), this.$overlay.remove(), this.$navigate.remove(), this.$element.trigger(e), this.$element = null
            },
            getState: function () {
                return this.state
            },
            getGroup: function () {
                return this.group
            },
            setWidth: function (t) {
                this.options.width = t, this.recalcWidth();
                var e = this.$element.outerWidth();
                !0 !== this.options.navigateArrows && "closeToModal" != this.options.navigateArrows || (this.$navigate.find("." + f + "-navigate-prev").css("margin-left", -(e / 2 + 84)).show(), this.$navigate.find("." + f + "-navigate-next").css("margin-right", -(e / 2 + 84)).show())
            },
            setTop: function (t) {
                this.options.top = t, this.recalcVerticalPos(!1)
            },
            setBottom: function (t) {
                this.options.bottom = t, this.recalcVerticalPos(!1)
            },
            setHeader: function (t) {
                t ? this.$element.find("." + f + "-header").show() : (this.headerHeight = 0, this.$element.find("." + f + "-header").hide())
            },
            setTitle: function (t) {
                this.options.title = t, 0 === this.headerHeight && this.createHeader(), 0 === this.$header.find("." + f + "-header-title").length && this.$header.append('<h2 class="' + f + '-header-title"></h2>'), this.$header.find("." + f + "-header-title").html(t)
            },
            setSubtitle: function (t) {
                "" === t ? (this.$header.find("." + f + "-header-subtitle").remove(), this.$header.addClass(f + "-noSubtitle")) : (0 === this.$header.find("." + f + "-header-subtitle").length && this.$header.append('<p class="' + f + '-header-subtitle"></p>'), this.$header.removeClass(f + "-noSubtitle")), this.$header.find("." + f + "-header-subtitle").html(t), this.options.subtitle = t
            },
            setIcon: function (t) {
                0 === this.$header.find("." + f + "-header-icon").length && this.$header.prepend('<i class="' + f + '-header-icon"></i>'), this.$header.find("." + f + "-header-icon").attr("class", f + "-header-icon " + t), this.options.icon = t
            },
            setIconText: function (t) {
                this.$header.find("." + f + "-header-icon").html(t), this.options.iconText = t
            },
            setHeaderColor: function (t) {
                !0 === this.options.borderBottom && this.$element.css("border-bottom", "3px solid " + t), this.$header.css("background", t), this.options.headerColor = t
            },
            setBackground: function (t) {
                !1 === t ? (this.options.background = null, this.$element.css("background", "")) : (this.$element.css("background", t), this.options.background = t)
            },
            setZindex: function (t) {
                isNaN(parseInt(this.options.zindex)) || (this.options.zindex = t, this.$element.css("z-index", t), this.$navigate.css("z-index", t - 1), this.$overlay.css("z-index", t - 2))
            },
            setFullscreen: function (t) {
                t ? (this.isFullscreen = !0, this.$element.addClass("isFullscreen")) : (this.isFullscreen = !1, this.$element.removeClass("isFullscreen"))
            },
            setContent: function (t) {
                "object" == typeof t && (!0 === (t.default || !1) && (this.content = t.content), t = t.content);
                !1 === this.options.iframe && this.$element.find("." + f + "-content").html(t)
            },
            setTransitionIn: function (t) {
                this.options.transitionIn = t
            },
            setTransitionOut: function (t) {
                this.options.transitionOut = t
            },
            setTimeout: function (t) {
                this.options.timeout = t
            },
            resetContent: function () {
                this.$element.find("." + f + "-content").html(this.content)
            },
            startLoading: function () {
                this.$element.find("." + f + "-loader").length || this.$element.append('<div class="' + f + '-loader fadeIn"></div>'), this.$element.find("." + f + "-loader").css({
                    top: this.headerHeight,
                    borderRadius: this.options.radius
                })
            },
            stopLoading: function () {
                var t = this.$element.find("." + f + "-loader");
                t.length || (this.$element.prepend('<div class="' + f + '-loader fadeIn"></div>'), t = this.$element.find("." + f + "-loader").css("border-radius", this.options.radius)), t.removeClass("fadeIn").addClass("fadeOut"), setTimeout(function () {
                    t.remove()
                }, 600)
            },
            recalcWidth: function () {
                if (this.$element.css("max-width", this.options.width), h()) {
                    var t = this.options.width;
                    1 < t.toString().split("%").length && (t = this.$element.outerWidth()), this.$element.css({
                        left: "50%",
                        marginLeft: -t / 2
                    })
                }
            },
            recalcVerticalPos: function (t) {
                null !== this.options.top && !1 !== this.options.top ? (this.$element.css("margin-top", this.options.top), 0 === this.options.top && this.$element.css({
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 0
                })) : !1 === t && this.$element.css({
                    marginTop: "",
                    borderRadius: this.options.radius
                }), null !== this.options.bottom && !1 !== this.options.bottom ? (this.$element.css("margin-bottom", this.options.bottom), 0 === this.options.bottom && this.$element.css({
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0
                })) : !1 === t && this.$element.css({
                    marginBottom: "",
                    borderRadius: this.options.radius
                })
            },
            recalcLayout: function () {
                var t = this,
                    e = d.height(),
                    i = this.$element.outerHeight(),
                    n = this.$element.outerWidth(),
                    r = this.$element.find("." + f + "-content")[0].scrollHeight,
                    s = r + this.headerHeight,
                    o = this.$element.innerHeight() - this.headerHeight,
                    a = (parseInt(-(this.$element.innerHeight() + 1) / 2), this.$wrap.scrollTop()),
                    l = 0;
                h() && (n >= d.width() || !0 === this.isFullscreen ? this.$element.css({
                    left: "0",
                    marginLeft: ""
                }) : this.$element.css({
                    left: "50%",
                    marginLeft: -n / 2
                })), !0 === this.options.borderBottom && "" !== this.options.title && (l = 3), this.$element.find("." + f + "-header").length && this.$element.find("." + f + "-header").is(":visible") ? (this.headerHeight = parseInt(this.$element.find("." + f + "-header").innerHeight()), this.$element.css("overflow", "hidden")) : (this.headerHeight = 0, this.$element.css("overflow", "")), this.$element.find("." + f + "-loader").length && this.$element.find("." + f + "-loader").css("top", this.headerHeight), i !== this.modalHeight && (this.modalHeight = i, this.options.onResize && "function" == typeof this.options.onResize && this.options.onResize(this)), this.state != m && this.state != p || (!0 === this.options.iframe && (e < this.options.iframeHeight + this.headerHeight + l || !0 === this.isFullscreen ? this.$element.find("." + f + "-iframe").css("height", e - (this.headerHeight + l)) : this.$element.find("." + f + "-iframe").css("height", this.options.iframeHeight)), i == e ? this.$element.addClass("isAttached") : this.$element.removeClass("isAttached"), !1 === this.isFullscreen && this.$element.width() >= d.width() ? this.$element.find("." + f + "-button-fullscreen").hide() : this.$element.find("." + f + "-button-fullscreen").show(), this.recalcButtons(), !1 === this.isFullscreen && (e = e - (c(this.options.top) || 0) - (c(this.options.bottom) || 0)), e < s ? (0 < this.options.top && null === this.options.bottom && r < d.height() && this.$element.addClass("isAttachedBottom"), 0 < this.options.bottom && null === this.options.top && r < d.height() && this.$element.addClass("isAttachedTop"), 1 === u("." + f + ":visible").length && u("html").addClass(f + "-isAttached"), this.$element.css("height", e)) : (this.$element.css("height", r + (this.headerHeight + l)), this.$element.removeClass("isAttachedTop isAttachedBottom"), 1 === u("." + f + ":visible").length && u("html").removeClass(f + "-isAttached")), o < r && e < s ? (t.$element.addClass("hasScroll"), t.$wrap.css("height", i - (t.headerHeight + l))) : (t.$element.removeClass("hasScroll"), t.$wrap.css("height", "auto")), o + a < r - 30 ? t.$element.addClass("hasShadow") : t.$element.removeClass("hasShadow"))
            },
            recalcButtons: function () {
                var t = this.$header.find("." + f + "-header-buttons").innerWidth() + 10;
                !0 === this.options.rtl ? this.$header.css("padding-left", t) : this.$header.css("padding-right", t)
            }
        }, d.off("load." + f).on("load." + f, function (t) {
            var e = document.location.hash;
            if (0 === window.$iziModal.autoOpen && !u("." + f).is(":visible")) try {
                var i = u(e).data();
                void 0 !== i && !1 !== i.iziModal.options.autoOpen && u(e).iziModal("open")
            } catch (t) {}
        }), d.off("hashchange." + f).on("hashchange." + f, function (t) {
            var e = document.location.hash;
            if ("" !== e) try {
                void 0 !== u(e).data() && "opening" !== u(e).iziModal("getState") && setTimeout(function () {
                    u(e).iziModal("open", {
                        preventClose: !1
                    })
                }, 175)
            } catch (t) {} else window.$iziModal.history && u.each(u("." + f), function (t, e) {
                if (void 0 !== u(e).data().iziModal) {
                    var i = u(e).iziModal("getState");
                    "opened" != i && "opening" != i || u(e).iziModal("close")
                }
            })
        }), s.off("click", "[data-" + f + "-open]").on("click", "[data-" + f + "-open]", function (t) {
            t.preventDefault();
            var e = u("." + f + ":visible"),
                i = u(t.currentTarget).attr("data-" + f + "-open"),
                n = u(t.currentTarget).attr("data-" + f + "-preventClose"),
                r = u(t.currentTarget).attr("data-" + f + "-transitionIn"),
                s = u(t.currentTarget).attr("data-" + f + "-transitionOut"),
                o = u(t.currentTarget).attr("data-" + f + "-zindex");
            void 0 !== o && u(i).iziModal("setZindex", o), void 0 === n && (void 0 !== s ? e.iziModal("close", {
                transition: s
            }) : e.iziModal("close")), setTimeout(function () {
                void 0 !== r ? u(i).iziModal("open", {
                    transition: r
                }) : u(i).iziModal("open")
            }, 175)
        }), s.off("keyup." + f).on("keyup." + f, function (t) {
            if (u("." + f + ":visible").length) {
                var e = u("." + f + ":visible")[0].id,
                    i = u("#" + e).data().iziModal.options.arrowKeys,
                    n = u("#" + e).iziModal("getGroup"),
                    r = t || window.event,
                    s = r.target || r.srcElement;
                void 0 === e || !i || void 0 === n.name || r.ctrlKey || r.metaKey || r.altKey || "INPUT" === s.tagName.toUpperCase() || "TEXTAREA" == s.tagName.toUpperCase() || (37 === r.keyCode ? u("#" + e).iziModal("prev", r) : 39 === r.keyCode && u("#" + e).iziModal("next", r))
            }
        }), u.fn[f] = function (t, e) {
            if (!u(this).length && "object" == typeof t) {
                var i = {
                    $el: document.createElement("div"),
                    id: this.selector.split("#"),
                    class: this.selector.split(".")
                };
                if (1 < i.id.length) {
                    try {
                        i.$el = document.createElement(id[0])
                    } catch (t) {}
                    i.$el.id = this.selector.split("#")[1].trim()
                } else if (1 < i.class.length) {
                    try {
                        i.$el = document.createElement(i.class[0])
                    } catch (t) {}
                    for (var n = 1; n < i.class.length; n++) i.$el.classList.add(i.class[n].trim())
                }
                document.body.appendChild(i.$el), this.push(u(this.selector))
            }
            for (var r = 0; r < this.length; r++) {
                var s = u(this[r]),
                    o = s.data(f),
                    a = u.extend({}, u.fn[f].defaults, s.data(), "object" == typeof t && t);
                if (o || t && "object" != typeof t) {
                    if ("string" == typeof t && void 0 !== o) return o[t].apply(o, [].concat(e))
                } else s.data(f, o = new g(s, a));
                a.autoOpen && (isNaN(parseInt(a.autoOpen)) ? !0 === a.autoOpen && o.open() : setTimeout(function () {
                    o.open()
                }, a.autoOpen), window.$iziModal.autoOpen++)
            }
            return this
        }, u.fn[f].defaults = {
            title: "",
            subtitle: "",
            headerColor: "#88A0B9",
            background: null,
            theme: "",
            icon: null,
            iconText: null,
            iconColor: "",
            rtl: !1,
            width: 600,
            top: null,
            bottom: null,
            borderBottom: !0,
            padding: 0,
            radius: 3,
            zindex: 999,
            iframe: !1,
            iframeHeight: 400,
            iframeURL: null,
            focusInput: !0,
            group: "",
            loop: !1,
            arrowKeys: !0,
            navigateCaption: !0,
            navigateArrows: !0,
            history: !1,
            restoreDefaultContent: !1,
            autoOpen: 0,
            bodyOverflow: !1,
            fullscreen: !1,
            openFullscreen: !1,
            closeOnEscape: !0,
            closeButton: !0,
            appendTo: "body",
            appendToOverlay: "body",
            overlay: !0,
            overlayClose: !0,
            overlayColor: "rgba(0, 0, 0, 0.4)",
            timeout: !1,
            timeoutProgressbar: !1,
            pauseOnHover: !1,
            timeoutProgressbarColor: "rgba(255,255,255,0.5)",
            transitionIn: "comingIn",
            transitionOut: "comingOut",
            transitionInOverlay: "fadeIn",
            transitionOutOverlay: "fadeOut",
            onFullscreen: function () {},
            onResize: function () {},
            onOpening: function () {},
            onOpened: function () {},
            onClosing: function () {},
            onClosed: function () {},
            afterRender: function () {}
        }, u.fn[f].Constructor = g, u.fn.iziModal
    }),
    function (t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.sal = e() : t.sal = e()
    }(this, function () {
        return function (i) {
            function n(t) {
                if (r[t]) return r[t].exports;
                var e = r[t] = {
                    i: t,
                    l: !1,
                    exports: {}
                };
                return i[t].call(e.exports, e, e.exports, n), e.l = !0, e.exports
            }
            var r = {};
            return n.m = i, n.c = r, n.d = function (t, e, i) {
                n.o(t, e) || Object.defineProperty(t, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                })
            }, n.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return n.d(e, "a", e), e
            }, n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, n.p = "dist/", n(n.s = 0)
        }([function (t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            };
            i(1);
            var r = {
                    rootMargin: "0% 50%",
                    threshold: .5,
                    animateClassName: "sal-animate",
                    disabledClassName: "sal-disabled",
                    selector: "[data-sal]",
                    once: !0,
                    disabled: !1
                },
                s = [],
                o = null,
                a = function () {
                    document.body.classList.add(r.disabledClassName)
                },
                l = function (t, e) {
                    t.forEach(function (t) {
                        t.intersectionRatio >= r.threshold ? (t.target.classList.add(r.animateClassName), r.once && e.unobserve(t.target)) : r.once || t.target.classList.remove(r.animateClassName)
                    })
                },
                u = function () {
                    a(), o.disconnect(), o = null
                },
                h = function () {
                    document.body.classList.remove(r.disabledClassName), o = new IntersectionObserver(l, {
                        rootMargin: r.rootMargin,
                        threshold: r.threshold
                    }), (s = [].filter.call(document.querySelectorAll(r.selector), function (t) {
                        return e = t, r.animateClassName, !e.classList.contains(r.animateClassName);
                        var e
                    })).forEach(function (t) {
                        return o.observe(t)
                    })
                };
            e.default = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r;
                if (t !== r && (r = n({}, r, t)), !window.IntersectionObserver) throw a(), Error("\n      Your browser does not support IntersectionObserver!\n      Get a polyfill from here:\n      https://github.com/w3c/IntersectionObserver/tree/master/polyfill\n    ");
                return r.disabled || "function" == typeof r.disabled && r.disabled() ? a() : h(), {
                    elements: s,
                    disable: u,
                    enable: h
                }
            }
        }, function (t, e) {}]).default
    });
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
        "use strict";
        var t, l, u, e, T, x, w, C, v, i, _, P, y, b, f, p, g, n;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (n, h, _) {
            var g = function (t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                v = function (t, e, i) {
                    var n, r, s = t.cycle;
                    for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                    delete t.cycle
                },
                y = function (t, e, i) {
                    _.call(this, t, e, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = y.prototype.render
                },
                b = 1e-10,
                x = _._internals,
                w = x.isSelector,
                T = x.isArray,
                t = y.prototype = _.to({}, .1, {}),
                C = [];
            y.version = "2.0.2", t.constructor = y, t.kill()._gc = !1, y.killTweensOf = y.killDelayedCallsTo = _.killTweensOf, y.getTweensOf = _.getTweensOf, y.lagSmoothing = _.lagSmoothing, y.ticker = _.ticker, y.render = _.render, t.invalidate = function () {
                return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), _.prototype.invalidate.call(this)
            }, t.updateTo = function (t, e) {
                var i, n = this.ratio,
                    r = this.vars.immediateRender || t.immediateRender;
                for (i in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[i] = t[i];
                if (this._initted || r)
                    if (e) this._initted = !1, r && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && _._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
                    var s = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                } else if (this._initted = !1, this._init(), 0 < this._time || r)
                    for (var o, a = 1 / (1 - n), l = this._firstPT; l;) o = l.s + l.c, l.c *= a, l.s = o - l.c, l = l._next;
                return this
            }, t.render = function (t, e, i) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var n, r, s, o, a, l, u, h, c, d = this._dirty ? this.totalDuration() : this._totalDuration,
                    f = this._time,
                    p = this._totalTime,
                    m = this._cycle,
                    g = this._duration,
                    v = this._rawPrevTime;
                if (d - 1e-7 <= t && 0 <= t ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (v < 0 || t <= 0 && -1e-7 <= t || v === b && "isPause" !== this.data) && v !== t && (i = !0, b < v && (r = "onReverseComplete")), this._rawPrevTime = h = !e || t || v === t ? t : b)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== p || 0 === g && 0 < v) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (0 <= v && (i = !0), this._rawPrevTime = h = !e || t || v === t ? t : b)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (o = g + this._repeatDelay, this._cycle = this._totalTime / o >> 0, 0 !== this._cycle && this._cycle === this._totalTime / o && p <= t && this._cycle--, this._time = this._totalTime - this._cycle * o, this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time, (c = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== c || this._initted ? this._yoyoEase = c = !0 === c ? this._ease : c instanceof Ease ? c : Ease.map[c] : (c = this.vars.ease, this._yoyoEase = c = c ? c instanceof Ease ? c : "function" == typeof c ? new Ease(c, this.vars.easeParams) : Ease.map[c] || _.defaultEase : _.defaultEase)), this.ratio = c ? 1 - c.getRatio((g - this._time) / g) : 0)), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType && !c ? (a = this._time / g, (1 === (l = this._easeType) || 3 === l && .5 <= a) && (a = 1 - a), 3 === l && (a *= 2), 1 === (u = this._easePower) ? a *= a : 2 === u ? a *= a * a : 3 === u ? a *= a * a * a : 4 === u && (a *= a * a * a * a), 1 === l ? this.ratio = 1 - a : 2 === l ? this.ratio = a : this._time / g < .5 ? this.ratio = a / 2 : this.ratio = 1 - a / 2) : c || (this.ratio = this._ease.getRatio(this._time / g))), f !== this._time || i || m !== this._cycle) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = f, this._totalTime = p, this._rawPrevTime = v, this._cycle = m, x.lazyTweens.push(this), void(this._lazy = [t, e]);
                        !this._time || n || c ? n && this._ease._calcEnd && !c && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / g)
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== f && 0 <= t && (this._active = !0), 0 === p && (2 === this._initted && 0 < t && this._init(), this._startAt && (0 <= t ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, i), e || (this._totalTime !== p || r) && this._callback("onUpdate")), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === g && this._rawPrevTime === b && h !== b && (this._rawPrevTime = 0))
                } else p !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, y.to = function (t, e, i) {
                return new y(t, e, i)
            }, y.from = function (t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new y(t, e, i)
            }, y.fromTo = function (t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new y(t, e, n)
            }, y.staggerTo = y.allTo = function (t, e, i, n, r, s, o) {
                n = n || 0;
                var a, l, u, h, c = 0,
                    d = [],
                    f = function () {
                        i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments), r.apply(o || i.callbackScope || this, s || C)
                    },
                    p = i.cycle,
                    m = i.startAt && i.startAt.cycle;
                for (T(t) || ("string" == typeof t && (t = _.selector(t) || t), w(t) && (t = g(t))), t = t || [], n < 0 && ((t = g(t)).reverse(), n *= -1), a = t.length - 1, u = 0; u <= a; u++) {
                    for (h in l = {}, i) l[h] = i[h];
                    if (p && (v(l, t, u), null != l.duration && (e = l.duration, delete l.duration)), m) {
                        for (h in m = l.startAt = {}, i.startAt) m[h] = i.startAt[h];
                        v(l.startAt, t, u)
                    }
                    l.delay = c + (l.delay || 0), u === a && r && (l.onComplete = f), d[u] = new y(t[u], e, l), c += n
                }
                return d
            }, y.staggerFrom = y.allFrom = function (t, e, i, n, r, s, o) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, y.staggerTo(t, e, i, n, r, s, o)
            }, y.staggerFromTo = y.allFromTo = function (t, e, i, n, r, s, o, a) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, y.staggerTo(t, e, n, r, s, o, a)
            }, y.delayedCall = function (t, e, i, n, r) {
                return new y(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, y.set = function (t, e) {
                return new y(t, 0, e)
            }, y.isTweening = function (t) {
                return 0 < _.getTweensOf(t, !0).length
            };
            var s = function (t, e) {
                    for (var i = [], n = 0, r = t._first; r;) r instanceof _ ? i[n++] = r : (e && (i[n++] = r), n = (i = i.concat(s(r, e))).length), r = r._next;
                    return i
                },
                c = y.getAllTweens = function (t) {
                    return s(n._rootTimeline, t).concat(s(n._rootFramesTimeline, t))
                };
            y.killAll = function (t, e, i, n) {
                null == e && (e = !0), null == i && (i = !0);
                var r, s, o, a = c(0 != n),
                    l = a.length,
                    u = e && i && n;
                for (o = 0; o < l; o++) s = a[o], (u || s instanceof h || (r = s.target === s.vars.onComplete) && i || e && !r) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
            }, y.killChildTweensOf = function (t, e) {
                if (null != t) {
                    var i, n, r, s, o, a = x.tweenLookup;
                    if ("string" == typeof t && (t = _.selector(t) || t), w(t) && (t = g(t)), T(t))
                        for (s = t.length; - 1 < --s;) y.killChildTweensOf(t[s], e);
                    else {
                        for (r in i = [], a)
                            for (n = a[r].target.parentNode; n;) n === t && (i = i.concat(a[r].tweens)), n = n.parentNode;
                        for (o = i.length, s = 0; s < o; s++) e && i[s].totalTime(i[s].totalDuration()), i[s]._enabled(!1, !1)
                    }
                }
            };
            var r = function (t, e, i, n) {
                e = !1 !== e, i = !1 !== i;
                for (var r, s, o = c(n = !1 !== n), a = e && i && n, l = o.length; - 1 < --l;) s = o[l], (a || s instanceof h || (r = s.target === s.vars.onComplete) && i || e && !r) && s.paused(t)
            };
            return y.pauseAll = function (t, e, i) {
                r(!0, t, e, i)
            }, y.resumeAll = function (t, e, i) {
                r(!1, t, e, i)
            }, y.globalTimeScale = function (t) {
                var e = n._rootTimeline,
                    i = _.ticker.time;
                return arguments.length ? (t = t || b, e._startTime = i - (i - e._startTime) * e._timeScale / t, e = n._rootFramesTimeline, i = _.ticker.frame, e._startTime = i - (i - e._startTime) * e._timeScale / t, e._timeScale = n._rootTimeline._timeScale = t, t) : e._timeScale
            }, t.progress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }, t.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, t.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, t.duration = function (t) {
                return arguments.length ? n.prototype.duration.call(this, t) : this._duration
            }, t.totalDuration = function (t) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, t.repeat = function (t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, t.repeatDelay = function (t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, t.yoyo = function (t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, y
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (h, c, d) {
            var f = function (t) {
                    c.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var e, i, n = this.vars;
                    for (i in n) e = n[i], g(e) && -1 !== e.join("").indexOf("{self}") && (n[i] = this._swapSelfInParams(e));
                    g(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                },
                m = 1e-10,
                t = d._internals,
                e = f._internals = {},
                p = t.isSelector,
                g = t.isArray,
                v = t.lazyTweens,
                _ = t.lazyRender,
                o = _gsScope._gsDefine.globals,
                y = function (t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                },
                b = function (t, e, i) {
                    var n, r, s = t.cycle;
                    for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                    delete t.cycle
                },
                s = e.pauseCallback = function () {},
                x = function (t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                i = f.prototype = new c;
            return f.version = "2.0.2", i.constructor = f, i.kill()._gc = i._forcingPlayhead = i._hasPause = !1, i.to = function (t, e, i, n) {
                var r = i.repeat && o.TweenMax || d;
                return e ? this.add(new r(t, e, i), n) : this.set(t, i, n)
            }, i.from = function (t, e, i, n) {
                return this.add((i.repeat && o.TweenMax || d).from(t, e, i), n)
            }, i.fromTo = function (t, e, i, n, r) {
                var s = n.repeat && o.TweenMax || d;
                return e ? this.add(s.fromTo(t, e, i, n), r) : this.set(t, n, r)
            }, i.staggerTo = function (t, e, i, n, r, s, o, a) {
                var l, u, h = new f({
                        onComplete: s,
                        onCompleteParams: o,
                        callbackScope: a,
                        smoothChildTiming: this.smoothChildTiming
                    }),
                    c = i.cycle;
                for ("string" == typeof t && (t = d.selector(t) || t), p(t = t || []) && (t = x(t)), (n = n || 0) < 0 && ((t = x(t)).reverse(), n *= -1), u = 0; u < t.length; u++)(l = y(i)).startAt && (l.startAt = y(l.startAt), l.startAt.cycle && b(l.startAt, t, u)), c && (b(l, t, u), null != l.duration && (e = l.duration, delete l.duration)), h.to(t[u], e, l, u * n);
                return this.add(h, r)
            }, i.staggerFrom = function (t, e, i, n, r, s, o, a) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
            }, i.staggerFromTo = function (t, e, i, n, r, s, o, a, l) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
            }, i.call = function (t, e, i, n) {
                return this.add(d.delayedCall(0, t, e, i), n)
            }, i.set = function (t, e, i) {
                return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new d(t, 0, e), i)
            }, f.exportRoot = function (t, e) {
                null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                var i, n, r, s, o = new f(t),
                    a = o._timeline;
                for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;) s = r._next, e && r instanceof d && r.target === r.vars.onComplete || ((n = r._startTime - r._delay) < 0 && (i = 1), o.add(r, n)), r = s;
                return a.add(o, 0), i && o.totalDuration(), o
            }, i.add = function (t, e, i, n) {
                var r, s, o, a, l, u;
                if ("number" != typeof e && (e = this._parseTimeOrLabel(e, 0, !0, t)), !(t instanceof h)) {
                    if (t instanceof Array || t && t.push && g(t)) {
                        for (i = i || "normal", n = n || 0, r = e, s = t.length, o = 0; o < s; o++) g(a = t[o]) && (a = new f({
                            tweens: a
                        })), this.add(a, r), "string" != typeof a && "function" != typeof a && ("sequence" === i ? r = a._startTime + a.totalDuration() / a._timeScale : "start" === i && (a._startTime -= a.delay())), r += n;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof t) return this.addLabel(t, e);
                    if ("function" != typeof t) throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                    t = d.delayedCall(0, t)
                }
                if (c.prototype.add.call(this, t, e), t._time && (r = Math.max(0, Math.min(t.totalDuration(), (this.rawTime() - t._startTime) * t._timeScale)), 1e-5 < Math.abs(r - t._totalTime) && t.render(r, !1, !1)), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (u = (l = this).rawTime() > t._startTime; l._timeline;) u && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
                return this
            }, i.remove = function (t) {
                if (t instanceof h) {
                    this._remove(t, !1);
                    var e = t._timeline = t.vars.useFrames ? h._rootFramesTimeline : h._rootTimeline;
                    return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
                }
                if (t instanceof Array || t && t.push && g(t)) {
                    for (var i = t.length; - 1 < --i;) this.remove(t[i]);
                    return this
                }
                return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
            }, i._remove = function (t, e) {
                return c.prototype._remove.call(this, t, e), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, i.append = function (t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, i.insert = i.insertMultiple = function (t, e, i, n) {
                return this.add(t, e || 0, i, n)
            }, i.appendMultiple = function (t, e, i, n) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
            }, i.addLabel = function (t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, i.addPause = function (t, e, i, n) {
                var r = d.delayedCall(0, s, i, n || this);
                return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
            }, i.removeLabel = function (t) {
                return delete this._labels[t], this
            }, i.getLabelTime = function (t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, i._parseTimeOrLabel = function (t, e, i, n) {
                var r, s;
                if (n instanceof h && n.timeline === this) this.remove(n);
                else if (n && (n instanceof Array || n.push && g(n)))
                    for (s = n.length; - 1 < --s;) n[s] instanceof h && n[s].timeline === this && this.remove(n[s]);
                if (r = "number" != typeof t || e ? 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof e) return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - r : 0, i);
                if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = r);
                else {
                    if (-1 === (s = t.indexOf("="))) return null == this._labels[t] ? i ? this._labels[t] = r + e : e : this._labels[t] + e;
                    e = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = 1 < s ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, i) : r
                }
                return Number(t) + e
            }, i.seek = function (t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
            }, i.stop = function () {
                return this.paused(!0)
            }, i.gotoAndPlay = function (t, e) {
                return this.play(t, e)
            }, i.gotoAndStop = function (t, e) {
                return this.pause(t, e)
            }, i.render = function (t, e, i) {
                this._gc && this._enabled(!0, !1);
                var n, r, s, o, a, l, u, h = this._time,
                    c = this._dirty ? this.totalDuration() : this._totalDuration,
                    d = this._startTime,
                    f = this._timeScale,
                    p = this._paused;
                if (h !== this._time && (t += this._time - h), c - 1e-7 <= t && 0 <= t) this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && -1e-7 <= t || this._rawPrevTime < 0 || this._rawPrevTime === m) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > m && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : m, t = c + 1e-4;
                else if (t < 1e-7)
                    if (this._totalTime = this._time = 0, (0 !== h || 0 === this._duration && this._rawPrevTime !== m && (0 < this._rawPrevTime || t < 0 && 0 <= this._rawPrevTime)) && (o = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, o = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (a = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : m, 0 === t && r)
                            for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                        t = 0, this._initted || (a = !0)
                    }
                else {
                    if (this._hasPause && !this._forcingPlayhead && !e) {
                        if (h <= t)
                            for (n = this._first; n && n._startTime <= t && !l;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (l = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !l;) n._duration || "isPause" === n.data && 0 < n._rawPrevTime && (l = n), n = n._prev;
                        l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    this._totalTime = this._time = this._rawPrevTime = t
                }
                if (this._time !== h && this._first || i || a || l) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== h && 0 < t && (this._active = !0), 0 === h && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), h <= (u = this._time))
                        for (n = this._first; n && (s = n._next, u === this._time && (!this._paused || p));)(n._active || n._startTime <= u && !n._paused && !n._gc) && (l === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                    else
                        for (n = this._last; n && (s = n._prev, u === this._time && (!this._paused || p));) {
                            if (n._active || n._startTime <= h && !n._paused && !n._gc) {
                                if (l === n) {
                                    for (l = n._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                    l = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = s
                        }
                    this._onUpdate && (e || (v.length && _(), this._callback("onUpdate"))), o && (this._gc || (d === this._startTime || f !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (r && (v.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                }
            }, i._hasPausedChild = function () {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof f && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, i.getChildren = function (t, e, i, n) {
                n = n || -9999999999;
                for (var r = [], s = this._first, o = 0; s;) s._startTime < n || (s instanceof d ? !1 !== e && (r[o++] = s) : (!1 !== i && (r[o++] = s), !1 !== t && (o = (r = r.concat(s.getChildren(!0, e, i))).length))), s = s._next;
                return r
            }, i.getTweensOf = function (t, e) {
                var i, n, r = this._gc,
                    s = [],
                    o = 0;
                for (r && this._enabled(!0, !0), n = (i = d.getTweensOf(t)).length; - 1 < --n;)(i[n].timeline === this || e && this._contains(i[n])) && (s[o++] = i[n]);
                return r && this._enabled(!1, !0), s
            }, i.recent = function () {
                return this._recent
            }, i._contains = function (t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, i.shiftChildren = function (t, e, i) {
                i = i || 0;
                for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                if (e)
                    for (n in s) s[n] >= i && (s[n] += t);
                return this._uncache(!0)
            }, i._kill = function (t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; - 1 < --n;) i[n]._kill(t, e) && (r = !0);
                return r
            }, i.clear = function (t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; - 1 < --i;) e[i]._enabled(!1, !1);
                return !1 !== t && (this._labels = {}), this._uncache(!0)
            }, i.invalidate = function () {
                for (var t = this._first; t;) t.invalidate(), t = t._next;
                return h.prototype.invalidate.call(this)
            }, i._enabled = function (t, e) {
                if (t === this._gc)
                    for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
                return c.prototype._enabled.call(this, t, e)
            }, i.totalTime = function (t, e, i) {
                this._forcingPlayhead = !0;
                var n = h.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, n
            }, i.duration = function (t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, i.totalDuration = function (t) {
                if (arguments.length) return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this;
                if (this._dirty) {
                    for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(r, r._startTime - r._delay), this._calculatingDuration = 0) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale, this._time -= r._startTime, this._totalTime -= r._startTime, this._rawPrevTime -= r._startTime), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), n < (i = r._startTime + r._totalDuration / r._timeScale) && (n = i), r = e;
                    this._duration = this._totalDuration = n, this._dirty = !1
                }
                return this._totalDuration
            }, i.paused = function (t) {
                if (!t)
                    for (var e = this._first, i = this._time; e;) e._startTime === i && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next;
                return h.prototype.paused.apply(this, arguments)
            }, i.usesFrames = function () {
                for (var t = this._timeline; t._timeline;) t = t._timeline;
                return t === h._rootFramesTimeline
            }, i.rawTime = function (t) {
                return t && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
            }, f
        }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (e, a, t) {
            var i = function (t) {
                    e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                },
                k = 1e-10,
                n = a._internals,
                S = n.lazyTweens,
                O = n.lazyRender,
                l = _gsScope._gsDefine.globals,
                u = new t(null, null, 1, 0),
                r = i.prototype = new e;
            return r.constructor = i, r.kill()._gc = !1, i.version = "2.0.2", r.invalidate = function () {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
            }, r.addCallback = function (t, e, i, n) {
                return this.add(a.delayedCall(0, t, i, n), e)
            }, r.removeCallback = function (t, e) {
                if (t)
                    if (null == e) this._kill(null, t);
                    else
                        for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); - 1 < --n;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                return this
            }, r.removePause = function (t) {
                return this.removeCallback(e._internals.pauseCallback, t)
            }, r.tweenTo = function (t, e) {
                e = e || {};
                var i, n, r, s = {
                        ease: u,
                        useFrames: this.usesFrames(),
                        immediateRender: !1,
                        lazy: !1
                    },
                    o = e.repeat && l.TweenMax || a;
                for (n in e) s[n] = e[n];
                return s.time = this._parseTimeOrLabel(t), i = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, r = new o(this, i, s), s.onStart = function () {
                    r.target.paused(!0), r.vars.time === r.target.time() || i !== r.duration() || r.isFromTo || r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale).render(r.time(), !0, !0), e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || r, e.onStartParams || [])
                }, r
            }, r.tweenFromTo = function (t, e, i) {
                i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [t],
                    callbackScope: this
                }, i.immediateRender = !1 !== i.immediateRender;
                var n = this.tweenTo(e, i);
                return n.isFromTo = 1, n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
            }, r.render = function (t, e, i) {
                this._gc && this._enabled(!0, !1);
                var n, r, s, o, a, l, u, h, c = this._time,
                    d = this._dirty ? this.totalDuration() : this._totalDuration,
                    f = this._duration,
                    p = this._totalTime,
                    m = this._startTime,
                    g = this._timeScale,
                    v = this._rawPrevTime,
                    _ = this._paused,
                    y = this._cycle;
                if (c !== this._time && (t += this._time - c), d - 1e-7 <= t && 0 <= t) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && -1e-7 <= t || v < 0 || v === k) && v !== t && this._first && (a = !0, k < v && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : k, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : t = (this._time = f) + 1e-4;
                else if (t < 1e-7)
                    if (this._locked || (this._totalTime = this._cycle = 0), ((this._time = 0) !== c || 0 === f && v !== k && (0 < v || t < 0 && 0 <= v) && !this._locked) && (o = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, o = "onReverseComplete") : 0 <= v && this._first && (a = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : k, 0 === t && r)
                            for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                        t = 0, this._initted || (a = !0)
                    }
                else if (0 === f && v < 0 && (a = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (l = f + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && p <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = f - this._time), this._time > f ? t = (this._time = f) + 1e-4 : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                    if (c <= (t = this._time) || this._repeat && y !== this._cycle)
                        for (n = this._first; n && n._startTime <= t && !u;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n), n = n._next;
                    else
                        for (n = this._last; n && n._startTime >= t && !u;) n._duration || "isPause" === n.data && 0 < n._rawPrevTime && (u = n), n = n._prev;
                    u && u._startTime < f && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                if (this._cycle !== y && !this._locked) {
                    var b = this._yoyo && 0 != (1 & y),
                        x = b === (this._yoyo && 0 != (1 & this._cycle)),
                        w = this._totalTime,
                        T = this._cycle,
                        C = this._rawPrevTime,
                        P = this._time;
                    if (this._totalTime = y * f, this._cycle < y ? b = !b : this._totalTime += f, this._time = c, this._rawPrevTime = 0 === f ? v - 1e-4 : v, this._cycle = y, this._locked = !0, c = b ? 0 : f, this.render(c, e, 0 === f), e || this._gc || this.vars.onRepeat && (this._cycle = T, this._locked = !1, this._callback("onRepeat")), c !== this._time) return;
                    if (x && (this._cycle = y, this._locked = !0, c = b ? f + 1e-4 : -1e-4, this.render(c, !0, !1)), this._locked = !1, this._paused && !_) return;
                    this._time = P, this._totalTime = w, this._cycle = T, this._rawPrevTime = C
                }
                if (this._time !== c && this._first || i || a || u) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== p && 0 < t && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), c <= (h = this._time))
                        for (n = this._first; n && (s = n._next, h === this._time && (!this._paused || _));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (u === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                    else
                        for (n = this._last; n && (s = n._prev, h === this._time && (!this._paused || _));) {
                            if (n._active || n._startTime <= c && !n._paused && !n._gc) {
                                if (u === n) {
                                    for (u = n._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                    u = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = s
                        }
                    this._onUpdate && (e || (S.length && O(), this._callback("onUpdate"))), o && (this._locked || this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (r && (S.length && O(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                } else p !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, r.getActive = function (t, e, i) {
                null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                var n, r, s = [],
                    o = this.getChildren(t, e, i),
                    a = 0,
                    l = o.length;
                for (n = 0; n < l; n++)(r = o[n]).isActive() && (s[a++] = r);
                return s
            }, r.getLabelAfter = function (t) {
                t || 0 !== t && (t = this._time);
                var e, i = this.getLabelsArray(),
                    n = i.length;
                for (e = 0; e < n; e++)
                    if (i[e].time > t) return i[e].name;
                return null
            }, r.getLabelBefore = function (t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), i = e.length; - 1 < --i;)
                    if (e[i].time < t) return e[i].name;
                return null
            }, r.getLabelsArray = function () {
                var t, e = [],
                    i = 0;
                for (t in this._labels) e[i++] = {
                    time: this._labels[t],
                    name: t
                };
                return e.sort(function (t, e) {
                    return t.time - e.time
                }), e
            }, r.invalidate = function () {
                return this._locked = !1, e.prototype.invalidate.call(this)
            }, r.progress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
            }, r.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
            }, r.totalDuration = function (t) {
                return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, r.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, r.repeat = function (t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, r.repeatDelay = function (t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, r.yoyo = function (t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, r.currentLabel = function (t) {
                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
            }, i
        }, !0), T = 180 / Math.PI, x = [], w = [], C = [], v = {}, i = _gsScope._gsDefine.globals, _ = function (t, e, i, n) {
            i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
        }, P = function (t, e, i, n) {
            var r = {
                    a: t
                },
                s = {},
                o = {},
                a = {
                    c: n
                },
                l = (t + e) / 2,
                u = (e + i) / 2,
                h = (i + n) / 2,
                c = (l + u) / 2,
                d = (u + h) / 2,
                f = (d - c) / 8;
            return r.b = l + (t - l) / 4, s.b = c + f, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (c + d) / 2, o.b = d - f, a.b = h + (n - h) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
        }, y = function (t, e, i, n, r) {
            var s, o, a, l, u, h, c, d, f, p, m, g, v, _ = t.length - 1,
                y = 0,
                b = t[0].a;
            for (s = 0; s < _; s++) o = (u = t[y]).a, a = u.d, l = t[y + 1].d, d = r ? (m = x[s], v = ((g = w[s]) + m) * e * .25 / (n ? .5 : C[s] || .5), a - ((h = a - (a - o) * (n ? .5 * e : 0 !== m ? v / m : 0)) + (((c = a + (l - a) * (n ? .5 * e : 0 !== g ? v / g : 0)) - h) * (3 * m / (m + g) + .5) / 4 || 0))) : a - ((h = a - (a - o) * e * .5) + (c = a + (l - a) * e * .5)) / 2, h += d, c += d, u.c = f = h, u.b = 0 !== s ? b : b = u.a + .6 * (u.c - u.a), u.da = a - o, u.ca = f - o, u.ba = b - o, i ? (p = P(o, b, f, a), t.splice(y, 1, p[0], p[1], p[2], p[3]), y += 4) : y++, b = c;
            (u = t[y]).b = b, u.c = b + .4 * (u.d - b), u.da = u.d - u.a, u.ca = u.c - u.a, u.ba = b - u.a, i && (p = P(u.a, b, u.c, u.d), t.splice(y, 1, p[0], p[1], p[2], p[3]))
        }, b = function (t, e, i, n) {
            var r, s, o, a, l, u, h = [];
            if (n)
                for (s = (t = [n].concat(t)).length; - 1 < --s;) "string" == typeof (u = t[s][e]) && "=" === u.charAt(1) && (t[s][e] = n[e] + Number(u.charAt(0) + u.substr(2)));
            if ((r = t.length - 2) < 0) return h[0] = new _(t[0][e], 0, 0, t[0][e]), h;
            for (s = 0; s < r; s++) o = t[s][e], a = t[s + 1][e], h[s] = new _(o, 0, 0, a), i && (l = t[s + 2][e], x[s] = (x[s] || 0) + (a - o) * (a - o), w[s] = (w[s] || 0) + (l - a) * (l - a));
            return h[s] = new _(t[s][e], 0, 0, t[s + 1][e]), h
        }, f = function (t, e, i, n, r, s) {
            var o, a, l, u, h, c, d, f, p = {},
                m = [],
                g = s || t[0];
            for (a in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) m.push(a);
            if (1 < t.length) {
                for (f = t[t.length - 1], d = !0, o = m.length; - 1 < --o;)
                    if (a = m[o], .05 < Math.abs(g[a] - f[a])) {
                        d = !1;
                        break
                    } d && (t = t.concat(), s && t.unshift(s), t.push(t[1]), s = t[t.length - 3])
            }
            for (x.length = w.length = C.length = 0, o = m.length; - 1 < --o;) a = m[o], v[a] = -1 !== r.indexOf("," + a + ","), p[a] = b(t, a, v[a], s);
            for (o = x.length; - 1 < --o;) x[o] = Math.sqrt(x[o]), w[o] = Math.sqrt(w[o]);
            if (!n) {
                for (o = m.length; - 1 < --o;)
                    if (v[a])
                        for (c = (l = p[m[o]]).length - 1, u = 0; u < c; u++) h = l[u + 1].da / w[u] + l[u].da / x[u] || 0, C[u] = (C[u] || 0) + h * h;
                for (o = C.length; - 1 < --o;) C[o] = Math.sqrt(C[o])
            }
            for (o = m.length, u = i ? 4 : 1; - 1 < --o;) l = p[a = m[o]], y(l, e, i, n, v[a]), d && (l.splice(0, u), l.splice(l.length - u, u));
            return p
        }, p = function (t, e, i) {
            for (var n, r, s, o, a, l, u, h, c, d, f, p = 1 / i, m = t.length; - 1 < --m;)
                for (s = (d = t[m]).a, o = d.d - s, a = d.c - s, l = d.b - s, n = r = 0, h = 1; h <= i; h++) n = r - (r = ((u = p * h) * u * o + 3 * (c = 1 - u) * (u * a + c * l)) * u), e[f = m * i + h - 1] = (e[f] || 0) + n * n
        }, g = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.8",
            API: 2,
            global: !0,
            init: function (t, e, i) {
                this._target = t, e instanceof Array && (e = {
                    values: e
                }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var n, r, s, o, a, l = e.values || [],
                    u = {},
                    h = l[0],
                    c = e.autoRotate || i.vars.orientToBezier;
                for (n in this._autoRotate = c ? c instanceof Array ? c : [["x", "y", "rotation", !0 === c ? 0 : Number(c) || 0]] : null, h) this._props.push(n);
                for (s = this._props.length; - 1 < --s;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || u[n] !== l[0][n] && (a = u);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? f(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : function (t, e, i) {
                        var n, r, s, o, a, l, u, h, c, d, f, p = {},
                            m = "cubic" === (e = e || "soft") ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                        for (c in t[0]) v.push(c);
                        for (l = v.length; - 1 < --l;) {
                            for (p[c = v[l]] = a = [], d = 0, h = t.length, u = 0; u < h; u++) n = null == i ? t[u][c] : "string" == typeof (f = t[u][c]) && "=" === f.charAt(1) ? i[c] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && 1 < u && u < h - 1 && (a[d++] = (n + a[d - 2]) / 2), a[d++] = n;
                            for (h = d - m + 1, u = d = 0; u < h; u += m) n = a[u], r = a[u + 1], s = a[u + 2], o = 2 === m ? 0 : a[u + 3], a[d++] = f = 3 === m ? new _(n, r, s, o) : new _(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                            a.length = d
                        }
                        return p
                    }(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                    var d = function (t, e) {
                        var i, n, r, s, o = [],
                            a = [],
                            l = 0,
                            u = 0,
                            h = (e = e >> 0 || 6) - 1,
                            c = [],
                            d = [];
                        for (i in t) p(t[i], o, e);
                        for (r = o.length, n = 0; n < r; n++) l += Math.sqrt(o[n]), d[s = n % e] = l, s === h && (u += l, c[s = n / e >> 0] = d, a[s] = u, l = 0, d = []);
                        return {
                            length: u,
                            lengths: a,
                            segments: c
                        }
                    }(this._beziers, this._timeRes);
                    this._length = d.length, this._lengths = d.lengths, this._segments = d.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (c = this._autoRotate)
                    for (this._initialRotations = [], c[0] instanceof Array || (this._autoRotate = c = [c]), s = c.length; - 1 < --s;) {
                        for (o = 0; o < 3; o++) n = c[s][o], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                        n = c[s][2], this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },
            set: function (t) {
                var e, i, n, r, s, o, a, l, u, h, c = this._segCount,
                    d = this._func,
                    f = this._target,
                    p = t !== this._startRatio;
                if (this._timeRes) {
                    if (u = this._lengths, h = this._curSeg, t *= this._length, n = this._li, t > this._l2 && n < c - 1) {
                        for (l = c - 1; n < l && (this._l2 = u[++n]) <= t;);
                        this._l1 = u[n - 1], this._li = n, this._curSeg = h = this._segments[n], this._s2 = h[this._s1 = this._si = 0]
                    } else if (t < this._l1 && 0 < n) {
                        for (; 0 < n && (this._l1 = u[--n]) >= t;);
                        0 === n && t < this._l1 ? this._l1 = 0 : n++, this._l2 = u[n], this._li = n, this._curSeg = h = this._segments[n], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                    }
                    if (e = n, t -= this._l1, n = this._si, t > this._s2 && n < h.length - 1) {
                        for (l = h.length - 1; n < l && (this._s2 = h[++n]) <= t;);
                        this._s1 = h[n - 1], this._si = n
                    } else if (t < this._s1 && 0 < n) {
                        for (; 0 < n && (this._s1 = h[--n]) >= t;);
                        0 === n && t < this._s1 ? this._s1 = 0 : n++, this._s2 = h[n], this._si = n
                    }
                    o = (n + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else o = (t - (e = t < 0 ? 0 : 1 <= t ? c - 1 : c * t >> 0) * (1 / c)) * c;
                for (i = 1 - o, n = this._props.length; - 1 < --n;) r = this._props[n], a = (o * o * (s = this._beziers[r][e]).da + 3 * i * (o * s.ca + i * s.ba)) * o + s.a, this._mod[r] && (a = this._mod[r](a, f)), d[r] ? f[r](a) : f[r] = a;
                if (this._autoRotate) {
                    var m, g, v, _, y, b, x, w = this._autoRotate;
                    for (n = w.length; - 1 < --n;) r = w[n][2], b = w[n][3] || 0, x = !0 === w[n][4] ? 1 : T, s = this._beziers[w[n][0]], m = this._beziers[w[n][1]], s && m && (s = s[e], m = m[e], g = s.a + (s.b - s.a) * o, g += ((_ = s.b + (s.c - s.b) * o) - g) * o, _ += (s.c + (s.d - s.c) * o - _) * o, v = m.a + (m.b - m.a) * o, v += ((y = m.b + (m.c - m.b) * o) - v) * o, y += (m.c + (m.d - m.c) * o - y) * o, a = p ? Math.atan2(y - v, _ - g) * x + b : this._initialRotations[n], this._mod[r] && (a = this._mod[r](a, f)), d[r] ? f[r](a) : f[r] = a)
                }
            }
        }), n = g.prototype, g.bezierThrough = f, g.cubicToQuadratic = P, g._autoCSS = !0, g.quadraticToCubic = function (t, e, i) {
            return new _(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, g._cssRegister = function () {
            var t = i.CSSPlugin;
            if (t) {
                var e = t._internals,
                    f = e._parseToProxy,
                    p = e._setPluginRatio,
                    m = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function (t, e, i, n, r, s) {
                        e instanceof Array && (e = {
                            values: e
                        }), s = new g;
                        var o, a, l, u = e.values,
                            h = u.length - 1,
                            c = [],
                            d = {};
                        if (h < 0) return r;
                        for (o = 0; o <= h; o++) l = f(t, u[o], n, r, s, h !== o), c[o] = l.end;
                        for (a in e) d[a] = e[a];
                        return d.values = c, (r = new m(t, "bezier", 0, 0, l.pt, 2)).data = l, r.plugin = s, r.setRatio = p, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (o = !0 === d.autoRotate ? 0 : Number(d.autoRotate), d.autoRotate = null != l.end.left ? [["left", "top", "rotation", o, !1]] : null != l.end.x && [["x", "y", "rotation", o, !1]]), d.autoRotate && (n._transform || n._enableTransforms(!1), l.autoRotate = n._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, n._overwriteProps.push("rotation")), s._onInitTween(l.proxy, d, n._tween), r
                    }
                })
            }
        }, n._mod = function (t) {
            for (var e, i = this._overwriteProps, n = i.length; - 1 < --n;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
        }, n._kill = function (t) {
            var e, i, n = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e], delete this._func[e], i = n.length; - 1 < --i;) n[i] === e && n.splice(i, 1);
            if (n = this._autoRotate)
                for (i = n.length; - 1 < --i;) t[n[i][2]] && n.splice(i, 1);
            return this._super._kill.call(this, t)
        }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (s, F) {
            var p, C, k, m, q = function () {
                    s.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = q.prototype.setRatio
                },
                u = _gsScope._gsDefine.globals,
                g = {},
                t = q.prototype = new s("css");
            (t.constructor = q).version = "2.0.2", q.API = 2, q.defaultTransformPerspective = 0, q.defaultSkewType = "compensated", q.defaultSmoothOrigin = !0, t = "px", q.suffixMap = {
                top: t,
                right: t,
                bottom: t,
                left: t,
                width: t,
                height: t,
                fontSize: t,
                padding: t,
                margin: t,
                perspective: t,
                lineHeight: ""
            };
            var S, v, _, H, y, P, O, A, e, i, R = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                D = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                h = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                E = /(?:\d|\-|\+|=|#|\.)*/g,
                M = /opacity *= *([^)]*)/i,
                x = /opacity:([^;]*)/i,
                o = /alpha\(opacity *=.+?\)/i,
                w = /^(rgb|hsl)/,
                a = /([A-Z])/g,
                l = /-([a-z])/gi,
                T = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                c = function (t, e) {
                    return e.toUpperCase()
                },
                f = /(?:Left|Right|Width)/i,
                d = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                $ = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                I = /,(?=[^\)]*(?:\(|$))/gi,
                N = /[\s,\(]/i,
                B = Math.PI / 180,
                W = 180 / Math.PI,
                L = {},
                n = {
                    style: {}
                },
                j = _gsScope.document || {
                    createElement: function () {
                        return n
                    }
                },
                z = function (t, e) {
                    return j.createElementNS ? j.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : j.createElement(t)
                },
                X = z("div"),
                U = z("img"),
                r = q._internals = {
                    _specialProps: g
                },
                V = (_gsScope.navigator || {}).userAgent || "",
                Y = (e = V.indexOf("Android"), i = z("a"), _ = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === e || 3 < parseFloat(V.substr(e + 8, 2))), y = _ && parseFloat(V.substr(V.indexOf("Version/") + 8, 2)) < 6, H = -1 !== V.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (P = parseFloat(RegExp.$1)), !!i && (i.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(i.style.opacity))),
                G = function (t) {
                    return M.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                Q = function (t) {
                    _gsScope.console && console.log(t)
                },
                Z = "",
                K = "",
                J = function (t, e) {
                    var i, n, r = (e = e || X).style;
                    if (void 0 !== r[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; - 1 < --n && void 0 === r[i[n] + t];);
                    return 0 <= n ? (Z = "-" + (K = 3 === n ? "ms" : i[n]).toLowerCase() + "-", K + t) : null
                },
                tt = ("undefined" != typeof window ? window : j.defaultView || {
                    getComputedStyle: function () {}
                }).getComputedStyle,
                et = q.getStyle = function (t, e, i, n, r) {
                    var s;
                    return Y || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || tt(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(a, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : G(t)
                },
                it = r.convertToPixels = function (t, e, i, n, r) {
                    if ("px" === n || !n && "lineHeight" !== e) return i;
                    if ("auto" === n || !i) return 0;
                    var s, o, a, l = f.test(e),
                        u = t,
                        h = X.style,
                        c = i < 0,
                        d = 1 === i;
                    if (c && (i = -i), d && (i *= 100), "lineHeight" !== e || n)
                        if ("%" === n && -1 !== e.indexOf("border")) s = i / 100 * (l ? t.clientWidth : t.clientHeight);
                        else {
                            if (h.cssText = "border:0 solid red;position:" + et(t, "position") + ";line-height:0;", "%" !== n && u.appendChild && "v" !== n.charAt(0) && "rem" !== n) h[l ? "borderLeftWidth" : "borderTopWidth"] = i + n;
                            else {
                                if (u = t.parentNode || j.body, -1 !== et(u, "display").indexOf("flex") && (h.position = "absolute"), o = u._gsCache, a = F.ticker.frame, o && l && o.time === a) return o.width * i / 100;
                                h[l ? "width" : "height"] = i + n
                            }
                            u.appendChild(X), s = parseFloat(X[l ? "offsetWidth" : "offsetHeight"]), u.removeChild(X), l && "%" === n && !1 !== q.cacheWidths && ((o = u._gsCache = u._gsCache || {}).time = a, o.width = s / i * 100), 0 !== s || r || (s = it(t, e, i, n, !0))
                        }
                    else o = tt(t).lineHeight, t.style.lineHeight = i, s = parseFloat(tt(t).lineHeight), t.style.lineHeight = o;
                    return d && (s /= 100), c ? -s : s
                },
                nt = r.calculateOffset = function (t, e, i) {
                    if ("absolute" !== et(t, "position", i)) return 0;
                    var n = "left" === e ? "Left" : "Top",
                        r = et(t, "margin" + n, i);
                    return t["offset" + n] - (it(t, e, parseFloat(r), r.replace(E, "")) || 0)
                },
                rt = function (t, e) {
                    var i, n, r, s = {};
                    if (e = e || tt(t, null))
                        if (i = e.length)
                            for (; - 1 < --i;)(-1 === (r = e[i]).indexOf("-transform") || It === r) && (s[r.replace(l, c)] = e.getPropertyValue(r));
                        else
                            for (i in e)(-1 === i.indexOf("Transform") || $t === i) && (s[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(l, c)] = e[i]);
                    return Y || (s.opacity = G(t)), n = Yt(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Lt && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                },
                st = function (t, e, i, n, r) {
                    var s, o, a, l = {},
                        u = t.style;
                    for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(h, "") ? s : 0 : nt(t, o), void 0 !== u[o] && (a = new bt(u, o, u[o], a)));
                    if (n)
                        for (o in n) "className" !== o && (l[o] = n[o]);
                    return {
                        difs: l,
                        firstMPT: a
                    }
                },
                ot = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                lt = function (t, e, i) {
                    if ("svg" === (t.nodeName + "").toLowerCase()) return (i || tt(t))[e] || 0;
                    if (t.getCTM && Xt(t)) return t.getBBox()[e] || 0;
                    var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        r = ot[e],
                        s = r.length;
                    for (i = i || tt(t, null); - 1 < --s;) n -= parseFloat(et(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(et(t, "border" + r[s] + "Width", i, !0)) || 0;
                    return n
                },
                ut = function (t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    (null == t || "" === t) && (t = "0 0");
                    var i, n = t.split(" "),
                        r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                        s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                    if (3 < n.length && !e) {
                        for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(ut(n[i]));
                        return t.join(",")
                    }
                    return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + s + (2 < n.length ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(h, "")), e.oy = parseFloat(s.replace(h, "")), e.v = t), e || t
                },
                ht = function (t, e) {
                    return "function" == typeof t && (t = t(A, O)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                },
                ct = function (t, e) {
                    "function" == typeof t && (t = t(A, O));
                    var i = "string" == typeof t && "=" === t.charAt(1);
                    return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (i ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? t.substr(2) : t) / 100)), null == t ? e : i ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                },
                dt = function (t, e, i, n) {
                    var r, s, o, a, l;
                    return "function" == typeof t && (t = t(A, O)), (a = null == t ? e : "number" == typeof t ? t : (r = 360, s = t.split("_"), o = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : W) - (l ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && ((o %= r) !== o % 180 && (o = o < 0 ? o + r : o - r)), -1 !== t.indexOf("_cw") && o < 0 ? o = (o + 3599999999640) % r - (o / r | 0) * r : -1 !== t.indexOf("ccw") && 0 < o && (o = (o - 3599999999640) % r - (o / r | 0) * r)), e + o)) < 1e-6 && -1e-6 < a && (a = 0), a
                },
                ft = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                pt = function (t, e, i) {
                    return 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                },
                mt = q.parseColor = function (t, e) {
                    var i, n, r, s, o, a, l, u, h, c, d;
                    if (t)
                        if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                        else {
                            if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ft[t]) i = ft[t];
                            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (r = t.charAt(2)) + r + (s = t.charAt(3)) + s), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                            else if ("hsl" === t.substr(0, 3))
                                if (i = d = t.match(R), e) {
                                    if (-1 !== t.indexOf("=")) return t.match(D)
                                } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, n = 2 * (l = Number(i[2]) / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), 3 < i.length && (i[3] = Number(i[3])), i[0] = pt(o + 1 / 3, n, r), i[1] = pt(o, n, r), i[2] = pt(o - 1 / 3, n, r);
                            else i = t.match(R) || ft.transparent;
                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), 3 < i.length && (i[3] = Number(i[3]))
                        }
                    else i = ft.black;
                    return e && !d && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, l = ((u = Math.max(n, r, s)) + (h = Math.min(n, r, s))) / 2, u === h ? o = a = 0 : (c = u - h, a = .5 < l ? c / (2 - u - h) : c / (u + h), o = u === n ? (r - s) / c + (r < s ? 6 : 0) : u === r ? (s - n) / c + 2 : (n - r) / c + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                },
                gt = function (t, e) {
                    var i, n, r, s = t.match(vt) || [],
                        o = 0,
                        a = "";
                    if (!s.length) return t;
                    for (i = 0; i < s.length; i++) n = s[i], o += (r = t.substr(o, t.indexOf(n, o) - o)).length + n.length, 3 === (n = mt(n, e)).length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                    return a + t.substr(o)
                },
                vt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in ft) vt += "|" + t + "\\b";
            vt = new RegExp(vt + ")", "gi"), q.colorStringFilter = function (t) {
                var e, i = t[0] + " " + t[1];
                vt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = gt(t[0], e), t[1] = gt(t[1], e)), vt.lastIndex = 0
            }, F.defaultStringFilter || (F.defaultStringFilter = q.colorStringFilter);
            var _t = function (t, e, s, o) {
                    if (null == t) return function (t) {
                        return t
                    };
                    var a, l = e ? (t.match(vt) || [""])[0] : "",
                        u = t.split(l).join("").match(b) || [],
                        h = t.substr(0, t.indexOf(u[0])),
                        c = ")" === t.charAt(t.length - 1) ? ")" : "",
                        d = -1 !== t.indexOf(" ") ? " " : ",",
                        f = u.length,
                        p = 0 < f ? u[0].replace(R, "") : "";
                    return f ? a = e ? function (t) {
                        var e, i, n, r;
                        if ("number" == typeof t) t += p;
                        else if (o && I.test(t)) {
                            for (r = t.replace(I, "|").split("|"), n = 0; n < r.length; n++) r[n] = a(r[n]);
                            return r.join(",")
                        }
                        if (e = (t.match(vt) || [l])[0], n = (i = t.split(e).join("").match(b) || []).length, f > n--)
                            for (; ++n < f;) i[n] = s ? i[(n - 1) / 2 | 0] : u[n];
                        return h + i.join(d) + d + e + c + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function (t) {
                        var e, i, n;
                        if ("number" == typeof t) t += p;
                        else if (o && I.test(t)) {
                            for (i = t.replace(I, "|").split("|"), n = 0; n < i.length; n++) i[n] = a(i[n]);
                            return i.join(",")
                        }
                        if (n = (e = t.match(b) || []).length, f > n--)
                            for (; ++n < f;) e[n] = s ? e[(n - 1) / 2 | 0] : u[n];
                        return h + e.join(d) + c
                    } : function (t) {
                        return t
                    }
                },
                yt = function (u) {
                    return u = u.split(","),
                        function (t, e, i, n, r, s, o) {
                            var a, l = (e + "").split(" ");
                            for (o = {}, a = 0; a < 4; a++) o[u[a]] = l[a] = l[a] || l[(a - 1) / 2 >> 0];
                            return n.parse(t, o, r, s)
                        }
                },
                bt = (r._setPluginRatio = function (t) {
                    this.plugin.setRatio(t);
                    for (var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT; l;) e = a[l.v], l.r ? e = l.r(e) : e < 1e-6 && -1e-6 < e && (e = 0), l.t[l.p] = e, l = l._next;
                    if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation), 1 === t || 0 === t)
                        for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                            if ((i = l.t).type) {
                                if (1 === i.type) {
                                    for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                    i[s] = r
                                }
                            } else i[s] = i.s + i.xs0;
                            l = l._next
                        }
                }, function (t, e, i, n, r) {
                    this.t = t, this.p = e, this.v = i, this.r = r, n && ((n._prev = this)._next = n)
                }),
                xt = (r._parseToProxy = function (t, e, i, n, r, s) {
                    var o, a, l, u, h, c = n,
                        d = {},
                        f = {},
                        p = i._transform,
                        m = L;
                    for (i._transform = null, L = e, n = h = i.parse(t, e, n, r), L = m, s && (i._transform = p, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c;) {
                        if (n.type <= 1 && (f[a = n.p] = n.s + n.c, d[a] = n.s, s || (u = new bt(n, "s", a, u, n.r), n.c = 0), 1 === n.type))
                            for (o = n.l; 0 < --o;) l = "xn" + o, f[a = n.p + "_" + l] = n.data[l], d[a] = n[l], s || (u = new bt(n, l, a, u, n.rxp[l]));
                        n = n._next
                    }
                    return {
                        proxy: d,
                        end: f,
                        firstMPT: u,
                        pt: h
                    }
                }, r.CSSPropTween = function (t, e, i, n, r, s, o, a, l, u, h) {
                    this.t = t, this.p = e, this.s = i, this.c = n, this.n = o || e, t instanceof xt || m.push(this.n), this.r = a ? "function" == typeof a ? a : Math.round : a, this.type = s || 0, l && (this.pr = l, p = !0), this.b = void 0 === u ? i : u, this.e = void 0 === h ? i + n : h, r && ((this._next = r)._prev = this)
                }),
                wt = function (t, e, i, n, r, s) {
                    var o = new xt(t, e, i, n - i, r, -1, s);
                    return o.b = i, o.e = o.xs0 = n, o
                },
                Tt = q.parseComplex = function (t, e, i, n, r, s, o, a, l, u) {
                    i = i || s || "", "function" == typeof n && (n = n(A, O)), o = new xt(t, e, 0, 0, o, u ? 2 : 1, null, !1, a, i, n), n += "", r && vt.test(n + i) && (n = [i, n], q.colorStringFilter(n), i = n[0], n = n[1]);
                    var h, c, d, f, p, m, g, v, _, y, b, x, w, T = i.split(", ").join(",").split(" "),
                        C = n.split(", ").join(",").split(" "),
                        P = T.length,
                        k = !1 !== S;
                    for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (C = -1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (T = T.join(" ").replace(I, ", ").split(" "), C.join(" ").replace(I, ", ").split(" ")) : (T = T.join(" ").split(",").join(", ").split(" "), C.join(" ").split(",").join(", ").split(" ")), P = T.length), P !== C.length && (P = (T = (s || "").split(" ")).length), o.plugin = l, o.setRatio = u, h = vt.lastIndex = 0; h < P; h++)
                        if (f = T[h], p = C[h] + "", (v = parseFloat(f)) || 0 === v) o.appendXtra("", v, ht(p, v), p.replace(D, ""), !(!k || -1 === p.indexOf("px")) && Math.round, !0);
                        else if (r && vt.test(f)) x = ")" + ((x = p.indexOf(")") + 1) ? p.substr(x) : ""), w = -1 !== p.indexOf("hsl") && Y, y = p, f = mt(f, w), p = mt(p, w), (_ = 6 < f.length + p.length) && !Y && 0 === p[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(C[h]).join("transparent")) : (Y || (_ = !1), w ? o.appendXtra(y.substr(0, y.indexOf("hsl")) + (_ ? "hsla(" : "hsl("), f[0], ht(p[0], f[0]), ",", !1, !0).appendXtra("", f[1], ht(p[1], f[1]), "%,", !1).appendXtra("", f[2], ht(p[2], f[2]), _ ? "%," : "%" + x, !1) : o.appendXtra(y.substr(0, y.indexOf("rgb")) + (_ ? "rgba(" : "rgb("), f[0], p[0] - f[0], ",", Math.round, !0).appendXtra("", f[1], p[1] - f[1], ",", Math.round).appendXtra("", f[2], p[2] - f[2], _ ? "," : x, Math.round), _ && (f = f.length < 4 ? 1 : f[3], o.appendXtra("", f, (p.length < 4 ? 1 : p[3]) - f, x, !1))), vt.lastIndex = 0;
                    else if (m = f.match(R)) {
                        if (!(g = p.match(D)) || g.length !== m.length) return o;
                        for (c = d = 0; c < m.length; c++) b = m[c], y = f.indexOf(b, d), o.appendXtra(f.substr(d, y - d), Number(b), ht(g[c], b), "", !(!k || "px" !== f.substr(y + b.length, 2)) && Math.round, 0 === c), d = y + b.length;
                        o["xs" + o.l] += f.substr(d)
                    } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + p : p;
                    if (-1 !== n.indexOf("=") && o.data) {
                        for (x = o.xs0 + o.data.s, h = 1; h < o.l; h++) x += o["xs" + h] + o.data["xn" + h];
                        o.e = x + o["xs" + h]
                    }
                    return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                },
                Ct = 9;
            for ((t = xt.prototype).l = t.pr = 0; 0 < --Ct;) t["xn" + Ct] = 0, t["xs" + Ct] = "";
            t.xs0 = "", t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null, t.appendXtra = function (t, e, i, n, r, s) {
                var o = this,
                    a = o.l;
                return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", 0 < a ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new xt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0)) : (o.data = {
                    s: e + i
                }, o.rxp = {}, o.s = e, o.c = i, o.r = r)) : o["xs" + a] += e + (n || ""), o
            };
            var Pt = function (t, e) {
                    e = e || {}, this.p = e.prefix && J(t) || t, g[t] = g[this.p] = this, this.format = e.formatter || _t(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                },
                kt = r._registerComplexSpecialProp = function (t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var n, r = t.split(","),
                        s = e.defaultValue;
                    for (i = i || [s], n = 0; n < r.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, new Pt(r[n], e)
                },
                St = r._registerPluginProp = function (t) {
                    if (!g[t]) {
                        var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        kt(t, {
                            parser: function (t, e, i, n, r, s, o) {
                                var a = u.com.greensock.plugins[l];
                                return a ? (a._cssRegister(), g[i].parse(t, e, i, n, r, s, o)) : (Q("Error: " + l + " js file not loaded."), r)
                            }
                        })
                    }
                };
            (t = Pt.prototype).parseComplex = function (t, e, i, n, r, s) {
                var o, a, l, u, h, c, d = this.keyword;
                if (this.multi && (I.test(i) || I.test(e) ? (a = e.replace(I, "|").split("|"), l = i.replace(I, "|").split("|")) : d && (a = [e], l = [i])), l) {
                    for (u = l.length > a.length ? l.length : a.length, o = 0; o < u; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, d && ((h = e.indexOf(d)) !== (c = i.indexOf(d)) && (-1 === c ? a[o] = a[o].split(d).join("") : -1 === h && (a[o] += " " + d)));
                    e = a.join(", "), i = l.join(", ")
                }
                return Tt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
            }, t.parse = function (t, e, i, n, r, s, o) {
                return this.parseComplex(t.style, this.format(et(t, this.p, k, !1, this.dflt)), this.format(e), r, s)
            }, q.registerSpecialProp = function (t, l, u) {
                kt(t, {
                    parser: function (t, e, i, n, r, s, o) {
                        var a = new xt(t, i, 0, 0, r, 2, i, !1, u);
                        return a.plugin = s, a.setRatio = l(t, e, n._tween, i), a
                    },
                    priority: u
                })
            }, q.useSVGTransformAttr = !0;
            var Ot, At, Rt, Dt, Et, Mt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                $t = J("transform"),
                It = Z + "transform",
                Nt = J("transformOrigin"),
                Lt = null !== J("perspective"),
                jt = r.Transform = function () {
                    this.perspective = parseFloat(q.defaultTransformPerspective) || 0, this.force3D = !(!1 === q.defaultForce3D || !Lt) && (q.defaultForce3D || "auto")
                },
                zt = _gsScope.SVGElement,
                Ft = function (t, e, i) {
                    var n, r = j.createElementNS("http://www.w3.org/2000/svg", t),
                        s = /([a-z])([A-Z])/g;
                    for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                    return e.appendChild(r), r
                },
                qt = j.documentElement || {},
                Ht = (Et = P || /Android/i.test(V) && !_gsScope.chrome, j.createElementNS && !Et && (At = Ft("svg", qt), Dt = (Rt = Ft("rect", At, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, Rt.style[Nt] = "50% 50%", Rt.style[$t] = "scaleX(0.5)", Et = Dt === Rt.getBoundingClientRect().width && !(H && Lt), qt.removeChild(At)), Et),
                Bt = function (t, e, i, n, r, s) {
                    var o, a, l, u, h, c, d, f, p, m, g, v, _, y, b = t._gsTransform,
                        x = Vt(t, !0);
                    b && (_ = b.xOrigin, y = b.yOrigin), (!n || (o = n.split(" ")).length < 2) && (0 === (d = t.getBBox()).x && 0 === d.y && d.width + d.height === 0 && (d = {
                        x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                        y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                        width: 0,
                        height: 0
                    }), o = [(-1 !== (e = ut(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), i.xOrigin = u = parseFloat(o[0]), i.yOrigin = h = parseFloat(o[1]), n && x !== Ut && (c = x[0], d = x[1], f = x[2], p = x[3], m = x[4], g = x[5], (v = c * p - d * f) && (a = u * (p / v) + h * (-f / v) + (f * g - p * m) / v, l = u * (-d / v) + h * (c / v) - (c * g - d * m) / v, u = i.xOrigin = o[0] = a, h = i.yOrigin = o[1] = l)), b && (s && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), r || !1 !== r && !1 !== q.defaultSmoothOrigin ? (a = u - _, l = h - y, b.xOffset += a * x[0] + l * x[2] - a, b.yOffset += a * x[1] + l * x[3] - l) : b.xOffset = b.yOffset = 0), s || t.setAttribute("data-svg-origin", o.join(" "))
                },
                Wt = function (t) {
                    var e, i = z("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        n = this.parentNode,
                        r = this.nextSibling,
                        s = this.style.cssText;
                    if (qt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                        e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Wt
                    } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                    return r ? n.insertBefore(this, r) : n.appendChild(this), qt.removeChild(i), this.style.cssText = s, e
                },
                Xt = function (t) {
                    return !(!zt || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function (e) {
                        try {
                            return e.getBBox()
                        } catch (t) {
                            return Wt.call(e, !0)
                        }
                    }(t))
                },
                Ut = [1, 0, 0, 1, 0, 0],
                Vt = function (t, e) {
                    var i, n, r, s, o, a, l = t._gsTransform || new jt,
                        u = t.style;
                    if ($t ? n = et(t, It, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(d)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !$t || !(a = !tt(t) || "none" === tt(t).display) && t.parentNode || (a && (s = u.display, u.display = "block"), t.parentNode || (o = 1, qt.appendChild(t)), i = !(n = et(t, It, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, s ? u.display = s : a && Kt(u, "display"), o && qt.removeChild(t)), (l.svg || t.getCTM && Xt(t)) && (i && -1 !== (u[$t] + "").indexOf("matrix") && (n = u[$t], i = 0), r = t.getAttribute("transform"), i && r && (n = "matrix(" + (r = t.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")", i = 0)), i) return Ut;
                    for (r = (n || "").match(R) || [], Ct = r.length; - 1 < --Ct;) s = Number(r[Ct]), r[Ct] = (o = s - (s |= 0)) ? (1e5 * o + (o < 0 ? -.5 : .5) | 0) / 1e5 + s : s;
                    return e && 6 < r.length ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                },
                Yt = r.getTransform = function (t, e, i, n) {
                    if (t._gsTransform && i && !n) return t._gsTransform;
                    var r, s, o, a, l, u, h = i && t._gsTransform || new jt,
                        c = h.scaleX < 0,
                        d = Lt && (parseFloat(et(t, Nt, e, !1, "0 0 0").split(" ")[2]) || h.zOrigin) || 0,
                        f = parseFloat(q.defaultTransformPerspective) || 0;
                    if (h.svg = !(!t.getCTM || !Xt(t)), h.svg && (Bt(t, et(t, Nt, e, !1, "50% 50%") + "", h, t.getAttribute("data-svg-origin")), Ot = q.useSVGTransformAttr || Ht), (r = Vt(t)) !== Ut) {
                        if (16 === r.length) {
                            var p, m, g, v, _, y = r[0],
                                b = r[1],
                                x = r[2],
                                w = r[3],
                                T = r[4],
                                C = r[5],
                                P = r[6],
                                k = r[7],
                                S = r[8],
                                O = r[9],
                                A = r[10],
                                R = r[12],
                                D = r[13],
                                E = r[14],
                                M = r[11],
                                $ = Math.atan2(P, A);
                            h.zOrigin && (R = S * (E = -h.zOrigin) - r[12], D = O * E - r[13], E = A * E + h.zOrigin - r[14]), h.rotationX = $ * W, $ && (p = T * (v = Math.cos(-$)) + S * (_ = Math.sin(-$)), m = C * v + O * _, g = P * v + A * _, S = T * -_ + S * v, O = C * -_ + O * v, A = P * -_ + A * v, M = k * -_ + M * v, T = p, C = m, P = g), $ = Math.atan2(-x, A), h.rotationY = $ * W, $ && (m = b * (v = Math.cos(-$)) - O * (_ = Math.sin(-$)), g = x * v - A * _, O = b * _ + O * v, A = x * _ + A * v, M = w * _ + M * v, y = p = y * v - S * _, b = m, x = g), $ = Math.atan2(b, y), h.rotation = $ * W, $ && (p = y * (v = Math.cos($)) + b * (_ = Math.sin($)), m = T * v + C * _, g = S * v + O * _, b = b * v - y * _, C = C * v - T * _, O = O * v - S * _, y = p, T = m, S = g), h.rotationX && 359.9 < Math.abs(h.rotationX) + Math.abs(h.rotation) && (h.rotationX = h.rotation = 0, h.rotationY = 180 - h.rotationY), $ = Math.atan2(T, C), h.scaleX = (1e5 * Math.sqrt(y * y + b * b + x * x) + .5 | 0) / 1e5, h.scaleY = (1e5 * Math.sqrt(C * C + P * P) + .5 | 0) / 1e5, h.scaleZ = (1e5 * Math.sqrt(S * S + O * O + A * A) + .5 | 0) / 1e5, y /= h.scaleX, T /= h.scaleY, b /= h.scaleX, C /= h.scaleY, 2e-5 < Math.abs($) ? (h.skewX = $ * W, T = 0, "simple" !== h.skewType && (h.scaleY *= 1 / Math.cos($))) : h.skewX = 0, h.perspective = M ? 1 / (M < 0 ? -M : M) : 0, h.x = R, h.y = D, h.z = E, h.svg && (h.x -= h.xOrigin - (h.xOrigin * y - h.yOrigin * T), h.y -= h.yOrigin - (h.yOrigin * b - h.xOrigin * C))
                        } else if (!Lt || n || !r.length || h.x !== r[4] || h.y !== r[5] || !h.rotationX && !h.rotationY) {
                            var I = 6 <= r.length,
                                N = I ? r[0] : 1,
                                L = r[1] || 0,
                                j = r[2] || 0,
                                z = I ? r[3] : 1;
                            h.x = r[4] || 0, h.y = r[5] || 0, o = Math.sqrt(N * N + L * L), a = Math.sqrt(z * z + j * j), l = N || L ? Math.atan2(L, N) * W : h.rotation || 0, u = j || z ? Math.atan2(j, z) * W + l : h.skewX || 0, h.scaleX = o, h.scaleY = a, h.rotation = l, h.skewX = u, Lt && (h.rotationX = h.rotationY = h.z = 0, h.perspective = f, h.scaleZ = 1), h.svg && (h.x -= h.xOrigin - (h.xOrigin * N + h.yOrigin * j), h.y -= h.yOrigin - (h.xOrigin * L + h.yOrigin * z))
                        }
                        for (s in 90 < Math.abs(h.skewX) && Math.abs(h.skewX) < 270 && (c ? (h.scaleX *= -1, h.skewX += h.rotation <= 0 ? 180 : -180, h.rotation += h.rotation <= 0 ? 180 : -180) : (h.scaleY *= -1, h.skewX += h.skewX <= 0 ? 180 : -180)), h.zOrigin = d, h) h[s] < 2e-5 && -2e-5 < h[s] && (h[s] = 0)
                    }
                    return i && ((t._gsTransform = h).svg && (Ot && t.style[$t] ? F.delayedCall(.001, function () {
                        Kt(t.style, $t)
                    }) : !Ot && t.getAttribute("transform") && F.delayedCall(.001, function () {
                        t.removeAttribute("transform")
                    }))), h
                },
                Gt = function (t) {
                    var e, i, n = this.data,
                        r = -n.rotation * B,
                        s = r + n.skewX * B,
                        o = 1e5,
                        a = (Math.cos(r) * n.scaleX * o | 0) / o,
                        l = (Math.sin(r) * n.scaleX * o | 0) / o,
                        u = (Math.sin(s) * -n.scaleY * o | 0) / o,
                        h = (Math.cos(s) * n.scaleY * o | 0) / o,
                        c = this.t.style,
                        d = this.t.currentStyle;
                    if (d) {
                        i = l, l = -u, u = -i, e = d.filter, c.filter = "";
                        var f, p, m = this.t.offsetWidth,
                            g = this.t.offsetHeight,
                            v = "absolute" !== d.position,
                            _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + h,
                            y = n.x + m * n.xPercent / 100,
                            b = n.y + g * n.yPercent / 100;
                        if (null != n.ox && (y += (f = (n.oxp ? m * n.ox * .01 : n.ox) - m / 2) - (f * a + (p = (n.oyp ? g * n.oy * .01 : n.oy) - g / 2) * l), b += p - (f * u + p * h)), v ? _ += ", Dx=" + ((f = m / 2) - (f * a + (p = g / 2) * l) + y) + ", Dy=" + (p - (f * u + p * h) + b) + ")" : _ += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace($, _) : c.filter = _ + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === h && (v && -1 === _.indexOf("Dx=0, Dy=0") || M.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !v) {
                            var x, w, T, C = P < 8 ? 1 : -1;
                            for (f = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((a < 0 ? -a : a) * m + (l < 0 ? -l : l) * g)) / 2 + y), n.ieOffsetY = Math.round((g - ((h < 0 ? -h : h) * g + (u < 0 ? -u : u) * m)) / 2 + b), Ct = 0; Ct < 4; Ct++) T = (i = -1 !== (x = d[w = at[Ct]]).indexOf("px") ? parseFloat(x) : it(this.t, w, parseFloat(x), x.replace(E, "")) || 0) !== n[w] ? Ct < 2 ? -n.ieOffsetX : -n.ieOffsetY : Ct < 2 ? f - n.ieOffsetX : p - n.ieOffsetY, c[w] = (n[w] = Math.round(i - T * (0 === Ct || 2 === Ct ? 1 : C))) + "px"
                        }
                    }
                },
                Qt = r.set3DTransformRatio = r.setTransformRatio = function (t) {
                    var e, i, n, r, s, o, a, l, u, h, c, d, f, p, m, g, v, _, y, b, x, w, T, C = this.data,
                        P = this.t.style,
                        k = C.rotation,
                        S = C.rotationX,
                        O = C.rotationY,
                        A = C.scaleX,
                        R = C.scaleY,
                        D = C.scaleZ,
                        E = C.x,
                        M = C.y,
                        $ = C.z,
                        I = C.svg,
                        N = C.perspective,
                        L = C.force3D,
                        j = C.skewY,
                        z = C.skewX;
                    if (j && (z += j, k += j), !((1 !== t && 0 !== t || "auto" !== L || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && L || $ || N || O || S || 1 !== D) || Ot && I || !Lt) k || z || I ? (k *= B, w = z * B, T = 1e5, i = Math.cos(k) * A, s = Math.sin(k) * A, n = Math.sin(k - w) * -R, o = Math.cos(k - w) * R, w && "simple" === C.skewType && (e = Math.tan(w - j * B), n *= e = Math.sqrt(1 + e * e), o *= e, j && (e = Math.tan(j * B), i *= e = Math.sqrt(1 + e * e), s *= e)), I && (E += C.xOrigin - (C.xOrigin * i + C.yOrigin * n) + C.xOffset, M += C.yOrigin - (C.xOrigin * s + C.yOrigin * o) + C.yOffset, Ot && (C.xPercent || C.yPercent) && (m = this.t.getBBox(), E += .01 * C.xPercent * m.width, M += .01 * C.yPercent * m.height), E < (m = 1e-6) && -m < E && (E = 0), M < m && -m < M && (M = 0)), y = (i * T | 0) / T + "," + (s * T | 0) / T + "," + (n * T | 0) / T + "," + (o * T | 0) / T + "," + E + "," + M + ")", I && Ot ? this.t.setAttribute("transform", "matrix(" + y) : P[$t] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + y) : P[$t] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + R + "," + E + "," + M + ")";
                    else {
                        if (H && (A < (m = 1e-4) && -m < A && (A = D = 2e-5), R < m && -m < R && (R = D = 2e-5), !N || C.z || C.rotationX || C.rotationY || (N = 0)), k || z) k *= B, g = i = Math.cos(k), v = s = Math.sin(k), z && (k -= z * B, g = Math.cos(k), v = Math.sin(k), "simple" === C.skewType && (e = Math.tan((z - j) * B), g *= e = Math.sqrt(1 + e * e), v *= e, C.skewY && (e = Math.tan(j * B), i *= e = Math.sqrt(1 + e * e), s *= e))), n = -v, o = g;
                        else {
                            if (!(O || S || 1 !== D || N || I)) return void(P[$t] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + E + "px," + M + "px," + $ + "px)" + (1 !== A || 1 !== R ? " scale(" + A + "," + R + ")" : ""));
                            i = o = 1, n = s = 0
                        }
                        h = 1, r = a = l = u = c = d = 0, f = N ? -1 / N : 0, p = C.zOrigin, m = 1e-6, b = ",", x = "0", (k = O * B) && (g = Math.cos(k), c = f * (l = -(v = Math.sin(k))), r = i * v, a = s * v, f *= h = g, i *= g, s *= g), (k = S * B) && (e = n * (g = Math.cos(k)) + r * (v = Math.sin(k)), _ = o * g + a * v, u = h * v, d = f * v, r = n * -v + r * g, a = o * -v + a * g, h *= g, f *= g, n = e, o = _), 1 !== D && (r *= D, a *= D, h *= D, f *= D), 1 !== R && (n *= R, o *= R, u *= R, d *= R), 1 !== A && (i *= A, s *= A, l *= A, c *= A), (p || I) && (p && (E += r * -p, M += a * -p, $ += h * -p + p), I && (E += C.xOrigin - (C.xOrigin * i + C.yOrigin * n) + C.xOffset, M += C.yOrigin - (C.xOrigin * s + C.yOrigin * o) + C.yOffset), E < m && -m < E && (E = x), M < m && -m < M && (M = x), $ < m && -m < $ && ($ = 0)), y = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(", y += (i < m && -m < i ? x : i) + b + (s < m && -m < s ? x : s) + b + (l < m && -m < l ? x : l), y += b + (c < m && -m < c ? x : c) + b + (n < m && -m < n ? x : n) + b + (o < m && -m < o ? x : o), S || O || 1 !== D ? (y += b + (u < m && -m < u ? x : u) + b + (d < m && -m < d ? x : d) + b + (r < m && -m < r ? x : r), y += b + (a < m && -m < a ? x : a) + b + (h < m && -m < h ? x : h) + b + (f < m && -m < f ? x : f) + b) : y += ",0,0,0,0,1,0,", y += E + b + M + b + $ + b + (N ? 1 + -$ / N : 1) + ")", P[$t] = y
                    }
                };
            (t = jt.prototype).x = t.y = t.z = t.skewX = t.skewY = t.rotation = t.rotationX = t.rotationY = t.zOrigin = t.xPercent = t.yPercent = t.xOffset = t.yOffset = 0, t.scaleX = t.scaleY = t.scaleZ = 1, kt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function (t, e, i, n, r, s, o) {
                    if (n._lastParsedTransform === o) return r;
                    var a, l = (n._lastParsedTransform = o).scale && "function" == typeof o.scale ? o.scale : 0;
                    "function" == typeof o[i] && (a = o[i], o[i] = e), l && (o.scale = l(A, t));
                    var u, h, c, d, f, p, m, g, v, _ = t._gsTransform,
                        y = t.style,
                        b = Mt.length,
                        x = o,
                        w = {},
                        T = "transformOrigin",
                        C = Yt(t, k, !0, x.parseTransform),
                        P = x.transform && ("function" == typeof x.transform ? x.transform(A, O) : x.transform);
                    if (C.skewType = x.skewType || C.skewType || q.defaultSkewType, n._transform = C, "rotationZ" in x && (x.rotation = x.rotationZ), P && "string" == typeof P && $t)(h = X.style)[$t] = P, h.display = "block", h.position = "absolute", -1 !== P.indexOf("%") && (h.width = et(t, "width"), h.height = et(t, "height")), j.body.appendChild(X), u = Yt(X, null, !1), "simple" === C.skewType && (u.scaleY *= Math.cos(u.skewX * B)), C.svg && (p = C.xOrigin, m = C.yOrigin, u.x -= C.xOffset, u.y -= C.yOffset, (x.transformOrigin || x.svgOrigin) && (P = {}, Bt(t, ut(x.transformOrigin), P, x.svgOrigin, x.smoothOrigin, !0), p = P.xOrigin, m = P.yOrigin, u.x -= P.xOffset - C.xOffset, u.y -= P.yOffset - C.yOffset), (p || m) && (g = Vt(X, !0), u.x -= p - (p * g[0] + m * g[2]), u.y -= m - (p * g[1] + m * g[3]))), j.body.removeChild(X), u.perspective || (u.perspective = C.perspective), null != x.xPercent && (u.xPercent = ct(x.xPercent, C.xPercent)), null != x.yPercent && (u.yPercent = ct(x.yPercent, C.yPercent));
                    else if ("object" == typeof x) {
                        if (u = {
                                scaleX: ct(null != x.scaleX ? x.scaleX : x.scale, C.scaleX),
                                scaleY: ct(null != x.scaleY ? x.scaleY : x.scale, C.scaleY),
                                scaleZ: ct(x.scaleZ, C.scaleZ),
                                x: ct(x.x, C.x),
                                y: ct(x.y, C.y),
                                z: ct(x.z, C.z),
                                xPercent: ct(x.xPercent, C.xPercent),
                                yPercent: ct(x.yPercent, C.yPercent),
                                perspective: ct(x.transformPerspective, C.perspective)
                            }, null != (f = x.directionalRotation))
                            if ("object" == typeof f)
                                for (h in f) x[h] = f[h];
                            else x.rotation = f;
                        "string" == typeof x.x && -1 !== x.x.indexOf("%") && (u.x = 0, u.xPercent = ct(x.x, C.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (u.y = 0, u.yPercent = ct(x.y, C.yPercent)), u.rotation = dt("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : C.rotation, C.rotation, "rotation", w), Lt && (u.rotationX = dt("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", w), u.rotationY = dt("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", w)), u.skewX = dt(x.skewX, C.skewX), u.skewY = dt(x.skewY, C.skewY)
                    }
                    for (Lt && null != x.force3D && (C.force3D = x.force3D, d = !0), (c = C.force3D || C.z || C.rotationX || C.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == x.scale || (u.scaleZ = 1); - 1 < --b;)(1e-6 < (P = u[v = Mt[b]] - C[v]) || P < -1e-6 || null != x[v] || null != L[v]) && (d = !0, r = new xt(C, v, C[v], P, r), v in w && (r.e = w[v]), r.xs0 = 0, r.plugin = s, n._overwriteProps.push(r.n));
                    return P = x.transformOrigin, C.svg && (P || x.svgOrigin) && (p = C.xOffset, m = C.yOffset, Bt(t, ut(P), u, x.svgOrigin, x.smoothOrigin), r = wt(C, "xOrigin", (_ ? C : u).xOrigin, u.xOrigin, r, T), r = wt(C, "yOrigin", (_ ? C : u).yOrigin, u.yOrigin, r, T), (p !== C.xOffset || m !== C.yOffset) && (r = wt(C, "xOffset", _ ? p : C.xOffset, C.xOffset, r, T), r = wt(C, "yOffset", _ ? m : C.yOffset, C.yOffset, r, T)), P = "0px 0px"), (P || Lt && c && C.zOrigin) && ($t ? (d = !0, v = Nt, P = (P || et(t, v, k, !1, "50% 50%")) + "", (r = new xt(y, v, 0, 0, r, -1, T)).b = y[v], r.plugin = s, r.xs0 = r.e = Lt ? (h = C.zOrigin, P = P.split(" "), C.zOrigin = (2 < P.length && (0 === h || "0px" !== P[2]) ? parseFloat(P[2]) : h) || 0, r.xs0 = r.e = P[0] + " " + (P[1] || "50%") + " 0px", (r = new xt(C, "zOrigin", 0, 0, r, -1, r.n)).b = h, C.zOrigin) : P) : ut(P + "", C)), d && (n._transformType = C.svg && Ot || !c && 3 !== this._transformType ? 2 : 3), a && (o[i] = a), l && (o.scale = l), r
                },
                prefix: !0
            }), kt("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), kt("borderRadius", {
                defaultValue: "0px",
                parser: function (t, e, i, n, r, s) {
                    e = this.format(e);
                    var o, a, l, u, h, c, d, f, p, m, g, v, _, y, b, x, w = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        T = t.style;
                    for (p = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), a = 0; a < w.length; a++) this.p.indexOf("border") && (w[a] = J(w[a])), -1 !== (h = u = et(t, w[a], k, !1, "0px")).indexOf(" ") && (h = (u = h.split(" "))[0], u = u[1]), c = l = o[a], d = parseFloat(h), v = h.substr((d + "").length), "" === (g = (_ = "=" === c.charAt(1)) ? (f = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), f *= parseFloat(c), c.substr((f + "").length - (f < 0 ? 1 : 0)) || "") : (f = parseFloat(c), c.substr((f + "").length))) && (g = C[i] || v), g !== v && (y = it(t, "borderLeft", d, v), b = it(t, "borderTop", d, v), u = "%" === g ? (h = y / p * 100 + "%", b / m * 100 + "%") : "em" === g ? (h = y / (x = it(t, "borderLeft", 1, "em")) + "em", b / x + "em") : (h = y + "px", b + "px"), _ && (c = parseFloat(h) + f + g, l = parseFloat(u) + f + g)), r = Tt(T, w[a], h + " " + u, c + " " + l, !1, "0px", r);
                    return r
                },
                prefix: !0,
                formatter: _t("0px 0px 0px 0px", !1, !0)
            }), kt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function (t, e, i, n, r, s) {
                    return Tt(t.style, i, this.format(et(t, i, k, !1, "0px 0px")), this.format(e), !1, "0px", r)
                },
                prefix: !0,
                formatter: _t("0px 0px", !1, !0)
            }), kt("backgroundPosition", {
                defaultValue: "0 0",
                parser: function (t, e, i, n, r, s) {
                    var o, a, l, u, h, c, d = "background-position",
                        f = k || tt(t, null),
                        p = this.format((f ? P ? f.getPropertyValue(d + "-x") + " " + f.getPropertyValue(d + "-y") : f.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        m = this.format(e);
                    if (-1 !== p.indexOf("%") != (-1 !== m.indexOf("%")) && m.split(",").length < 2 && ((c = et(t, "backgroundImage").replace(T, "")) && "none" !== c)) {
                        for (o = p.split(" "), a = m.split(" "), U.setAttribute("src", c), l = 2; - 1 < --l;)(u = -1 !== (p = o[l]).indexOf("%")) !== (-1 !== a[l].indexOf("%")) && (h = 0 === l ? t.offsetWidth - U.width : t.offsetHeight - U.height, o[l] = u ? parseFloat(p) / 100 * h + "px" : parseFloat(p) / h * 100 + "%");
                        p = o.join(" ")
                    }
                    return this.parseComplex(t.style, p, m, r, s)
                },
                formatter: ut
            }), kt("backgroundSize", {
                defaultValue: "0 0",
                formatter: function (t) {
                    return "co" === (t += "").substr(0, 2) ? t : ut(-1 === t.indexOf(" ") ? t + " " + t : t)
                }
            }), kt("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), kt("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), kt("transformStyle", {
                prefix: !0
            }), kt("backfaceVisibility", {
                prefix: !0
            }), kt("userSelect", {
                prefix: !0
            }), kt("margin", {
                parser: yt("marginTop,marginRight,marginBottom,marginLeft")
            }), kt("padding", {
                parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), kt("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function (t, e, i, n, r, s) {
                    var o, a, l;
                    return e = P < 9 ? (a = t.currentStyle, l = P < 8 ? " " : ",", o = "rect(" + a.clipTop + l + a.clipRight + l + a.clipBottom + l + a.clipLeft + ")", this.format(e).split(",").join(l)) : (o = this.format(et(t, this.p, k, !1, this.dflt)), this.format(e)), this.parseComplex(t.style, o, e, r, s)
                }
            }), kt("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), kt("autoRound,strictUnits", {
                parser: function (t, e, i, n, r) {
                    return r
                }
            }), kt("border", {
                defaultValue: "0px solid #000",
                parser: function (t, e, i, n, r, s) {
                    var o = et(t, "borderTopWidth", k, !1, "0px"),
                        a = this.format(e).split(" "),
                        l = a[0].replace(E, "");
                    return "px" !== l && (o = parseFloat(o) / it(t, "borderTopWidth", 1, l) + l), this.parseComplex(t.style, this.format(o + " " + et(t, "borderTopStyle", k, !1, "solid") + " " + et(t, "borderTopColor", k, !1, "#000")), a.join(" "), r, s)
                },
                color: !0,
                formatter: function (t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(vt) || ["#000"])[0]
                }
            }), kt("borderWidth", {
                parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), kt("float,cssFloat,styleFloat", {
                parser: function (t, e, i, n, r, s) {
                    var o = t.style,
                        a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                    return new xt(o, a, 0, 0, r, -1, i, !1, 0, o[a], e)
                }
            });
            var Zt = function (t) {
                var e, i = this.t,
                    n = i.filter || et(this.data, "filter") || "",
                    r = this.s + this.c * t | 0;
                100 === r && (e = -1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), !et(this.data, "filter")) : (i.filter = n.replace(o, ""), !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(M, "opacity=" + r))
            };
            kt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function (t, e, i, n, r, s) {
                    var o = parseFloat(et(t, "opacity", k, !1, "1")),
                        a = t.style,
                        l = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === et(t, "visibility", k) && 0 !== e && (o = 0), Y ? r = new xt(a, "opacity", o, e - o, r) : ((r = new xt(a, "opacity", 100 * o, 100 * (e - o), r)).xn1 = l ? 1 : 0, a.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = s, r.setRatio = Zt), l && ((r = new xt(a, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
                }
            });
            var Kt = function (t, e) {
                    e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(a, "-$1").toLowerCase())) : t.removeAttribute(e))
                },
                Jt = function (t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Kt(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            kt("className", {
                parser: function (t, e, i, n, r, s, o) {
                    var a, l, u, h, c, d = t.getAttribute("class") || "",
                        f = t.style.cssText;
                    if ((r = n._classNamePT = new xt(t, i, 0, 0, r, 2)).setRatio = Jt, r.pr = -11, p = !0, r.b = d, l = rt(t, k), u = t._gsClassPT) {
                        for (h = {}, c = u.data; c;) h[c.p] = 1, c = c._next;
                        u.setRatio(1)
                    }
                    return (t._gsClassPT = r).e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", r.e), a = st(t, l, rt(t), o, h), t.setAttribute("class", d), r.data = a.firstMPT, t.style.cssText = f, r.xfirst = n.parse(t, a.difs, r, s)
                }
            });
            var te = function (t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, n, r, s, o = this.t.style,
                        a = g.transform.parse;
                    if ("all" === this.e) r = !(o.cssText = "");
                    else
                        for (n = (e = this.e.split(" ").join("").split(",")).length; - 1 < --n;) i = e[n], g[i] && (g[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Nt : g[i].p), Kt(o, i);
                    r && (Kt(o, $t), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (kt("clearProps", {
                    parser: function (t, e, i, n, r) {
                        return (r = new xt(t, i, 0, 0, r, 2)).setRatio = te, r.e = e, r.pr = -10, r.data = n._tween, p = !0, r
                    }
                }), t = "bezier,throwProps,physicsProps,physics2D".split(","), Ct = t.length; Ct--;) St(t[Ct]);
            (t = q.prototype)._firstPT = t._lastParsedTransform = t._transform = null, t._onInitTween = function (t, e, i, n) {
                if (!t.nodeType) return !1;
                this._target = O = t, this._tween = i, this._vars = e, A = n, S = e.autoRound, p = !1, C = e.suffixMap || q.suffixMap, k = tt(t, ""), m = this._overwriteProps;
                var r, s, o, a, l, u, h, c, d, f = t.style;
                if (v && "" === f.zIndex && (("auto" === (r = et(t, "zIndex", k)) || "" === r) && this._addLazySet(f, "zIndex", 0)), "string" == typeof e && (a = f.cssText, r = rt(t, k), f.cssText = a + ";" + e, r = st(t, r, rt(t)).difs, !Y && x.test(e) && (r.opacity = parseFloat(RegExp.$1)), e = r, f.cssText = a), e.className ? this._firstPT = s = g.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = s = this.parse(t, e, null), this._transformType) {
                    for (d = 3 === this._transformType, $t ? _ && (v = !0, "" === f.zIndex && (("auto" === (h = et(t, "zIndex", k)) || "" === h) && this._addLazySet(f, "zIndex", 0)), y && this._addLazySet(f, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (d ? "visible" : "hidden"))) : f.zoom = 1, o = s; o && o._next;) o = o._next;
                    c = new xt(t, "transform", 0, 0, null, 2), this._linkCSSP(c, null, o), c.setRatio = $t ? Qt : Gt, c.data = this._transform || Yt(t, k, !0), c.tween = i, c.pr = -1, m.pop()
                }
                if (p) {
                    for (; s;) {
                        for (u = s._next, o = a; o && o.pr > s.pr;) o = o._next;
                        (s._prev = o ? o._prev : l) ? s._prev._next = s: a = s, (s._next = o) ? o._prev = s : l = s, s = u
                    }
                    this._firstPT = a
                }
                return !0
            }, t.parse = function (t, e, i, n) {
                var r, s, o, a, l, u, h, c, d, f, p = t.style;
                for (r in e) {
                    if ("function" == typeof (u = e[r]) && (u = u(A, O)), s = g[r]) i = s.parse(t, u, r, this, i, n, e);
                    else {
                        if ("--" === r.substr(0, 2)) {
                            this._tween._propLookup[r] = this._addTween.call(this._tween, t.style, "setProperty", tt(t).getPropertyValue(r) + "", u + "", r, !1, r);
                            continue
                        }
                        l = et(t, r, k) + "", d = "string" == typeof u, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || d && w.test(u) ? (d || (u = (3 < (u = mt(u)).length ? "rgba(" : "rgb(") + u.join(",") + ")"), i = Tt(p, r, l, u, !0, "transparent", i, 0, n)) : d && N.test(u) ? i = Tt(p, r, l, u, !0, null, i, 0, n) : (h = (o = parseFloat(l)) || 0 === o ? l.substr((o + "").length) : "", ("" === l || "auto" === l) && (h = "width" === r || "height" === r ? (o = lt(t, r, k), "px") : "left" === r || "top" === r ? (o = nt(t, r, k), "px") : (o = "opacity" !== r ? 0 : 1, "")), "" === (c = (f = d && "=" === u.charAt(1)) ? (a = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), a *= parseFloat(u), u.replace(E, "")) : (a = parseFloat(u), d ? u.replace(E, "") : "")) && (c = r in C ? C[r] : h), u = a || 0 === a ? (f ? a + o : a) + c : e[r], h !== c && ("" !== c || "lineHeight" === r) && (a || 0 === a) && o && (o = it(t, r, o, h), "%" === c ? (o /= it(t, r, 100, "%") / 100, !0 !== e.strictUnits && (l = o + "%")) : "em" === c || "rem" === c || "vw" === c || "vh" === c ? o /= it(t, r, 1, c) : "px" !== c && (a = it(t, r, a, c), c = "px"), f && (a || 0 === a) && (u = a + o + c)), f && (a += o), !o && 0 !== o || !a && 0 !== a ? void 0 !== p[r] && (u || u + "" != "NaN" && null != u) ? (i = new xt(p, r, a || o || 0, 0, i, -1, r, !1, 0, l, u)).xs0 = "none" !== u || "display" !== r && -1 === r.indexOf("Style") ? u : l : Q("invalid " + r + " tween value: " + e[r]) : (i = new xt(p, r, o, a - o, i, 0, r, !1 !== S && ("px" === c || "zIndex" === r), 0, l, u)).xs0 = c)
                    }
                    n && i && !i.plugin && (i.plugin = n)
                }
                return i
            }, t.setRatio = function (t) {
                var e, i, n, r = this._firstPT;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; r;) {
                            if (e = r.c * t + r.s, r.r ? e = r.r(e) : e < 1e-6 && -1e-6 < e && (e = 0), r.type)
                                if (1 === r.type)
                                    if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                    else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                            else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                            else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                            else {
                                for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                r.t[r.p] = i
                            } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                            else r.t[r.p] = e + r.xs0;
                            r = r._next
                        } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                    else
                        for (; r;) {
                            if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (e = r.r(r.s + r.c), r.type) {
                                        if (1 === r.type) {
                                            for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                            r.t[r.p] = i
                                        }
                                    } else r.t[r.p] = e + r.xs0;
                            else r.t[r.p] = r.e;
                            else r.setRatio(t);
                            r = r._next
                        }
            }, t._enableTransforms = function (t) {
                this._transform = this._transform || Yt(this._target, k, !0), this._transformType = this._transform.svg && Ot || !t && 3 !== this._transformType ? 2 : 3
            };
            var ee = function (t) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            t._addLazySet = function (t, e, i) {
                var n = this._firstPT = new xt(t, e, 0, 0, this._firstPT, 2);
                n.e = i, n.setRatio = ee, n.data = this
            }, t._linkCSSP = function (t, e, i, n) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, t._mod = function (t) {
                for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next
            }, t._kill = function (t) {
                var e, i, n, r = t;
                if (t.autoAlpha || t.alpha) {
                    for (i in r = {}, t) r[i] = t[i];
                    r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                }
                for (t.className && (e = this._classNamePT) && ((n = e.xfirst) && n._prev ? this._linkCSSP(n._prev, e._next, n._prev._prev) : n === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, n._prev), this._classNamePT = null), e = this._firstPT; e;) e.plugin && e.plugin !== i && e.plugin._kill && (e.plugin._kill(t), i = e.plugin), e = e._next;
                return s.prototype._kill.call(this, r)
            };
            var ie = function (t, e, i) {
                var n, r, s, o;
                if (t.slice)
                    for (r = t.length; - 1 < --r;) ie(t[r], e, i);
                else
                    for (r = (n = t.childNodes).length; - 1 < --r;) o = (s = n[r]).type, s.style && (e.push(rt(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || ie(s, e, i)
            };
            return q.cascadeTo = function (t, e, i) {
                var n, r, s, o, a = F.to(t, e, i),
                    l = [a],
                    u = [],
                    h = [],
                    c = [],
                    d = F._internals.reservedProps;
                for (t = a._targets || a.target, ie(t, u, c), a.render(e, !0, !0), ie(t, h), a.render(0, !0, !0), a._enabled(!0), n = c.length; - 1 < --n;)
                    if ((r = st(c[n], u[n], h[n])).firstMPT) {
                        for (s in r = r.difs, i) d[s] && (r[s] = i[s]);
                        for (s in o = {}, r) o[s] = u[n][s];
                        l.push(F.fromTo(c[n], e, o, r))
                    } return l
            }, s.activate([q]), q
        }, !0), t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.7.0",
            priority: -1,
            API: 2,
            init: function (t, e, i) {
                return this._tween = i, !0
            }
        }), l = function (e) {
            var i = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
            return function (t) {
                return (Math.round(t / e) * e * i | 0) / i
            }
        }, u = function (t, e) {
            for (; t;) t.f || t.blob || (t.m = e || Math.round), t = t._next
        }, (e = t.prototype)._onInitAllProps = function () {
            var t, e, i, n, r = this._tween,
                s = r.vars.roundProps,
                o = {},
                a = r._propLookup.roundProps;
            if ("object" != typeof s || s.push)
                for ("string" == typeof s && (s = s.split(",")), i = s.length; - 1 < --i;) o[s[i]] = Math.round;
            else
                for (n in s) o[n] = l(s[n]);
            for (n in o)
                for (t = r._firstPT; t;) e = t._next, t.pg ? t.t._mod(o) : t.n === n && (2 === t.f && t.t ? u(t.t._firstPT, o[n]) : (this._add(t.t, n, t.s, t.c, o[n]), e && (e._prev = t._prev), t._prev ? t._prev._next = e : r._firstPT === t && (r._firstPT = e), t._next = t._prev = null, r._propLookup[n] = a)), t = e;
            return !1
        }, e._add = function (t, e, i, n, r) {
            this._addTween(t, e, i, i + n, e, r || Math.round), this._overwriteProps.push(e)
        }, _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.1",
            init: function (t, e, i, n) {
                var r, s;
                if ("function" != typeof t.setAttribute) return !1;
                for (r in e) "function" == typeof (s = e[r]) && (s = s(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r);
                return !0
            }
        }), _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function (t, e, i, n) {
                "object" != typeof e && (e = {
                    rotation: e
                }), this.finals = {};
                var r, s, o, a, l, u, h = !0 === e.useRadians ? 2 * Math.PI : 360;
                for (r in e) "useRadians" !== r && ("function" == typeof (a = e[r]) && (a = a(n, t)), s = (u = (a + "").split("_"))[0], o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), l = (a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - o, u.length && (-1 !== (s = u.join("_")).indexOf("short") && ((l %= h) !== l % (h / 2) && (l = l < 0 ? l + h : l - h)), -1 !== s.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * h) % h - (l / h | 0) * h : -1 !== s.indexOf("ccw") && 0 < l && (l = (l - 9999999999 * h) % h - (l / h | 0) * h)), (1e-6 < l || l < -1e-6) && (this._addTween(t, r, o, o + l, r), this._overwriteProps.push(r)));
                return !0
            },
            set: function (t) {
                var e;
                if (1 !== t) this._super.setRatio.call(this, t);
                else
                    for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
        })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (g) {
            var i, n, e, t, r = _gsScope.GreenSockGlobals || _gsScope,
                s = r.com.greensock,
                o = 2 * Math.PI,
                a = Math.PI / 2,
                l = s._class,
                u = function (t, e) {
                    var i = l("easing." + t, function () {}, !0),
                        n = i.prototype = new g;
                    return n.constructor = i, n.getRatio = e, i
                },
                h = g.register || function () {},
                c = function (t, e, i, n, r) {
                    var s = l("easing." + t, {
                        easeOut: new e,
                        easeIn: new i,
                        easeInOut: new n
                    }, !0);
                    return h(s, t), s
                },
                v = function (t, e, i) {
                    this.t = t, this.v = e, i && (((this.next = i).prev = this).c = i.v - e, this.gap = i.t - t)
                },
                d = function (t, e) {
                    var i = l("easing." + t, function (t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        n = i.prototype = new g;
                    return n.constructor = i, n.getRatio = e, n.config = function (t) {
                        return new i(t)
                    }, i
                },
                f = c("Back", d("BackOut", function (t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                }), d("BackIn", function (t) {
                    return t * t * ((this._p1 + 1) * t - this._p1)
                }), d("BackInOut", function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })),
                p = l("easing.SlowMo", function (t, e, i) {
                    e = e || 0 === e ? e : .7, null == t ? t = .7 : 1 < t && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                }, !0),
                m = p.prototype = new g;
            return m.constructor = p, m.getRatio = function (t) {
                var e = t + (.5 - t) * this._p;
                return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, p.ease = new p(.7, .7), m.config = p.config = function (t, e, i) {
                return new p(t, e, i)
            }, (m = (i = l("easing.SteppedEase", function (t, e) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
            }, !0)).prototype = new g).constructor = i, m.getRatio = function (t) {
                return t < 0 ? t = 0 : 1 <= t && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
            }, m.config = i.config = function (t, e) {
                return new i(t, e)
            }, (m = (n = l("easing.ExpoScaleEase", function (t, e, i) {
                this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i
            }, !0)).prototype = new g).constructor = n, m.getRatio = function (t) {
                return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
            }, m.config = n.config = function (t, e, i) {
                return new n(t, e, i)
            }, (m = (e = l("easing.RoughEase", function (t) {
                for (var e, i, n, r, s, o, a = (t = t || {}).taper || "none", l = [], u = 0, h = 0 | (t.points || 20), c = h, d = !1 !== t.randomize, f = !0 === t.clamp, p = t.template instanceof g ? t.template : null, m = "number" == typeof t.strength ? .4 * t.strength : .4; - 1 < --c;) e = d ? Math.random() : 1 / h * c, i = p ? p.getRatio(e) : e, n = "none" === a ? m : "out" === a ? (r = 1 - e) * r * m : "in" === a ? e * e * m : (r = e < .5 ? 2 * e : 2 * (1 - e)) * r * .5 * m, d ? i += Math.random() * n - .5 * n : c % 2 ? i += .5 * n : i -= .5 * n, f && (1 < i ? i = 1 : i < 0 && (i = 0)), l[u++] = {
                    x: e,
                    y: i
                };
                for (l.sort(function (t, e) {
                        return t.x - e.x
                    }), o = new v(1, 1, null), c = h; - 1 < --c;) s = l[c], o = new v(s.x, s.y, o);
                this._prev = new v(0, 0, 0 !== o.t ? o : o.next)
            }, !0)).prototype = new g).constructor = e, m.getRatio = function (t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && t <= e.t;) e = e.prev;
                return (this._prev = e).v + (t - e.t) / e.gap * e.c
            }, m.config = function (t) {
                return new e(t)
            }, e.ease = new e, c("Bounce", u("BounceOut", function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), u("BounceIn", function (t) {
                return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), u("BounceInOut", function (t) {
                var e = t < .5;
                return t = (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), c("Circ", u("CircOut", function (t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), u("CircIn", function (t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), u("CircInOut", function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), c("Elastic", (t = function (t, e, i) {
                var n = l("easing." + t, function (t, e) {
                        this._p1 = 1 <= t ? t : 1, this._p2 = (e || i) / (t < 1 ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                    }, !0),
                    r = n.prototype = new g;
                return r.constructor = n, r.getRatio = e, r.config = function (t, e) {
                    return new n(t, e)
                }, n
            })("ElasticOut", function (t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
            }, .3), t("ElasticIn", function (t) {
                return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
            }, .3), t("ElasticInOut", function (t) {
                return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
            }, .45)), c("Expo", u("ExpoOut", function (t) {
                return 1 - Math.pow(2, -10 * t)
            }), u("ExpoIn", function (t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), u("ExpoInOut", function (t) {
                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), c("Sine", u("SineOut", function (t) {
                return Math.sin(t * a)
            }), u("SineIn", function (t) {
                return 1 - Math.cos(t * a)
            }), u("SineInOut", function (t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), l("easing.EaseLookup", {
                find: function (t) {
                    return g.map[t]
                }
            }, !0), h(r.SlowMo, "SlowMo", "ease,"), h(e, "RoughEase", "ease,"), h(i, "SteppedEase", "ease,"), f
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function (d, f) {
        "use strict";
        var p = {},
            n = d.document,
            m = d.GreenSockGlobals = d.GreenSockGlobals || d,
            t = m[f];
        if (t) return "undefined" != typeof module && module.exports && (module.exports = t);
        var e, i, r, g, v, s, o, _ = function (t) {
                var e, i = t.split("."),
                    n = m;
                for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                return n
            },
            c = _("com.greensock"),
            y = 1e-10,
            l = function (t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            b = function () {},
            x = (s = Object.prototype.toString, o = s.call([]), function (t) {
                return null != t && (t instanceof Array || "object" == typeof t && !!t.push && s.call(t) === o)
            }),
            w = {},
            T = function (a, l, u, h) {
                this.sc = w[a] ? w[a].sc : [], (w[a] = this).gsClass = null, this.func = u;
                var c = [];
                this.check = function (t) {
                    for (var e, i, n, r, s = l.length, o = s; - 1 < --s;)(e = w[l[s]] || new T(l[s], [])).gsClass ? (c[s] = e.gsClass, o--) : t && e.sc.push(this);
                    if (0 === o && u) {
                        if (n = (i = ("com.greensock." + a).split(".")).pop(), r = _(i.join("."))[n] = this.gsClass = u.apply(u, c), h)
                            if (m[n] = p[n] = r, "undefined" != typeof module && module.exports)
                                if (a === f)
                                    for (s in module.exports = p[f] = r, p) r[s] = p[s];
                                else p[f] && (p[f][n] = r);
                        else "function" == typeof define && define.amd && define((d.GreenSockAMDPath ? d.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function () {
                            return r
                        });
                        for (s = 0; s < this.sc.length; s++) this.sc[s].check()
                    }
                }, this.check(!0)
            },
            a = d._gsDefine = function (t, e, i, n) {
                return new T(t, e, i, n)
            },
            C = c._class = function (t, e, i) {
                return e = e || function () {}, a(t, [], function () {
                    return e
                }, i), e
            };
        a.globals = m;
        var u = [0, 0, 1, 1],
            P = C("easing.Ease", function (t, e, i, n) {
                this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? u.concat(e) : u
            }, !0),
            k = P.map = {},
            h = P.register = function (t, e, i, n) {
                for (var r, s, o, a, l = e.split(","), u = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); - 1 < --u;)
                    for (s = l[u], r = n ? C("easing." + s, null, !0) : c.easing[s] || {}, o = h.length; - 1 < --o;) a = h[o], k[s + "." + a] = k[a + s] = r[a] = t.getRatio ? t : t[a] || new t
            };
        for ((r = P.prototype)._calcEnd = !1, r.getRatio = function (t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
            }, i = (e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --i;) r = e[i] + ",Power" + i, h(new P(null, null, 1, i), r, "easeOut", !0), h(new P(null, null, 2, i), r, "easeIn" + (0 === i ? ",easeNone" : "")), h(new P(null, null, 3, i), r, "easeInOut");
        k.linear = c.easing.Linear.easeIn, k.swing = c.easing.Quad.easeInOut;
        var S = C("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        (r = S.prototype).addEventListener = function (t, e, i, n, r) {
            r = r || 0;
            var s, o, a = this._listeners[t],
                l = 0;
            for (this !== g || v || g.wake(), null == a && (this._listeners[t] = a = []), o = a.length; - 1 < --o;)(s = a[o]).c === e && s.s === i ? a.splice(o, 1) : 0 === l && s.pr < r && (l = o + 1);
            a.splice(l, 0, {
                c: e,
                s: i,
                up: n,
                pr: r
            })
        }, r.removeEventListener = function (t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; - 1 < --i;)
                    if (n[i].c === e) return void n.splice(i, 1)
        }, r.dispatchEvent = function (t) {
            var e, i, n, r = this._listeners[t];
            if (r)
                for (1 < (e = r.length) && (r = r.slice(0)), i = this._eventTarget; - 1 < --e;)(n = r[e]) && (n.up ? n.c.call(n.s || i, {
                    type: t,
                    target: i
                }) : n.c.call(n.s || i))
        };
        var O = d.requestAnimationFrame,
            A = d.cancelAnimationFrame,
            R = Date.now || function () {
                return (new Date).getTime()
            },
            D = R();
        for (i = (e = ["ms", "moz", "webkit", "o"]).length; - 1 < --i && !O;) O = d[e[i] + "RequestAnimationFrame"], A = d[e[i] + "CancelAnimationFrame"] || d[e[i] + "CancelRequestAnimationFrame"];
        C("Ticker", function (t, e) {
            var r, s, o, a, l, u = this,
                h = R(),
                i = !(!1 === e || !O) && "auto",
                c = 500,
                d = 33,
                f = function (t) {
                    var e, i, n = R() - D;
                    c < n && (h += n - d), D += n, u.time = (D - h) / 1e3, e = u.time - l, (!r || 0 < e || !0 === t) && (u.frame++, l += e + (a <= e ? .004 : a - e), i = !0), !0 !== t && (o = s(f)), i && u.dispatchEvent("tick")
                };
            S.call(u), u.time = u.frame = 0, u.tick = function () {
                f(!0)
            }, u.lagSmoothing = function (t, e) {
                return arguments.length ? (c = t || 1e10, void(d = Math.min(e, c, 0))) : c < 1e10
            }, u.sleep = function () {
                null != o && (i && A ? A(o) : clearTimeout(o), s = b, o = null, u === g && (v = !1))
            }, u.wake = function (t) {
                null !== o ? u.sleep() : t ? h += -D + (D = R()) : 10 < u.frame && (D = R() - c + 5), s = 0 === r ? b : i && O ? O : function (t) {
                    return setTimeout(t, 1e3 * (l - u.time) + 1 | 0)
                }, u === g && (v = !0), f(2)
            }, u.fps = function (t) {
                return arguments.length ? (a = 1 / ((r = t) || 60), l = this.time + a, void u.wake()) : r
            }, u.useRAF = function (t) {
                return arguments.length ? (u.sleep(), i = t, void u.fps(r)) : i
            }, u.fps(t), setTimeout(function () {
                "auto" === i && u.frame < 5 && "hidden" !== (n || {}).visibilityState && u.useRAF(!1)
            }, 1500)
        }), (r = c.Ticker.prototype = new c.events.EventDispatcher).constructor = c.Ticker;
        var E = C("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Z) {
                v || g.wake();
                var i = this.vars.useFrames ? Q : Z;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        g = E.ticker = new c.Ticker, (r = E.prototype)._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
        var M = function () {
            v && 2e3 < R() - D && ("hidden" !== (n || {}).visibilityState || !g.lagSmoothing()) && g.wake();
            var t = setTimeout(M, 2e3);
            t.unref && t.unref()
        };
        M(), r.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, r.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, r.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, r.seek = function (t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }, r.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }, r.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, r.render = function (t, e, i) {}, r.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, r.isActive = function () {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
        }, r._enabled = function (t, e) {
            return v || g.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, r._kill = function (t, e) {
            return this._enabled(!1, !1)
        }, r.kill = function (t, e) {
            return this._kill(t, e), this
        }, r._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, r._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); - 1 < --e;) "{self}" === t[e] && (i[e] = this);
            return i
        }, r._callback = function (t) {
            var e = this.vars,
                i = e[t],
                n = e[t + "Params"],
                r = e[t + "Scope"] || e.callbackScope || this;
            switch (n ? n.length : 0) {
                case 0:
                    i.call(r);
                    break;
                case 1:
                    i.call(r, n[0]);
                    break;
                case 2:
                    i.call(r, n[0], n[1]);
                    break;
                default:
                    i.apply(r, n)
            }
        }, r.eventCallback = function (t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = x(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, r.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, r.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, r.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, r.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, r.totalTime = function (t, e, i) {
            if (v || g.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration,
                        r = this._timeline;
                    if (n < t && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                        for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (L.length && J(), this.render(t, e, !1), L.length && J())
            }
            return this
        }, r.progress = r.totalProgress = function (t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }, r.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, r.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, r.timeScale = function (t) {
            if (!arguments.length) return this._timeScale;
            var e, i;
            for (t = t || y, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
            return this
        }, r.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, r.paused = function (t) {
            if (!arguments.length) return this._paused;
            var e, i, n = this._timeline;
            return t != this._paused && n && (v || t || g.wake(), i = (e = n.rawTime()) - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
        };
        var $ = C("core.SimpleTimeline", function (t) {
            E.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (r = $.prototype = new E).constructor = $, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function (t, e, i, n) {
            var r, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                for (s = t._startTime; r && r._startTime > s;) r = r._prev;
            return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
        }, r._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, r.render = function (t, e, i) {
            var n, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
        }, r.rawTime = function () {
            return v || g.wake(), this._totalTime
        };
        var I = C("TweenLite", function (t, e, i) {
                if (E.call(this, e, i), this.render = I.prototype.render, null == t) throw "Cannot tween a null target.";
                this.target = t = "string" != typeof t ? t : I.selector(t) || t;
                var n, r, s, o = t.jquery || t.length && t !== d && t[0] && (t[0] === d || t[0].nodeType && t[0].style && !t.nodeType),
                    a = this.vars.overwrite;
                if (this._overwrite = a = null == a ? G[I.defaultOverwrite] : "number" == typeof a ? a >> 0 : G[a], (o || t instanceof Array || t.push && x(t)) && "number" != typeof t[0])
                    for (this._targets = s = l(t), this._propLookup = [], this._siblings = [], n = 0; n < s.length; n++)(r = s[n]) ? "string" != typeof r ? r.length && r !== d && r[0] && (r[0] === d || r[0].nodeType && r[0].style && !r.nodeType) ? (s.splice(n--, 1), this._targets = s = s.concat(l(r))) : (this._siblings[n] = tt(r, this, !1), 1 === a && 1 < this._siblings[n].length && it(r, this, null, 1, this._siblings[n])) : "string" == typeof (r = s[n--] = I.selector(r)) && s.splice(n + 1, 1) : s.splice(n--, 1);
                else this._propLookup = {}, this._siblings = tt(t, this, !1), 1 === a && 1 < this._siblings.length && it(t, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -y, this.render(Math.min(0, -this._delay)))
            }, !0),
            N = function (t) {
                return t && t.length && t !== d && t[0] && (t[0] === d || t[0].nodeType && t[0].style && !t.nodeType)
            };
        (r = I.prototype = new E).constructor = I, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, I.version = "2.0.2", I.defaultEase = r._ease = new P(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = g, I.autoSleep = 120, I.lagSmoothing = function (t, e) {
            g.lagSmoothing(t, e)
        }, I.selector = d.$ || d.jQuery || function (t) {
            var e = d.$ || d.jQuery;
            return e ? (I.selector = e)(t) : (n || (n = d.document), n ? n.querySelectorAll ? n.querySelectorAll(t) : n.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t)
        };
        var L = [],
            j = {},
            z = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            F = /[\+-]=-?[\.\d]/,
            q = function (t) {
                for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < 1e-6 && -1e-6 < e && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
            },
            H = function (t, e, i, n) {
                var r, s, o, a, l, u, h, c = [],
                    d = 0,
                    f = "",
                    p = 0;
                for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", i && (i(c), t = c[0], e = c[1]), c.length = 0, r = t.match(z) || [], s = e.match(z) || [], n && (n._next = null, n.blob = 1, c._firstPT = c._applyPT = n), l = s.length, a = 0; a < l; a++) h = s[a], f += (u = e.substr(d, e.indexOf(h, d) - d)) || !a ? u : ",", d += u.length, p ? p = (p + 1) % 5 : "rgba(" === u.substr(-5) && (p = 1), h === r[a] || r.length <= a ? f += h : (f && (c.push(f), f = ""), o = parseFloat(r[a]), c.push(o), c._firstPT = {
                    _next: c._firstPT,
                    t: c,
                    p: c.length - 1,
                    s: o,
                    c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - o) || 0,
                    f: 0,
                    m: p && p < 4 ? Math.round : 0
                }), d += h.length;
                return (f += e.substr(d)) && c.push(f), c.setRatio = q, F.test(e) && (c.end = null), c
            },
            B = function (t, e, i, n, r, s, o, a, l) {
                "function" == typeof n && (n = n(l || 0, t));
                var u = typeof t[e],
                    h = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                    c = "get" !== i ? i : h ? o ? t[h](o) : t[h]() : t[e],
                    d = "string" == typeof n && "=" === n.charAt(1),
                    f = {
                        t: t,
                        p: e,
                        s: c,
                        f: "function" === u,
                        pg: 0,
                        n: r || e,
                        m: s ? "function" == typeof s ? s : Math.round : 0,
                        pr: 0,
                        c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
                    };
                return ("number" != typeof c || "number" != typeof n && !d) && (o || isNaN(c) || !d && isNaN(n) || "boolean" == typeof c || "boolean" == typeof n ? (f.fp = o, f = {
                    t: H(c, d ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : n, a || I.defaultStringFilter, f),
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: r || e,
                    pr: 0,
                    m: 0
                }) : (f.s = parseFloat(c), d || (f.c = parseFloat(n) - f.s || 0))), f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f) : void 0
            },
            W = I._internals = {
                isArray: x,
                isSelector: N,
                lazyTweens: L,
                blobDif: H
            },
            X = I._plugins = {},
            U = W.tweenLookup = {},
            V = 0,
            Y = W.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1
            },
            G = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            },
            Q = E._rootFramesTimeline = new $,
            Z = E._rootTimeline = new $,
            K = 30,
            J = W.lazyRender = function () {
                var t, e = L.length;
                for (j = {}; - 1 < --e;)(t = L[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                L.length = 0
            };
        Z._startTime = g.time, Q._startTime = g.frame, Z._active = Q._active = !0, setTimeout(J, 1), E._updateRoot = I.render = function () {
            var t, e, i;
            if (L.length && J(), Z.render((g.time - Z._startTime) * Z._timeScale, !1, !1), Q.render((g.frame - Q._startTime) * Q._timeScale, !1, !1), L.length && J(), g.frame >= K) {
                for (i in K = g.frame + (parseInt(I.autoSleep, 10) || 120), U) {
                    for (t = (e = U[i].tweens).length; - 1 < --t;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete U[i]
                }
                if ((!(i = Z._first) || i._paused) && I.autoSleep && !Q._first && 1 === g._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || g.sleep()
                }
            }
        }, g.addEventListener("tick", E._updateRoot);
        var tt = function (t, e, i) {
                var n, r, s = t._gsTweenID;
                if (U[s || (t._gsTweenID = s = "t" + V++)] || (U[s] = {
                        target: t,
                        tweens: []
                    }), e && ((n = U[s].tweens)[r = n.length] = e, i))
                    for (; - 1 < --r;) n[r] === e && n.splice(r, 1);
                return U[s].tweens
            },
            et = function (t, e, i, n) {
                var r, s, o = t.vars.onOverwrite;
                return o && (r = o(t, e, i, n)), (o = I.onOverwrite) && (s = o(t, e, i, n)), !1 !== r && !1 !== s
            },
            it = function (t, e, i, n, r) {
                var s, o, a, l;
                if (1 === n || 4 <= n) {
                    for (l = r.length, s = 0; s < l; s++)
                        if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                        else if (5 === n) break;
                    return o
                }
                var u, h = e._startTime + y,
                    c = [],
                    d = 0,
                    f = 0 === e._duration;
                for (s = r.length; - 1 < --s;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || nt(e, 0, f), 0 === nt(a, u, f) && (c[d++] = a)) : a._startTime <= h && a._startTime + a.totalDuration() / a._timeScale > h && ((f || !a._initted) && h - a._startTime <= 2e-10 || (c[d++] = a)));
                for (s = d; - 1 < --s;)
                    if (l = (a = c[s])._firstPT, 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted && l) {
                        if (2 !== n && !et(a, e)) continue;
                        a._enabled(!1, !1) && (o = !0)
                    } return o
            },
            nt = function (t, e, i) {
                for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                    if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                    n = n._timeline
                }
                return e < (s /= r) ? s - e : i && s === e || !t._initted && s - e < 2e-10 ? y : (s += t.totalDuration() / t._timeScale / r) > e + y ? 0 : s - e - y
            };
        r._init = function () {
            var t, e, i, n, r, s, o = this.vars,
                a = this._overwrittenProps,
                l = this._duration,
                u = !!o.immediateRender,
                h = o.ease;
            if (o.startAt) {
                for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}, o.startAt) r[n] = o.startAt[n];
                if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = u && !1 !== o.lazy, r.startAt = r.delay = null, r.onUpdate = o.onUpdate, r.onUpdateParams = o.onUpdateParams, r.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = I.to(this.target || {}, 0, r), u)
                    if (0 < this._time) this._startAt = null;
                    else if (0 !== l) return
            } else if (o.runBackwards && 0 !== l)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    for (n in 0 !== this._time && (u = !1), i = {}, o) Y[n] && "autoCSS" !== n || (i[n] = o[n]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = u && !1 !== o.lazy, i.immediateRender = u, this._startAt = I.to(this.target, 0, i), u) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                } if (this._ease = h = h ? h instanceof P ? h : "function" == typeof h ? new P(h, o.easeParams) : k[h] || I.defaultEase : I.defaultEase, o.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
            if (e && I._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = o.onUpdate, this._initted = !0
        }, r._initProps = function (t, e, i, n, r) {
            var s, o, a, l, u, h;
            if (null == t) return !1;
            for (s in j[t._gsTweenID] && J(), this.vars.css || t.style && t !== d && t.nodeType && X.css && !1 !== this.vars.autoCSS && function (t, e) {
                    var i, n = {};
                    for (i in t) Y[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!X[i] || X[i] && X[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                }(this.vars, t), this.vars)
                if (h = this.vars[s], Y[s]) h && (h instanceof Array || h.push && x(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
                else if (X[s] && (l = new X[s])._onInitTween(t, this.vars[s], this, r)) {
                for (this._firstPT = u = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: s,
                        pg: 1,
                        pr: l._priority,
                        m: 0
                    }, o = l._overwriteProps.length; - 1 < --o;) e[l._overwriteProps[o]] = this._firstPT;
                (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
            } else e[s] = B.call(this, t, s, "get", h, s, 0, null, this.vars.stringFilter, r);
            return n && this._kill(n, t) ? this._initProps(t, e, i, n, r) : 1 < this._overwrite && this._firstPT && 1 < i.length && it(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, n, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (j[t._gsTweenID] = !0), a)
        }, r.render = function (t, e, i) {
            var n, r, s, o, a = this._time,
                l = this._duration,
                u = this._rawPrevTime;
            if (l - 1e-7 <= t && 0 <= t) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (u < 0 || t <= 0 && -1e-7 <= t || u === y && "isPause" !== this.data) && u !== t && (i = !0, y < u && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : y);
            else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && 0 < u) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (0 <= u && (u !== y || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || u === t ? t : y)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var h = t / l,
                    c = this._easeType,
                    d = this._easePower;
                (1 === c || 3 === c && .5 <= h) && (h = 1 - h), 3 === c && (h *= 2), 1 === d ? h *= h : 2 === d ? h *= h * h : 3 === d ? h *= h * h * h : 4 === d && (h *= h * h * h * h), this.ratio = 1 === c ? 1 - h : 2 === c ? h : t / l < .5 ? h / 2 : 1 - h / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, L.push(this), void(this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && 0 <= t && (this._active = !0), 0 === a && (this._startAt && (0 <= t ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (!this._gc || i) && (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === y && o !== y && (this._rawPrevTime = 0))
            }
        }, r._kill = function (t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
            var n, r, s, o, a, l, u, h, c, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
                f = this._firstPT;
            if ((x(e) || N(e)) && "number" != typeof e[0])
                for (n = e.length; - 1 < --n;) this._kill(t, e[n], i) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; - 1 < --n;)
                        if (e === this._targets[n]) {
                            a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (u = t || a, h = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (I.onOverwrite || this.vars.onOverwrite)) {
                        for (s in u) a[s] && (c || (c = []), c.push(s));
                        if ((c || !t) && !et(this, i, e, c)) return !1
                    }
                    for (s in u)(o = a[s]) && (d && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), h && (r[s] = 1);
                    !this._firstPT && this._initted && f && this._enabled(!1, !1)
                }
            }
            return l
        }, r.invalidate = function () {
            return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -y, this.render(Math.min(0, -this._delay))), this
        }, r._enabled = function (t, e) {
            if (v || g.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; - 1 < --i;) this._siblings[i] = tt(n[i], this, !0);
                else this._siblings = tt(this.target, this, !0)
            }
            return E.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && I._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, I.to = function (t, e, i) {
            return new I(t, e, i)
        }, I.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i)
        }, I.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new I(t, e, n)
        }, I.delayedCall = function (t, e, i, n, r) {
            return new I(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }, I.set = function (t, e) {
            return new I(t, 0, e)
        }, I.getTweensOf = function (t, e) {
            if (null == t) return [];
            var i, n, r, s;
            if (t = "string" != typeof t ? t : I.selector(t) || t, (x(t) || N(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; - 1 < --i;) n = n.concat(I.getTweensOf(t[i], e));
                for (i = n.length; - 1 < --i;)
                    for (s = n[i], r = i; - 1 < --r;) s === n[r] && n.splice(i, 1)
            } else if (t._gsTweenID)
                for (i = (n = tt(t).concat()).length; - 1 < --i;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n || []
        }, I.killTweensOf = I.killDelayedCallsTo = function (t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = I.getTweensOf(t, e), r = n.length; - 1 < --r;) n[r]._kill(i, t)
        };
        var rt = C("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = rt.prototype
        }, !0);
        if (r = rt.prototype, rt.version = "1.19.0", rt.API = 2, r._firstPT = null, r._addTween = B, r.setRatio = q, r._kill = function (t) {
                var e, i = this._overwriteProps,
                    n = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; - 1 < --e;) null != t[i[e]] && i.splice(e, 1);
                for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, r._mod = r._roundProps = function (t) {
                for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
            }, I._onPluginEvent = function (t, e) {
                var i, n, r, s, o, a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a;) {
                        for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                        (a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
                    }
                    a = e._firstPT = r
                }
                for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                return i
            }, rt.activate = function (t) {
                for (var e = t.length; - 1 < --e;) t[e].API === rt.API && (X[(new t[e])._propName] = t[e]);
                return !0
            }, a.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    n = t.priority || 0,
                    r = t.overwriteProps,
                    s = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    },
                    o = C("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                        rt.call(this, i, n), this._overwriteProps = r || []
                    }, !0 === t.global),
                    a = o.prototype = new rt(i);
                for (e in (a.constructor = o).API = t.API, s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                return o.version = t.version, rt.activate([o]), o
            }, e = d._gsQueue) {
            for (i = 0; i < e.length; i++) e[i]();
            for (r in w) w[r].func || d.console.log("GSAP encountered missing dependency: " + r)
        }
        v = !1
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), $(document).on("scroll", function (t) {
        $(".menu").css({
            top: parseInt($("body").scrollTop()) + "px"
        })
    });
var t1 = new TimelineMax({
    paused: !0
});
t1.to(".one", .25, {
    y: 6,
    rotation: 45,
    ease: Expo.easeInOut
}), t1.to(".two", .25, {
    y: -6,
    rotation: -45,
    ease: Expo.easeInOut,
    delay: -.25
}), t1.to(".menu", .8, {
    left: "0%",
    ease: Expo.easeInOut,
    delay: -.25
}), t1.to(".block", .8, {
    width: "100%",
    ease: Power4.easeInOut,
    delay: -1
}), t1.staggerFrom(".menu ul li", .3, {
    x: -30,
    opacity: 0,
    ease: Expo.easeOut
}, .05), t1.reverse(), $(document).on("click", ".toggle-btn", function () {
    t1.reversed(!t1.reversed())
}), $(document).on("click", ".clickable", function () {
    t1.reversed(!t1.reversed())
});
var animateIn = new TimelineMax,
    button = document.querySelector(".btx"),
    background = document.querySelector(".backgroundHover"),
    firstWord = document.querySelectorAll(".btx span"),
    secondWord = document.querySelectorAll(".btx i"),
    button2 = document.querySelector(".btx2"),
    background2 = document.querySelector(".backgroundHover2"),
    firstWord2 = document.querySelectorAll(".btx2 span"),
    secondWord2 = document.querySelectorAll(".btx2 i"),
    tl = new TimelineMax({
        paused: !0
    });
tl.staggerTo(firstWord, 1, {
    rotationX: 360,
    ease: Expo.easeOut
}, .03, "#start"), tl.staggerTo(secondWord, 1, {
    rotationX: 360,
    ease: Expo.easeOut
}, .03, "#start"), tl.to(button, .3, {
    ease: Quad.easeOut
}, "#start"), tl.from(background, .25, {
    scaleX: "0%",
    transformOrigin: "left center",
    ease: Quad.easeInOut
}, "#start");
var t2 = new TimelineMax({
    paused: !0
});

function gt1() {
    $(".main").moveTo(1)
}

function gt2() {
    $(".main").moveTo(2)
}

function gt3() {
    $(".main").moveTo(3)
}

function gt4() {
    $(".main").moveTo(4)
}

function gt5() {
    $(".main").moveTo(5)
}

function gt6() {
    $(".main").moveTo(6)
}

function gt7() {
    $(".main").moveTo(7)
}
t2.staggerTo(firstWord2, 1, {
    rotationX: 360,
    ease: Expo.easeOut
}, .03, "#start2"), t2.staggerTo(secondWord2, 1, {
    rotationX: 360,
    ease: Expo.easeOut
}, .03, "#start2"), t2.to(button, .3, {
    ease: Quad.easeOut
}, "#start2"), t2.from(background2, .25, {
    scaleX: "0%",
    transformOrigin: "left center",
    ease: Quad.easeInOut
}, "#start2"), button.addEventListener("mouseenter", function () {
    tl.play()
}), button.addEventListener("mouseleave", function () {
    tl.reverse()
}), button2.addEventListener("mouseenter", function () {
    t2.play()
}), button2.addEventListener("mouseleave", function () {
    t2.reverse()
}), $(document).ready(function () {
    $(".main").onepage_scroll({
        sectionContainer: "section",
        easing: "ease",
        animationTime: 800,
        loop: !1,
        direction: "vertical",
        keyboard: !0,
        updateURL: !1
    })
});
var ww, keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
};

function preventDefault(t) {
    (t = t || window.event).preventDefault && t.preventDefault(), t.returnValue = !1
}

function preventDefaultForScrollKeys(t) {
    if (keys[t.keyCode]) return preventDefault(t), !1
}

function disableScroll() {
    window.addEventListener && window.addEventListener("DOMMouseScroll", preventDefault, !1), window.onwheel = preventDefault, window.onmousewheel = document.onmousewheel = preventDefault, window.ontouchmove = preventDefault, document.onkeydown = preventDefaultForScrollKeys
}

function enableScroll() {
    window.removeEventListener && window.removeEventListener("DOMMouseScroll", preventDefault, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
}

function lockScroll() {
    $("body").hasClass("lock-scroll") ? ($("body").removeClass("lock-scroll"), enableScroll()) : ($("body").addClass("lock-scroll"), disableScroll())
}
$(document).ready(function () {
    1024 <= (ww = screen.width) ? ($("#carousel").Cloud9Carousel({
        yPos: 0,
        xPos: 0,
        yRadius: 100,
        xRadius: 500,
        farScale: .4,
        buttonLeft: $("#buttons > .left"),
        buttonRight: $("#buttons > .right"),
        autoPlay: 1,
        smooth: !0,
        frontItemClass: "closest",
        bringToFront: !0
    }), console.log("bsdk")) : ww < 1024 && 768 <= ww ? $("#carousel").Cloud9Carousel({
        yPos: 0,
        xPos: 0,
        yRadius: 70,
        xRadius: 350,
        farScale: .4,
        buttonLeft: $("#buttons > .left"),
        buttonRight: $("#buttons > .right"),
        autoPlay: 1,
        smooth: !0,
        frontItemClass: "closest",
        bringToFront: !0
    }) : ww < 768 && 600 <= ww ? ($("#carousel").Cloud9Carousel({
        yPos: 0,
        xPos: 0,
        yRadius: 60,
        xRadius: 250,
        farScale: .4,
        buttonLeft: $("#buttons > .left"),
        buttonRight: $("#buttons > .right"),
        autoPlay: 1,
        smooth: !0,
        frontItemClass: "closest",
        bringToFront: !0
    }), console.log("bc")) : ww < 600 && $("#carousel").Cloud9Carousel({
        yPos: 0,
        xPos: 0,
        yRadius: -30,
        xRadius: 125,
        farScale: .4,
        buttonLeft: $("#buttons > .left"),
        buttonRight: $("#buttons > .right"),
        autoPlay: 1,
        autoPlayDelay: 3e3,
        smooth: !0,
        frontItemClass: "closest",
        bringToFront: !0
    })
}), 600 <= screen.width ? $(".timeline").timeline({
    forceVerticalMode: 200,
    mode: "horizontal",
    visibleItems: 4,
    moveItems: 2
}) : $(".timeline").timeline({
    forceVerticalMode: 200,
    mode: "horizontal",
    visibleItems: 1,
    moveItems: 1
}), $("#modal-ml").iziModal({
    overlayColor: "rgba(0,0,0,0.9)",
    zindex: 9999
}), $("#modal-ui").iziModal({
    overlayColor: "rgba(0,0,0,0.9)",
    zindex: 9999
}), $("#modal-bc").iziModal({
    overlayColor: "rgba(0,0,0,0.9)",
    zindex: 9999
}), $("#modal-c").iziModal({
    overlayColor: "rgba(0,0,0,0.9)",
    zindex: 9999
}), $("#modal-cs").iziModal({
    overlayColor: "rgba(0,0,0,0.9)",
    zindex: 9999
});
var slideIndex = 0;

function showSlides() {
    var t, e = document.getElementsByClassName("mySlides"),
        i = document.getElementsByClassName("dot");
    for (t = 0; t < e.length; t++) e[t].style.display = "none";
    for (++slideIndex > e.length && (slideIndex = 1), t = 0; t < i.length; t++) i[t].className = i[t].className.replace(" active", "");
    e[slideIndex - 1].style.display = "block", i[slideIndex - 1].className += " active", setTimeout(showSlides, 2500)
}

function no_reg() {
    alert("Registrations not open yet!")
}
showSlides(), $(document).on("click", ".cloud9-item.closest", function () {
    "cc" == $(".closest").attr("id") ? $("#modal-c").iziModal("open") : $("#modal-" + $(".closest").attr("id")).iziModal("open")
});
