! function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    (function(e) {
        "use strict";
        angular.module("videoconference", ["ngRoute", "ngSanitize", "ngAnimate", "jm.i18next", "vc-templates", "youtube-embed", "ngFileUpload"]).config(["$provide", "$routeProvider", "$locationProvider", "$i18nextProvider", "$httpProvider", "$compileProvider", function(e, t, n, o, i, r) {
            for (var a = ["nb"], c = "en", s = navigator.language || navigator.userLanguage || navigator.browserLanguage || "", l = 0; l < a.length; l++)
                if (-1 !== s.indexOf(a[l])) {
                    c = a[l];
                    break
                }
            r.aHrefSanitizationWhitelist(/^\s*(http|https?|intent|mailto):/), window.location.host.match(/localhost/) || r.debugInfoEnabled(!1), o.options = {
                lng: c,
                useCookie: !1,
                useLocalStorage: !1,
                customLoad: function(e, t, n, o) {
                    return "en" === e ? void o(null, {}) : void window.i18n.sync._fetchOne(e, t, n, o)
                },
                fallbackLng: "en",
                resGetPath: "/translations/compiled/__lng__.json",
                nsseparator: ":::",
                keyseparator: "_._"
            }, i.defaults.useXDomain = !0, delete i.defaults.headers.common["X-Requested-With"], e.value("prefix", "appearin");
            var u = function() {
                    return ["$i18next", "$route", function(e, t) {
                        var n = t.current.params.lng;
                        n && (e.options.lng = n)
                    }]
                },
                d = function(e) {
                    return _.defaults({}, e, {
                        locale: u()
                    })
                };
            t.when("/u/feedback", {
                templateUrl: "/templates/sessionFeedback.html",
                controller: "sessionFeedbackController",
                resolve: d()
            }).when("/error/webrtc", {
                templateUrl: "/templates/webRtcError.html",
                controller: "webRtcErrorController",
                resolve: d()
            }).when("/error/connection", {
                templateUrl: "/templates/connectionError.html",
                resolve: d()
            }).when("/error/:errorName", {
                templateUrl: "/templates/error.html",
                controller: "errorController",
                resolve: d()
            }).when("/:roomName", {
                templateUrl: "/templates/views/room.html",
                controller: "roomController",
                resolve: d(),
                reloadOnSearch: !1
            }).otherwise({
                templateUrl: "/templates/views/room.html",
                controller: "roomController",
                resolve: d()
            }), n.html5Mode(!0).hashPrefix("!")
        }]).run(["$window", "$rootScope", "$location", function(e, t, n) {
            n.host && "localhost" === n.host() && e.ga("_setDomainName", "none"), t.controller = "", t.$on("$routeChangeSuccess", function(o, i, r) {
                t.previousController = r && r.$$route ? r.$$route.controller : null, t.previousController && e.ga && e.ga("send", "pageview", n.url())
            })
        }]).run(["$location", function(e) {
            var t = /[\u0000-\u0008\u000E-\u001F\u007F-\u0084\u0086-\u009F\u0009-\u000D\u0085\u00AD\u0600-\u0605\u061C\u06DD\u070F\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]/g,
                n = e.path && e.path() || "",
                o = n.replace(t, "");
            n !== o && e.path(o)
        }]).factory("isEmbedded", ["$window", "features", function(e, t) {
            return t.isEmbedded || e !== e.top
        }]), n(1), n(2), n(3), n(4), n(5), n(6), n(7), n(8), n(9), n(10), n(11), n(12), n(13), n(14), n(15), n(16), n(17), n(18), n(19), n(20), n(21), n(22), n(23), n(24), n(25), n(26), n(27), n(28), n(29), n(30), n(31), n(32), n(33), n(34), n(35), n(36), n(37), n(38), n(39), n(40), n(41), n(42), n(43), n(44), n(45), n(46), n(47), n(48), n(49), n(50), n(51), n(52), n(53), n(54), n(55), n(56), n(57), n(58), n(59), n(60), n(61), n(62), n(63), n(64), n(65), n(66), n(67), n(68), n(69), n(70), n(71), n(72), n(73), n(74), n(75), n(76), n(77), n(78), n(79), n(80), n(81), n(82), n(83), n(84), n(85), n(86), n(87), n(88), n(89), n(90), n(91), n(92), n(93), n(94), n(95), n(96), n(98), n(99), n(100), n(101), n(102), n(103), n(104), n(105), n(106), n(107), n(108), n(109), n(110), n(111), n(112), n(113), n(114), n(115), n(116), n(117), n(118), n(119), n(120), n(121), n(122), n(123), n(124), n(125), n(126), n(127), n(128), n(129), n(130), n(131), n(132), n(133), n(134), n(135), n(136), n(137), n(138), n(139), n(140), n(141), n(142), n(143), n(144), n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), n(153), n(154), n(155), e.protocol = n(156), e.constants = n(157), e.analyticsEvents = n(158), n(159), n(160), n(161), n(162)
    }).call(t, function() {
        return this
    }())
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("logo", function() {
        return {
            templateUrl: "/templates/partials/logo.html",
            scope: {},
            replace: !0
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("toolbarButton", ["$sce", function(e) {
        return {
            templateUrl: "/templates/partials/toolbar-button.html",
            restrict: "E",
            replace: !0,
            scope: {
                action: "&",
                isActive: "&",
                isDisabled: "&",
                isHighlighted: "&",
                shouldShowStar: "&",
                icon: "&",
                text: "&",
                highlightActive: "&"
            },
            link: function(t, n) {
                var o = function(e, t) {
                    return angular.isArray(e) ? e[t] : e
                };
                t.disableHighlightColor = t.highlightActive() === !1;
                var i = function() {
                    return t.isActive() ? 1 : 0
                };
                t.$watch(t.isActive, function() {
                    var e = o(t.text(), i());
                    n.attr("title", e)
                });
                var r = function(t) {
                        return e.trustAsResourceUrl(t)
                    },
                    a = function(e) {
                        var t = _.clone(e);
                        if (e.svg) {
                            var n = e.svg;
                            t.svg = r(n)
                        }
                        return t
                    },
                    c = function(e) {
                        return angular.isString(e) && (e = {
                            svg: e
                        }), e
                    },
                    s = [0, 1].map(o.bind(null, t.icon())),
                    l = s.map(c),
                    u = l.map(a);
                t.getIcon = function() {
                    return u[i()]
                }, t.handleClick = function(e) {
                    e.stopPropagation(), t.action()(e), n.blur()
                }
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("vcResizeWatcher", function() {
        return {
            restrict: "A",
            controller: ["$rootScope", "$window", function(e, t) {
                e.windowHeight = t.innerHeight, angular.element(t).bind("resize", function() {
                    e.windowHeight = t.innerHeight, e.$apply("windowHeight")
                })
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("shortcut", ["$window", function(e) {
        return {
            restrict: "A",
            controller: ["$scope", "RoomService", "RoomState", "$window", "Analytics", function(e, t, n, o, i) {
                e.applyKeyCode = function(e, o, r) {
                    switch (e) {
                        case 77:
                            var a = n.localClient;
                            a && !o && t.setAudioInputEnabled(!a.isAudioInputEnabled);
                            break;
                        case 67:
                            r && r.shiftKey && !o && (t.toggleChat(), i.sendEvent(i.events.CHAT_OPENED_USING_KEYBOARD_SHORTCUT))
                    }
                }
            }],
            link: function(t) {
                function n(e) {
                    t.$apply(t.applyKeyCode(e.keyCode, "INPUT" === e.target.nodeName, e))
                }
                e.document.addEventListener("keyup", n), t.$on("$destroy", function() {
                    e.document.removeEventListener("keyup", n)
                })
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("keyCombination", ["$window", "appearinApi", "$q", "KeyCombinationManager", "keyCombinationMatchers", "keyCombinations", "$log", "features", "stickerService", function(e, t, n, o, i, r, a, c, s) {
        //! Be the first to find out about our other new cool features! Sign up for user testing here: http://goo.gl/forms/bSXfSJxBkD
        return {
            restrict: "A",
            link: function(i) {
                function l() {
                    return c.keyCombinationDebug
                }

                function u(e) {
                    return e.keyCode + "(" + e.eventType + ") (" + e.duration + ")->" + e.timeStamp
                }
                var d = angular.element(e.document),
                    m = new o;
                m.addSource(d), i.keyCombinationManager = m, m.onCombination(l, function(e) {
                    a.log(e.map(u).join("\n"))
                }), t({
                    url: "/stickers",
                    method: "get"
                }).then(function(e) {
                    var t = e.data && e.data.stickers;
                    return t && t.length > 0 ? (t.forEach(function(e) {
                        var t = e.toUpperCase();
                        if (r.isKeysSupported(t)) {
                            var n = r.matchKeys(t);
                            m.onCombination(n, function() {
                                s.sendSticker(e)
                            })
                        }
                    }), void m.onCombination(r.KONAMI, function() {
                        var e = t[Math.floor(Math.random() * t.length)];
                        s.sendSticker(e)
                    })) : n.reject(new Error("no stickers in response list"))
                })["catch"](function(e) {
                    a.warn("Unable to load stickers due to", e)
                }), i.$on("$destroy", function() {
                    m.removeSource(d), m = null
                })
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("vcMuted", function() {
        return function(e, t, n) {
            e.$watch(n.vcMuted, function() {
                t[0].muted = e.$eval(n.vcMuted) === !0 ? "muted" : void 0
            })
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("scrollTo", function() {
        return {
            restrict: "A",
            link: function(e, t, n) {
                t.bind("click", function() {
                    var e = angular.element(n.scrollTo).offset().top;
                    return jQuery("html, body").animate({
                        scrollTop: e
                    }, "slow"), !1
                })
            }
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("topbar", function() {
        return {
            templateUrl: "/templates/partials/topbar.html",
            restrict: "E",
            replace: !0,
            controller: ["$scope", "$timeout", "$window", "Analytics", "RoomState", "RoomService", "inRoomNotificationService", "features", "User", "modalService", "ModalConfig", "appearinUrl", function(e, t, n, o, i, r, a, c, s, l, u, d) {
                e.User = s, e.RoomService = r, e.RoomState = i, e.features = c, e.appearinUrl = d, e.isRoomLockDisabled = function() {
                    return !r.isAllowedToLock()
                }, e.copyToClipboard = function() {
                    function e(e) {
                        var t = n.getSelection(),
                            o = n.document.createRange();
                        o.selectNodeContents(e), t.removeAllRanges(), t.addRange(o)
                    }
                    var o = angular.element(".room-url").addClass("flash");
                    e(o[0]), n.document.execCommand("copy"), n.document.getSelection().removeAllRanges(), a.setNotification({
                        type: "info",
                        text: "Link has been copied to the clipboard"
                    }), t(function() {
                        o.removeClass("flash")
                    }, 100)
                }, e.selectText = function() {
                    n.document.execCommand("selectAll", !1, null)
                }, e.displayLockErrorIfAppropriate = function() {
                    e.isRoomLockDisabled() && (i.isLocked ? a.setNotification({
                        type: "info",
                        text: "This room is owned by someone, and only the owner and members can unlock the room"
                    }) : a.setNotification({
                        type: "info",
                        text: "This room is owned by someone, and only the owner and members can lock the room"
                    }))
                }, e.shouldShowClaimRoomButton = function() {
                    return !i.isClaimed
                }, e.openClaimRoom = function() {
                    var e = s.isLoggedIn ? u.Flows.CLAIM_AS_USER : u.Flows.CLAIM_SIGNUP;
                    l.openFlow(e)
                }, e.openRoomSettings = function() {
                    l.openModal(u.Modals.ROOM_SETTINGS)
                }, e.openInviteModal = function() {
                    l.openModal(u.Modals.INVITE)
                }, e.openMediaSelectorModal = function() {
                    o.sendEvent(o.events.MEDIA_SELECTOR.OPENED_SELECTOR_FROM_TOPBAR), l.openModal(u.Modals.MEDIA_SELECTOR)
                }, e.isUserLoggedIn = function() {
                    return s.isLoggedIn
                }, e.clickedLoginButton = function() {
                    l.openFlow(u.Flows.DEFAULT_LOGIN)
                }, e.clickedSignupButton = function() {
                    l.openFlow(u.Flows.DEFAULT_SIGNUP)
                }, e.goToFrontPage = function() {
                    n.document.location.href = d
                }
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("vcDropDown", ["$rootScope", function(e) {
        return function(t, n, o) {
            var i, r = $(n),
                a = $(o.vcDropDown);
            i = "vcDropDownContainer" in o ? o.vcDropDownContainer : void 0;
            var c, s, l = !1,
                u = !1,
                d = !1,
                m = null,
                f = function E(e) {
                    function t() {
                        m = $('<div class="modal-backdrop popover-backdrop"></div>').click(E).prependTo($("body"))
                    }
                    if (r.toggleClass("active"), r.toggleClass("bold"), l) {
                        var n = r.data("bs.popover").$tip,
                            o = n.find(".popover-content");
                        if (u) c = o.width(), s = o.height(), n.hide();
                        else {
                            var i = $('<div class="popover-filler" />').width(c).height(s);
                            n.append(i), o.detach(), r.data("bs.popover").show(), i.remove(), n.append(o)
                        }
                    } else a.show(), r.popover("show"), l = !0;
                    null === m ? t() : (m.remove(), m = null), u = !u, d = e
                },
                g = function() {
                    u && f()
                },
                p = function() {
                    a.hide(), a.find(".dismiss-popover").click(f), "vcDropDownDismiss" in o && $(o.vcDropDownDismiss).mousedown(g), r.popover({
                        html: !0,
                        content: a,
                        placement: o.vcDropDownPlacement,
                        container: i,
                        trigger: "manual",
                        animation: !1
                    }), void 0 === o.vcDropDownDisableClick && r.click(function() {
                        f(!1)
                    }), void 0 !== o.vcDropDownShow && t.$watch(o.vcDropDownShow, function(e) {
                        e === !0 ? u || f(!0) : e === !1 && u && d && f(!0)
                    }), e.$on("$routeChangeStart", function() {
                        r.popover("destroy"), null !== m && m.remove()
                    })
                };
            p()
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("videoView", ["$timeout", "$window", function(e, t) {
        return {
            templateUrl: "/templates/partials/video-view.html",
            restrict: "E",
            scope: {
                user: "=",
                client: "=",
                fillmode: "&",
                enableSuperSizeClient: "=",
                disableSuperSizeClient: "="
            },
            controller: ["$scope", "$rootScope", "Event", "RoomState", "RoomService", "RTCManager", "Analytics", "AnalyticsEvents", "isEmbedded", "modalService", "ModalConfig", "permissionService", "$timeout", function(e, t, n, o, i, r, a, c, s, l, u, d, m) {
                function f() {
                    return !(!l.modals[u.Modals.STICKER_SELECT] || !l.modals[u.Modals.STICKER_SELECT].isOpen)
                }
                var g = 1e4;
                e.isInitializingToolbar = !0, m(function() {
                    e.isInitializingToolbar = !1
                }, g), e.canInviteMember = function() {
                    return o.isSelfOwner && "member" !== e.client.role.roleName && !e.client.isOwner
                }, e.openStickerSelectModal = function(e) {
                    function t(e) {
                        return e ? {
                            boundingRect: e.getBoundingClientRect()
                        } : null
                    }
                    l.openModalWithContext(u.Modals.STICKER_SELECT, t(e.currentTarget)), a.sendEvent(c.ENTERTAINMENT_BUTTON.OPENED_ENTERTAINMENT_MENU)
                }, e.openInviteMemberModal = function() {
                    l.openModalWithContext(u.Modals.INVITE_MEMBER_CONFIRMATION, e.client)
                }, e.canBlock = function() {
                    return d.helper.canBlockClient(o.localClient, e.client)
                }, e.canKick = function() {
                    return d.helper.canKickClient(o.localClient, e.client)
                }, e.block = function() {
                    if (e.canBlock()) {
                        var t = e.client.id,
                            n = o.localClient.role.roleName,
                            r = e.client.role.roleName;
                        a.helpers.recordBlockEvent(n, r, "VIDEO_TOOLBAR"), i.block(t)
                    }
                }, e.kick = function() {
                    if (e.canKick()) {
                        var t = e.client.id;
                        i.kick(t);
                        var n = i.getClientType(t);
                        a.helpers.recordKickedUser(n, o.isSelfOwner)
                    }
                }, e.toggleShareScreen = function() {
                    i.setLocalScreenShareEnabled(!e.client.isScreenSharingEnabled())
                }, e.enableAudioInput = function() {
                    i.setAudioInputEnabled(!0)
                }, e.toggleAudioInputEnabled = function() {
                    i.setAudioInputEnabled(!e.client.isAudioInputEnabled)
                }, e.toggleAudioOutputEnabled = function() {
                    i.setAudioOutputEnabled(e.client, !e.client.isAudioOutputEnabled)
                }, e.toggleVideoEnabled = function() {
                    i.setLocalVideoEnabledByUser(!e.client.isVideoEnabled)
                }, e.isSuperSizeSupported = function() {
                    return o.clients.length > 1 && !s
                }, e.disableSuperSize = function() {
                    e.disableSuperSizeClient(e.client)
                }, e.enableSuperSize = function() {
                    e.isSuperSizeSupported() && e.enableSuperSizeClient(e.client)
                }, e.setSuperSize = function(t) {
                    return t ? e.enableSuperSize() : void e.disableSuperSize()
                }, e.$watch(f, function(t) {
                    e.forceToolbarVisible = t, e.showStarOnEntertainmentButton = !1
                }), e.isScreenShareSupported = i.isScreenShareSupported.bind(i), e.isTyping = !1, t.$on(n.CHAT_USERS_TYPING_CHANGED, function(t, n) {
                    e.isTyping = e.client && !!n[e.client.id]
                }), e.showStarOnEntertainmentButton = !1, e.forceToolbarVisible = !1, t.$on(n.STICKERS_UNLOCKED, function() {
                    e.forceToolbarVisible = !0, e.showStarOnEntertainmentButton = !0, m(function() {
                        e.forceToolbarVisible = f()
                    }, 5e3)
                })
            }],
            link: function(n, o) {
                var i, r, a = !1,
                    c = function() {
                        if (a) {
                            var e = r.height(),
                                t = i.height(),
                                n = e - t,
                                o = r.width(),
                                c = i.width(),
                                s = o - c;
                            s > n ? (i.removeClass("height-first"), i.css({
                                top: n / 2,
                                left: 0
                            })) : (i.addClass("height-first"), i.css({
                                top: 0,
                                left: (r.width() - i.width()) / 2
                            }))
                        }
                    },
                    s = function() {
                        e(function() {
                            a = !0, i = o.find("video.video-stream"), r = i.parent(), i.on("play", function() {
                                i.off("play"), c()
                            }).on("resize", function() {
                                c()
                            }), angular.element(t).on("resize", c)
                        })
                    };
                if (e(function() {
                        o.find(".video-box").removeClass("loading")
                    }, 0), n.fillmode()) switch (n.fillmode()) {
                    case "fit":
                        n.$watch("client", function() {
                            s()
                        }), n.$watch(n.client.isScreenSharingEnabled.bind(n.client), function() {
                            e(function() {
                                c()
                            })
                        }), s()
                }
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("desktopNotificationsSwitch", ["$rootScope", "browserExtension", "extensionDesktopNotificationsSignup", "Event", function(e, t, n, o) {
        return {
            restrict: "E",
            replace: !0,
            templateUrl: "/templates/partials/desktop-notifications-switch.html",
            scope: {},
            link: function(e) {
                e.extensionDesktopNotificationsSignup = n, e.desktopNotificationsUiModel = {
                    installingOrEnabledDesktopNotifications: t.isDesktopNotificationsEnabled
                }, e.$on(o.EXTENSION_INSTALL, function(t, n) {
                    "desktop-notifications" === n.installReason && (e.desktopNotificationsUiModel.installingOrEnabledDesktopNotifications = "started" === n.state || "installed" === n.state || "loaded" === n.state)
                }), e.$watch(function() {
                    return t.isDesktopNotificationsEnabled
                }, function(t) {
                    e.desktopNotificationsUiModel.installingOrEnabledDesktopNotifications = t
                })
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("dropArea", function() {
        return {
            restrict: "A",
            link: function(e, t, n) {
                var o = n.dropArea,
                    i = e[o] && "function" == typeof e[o];
                t.bind("dragover", function(e) {
                    e.stopPropagation(), e.preventDefault()
                }), t.bind("dragleave", function(t) {
                    e.$apply(function() {
                        i && e[o](), t.stopPropagation(), t.preventDefault()
                    })
                }), t.bind("drop", function(t) {
                    e.$apply(function() {
                        var n;
                        t.stopPropagation(), t.preventDefault(), t.originalEvent.dataTransfer.files.length > 0 && (n = t.originalEvent.dataTransfer.files[0]), i && e[o](n)
                    })
                })
            }
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("dragArea", function() {
        return {
            restrict: "A",
            link: function(e, t, n) {
                var o = n.dragArea,
                    i = e[o] && "function" == typeof e[o];
                t.bind("dragenter", function(t) {
                    e.$apply(function() {
                        t.stopPropagation(), t.preventDefault(), i && e[o](t.originalEvent && t.originalEvent.dataTransfer && t.originalEvent.dataTransfer.types)
                    })
                })
            }
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("fileSelector", function() {
        return {
            restrict: "A",
            link: function(e, t, n) {
                var o = n.fileSelector,
                    i = e[o] && "function" == typeof e[o];
                t.bind("change", function(t) {
                    e.$apply(function() {
                        t.stopPropagation(), t.preventDefault(), i && t.target.files && t.target.files.length > 0 && e[o](t.target.files[0])
                    })
                })
            }
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("styledCheckbox", function() {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/styled-checkbox.html",
            scope: {
                isChecked: "=",
                isDisabled: "&",
                callback: "=",
                checkedText: "@",
                checkedIcon: "@",
                uncheckedText: "@",
                uncheckedIcon: "@"
            },
            link: function(e) {
                e.toggleIsChecked = function() {
                    e.callback(!e.isChecked)
                }
            }
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("switch", function() {
        return {
            restrict: "E",
            replace: !0,
            templateUrl: "/templates/partials/switch.html",
            transclude: !0,
            scope: {
                model: "=model",
                checkedText: "@checkedText",
                checkedIcon: "@checkedIcon",
                uncheckedText: "@?uncheckedText",
                uncheckedIcon: "@?uncheckedIcon",
                display: "@?display",
                reversed: "@?reversed",
                isDisabled: "@?isdisabled",
                changeCallbackFn: "=changeCallbackFn"
            },
            controller: ["$scope", function(e) {
                e.id = "checkbox-" + e.$id, e.checked = e.model, e.internalChange = function() {
                    e.changeCallbackFn && e.changeCallbackFn(this.model)
                }
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("resize", function() {
        return {
            restrict: "A",
            link: function(e, t, n) {
                function o(t) {
                    a += c - t.pageY, c = t.pageY, l && (e[s](a), a = 0)
                }

                function i() {
                    document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", i)
                }

                function r(e) {
                    c = e.pageY, a = 0, document.addEventListener("mousemove", o), document.addEventListener("mouseup", i)
                }
                var a, c, s = n.resize,
                    l = s && "function" == typeof e[s];
                t[0].addEventListener("mousedown", r)
            }
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("errorPage", function() {
        return {
            templateUrl: "/templates/partials/errorPage.html",
            restrict: "E",
            replace: !0,
            transclude: !0
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("modalBox", function() {
        return {
            templateUrl: "/templates/partials/modal-box.html",
            restrict: "E",
            transclude: !0,
            replace: !0,
            scope: {
                modal: "=modal"
            },
            controller: ["$scope", function(e) {
                e.closeModal = function() {
                    e.modal.close()
                }
            }],
            link: function(e, t) {
                e.$watch("modal.isOpen", function(e) {
                    e && (t.find("form input[autofocus]").first().focus(), t.find("form textarea[autofocus]").first().focus())
                })
            }
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("tab", function() {
        return {
            templateUrl: "/templates/partials/tab.html",
            restrict: "E",
            transclude: !0,
            replace: !0,
            require: "?^tabs",
            scope: {
                title: "@",
                disableComplete: "&",
                completeText: "@",
                complete: "&",
                cancellable: "&",
                optional: "&",
                isEnabled: "="
            },
            link: function(e, t, n, o) {
                var i = function() {
                        return !1
                    },
                    r = function() {
                        return !0
                    },
                    a = {
                        title: e.title,
                        disableComplete: e.disableComplete || i,
                        complete: e.complete,
                        completeText: e.completeText || "Next",
                        optional: e.optional || i,
                        cancellable: e.cancellable || i,
                        isEnabled: e.isEnabled || r
                    };
                o && (o.addTab(a), e.$on("$destroy", function() {
                    o.removeTab(a)
                }))
            }
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("tabs", function() {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/tabs.html",
            replace: !0,
            transclude: !0,
            scope: {
                tabs: "="
            },
            controller: ["$scope", function(e) {
                var t = function() {
                    return {
                        tabs: [],
                        activeIndex: -1,
                        setActiveTab: function(e) {
                            this.activeIndex = e
                        },
                        isActiveTab: function(e) {
                            return e === this.activeIndex
                        },
                        getActiveTab: function() {
                            return this.tabs[this.activeIndex]
                        },
                        hasNext: function() {
                            return this.activeIndex < this.tabs.length - 1
                        },
                        hasPrevious: function() {
                            return this.activeIndex > 0
                        },
                        skipToNextTab: function() {
                            for (; this.hasNext() && (this.activeIndex += 1, this.getActiveTab().isEnabled() === !1););
                        },
                        nextTab: function() {
                            var e = this.getActiveTab();
                            e.disableComplete() || (e.complete(), this.skipToNextTab())
                        },
                        previousTab: function() {
                            this.hasPrevious() && this.activeIndex--
                        },
                        addTab: function(e) {
                            this.tabs.push(e), 1 === this.tabs.length && (this.activeIndex = 0)
                        },
                        removeTab: function(e) {
                            var t = this.tabs.indexOf(e);
                            return -1 === t ? !1 : (this.tabs.splice(t, 1), this.activeIndex >= this.tabs.length && (this.activeIndex = this.tabs.length - 1), !0)
                        }
                    }
                };
                e.tabs = t(), this.addTab = e.tabs.addTab.bind(e.tabs), this.removeTab = e.tabs.removeTab.bind(e.tabs)
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("inRoomNotifications", function() {
        return {
            templateUrl: "/templates/partials/in-room-notifications.html",
            restrict: "E",
            scope: {},
            replace: !0,
            controller: ["$scope", "$timeout", "$rootScope", "Event", "inRoomNotificationService", function(e, t, n, o, i) {
                var r;
                e.notification = i.getNotification(), e.dismissNotification = function() {
                    var e = i.setNotification(null);
                    e && e.onDismiss && e.onDismiss()
                }, e.removeCurrentActionRequired = i.getCurrentActionRequired(), e.dismissActionRequiredNotification = function() {
                    var e = i.removeCurrentActionRequired();
                    e && e.onDismiss && e.onDismiss()
                }, e.$watch(i.getNotification, function(n) {
                    e.isVisible = !!n, r && t.cancel(r), e.notification = n, n && n.displayDurationMillis && (r = t(function() {
                        n.isVisible = !1, t(function() {
                            i.setNotification(null)
                        }, 1e3)
                    }, n.displayDurationMillis))
                }), e.$watch(i.getCurrentActionRequired, function(t) {
                    e.actionRequiredNotification = t
                })
            }]
        }
    }).directive("inRoomNotification", function() {
        return {
            templateUrl: "/templates/partials/in-room-notification.html",
            restrict: "E",
            scope: {
                notification: "=",
                dismiss: "&"
            },
            replace: !0
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("roomLocked", function() {
        return {
            templateUrl: "/templates/partials/room-locked.html",
            restrict: "E",
            replace: !0,
            scope: {},
            controller: ["$rootScope", "$scope", "RoomState", "$sce", "$window", "Event", "$element", "modalService", "User", "KnockService", "ModalConfig", function(e, t, n, o, i, r, a, c, s, l, u) {
                t.modalService = c, e.controller = "room-locked", n.selfStream && (n.selfStream.url = o.trustAsResourceUrl(i.URL.createObjectURL(n.selfStream)));
                var d = function() {
                    t.User = s, t.RoomState = n, t.hasKnocked = !1
                };
                t.openLoginModal = function() {
                    c.openModal(u.Modals.LOGIN).then(function() {
                        s.fetchUser().then(function() {
                            i.location.reload()
                        })
                    })
                }, d(), t.knockLiveVideo = function() {
                    t.hasKnocked = !0, l.knockRoom(a.find(".room-locked-video")[0])
                };
                var m = e.$on(r.ROOM_JOINED, d);
                t.$on("$destroy", function() {
                    m()
                })
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("knockers", function() {
        return {
            templateUrl: "/templates/partials/knockers.html",
            restrict: "E",
            replace: !0,
            scope: {
                modal: "="
            },
            controller: ["$scope", "RoomService", "Event", "Analytics", "$log", "$rootScope", "knockerQueue", "permissionService", function(e, t, n, o, i, r, a, c) {
                e.knocker = null, e.isOpen = null, e.$watch(function() {
                    return a.knocker
                }, function(t) {
                    return t !== e.knocker ? (e.knocker = t, e.knocker ? !e.modal.isOpen && e.knocker ? (r.$emit(n.NEW_KNOCKER), o.sendEvent(o.events.NEW_KNOCKER), e.modal.open(), void(e.isOpen = !0)) : void 0 : (e.isOpen = !1, void e.modal.close())) : void 0
                }), e.acceptKnocker = function(e) {
                    c.knock.canReject(), e.accept(), t.removeKnocker(e.clientId), o.sendEvent(o.events.ACCEPT_KNOCKER)
                }, e.rejectKnocker = function(e) {
                    c.knock.canAccept(), e.reject(), t.removeKnocker(e.clientId), o.sendEvent(o.events.REJECT_KNOCKER)
                }, e.canAcceptOrReject = function() {
                    return e.canAccept() || e.canReject()
                }, e.canAccept = function() {
                    return c.knock.canAccept()
                }, e.canReject = function() {
                    return c.knock.canReject()
                }
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("playOnEvent", ["$rootScope", "$timeout", function(e) {
        return {
            restrict: "A",
            scope: {
                playOnEvent: "@"
            },
            link: function(t, n) {
                e.$on(t.playOnEvent, function() {
                    n[0].play()
                })
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("lockToTop", ["$window", function(e) {
        return {
            restrict: "A",
            link: function(t, n, o) {
                if ("true" === o.lockToTop) {
                    var i;
                    angular.element(e).on("scroll", function() {
                        i || (i = n[0].offsetTop);
                        var t = e.scrollY + 5 > i;
                        return t ? void n.addClass("fixed") : void n.removeClass("fixed")
                    })
                }
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("webRtcVideo", [function() {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/webrtc-video.html",
            replace: !0,
            scope: {
                client: "=client",
                stream: "=stream"
            },
            controller: ["$element", "MediaDevices", function(e, t) {
                var n = t.getPreferredDeviceIds();
                window.HTMLMediaElement && "sinkId" in HTMLMediaElement.prototype && n.outputId && e[0].addEventListener("play", function() {
                    e[0].setSinkId(n.outputId).then(function() {}, function() {})
                })
            }]
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("scrollthrough", ["$timeout", function(e) {
        return {
            restrict: "A",
            link: function(t, n) {
                var o = n.find(".item"),
                    i = o.length,
                    r = 0,
                    a = function c() {
                        r++, r === i && (r = 0), n.css("transform", "translateX(-" + 100 * r + "%)"), e(c, 7e3)
                    };
                e(a, 7e3)
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("shareRoom", function() {
        return {
            templateUrl: "/templates/partials/shareRoom.html",
            restrict: "E",
            scope: {},
            controller: ["$scope", "RoomState", "Analytics", "$window", function(e, t, n, o) {
                e.shareRoom = function(e, i) {
                    var r = encodeURIComponent("https://appear.in" + t.roomName);
                    switch (e.preventDefault(), i) {
                        case "twitter":
                            return o.open("https://twitter.com/intent/tweet?text=Appear%20with%20me%20in&url=" + r, "twitter-share-dialog", "width=550, height=420"), n.sendEvent(n.events.SHARE_ROOM_LINK_TO_TWITTER), !1;
                        case "facebook":
                            return o.open("https://www.facebook.com/sharer/sharer.php?u=" + r, "facebook-share-dialog", "width=626, height=436"), n.sendEvent(n.events.SHARE_ROOM_LINK_TO_FACEBOOK), !1;
                        case "googleplus":
                            return o.open("https://plus.google.com/share?url=" + r, "googleplus-share-dialog", "width=480, height=415"), n.sendEvent(n.events.SHARE_ROOM_LINK_TO_GOOGLE), !1
                    }
                }
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("contactListItem", ["User", "RoomState", "$log", "Analytics", function(e, t, n, o) {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/contact-list-item.html",
            scope: {
                contact: "=",
                exampleSms: "="
            },
            link: function(n) {
                var i = {
                    CONFIRMATION: "confirmation",
                    IN_PROGRESS: "in-progress",
                    ERROR: "error",
                    SUCCESS: "success",
                    THROTTLED: "throttled",
                    NONE: "none"
                };
                n.isPhoneContact = "phone-contact" === n.contact.type, n.roomName = t.roomName, n.displayName = e.data.displayName, n.isPhoneContact && n.contact.phoneNumbers && n.contact.phoneNumbers[0] && (n.contact.selectedNumber = n.contact.phoneNumbers[0] || ""), n.sendSms = function() {
                    o.helpers.contacts.recordInviteContact("phone"), n.contact.sendInvite(t.roomName, n.contact.selectedNumber)
                }, n.retryCallContact = function(e) {
                    e.stopPropagation(), n.inviteState.state === i.ERROR && n.contact.sendInvite(t.roomName)
                }, n.clickHandler = function() {
                    return n.isPhoneContact ? void(n.expanded = !n.expanded) : void n.contact.callUser(t.roomName)
                }, n.closeExpanded = function() {
                    n.expanded = !1
                }, n.hideContact = function() {
                    n.isHidden = !0, e.hideContact(n.contact)
                }
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("user", function() {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                showDisplayName: "=",
                showAvatar: "=",
                showLogin: "=",
                showDescription: "=",
                size: "@",
                context: "@?"
            },
            templateUrl: "/templates/partials/user.html",
            controller: ["$scope", "User", "modalService", "$rootScope", "Event", "ModalConfig", function(e, t, n, o, i, r) {
                e.User = t, e.handleUserIconClick = function() {
                    return t.isLoggedIn ? void o.$emit(i.OPEN_USER_SETTINGS) : void n.openFlow(r.Flows.DEFAULT_SIGNUP)
                }
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("avatarSnapshotter", ["$timeout", "$sce", "$window", function(e, t, n) {
        return {
            restrict: "E",
            scope: {
                imageData: "=",
                active: "=",
                avatarSize: "@size",
                avatarUrl: "@?",
                stream: "=?",
                onAvatarChange: "&"
            },
            templateUrl: "/templates/partials/avatar-snapshotter.html",
            controller: ["$scope", "$log", "splitscreenElements", "$element", "User", "$q", "Analytics", function(o, i, r, a, c, s, l) {
                function u() {
                    o.error = null
                }

                function d(e) {
                    o.state = e, u()
                }

                function m(t, n) {
                    return o.snapshotCounter = t + 1, s(function(t) {
                        function i() {
                            return 1 === o.snapshotCounter ? (o.snapshotCounter = 0, t()) : (o.snapshotCounter--, void e(i, n))
                        }
                        i()
                    })
                }

                function f() {
                    o.imageData = null, o.avatarImageFile = null
                }
                var g = {
                    DEFAULT: {
                        STANDBY: "default_standby"
                    },
                    UPLOAD: {
                        STANDBY: "upload_standby",
                        UPLOADING: "upload_uploading"
                    },
                    SNAPSHOT: {
                        STANDBY: "snapshot_standby",
                        SNAPPING: "snapshot_snapping",
                        SNAPPED: "snapshot_snapped",
                        UPLOADING: "snapshot_uploading"
                    },
                    ERROR: {
                        GENERIC: "error_generic"
                    }
                };
                d(g.DEFAULT.STANDBY), o.snapshotCounter = 0, o.dimensions = null;
                var p = a.find("video")[0],
                    E = a.find(".snapshot-canvas")[0];
                o.size = parseInt(o.avatarSize) || 128;
                var _, v, h = function() {
                        for (var e = E.toDataURL(), t = atob(e.split(",")[1]), n = [], o = 0; o < t.length; o++) n.push(t.charCodeAt(o));
                        var i = new Blob([new Uint8Array(n)], {
                            type: "image/png"
                        });
                        return i
                    },
                    S = function O() {
                        var e = o.dimensions.excessWidth / 2,
                            t = o.dimensions.excessHeight / 2,
                            i = o.dimensions.width - 2 * e,
                            r = o.dimensions.height - 2 * t;
                        try {
                            _.drawImage(p, e, t, i, r, 0, 0, o.size, o.size), v = n.requestAnimationFrame(O)
                        } catch (a) {
                            if ("NS_ERROR_NOT_AVAILABLE" !== a.name) throw a;
                            setTimeout(O, 100)
                        }
                    };
                o.paintImageToCanvas = function(e) {
                    var t = new Image;
                    t.onload = function() {
                        _.save(), _.scale(-1, 1), _.translate(-o.size, 0), _.drawImage(t, 0, 0, o.size, o.size), _.restore(), t = null
                    }, t.src = n.URL.createObjectURL(e)
                }, o.startDrawing = function() {
                    return o.isWebcamReady() ? void S() : void setTimeout(o.startDrawing, 100)
                }, o.stopDrawing = function() {
                    n.cancelAnimationFrame(v), v = null
                }, o.isDrawing = function() {
                    return !!v
                }, o.initializeCanvasContext = function() {
                    _ = E.getContext("2d"), _.save(), _.translate(o.size, 0), _.scale(-1, 1)
                }, o.restoreCanvasContext = function() {
                    _ = E.getContext("2d"), _.restore()
                };
                var C = !1;
                o.initializeStream = function() {
                    o.streamUrl = t.trustAsResourceUrl(n.URL.createObjectURL(o.stream)), e(function() {
                        p.play()
                    }), C || (p.addEventListener("loadedmetadata", function() {
                        o.getVideoDimensions(p)
                    }), p.addEventListener("play", function() {
                        o.startDrawing()
                    }, !1), C = !0)
                }, o.terminateWebcam = function() {
                    o.stopDrawing(), o.dimensions = null
                }, o.isWebcamReady = function() {
                    return o.dimensions && o.dimensions.size
                };
                var y = function(e, t) {
                    var n = {};
                    return n.width = e, n.height = t, n.size = Math.min(n.width, n.height), n.excessWidth = n.width - n.size, n.excessHeight = n.height - n.size, n.scaledExcessWidth = n.excessWidth * (o.size / n.size), n
                };
                o.takeAvatar = function() {
                    o.imageData = h(), o.stopDrawing(), d(g.SNAPSHOT.SNAPPED)
                }, o.getVideoDimensions = function(e) {
                    var t = r.getVideoDimensions(e);
                    t[0] && t[1] || setTimeout(o.getVideoDimensions.bind(null, e), 100), o.dimensions = y.apply(null, t)
                };
                var I = function() {
                    o.initializeCanvasContext(), o.imageData && o.paintImageToCanvas(o.imageData), o.initializeStream()
                };
                o.$watch("active", function(e) {
                    e ? o.stream ? I() : i.error("Camera stream not available.") : (o.restoreCanvasContext(), o.terminateWebcam())
                }), o.startSnapshotCountdown = function() {
                    if (o.isWebcamReady()) {
                        o.resetAvatar(), d(g.SNAPSHOT.SNAPPING);
                        var e = 700;
                        m(3, e).then(function() {
                            o.takeAvatar()
                        })
                    }
                }, o.resetAvatar = function() {
                    o.stopDrawing(), o.imageData = null, o.startDrawing()
                }, o.$watch("avatarImageFile", function() {
                    return o.avatarImageFile ? d(g.UPLOAD.STANDBY) : void 0
                }), o.cancelUpload = function() {
                    o.avatarImageFile = null, d(g.DEFAULT.STANDBY)
                }, o.cancelSnapshot = function() {
                    o.stopDrawing(), d(g.DEFAULT.STANDBY)
                }, o.retakeSnapShot = function() {
                    f(), o.resetAvatar(), d(g.SNAPSHOT.SNAPPING)
                }, o.uploadImage = function(e, t) {
                    function n(e) {
                        return !!e.name
                    }

                    function i(e) {
                        return e ? l.sendEvent(l.events.USER_SETTINGS.UPLOADED_AVATAR_IMAGE_FROM_FILE) : l.sendEvent(l.events.USER_SETTINGS.UPLOADED_AVATAR_IMAGE_FROM_CAMERA)
                    }
                    e.preventDefault(), d(g.UPLOAD.UPLOADING), c.uploadAvatar(t).then(c.fetchUser, function(e) {
                        throw d(g.DEFAULT.STANDBY), o.error = g.ERROR.GENERIC, new Error(e.data.error)
                    }).then(function(e) {
                        f(), o.onAvatarChange(), d(g.DEFAULT.STANDBY), o.avatarUrl = e.avatarUrl, i(n(t))
                    })
                }
            }]
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("modal", function() {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/modal.html",
            transclude: !0,
            replace: !0,
            scope: {},
            controller: ["$scope", "$log", "$timeout", "modalService", "$element", "$rootScope", "Event", "$window", function(e, t, n, o, i, r, a, c) {
                function s() {
                    _.each(u, function(e) {
                        e()
                    }), u = []
                }
                e.modalService = o;
                var l = i.find(".modal-inner");
                e.showCloseButton = !0, this.setShowCloseButton = function(t) {
                    e.showCloseButton = t
                };
                var u = [];
                this.spawnFromBoundingRect = function(e) {
                    function t() {
                        l.css("opacity", 0)
                    }

                    function o() {
                        l.css("opacity", 1)
                    }

                    function i() {
                        function t() {
                            function e() {
                                s(), l.removeClass("has-arrow")
                            }

                            function t(e, t) {
                                return e.addEventListener("resize", t),
                                    function() {
                                        e.removeEventListener("resize", t)
                                    }
                            }
                            u.push(r.$on(a.CLIENT_LEFT, e)), u.push(r.$on(a.NEW_CLIENT, e)), u.push(t(c, e))
                        }
                        t(), l.addClass("has-arrow");
                        var n = d.height(),
                            i = d.width(),
                            m = $(c).height(),
                            f = $(c).width(),
                            g = 40,
                            p = l.find(".arrow"),
                            E = 10;
                        p.css({
                            left: ""
                        });
                        var _ = e.left + e.width / 2,
                            v = e.top,
                            h = v > n + g;
                        h ? l.removeClass("point-up") : l.addClass("point-up");
                        var S, C = E + 15,
                            y = n + C > v,
                            I = v > m - (n + C);
                        h ? (S = v - (n + C), y && (S = 0)) : (S = v + e.height + E, I && (S = m - n));
                        var O = i / 2 > _,
                            R = _ > f - i / 2,
                            T = _ - i / 2;
                        O && (T = 0, p.css({
                            left: _
                        })), R && (T = f - i, p.css({
                            left: i - (f - _)
                        }));
                        var N = {
                            position: "fixed",
                            top: S,
                            left: T
                        };
                        l.css(N), o()
                    }
                    var d = l.find(".modal-content");
                    t(), n(i)
                }, this.initialize = function(t, n) {
                    e.type = t, e.isCentered = !0, o.addModal(t, n)
                }, e.currentModal = function() {
                    return o.modals[e.type]
                }, e.closeModal = function(t) {
                    o.closeModal(t || e.type)
                }, e.abortModal = function(t) {
                    o.abortModal(t || e.type)
                }, e.openModal = function(t, n) {
                    var i = t || e.type;
                    o.openModal(i, n)
                }, e.isOpen = function() {
                    return e.currentModal() && e.currentModal().isOpen
                }, e.setModalCentered = function(t) {
                    e.isCentered = t
                }, this.exports = {
                    triggerError: function(o) {
                        t.error(o), e.error = o, e.errorTriggered = !1, n(function() {
                            e.errorTriggered = !0
                        })
                    },
                    clearError: function() {
                        e.error = "", e.errorTriggered = !1
                    },
                    closeModal: e.closeModal,
                    openModal: e.openModal,
                    isOpen: e.isOpen,
                    currentModal: e.currentModal,
                    setModalCentered: e.setModalCentered
                }
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("userSettings", function() {
        return {
            restrict: "E",
            scope: {
                selfStream: "="
            },
            replace: !0,
            templateUrl: "/templates/partials/user-settings.html",
            controller: ["$scope", "$timeout", "$q", "User", "$location", "$window", "browserExtension", "UIState", function(e, t, n, o, i, r, a, c) {
                function s() {
                    e.User = angular.copy(o), e.phoneIsVerified = !!e.User.data.phoneNumber, e.emailIsVerified = !!e.User.data.email, e.userData.displayName.value = e.User.data.displayName, e.userData.email.value = e.User.data.email, e.userData.phoneNumber.value = e.User.data.phoneNumber
                }
                e._User = o, e.isVerifyingPhoneNumber = !1, e.UIState = c, e.shouldShowNotificationsSwitch = function() {
                    return a.canInstall() || a.hasExtension
                };
                var l = {
                    TOO_SHORT: "too_short",
                    UNKNOWN_ERROR: "unknown_error",
                    FORMAT_ERROR: "format_error",
                    VERIFICATION_CODE_ERROR: "verification_code_error",
                    DELETION_DENIED: "deletion_denied"
                };
                e.userData = {
                    displayName: {
                        visible: !0,
                        submittable: !1,
                        value: "",
                        error: "",
                        onChange: function() {
                            e.userData.displayName.error = "", e.userData.displayName.submittable = !0
                        },
                        submit: function() {
                            return 0 === e.userData.displayName.value.length ? void(e.userData.displayName.error = l.TOO_SHORT) : (e.userData.displayName.submittable = !1, o.setDisplayName(e.userData.displayName.value).then(function() {
                                return o.fetchUser().then(s)
                            })["catch"](function() {
                                e.userData.displayName.error = l.UNKNOWN_ERROR, e.userData.displayName.submittable = !0
                            }))
                        },
                        cancel: function() {
                            e.userData.displayName.error = "", e.userData.displayName.submittable = !1, e.userData.displayName.value = e.User.data.displayName
                        },
                        onFocus: function() {
                            e.userData.email.cancel(), e.userData.phoneNumber.cancel()
                        }
                    },
                    phoneNumber: {
                        submittable: !1,
                        verifying: !1,
                        cancellable: !1,
                        value: "",
                        error: "",
                        prefix: "",
                        onChange: function() {
                            e.userData.phoneNumber.clearError(), e.userData.phoneNumber.submittable = !0, e.userData.phoneNumber.cancellable = !0, e.userData.phoneNumber.verificationCode = "", e.userData.phoneNumber.verifying = !1
                        },
                        submit: function() {
                            if (0 === e.userData.phoneNumber.displayedValue.length) return o.data.email ? o.deletePhoneNumber().then(e.userData.phoneNumber.reset) : void(e.userData.phoneNumber.error = l.DELETION_DENIED);
                            if (e.userData.phoneNumber.displayedValue.length <= 1 || !e.userData.phoneNumber.displayedValue.match(/^[0-9]*$/)) return void(e.userData.phoneNumber.error = l.FORMAT_ERROR);
                            e.userData.phoneNumber.submittable = !1;
                            var n = e.userData.phoneNumber.prefix + e.userData.phoneNumber.displayedValue;
                            return o.sendVerificationCode("phone", n, !0).then(function() {
                                e.userData.phoneNumber.verifying = !0, e.userData.email.cancel(), e.userData.displayName.cancel(), t(function() {
                                    angular.element(".phone-number-input-form .verification-input").focus()
                                })
                            }, function() {
                                e.userData.phoneNumber.error = l.UNKNOWN_ERROR, e.userData.phoneNumber.submittable = !0
                            })
                        },
                        cancel: function() {
                            e.userData.phoneNumber.clearError(), e.userData.phoneNumber.submittable = !1, e.userData.phoneNumber.cancellable = !1, e.userData.phoneNumber.verifying = !1, e.userData.phoneNumber.displayedValue = e.userData.phoneNumber.cachedValue
                        },
                        reset: function() {
                            e.userData.phoneNumber.verificationCode = "", e.userData.phoneNumber.error = "", e.userData.phoneNumber.cancellable = !1, e.userData.phoneNumber.submittable = !1, e.userData.phoneNumber.verifying = !1, e.userData.phoneNumber.displayedValue = "", e.userData.phoneNumber.cachedValue = ""
                        },
                        submitVerificationCode: function() {
                            var t = e.userData.phoneNumber.prefix + e.userData.phoneNumber.displayedValue;
                            return o.update({
                                phoneNumber: {
                                    value: t,
                                    verificationCode: e.userData.phoneNumber.verificationCode
                                }
                            }).then(function() {
                                return e.userData.phoneNumber.reset(), o.fetchUser().then(s)
                            }, function() {
                                e.userData.phoneNumber.error = l.VERIFICATION_CODE_ERROR
                            })
                        },
                        onFocus: function() {
                            e.userData.email.cancel(), e.userData.displayName.cancel()
                        },
                        clearError: function() {
                            e.userData.phoneNumber.error = ""
                        }
                    },
                    email: {
                        submittable: !1,
                        verifying: !1,
                        cancellable: !1,
                        value: "",
                        error: "",
                        verificationCode: "",
                        onChange: function() {
                            e.userData.email.clearError(), e.userData.email.submittable = !0, e.userData.email.cancellable = !0, e.userData.email.verificationCode = "", e.userData.email.verifying = !1
                        },
                        submit: function() {
                            if (0 === e.userData.email.value.length) return o.data.phoneNumber ? o.deleteEmail().then(e.userData.email.reset) : void(e.userData.email.error = l.DELETION_DENIED);
                            var n = e.userData.email.value.match(constants.Validator.EMAIL);
                            return n ? (e.userData.email.submittable = !1, o.sendVerificationCode("email", e.userData.email.value, !0).then(function() {
                                e.userData.email.verifying = !0, e.userData.phoneNumber.cancel(), e.userData.displayName.cancel(), t(function() {
                                    angular.element(".email-input-form .verification-input").focus()
                                })
                            }, function() {
                                e.userData.email.error = l.UNKNOWN_ERROR, e.userData.email.submittable = !0
                            })) : void(e.userData.email.error = l.FORMAT_ERROR)
                        },
                        reset: function() {
                            e.userData.email.clearError(), e.userData.email.verificationCode = "", e.userData.email.submittable = !1, e.userData.email.cancellable = !1, e.userData.email.verifying = !1
                        },
                        cancel: function() {
                            e.userData.email.reset(),
                                e.userData.email.value = e.User.data.email
                        },
                        submitVerificationCode: function() {
                            return o.update({
                                email: {
                                    value: e.userData.email.value,
                                    verificationCode: e.userData.email.verificationCode
                                }
                            }).then(function() {
                                return e.userData.email.reset(), o.fetchUser().then(s)
                            }, function() {
                                e.userData.email.error = l.VERIFICATION_CODE_ERROR
                            })
                        },
                        onFocus: function() {
                            e.userData.phoneNumber.cancel(), e.userData.displayName.cancel()
                        },
                        clearError: function() {
                            e.userData.email.error = ""
                        }
                    }
                }, e.originalUser = o;
                var u = e.$watch("originalUser.isLoggedIn", function(t) {
                    t && (s(), u(), delete e.originalUser)
                });
                e.isUserDeletePanelActive = !1, e.openDeleteUserModal = function() {
                    e.isUserDeletePanelActive = !0
                }, e.logout = function() {
                    o.logout().then(function() {
                        window.location = "/"
                    })
                }, e.$watch("User.data.phoneIsNotifiable", function(e, t) {
                    if ((void 0 !== e || null !== e) && e !== t) {
                        var n = {
                            phoneIsNotifiable: e
                        };
                        return o.update(n)
                    }
                }), e.$watch("User.data.emailIsNotifiable", function(e, t) {
                    if ((void 0 !== e || null !== e) && e !== t) {
                        var n = {
                            emailIsNotifiable: e
                        };
                        return o.update(n)
                    }
                }), e.$watch("_User.data.rooms", function() {
                    e.User.data.rooms = o.data.rooms
                }), e.$watch("_User.rooms", function() {
                    e.User.rooms = o.rooms
                }), s(), e.captureBackspace = function(e, t) {
                    8 === e.keyCode && t()
                }, e.onUserAvatarChange = function() {
                    s()
                }, e.$watch("userData.phoneNumber.value", function(t) {
                    t && "+" !== t[0] && (e.userData.phoneNumber.displayedValue = t, e.userData.phoneNumber.cachedValue = t)
                })
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("onDragChange", function() {
        return {
            restrict: "A",
            link: function(e, t, n) {
                var o = 0,
                    i = function(t) {
                        return function(i) {
                            i.stopPropagation(), i.preventDefault();
                            var r = o;
                            o += t ? 1 : -1;
                            var a = o > 0;
                            r && o || e.$apply(function() {
                                var t = n.onDragChange && e[n.onDragChange];
                                t && t(a)
                            })
                        }
                    };
                t.bind("dragenter", i(!0)), t.bind("dragleave", i(!1))
            }
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("onDragDrop", function() {
        return {
            restrict: "A",
            link: function(e, t, n) {
                var o = n.onDragDrop && e[n.onDragDrop];
                t.bind("dragover", function(e) {
                    e.preventDefault()
                }), t.bind("drop", function(t) {
                    t.stopPropagation(), t.preventDefault(), e.$apply(function() {
                        var e = t.originalEvent.dataTransfer && t.originalEvent.dataTransfer.files;
                        o && o(e && e[0])
                    })
                })
            }
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("countryCodeDropdown", ["GeoLookup", "countryCodeLookup", function(e, t) {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/country-code-dropdown.html",
            replace: !0,
            scope: {
                countryCode: "=",
                phoneNumber: "=?",
                disabled: "="
            },
            link: function(n) {
                function o() {
                    return n.phoneNumber ? void t.fetchCountryCodeForPhoneNumber(n.phoneNumber).then(function(e) {
                        n.selectedCountry = t.getCountryFromCountryCode(e.data.countryCode), n.countryCode = n.selectedCountry.calling_code, n.phoneNumber = n.phoneNumber.substring(n.selectedCountry.calling_code.length)
                    }) : void e.get().then(function(e) {
                        n.selectedCountry = t.getCountryFromCountryCode(e), n.countryCode = n.selectedCountry.calling_code
                    })
                }
                n.onSelectedCountryChanged = function() {
                    n.countryCode = n.selectedCountry.calling_code
                }, n.countryCodes = t.getCountryList(), n.$watch("phoneNumber", function() {
                    n.phoneNumber && "+" !== n.phoneNumber[0] || o()
                }), n.$watch("countryCode", function(e) {
                    return e ? void(n.selectedCountry && n.selectedCountry.calling_code !== e && n.onSelectedCountryChanged()) : void(n.phoneNumber || (n.countryCode = "+47", o()))
                })
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("loadingAnimation", function() {
        return {
            templateUrl: "/templates/partials/loading-animation.html",
            restrict: "E",
            replace: !0,
            scope: {}
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("includeReplace", function() {
        return {
            require: "ngInclude",
            restrict: "A",
            scope: {
                "class": "@"
            },
            link: function(e, t) {
                var n = t.children();
                e["class"] && n.attr("class", e["class"]), t.replaceWith(n)
            }
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("mobileToolbar", function() {
        return {
            templateUrl: "/templates/partials/mobile-toolbar.html",
            restrict: "E",
            replace: !0,
            scope: {
                headerUrl: "=",
                onToggleToolbar: "=",
                highlightButton: "&",
                forceOpen: "&"
            },
            controller: ["$scope", "$rootScope", "Event", "$timeout", "RoomState", "RoomService", "ChatService", function(e, t, n, o, i, r, a) {
                var c;
                e.isToolbarVisible = !a.isOpen, t.$on(n.CHAT_TOGGLED, function(t, n) {
                    n && e.toggleToolbar()
                }), e.resetHideToolbarTimeout = function() {
                    o.cancel(c), e.isToolbarVisible && (c = o(e.toggleToolbar, 3e3))
                }, e.toggleToolbar = function() {
                    a.isOpen && !e.isToolbarVisible || (e.isToolbarVisible = !e.isToolbarVisible, e.resetHideToolbarTimeout(), e.onToggleToolbar && e.onToggleToolbar(e.isToolbarVisible))
                }, t.$on(n.TOGGLE_TOOLBAR, function() {
                    e.toggleToolbar()
                }), e.localClient = i.localClient, e.RoomState = i, e.toggleInvite = function() {
                    e.$emit(n.OPEN_INVITE_PANE), e.toggleToolbar()
                }, e.toggleAudioInput = function() {
                    r.setAudioInputEnabled(!i.localClient.isAudioInputEnabled), e.resetHideToolbarTimeout()
                }, e.toggleVideo = function() {
                    r.setLocalVideoEnabledByUser(!i.localClient.isVideoEnabled), e.resetHideToolbarTimeout()
                }, e.toggleLock = function() {
                    r.setAndBroadcastNewRoomLockStatus(!i.isLocked), e.resetHideToolbarTimeout()
                }, e.isButtonHighlighted = function(t) {
                    var n = e.highlightButton();
                    return n && !!n[t]
                }, e.isAnyButtonHighlighted = function() {
                    var t = e.highlightButton();
                    return t ? Object.keys(t).some(function(e) {
                        return t[e]
                    }) : void 0
                }
            }],
            link: function(e) {
                if (e.forceOpen()) {
                    e.isToolbarVisible = !0;
                    var t = e.$watch("forceOpen()", function(n) {
                        n || (e.resetHideToolbarTimeout(), t())
                    })
                } else e.resetHideToolbarTimeout();
                e.onToggleToolbar && e.onToggleToolbar(e.isToolbarVisible)
            }
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("embedToolbar", function() {
        return {
            templateUrl: "/templates/partials/embed-toolbar.html",
            restrict: "E",
            replace: !0,
            scope: {},
            controller: ["$scope", "$window", "$location", "RoomService", "RoomState", "modalService", "ModalConfig", "Analytics", function(e, t, n, o, i, r, a, c) {
                e.client = i.localClient, e.toggleAudioEnabled = function() {
                    o.setAudioInputEnabled(!e.client.isAudioInputEnabled)
                }, e.toggleVideoEnabled = function() {
                    o.setLocalVideoEnabledByUser(!e.client.isVideoEnabled)
                }, e.openMediaSelectorModal = function() {
                    c.sendEvent(c.events.MEDIA_SELECTOR.OPENED_SELECTOR_FROM_TOPBAR), r.openModal(a.Modals.MEDIA_SELECTOR)
                }, e.openInNewTabAndExitRoom = function() {
                    t.open(n.absUrl());
                    var e = i.roomName;
                    o.leaveRoom(), o.goToSessionFeedback(e)
                }
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("bindHtmlCompile", ["$compile", function(e) {
        return {
            restrict: "A",
            link: function(t, n, o) {
                t.$watch(function() {
                    return t.$eval(o.bindHtmlCompile)
                }, function(o) {
                    n.html(o), e(n.contents())(t)
                })
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("shareableMediaUrl", ["$compile", function(e) {
        return {
            restrict: "A",
            replace: !1,
            scope: !1,
            link: function(t, n, o) {
                var i = o.shareableMediaUrl,
                    r = e("<span> (<a ng-click=\"startMediaShare('" + i + "')\">watch together</a>)</span>")(t);
                n.after(r), n.removeAttr("shareable-media-url")
            },
            controller: ["$scope", "$rootScope", "serverSocket", "Event", function(e, t, n, o) {
                e.startMediaShare = function(e) {
                    t.$broadcast(o.MEDIA_SHARE, {
                        url: e
                    }), n.emit(protocol.req.SHARE_MEDIA, {
                        url: e
                    })
                }
            }]
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("vcRoomName", function() {
        return {
            restrict: "E",
            replace: !0,
            templateUrl: "/templates/partials/vc-room-name.html",
            scope: {
                initialValueSuggestion: "=valueSuggestion",
                isEnabled: "&enabled",
                userValue: "=",
                roomName: "=value",
                disableRandomSuggestions: "=noRandom"
            },
            link: function(e, t) {
                var n = "surprised,splendid,sparkling,smooth,singing,silly,mysterious,lively,lovely,fantastic,enthusiastic,energetic,elegant,delightful,dancing,crazy,cheerful,charming,brilliant,blissful,hyper,curious,cool,amazing,funny,sweet,awesome".split(",");
                e.prefixes = n.map(function(e) {
                    return e + "-"
                });
                var o = t.find("input")[0];
                e.roomInputLength = function() {
                    return o.value.length
                }
            },
            controller: ["$scope", "appearinApi", "$q", "RoomState", "$element", "$timeout", function(e, t, n, o, i, r) {
                function a(t) {
                    function o(e) {
                        return _.sortBy(e, Math.random)
                    }
                    var i = o(e.prefixes),
                        r = [""].concat(i).map(function(e) {
                            return "/" + e + t
                        }),
                        a = -1,
                        c = function s() {
                            if (a += 1, a >= r.length) return n.reject("no combinations available");
                            var t = r[a];
                            return e.checkAvailability(t).then(function() {
                                return t
                            })["catch"](s)
                        };
                    return c()
                }

                function c() {
                    return e.disableRandomSuggestions ? n.when("") : t({
                        method: "POST",
                        url: "/random-room-name"
                    }).then(function(e) {
                        return u[e.data.roomName] = !0, e.data.roomName
                    })
                }

                function s() {
                    function t(e) {
                        return e ? ("" + e).replace(/\s+/g, "-").toLowerCase() : ""
                    }
                    if (e.isEnabled()) {
                        if (e.initialValueSuggestion) return void(e.roomName = e.initialValueSuggestion);
                        var n = t(e.userValue),
                            o = n.length > 0 ? a : c;
                        return o(n).then(function(t) {
                            e.roomName = t, r(function() {
                                l.scrollLeft(999999999999999)
                            })
                        })
                    }
                }
                var l = i.find("input"),
                    u = {};
                e.$watch("userValue", _.debounce(s, 500)), e.$watch(e.isEnabled, s), e.checkAvailability = function(i) {
                    return i in u ? u[i] ? n.when() : n.reject() : e.initialValueSuggestion && e.initialValueSuggestion === i ? n.when() : t({
                        url: "/room/" + encodeURIComponent(i)
                    }).then(function() {
                        var e = i === o.roomName && !o.isClaimed;
                        return !!e
                    })["catch"](function(e) {
                        var t = 404 === e.status;
                        return t
                    }).then(function(e) {
                        return u[i] = e, e ? void 0 : n.reject("Unavailable room name.")
                    })
                }
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("roomNameInput", ["$q", function(e) {
        return {
            restrict: "A",
            replace: !0,
            require: "ngModel",
            scope: {
                availabilityChecker: "="
            },
            link: function(t, n, o, i) {
                i.$formatters.push(function(e) {
                    return e && e.substring(1)
                }), i.$parsers.push(function(e) {
                    return "/" + e
                }), i.$asyncValidators.roomName = function(n) {
                    return i.$isEmpty(n) ? e.when() : t.availabilityChecker(n)
                }
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("verificationCode", ["$timeout", function(e) {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/verification-code.html",
            scope: {
                model: "=",
                placeholder: "@",
                required: "="
            },
            replace: !0,
            link: function(t, n, o) {
                var i = 6;
                o.length && (i = window.parseInt(o.length)), t.model && (n[0].value = t.model.substring(0, i));
                var r = [0, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
                    a = function(e) {
                        return 13 === e.keyCode ? 0 : e.charCode
                    },
                    c = function(o) {
                        var c = a(o);
                        return -1 === r.indexOf(c) ? void o.preventDefault() : n.val().length === i && 0 !== c ? void o.preventDefault() : void e(function() {
                            t.model = n.val()
                        })
                    },
                    s = function(e) {
                        e.preventDefault(), e.originalEvent.clipboardData.items[0].getAsString(function(e) {
                            e && (e = e.match(/^[0-9]*/)[0].substring(0, 6), n.val(e), t.model = e)
                        })
                    };
                n.on("keypress", c), n.on("paste", s)
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("userSettingsRoomList", ["$q", "User", function(e, t) {
        return {
            templateUrl: "/templates/partials/user-settings-room-list.html",
            restrict: "E",
            replace: !0,
            scope: {
                rooms: "=",
                filter: "="
            },
            link: function(n) {
                function o() {
                    var e = n.rooms || [];
                    return e.filter(function(e) {
                        return "owner" === e.userRole
                    }).length > 1
                }
                var i;
                n.startUnclaim = function() {
                    return i = !0, o() ? e.when() : e.reject()
                }, n.roomUnclaimCallback = function(e) {
                    i = !1, e && t.fetchUser()
                }, n.isUnclaimDisabled = function() {
                    return i || !o()
                }
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("roomListItem", function() {
        return {
            templateUrl: "/templates/partials/room-list-item.html",
            restrict: "E",
            scope: {
                room: "=",
                removeRoomCallback: "=",
                startRemoveRoom: "="
            },
            replace: !0,
            controller: ["$scope", "$q", "$element", "FollowerService", "Analytics", "User", "goToRoom", "roleService", function(e, t, n, o, i, r, a, c) {
                var s = {
                    ROOM_REMOVE_ERROR: "room_remove_error",
                    ROOM_REMOVE_SUCCESS: "room_remove_success"
                };
                e.toggleExpanded = function() {
                    e.status = {}, e.isExpanded = !e.isExpanded
                };
                var l = function() {
                    var e = t.defer(),
                        o = function(t) {
                            t.target === n[0] && e.resolve()
                        };
                    return n.on("animationend", o), n.on("webkitAnimationEnd", o), e.promise
                };
                e.removeRoom = function(t) {
                        var n = e.room.userRole === constants.RoomRoleName.OWNER;
                        e.startRemoveRoom().then(function() {
                            return n ? c.unclaimRoom(t).then(function() {
                                i.sendEvent(i.events.USER_SETTINGS.UNCLAIM_ROOM)
                            }) : c.removeRole(t, r.data.userId, n).then(function() {
                                i.sendEvent(i.events.USER_SETTINGS.UNFOLLOW_ROOM)
                            }).then(function() {
                                e.status = s.ROOM_REMOVE_SUCCESS, l().then(function() {
                                    e.removeRoomCallback(!0)
                                })
                            })["catch"](function() {
                                e.removeRoomCallback(!1), e.status = s.ROOM_REMOVE_ERROR
                            })
                        })
                    }, e.goToRoom = function() {
                        a(e.room.roomName)
                    }, e.toggleMuteRoom = function() {
                        return e.room.isRemoved ? void 0 : e.room.isMuted ? void o.unmuteNotificationsForUser(e.room.roomName, r.data.userId).then(function() {
                            e.room.isMuted = !1, i.sendEvent(i.events.USER_SETTINGS.UNMUTE_NOTIFICATIONS_FOR_ROOM)
                        }) : void o.muteNotificationsForUser(e.room.roomName, r.data.userId).then(function() {
                            e.room.isMuted = !0, i.sendEvent(i.events.USER_SETTINGS.MUTE_NOTIFICATIONS_FOR_ROOM)
                        })
                    },
                    function() {
                        e.room && e.room.mutedUntil && (e.room.isMuted = !!(new Date < new Date(e.room.mutedUntil)))
                    }()
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("videoSticker", ["stickerService", "$sce", "$timeout", function(e, t, n) {
        return {
            templateUrl: "/templates/partials/video-sticker.html",
            scope: {
                clientId: "@"
            },
            link: function(o, i) {
                function r(e, r) {
                    var a = 0;
                    this.url = t.trustAsResourceUrl(e.url + "?senderId=" + o.clientId);
                    var c = function s() {
                        10 !== a && n(function() {
                            var e = i.find("iframe")[0];
                            return e ? (e.onload = function() {
                                n(function() {
                                    o.isPlaying = !0
                                })
                            }, void r()) : (a++, void n(s, 100))
                        })
                    };
                    c()
                }
                if (!o.clientId) throw new Error("Sticker directive missing client id");
                var a = function() {
                    o.$apply(function() {
                        o.isPlaying = !1, o.animation = null
                    })
                };
                r.prototype.renderContent = function() {
                    this.renderUrl = this.url
                }, e.registerListener(o.clientId, function(e) {
                    a(), n(function() {
                        o.animation = new r(e, function() {
                            o.animation.renderContent()
                        })
                    })
                }, function() {
                    a()
                })
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("chat", function() {
        return {
            templateUrl: "/templates/partials/chat.html",
            restrict: "E",
            replace: !0,
            scope: {
                buttonStyle: "@",
                detectMediaLinks: "&"
            },
            link: function(e, t) {
                e.buttonStyle = e.buttonStyle || "modal", e.chatNotificationSoundElement = angular.element(".chat-notification-sound")[0], e.chatInputField = t.find(".chat-text-input"), e.messagesParent = t.find(".messages"), e.messageScroller = t.find(".message-scroller"), e.attachViewportChangeListeners();
                var n = function(t) {
                        var n = e.messageScroller.innerHeight(),
                            o = e.messageScroller.scrollTop(),
                            i = n + o,
                            r = 15,
                            a = t.position().top + r > o,
                            c = t.position().top + t.innerHeight() - r < i;
                        return a && c
                    },
                    o = function() {
                        var t = e.messagesParent.find(".entry");
                        return t.get().map($).filter(n)
                    };
                e.getTimestampsInView = function() {
                    var e = o();
                    return e.map(function(e) {
                        return $(e).attr("data-timestamp")
                    })
                }, e.getElementsByTimestamp = function(t) {
                    var n = e.messagesParent.find('.entry[data-timestamp="' + t + '"]');
                    return n
                }, e.isLatestMessageElementInView = function() {
                    var t = e.messagesParent.find(".entry").last();
                    return 0 === t.length || n(t)
                }, e.scrollToBottom = function() {
                    e.messageScroller.scrollTop(99999)
                }
            },
            controller: ["$scope", "ChatService", "$timeout", "$rootScope", "Analytics", "$window", "serverSocket", "Event", "splitscreenRefresher", "$i18next", function(e, t, n, o, i, r, a, c, s, l) {
                function u() {
                    function n() {
                        if (!e.getTimestampsInView) return null;
                        var t = e.getTimestampsInView();
                        if (0 === t.length) return null;
                        var n = t.reduce(function(e, t) {
                                return e > t ? t : e
                            }),
                            o = t.reduce(function(e, t) {
                                return t > e ? t : e
                            });
                        return {
                            earliest: n,
                            latest: o
                        }
                    }
                    if (e.isOpen && !e.isWindowHidden) {
                        var o = n();
                        o && t.setVisibleTimestamps(o)
                    }
                }

                function d() {
                    "Range" !== r.getSelection().type && e.chatInputField.focus()
                }

                function m(t) {
                    var n = _.where(e.readStatePositions, {
                        timestamp: t.timestamp
                    });
                    n.forEach(function(e) {
                        e.lastMoved < t.lastMoved && (e.positionX += v)
                    })
                }

                function f(t) {
                    var n = _.where(e.readStatePositions, {
                        timestamp: t
                    });
                    n.forEach(function(e) {
                        e.positionX -= v
                    })
                }

                function g(t) {
                    var n = e.getElementsByTimestamp(t);
                    if (!n.position()) return null;
                    var o = n.position().top,
                        i = n.outerHeight();
                    return {
                        timestamp: t,
                        positionY: o + i,
                        positionX: 0,
                        lastMoved: Date.now()
                    }
                }

                function p() {
                    t.setChatState(constants.ChatState.INACTIVE), n.cancel(h)
                }
                e.messages = t.entries, e.isWindowHidden = !1, e.numberOfNotifications = 0, e.isEnabled = t.isEnabled;
                var E = _.throttle(function() {
                    n(u)
                }, 10);
                e.attachViewportChangeListeners = function() {
                    e.messageScroller.scroll(E), r.addEventListener("resize", function() {
                        e.isLatestMessageElementInView() && e.$apply(e.scrollToBottom), E()
                    })
                }, o.$on(c.NEW_CHAT_MESSAGE, E), o.$on(c.CHAT_HISTORY_UPDATED, function() {
                    E(), e.$$postDigest(e.scrollToBottom)
                }), r.document.addEventListener("visibilitychange", function() {
                    e.isWindowHidden = r.document.hidden, e.numberOfNotifications = 0, E()
                }), o.$on(c.NEW_CHAT_MESSAGE, function(t, n) {
                    n && "text" !== n.messageType || e.playNotificationSound(), e.isLatestMessageElementInView() && e.$$postDigest(e.scrollToBottom)
                });
                var v = 14;
                e.readStatePositions = {}, e.timestampsWithReadIndicators = [], o.$on(c.CHAT_READ_STATE_CHANGED, function(t, n, o) {
                    var i = e.readStatePositions[n],
                        r = o[n],
                        a = !!i;
                    a && m(i);
                    var c = !r;
                    if (!c) {
                        f(r.timestamp);
                        var s = g(r.timestamp);
                        s && (e.readStatePositions[n] = s)
                    }
                    e.readIndicators = Object.keys(e.readStatePositions).map(function(t) {
                        return _.extend({}, o[t], e.readStatePositions[t])
                    })
                }), o.$on(c.CHAT_USERS_TYPING_CHANGED, function(t, n) {
                    e.usersTyping = _.values(n)
                }), e.$watch(function() {
                    return t.isOpen
                }, function(t) {
                    function o() {
                        e.chatInputField.blur()
                    }
                    e.isOpen = t, n(function() {
                        s.refreshLayout()
                    }, 50), t ? (d(), u(), e.scrollToBottom()) : o()
                }), e.closeChat = function(e) {
                    e && e.stopPropagation(), t.toggleChat(!1), i.sendEvent(i.events.CHAT_CLOSED_USING_TOGGLE)
                };
                var h;
                e.handleKeydownEvent = function(e) {
                    e.stopPropagation(), 27 === e.which && (t.toggleChat(!1), i.sendEvent(i.events.CHAT_CLOSED_USING_KEYBOARD_SHORTCUT), p())
                }, e.handleChange = function() {
                    t.setChatState(constants.ChatState.TYPING), n.cancel(h), h = n(p, 5e3)
                }, e.sendMessage = function() {
                    e.message && (t.sendMessage(e.message), e.message = "", e.scrollToBottom(), i.sendEvent(i.events.CHAT_MESSAGE_SENT), p())
                };
                var S = function(t) {
                        var n = t.position().top,
                            o = e.messageScroller.scrollTop();
                        e.messageScroller.scrollTop(o + n)
                    },
                    C = function(t) {
                        var n = t.position().top,
                            o = t.outerHeight(),
                            i = e.messageScroller.scrollTop(),
                            r = e.messageScroller.innerHeight();
                        e.messageScroller.scrollTop(i + n + o - r + 15)
                    };
                e.scrollToEarliestUnread = function() {
                    var n = t.earliestUnreadTimestamp(),
                        o = e.getElementsByTimestamp(n);
                    S(o), i.sendEvent(i.events.CHAT_CLICKED_UNREAD_BEFORE_INDICATOR)
                }, e.scrollToLatestUnread = function() {
                    var n = t.latestUnreadTimestamp(),
                        o = e.getElementsByTimestamp(n);
                    C(o), i.sendEvent(i.events.CHAT_CLICKED_UNREAD_AFTER_INDICATOR)
                }, e.$watch(function() {
                    return t.unreadCountBefore
                }, function() {
                    e.unreadCountAbove = t.unreadCountBefore;
                    var n = "n_unread_message_above",
                        o = "__count__ unread " + (t.unreadCountBefore > 1 ? "messages" : "message") + " above";
                    e.unreadCountAboveLabel = l(n, {
                        count: t.unreadCountBefore,
                        defaultValue: o
                    })
                }), e.$watch(function() {
                    return t.unreadCountAfter
                }, function() {
                    e.unreadCountBelow = t.unreadCountAfter;
                    var n = "n_unread_message_below",
                        o = "__count__ unread " + (t.unreadCountAfter > 1 ? "messages" : "message") + " below";
                    e.unreadCountBelowLabel = l(n, {
                        count: t.unreadCountAfter,
                        defaultValue: o
                    })
                }), r.addEventListener("beforeunload", function(t) {
                    if (e.message && e.message.length > 0) {
                        var n = r.i18n.t("You have not sent your last chat message yet.");
                        return (t || r.event).returnValue = n, n
                    }
                });
                var y = 4;
                e.playNotificationSound = function() {
                    (e.isWindowHidden || !e.isOpen) && e.numberOfNotifications <= y && (e.chatNotificationSoundElement.play(), e.numberOfNotifications++)
                }, e.focusChatInputField = d, e.isConnected = a.isConnected.bind(a)
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("chatButton", function() {
        return {
            templateUrl: "/templates/partials/chat-button.html",
            restrict: "E",
            replace: !0,
            scope: {
                displayTime: "&",
                maxStackedMessages: "&",
                disableVerticalAnimation: "&",
                avatarInButton: "&",
                isPushedUp: "&"
            },
            controller: ["$scope", "$element", "$window", "ChatService", "$timeout", "$rootScope", "Event", "Analytics", function(e, t, n, o, i, r, a, c) {
                e.isEnabled = o.isEnabled;
                var s = e.maxStackedMessages() || 2,
                    l = parseInt(e.displayTime()) || 3e3,
                    u = l / s,
                    d = u - 100,
                    m = [];
                e.displayedMessages = [];
                var f = null,
                    g = function() {
                        if (e.displayedMessages.length) {
                            var t = e.displayedMessages[e.displayedMessages.length - 1];
                            t.isHidden = !0, i(function() {
                                e.displayedMessages.length && (e.displayedMessages.pop(), e.displayedMessages.length || (e.topEntry = null))
                            }, d)
                        }
                    },
                    p = function E() {
                        function o() {
                            f = null, m.length > 0 && E()
                        }
                        if (!f) {
                            var r = _.clone(m.pop());
                            r && (e.topEntry = r, e.displayedMessages.unshift(r), c.sendEvent(c.events.CHAT_DISPLAYED_PREVIEW), i(function() {
                                n.requestAnimationFrame(function() {
                                    n.requestAnimationFrame(function() {
                                        var e = t.find(".chat-message").first();
                                        e.addClass("visible")
                                    })
                                })
                            }, 0, !1)), f = i(o, u), i(g, l)
                        }
                    };
                r.$on(a.NEW_CHAT_MESSAGE, function(e, t) {
                    o.isOpen || t.isFromSelf || (m.unshift(t), p())
                }), e.openChat = function(t) {
                    e.displayedMessages = [], m = [], o.toggleChat(!0), t ? c.sendEvent(c.events.CHAT_OPENED_CLICKING_PREVIEW) : c.sendEvent(c.events.CHAT_OPENED_USING_TOGGLE)
                }, e.$watch(function() {
                    return o.isOpen
                }, function(t) {
                    e.isVisible = !t
                }), e.$watch(function() {
                    return o.unreadCount
                }, function() {
                    e.unreadCount = o.unreadCount
                })
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("withNotificationCount", function() {
        return {
            restrict: "A",
            link: function(e, t) {
                e.originalText = t.text(), e.setElementText = function(e) {
                    t.text(e)
                }
            },
            controller: ["$scope", "ChatService", function(e, t) {
                var n = function(e) {
                    return !t.unreadCount || t.unreadCount < 1 ? e : "(" + t.unreadCount + ") " + e
                };
                e.$watch(function() {
                    return t.unreadCount
                }, function() {
                    if (t.isEnabled && e.originalText) {
                        var o = n(e.originalText);
                        e.setElementText(o)
                    }
                })
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("avatarImage", function() {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/avatar-image.html",
            scope: {
                src: "=",
                border: "=?",
                title: "=?"
            },
            replace: !0,
            link: function(e) {
                e.border = !!e.border
            }
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("roomRole", function() {
        return {
            templateUrl: "/templates/partials/room-role.html",
            scope: {
                roomName: "=",
                role: "="
            },
            controller: ["$scope", "roleService", "blockService", "$log", "$q", "User", "RoomState", "permissionService", "Analytics", "AnalyticsEvents", function(e, t, n, o, i, r, a, c, s, l) {
                function u() {
                    return e.role && e.role.userId === r.data.userId
                }
                e.isConfirmingRemoveRole = !1, e.isConfirmingBlockRole = !1, e.removeRole = function() {
                    e.isConfirmingRemoveRole = !0, e.closeContextMenu()
                }, e.canRemove = function() {
                    return c.canRemoveRole() && !u() ? !0 : c.canRemoveRoleIfSelf() && u()
                }, e.canBlock = function() {
                    return u() ? !1 : c.canBlockOtherThanOwner() ? !0 : c.canBlockOtherThanOwnerAndMember() && e.role.roleName !== constants.RoomRoleName.OWNER && e.role.roleName !== constants.RoomRoleName.MEMBER
                }, e.canPerformAction = function() {
                    return e.canRemove() || e.canBlock()
                }, e.confirmRemoveRole = function() {
                    return e.isRemoved = !0, t.removeRole(e.roomName, e.role.userId).then(function() {
                        "member" === e.role.roleName && s.sendEvent(l.ROOM_SETTINGS.ROOM_OWNER_CHANGED_SOMEONES_ROLE.FROM_MEMBER_TO_VISITOR), "follower" === e.role.roleName && a.isSelfOwner && s.sendEvent(l.ROOM_SETTINGS.ROOM_OWNER_CHANGED_SOMEONES_ROLE.FROM_FOLLOWER_TO_VISITOR), e.isConfirmingRemoveRole = !1
                    })["catch"](function(t) {
                        return e.isRemoved = !1, e.isConfirmingRemoveRole = !1, o.error(t), i.reject(t)
                    })
                }, e.cancelRemoveRole = function() {
                    e.isConfirmingRemoveRole = !1
                }, e.blockRole = function() {
                    e.isConfirmingBlockRole = !0, e.closeContextMenu()
                }, e.confirmBlockRole = function() {
                    return e.isRemoved = !0, n.blockUser(e.roomName, e.role.userId).then(function() {
                        s.sendEvent(l.ROOM_SETTINGS.ROOM_OWNER_BLOCKED_SOMEONE), e.isConfirmingBlockRole = !1;
                        var t = a.localClient.role.roleName,
                            n = e.role.roleName,
                            o = "ROOM_SETTINGS";
                        s.helpers.recordBlockEvent(t, n, o)
                    })["catch"](function(t) {
                        return e.isRemoved = !1, e.isConfirmingBlockRole = !1, o.error(t), i.reject(t)
                    })
                }, e.cancelBlockRole = function() {
                    e.isConfirmingBlockRole = !1
                }, e.removeBlock = function(e, t) {
                    n.deleteBlock(e, t)
                }, e.isConfirming = function() {
                    return e.isConfirmingRemoveRole || e.isConfirmingBlockRole
                }, e.isContextMenuOpen = !1, e.toggleContextMenu = function() {
                    e.isContextMenuOpen = !e.isContextMenuOpen
                }, e.closeContextMenu = function() {
                    e.isContextMenuOpen = !1
                }
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("roomBlock", function() {
        return {
            templateUrl: "/templates/partials/room-block.html",
            scope: {
                roomName: "=",
                block: "=",
                canUnblock: "&"
            },
            controller: ["$scope", "blockService", "$log", "$q", function(e, t, n, o) {
                e.isConfirmingRemoveBlock = !1, e.isRemoved = !1, e.removeBlock = function() {
                    e.canUnblock() && (e.isConfirmingRemoveBlock = !0, e.isContextMenuOpen = !1)
                }, e.confirmRemoveBlock = function() {
                    return e.isRemoved = !0, t.removeBlock(e.roomName, e.block.blockId).then(function() {
                        e.isRemoved = !0, e.isConfirmingRemoveBlock = !0
                    })["catch"](function(t) {
                        return e.isRemoved = !1, e.isConfirmingRemoveBlock = !1, n.error(t), o.reject(t)
                    })
                }, e.cancelRemoveBlock = function() {
                    e.isConfirmingRemoveBlock = !1
                }
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("scrollfix", function() {
        return {
            restrict: "A",
            link: function(e, t) {
                t[0].addEventListener("mousewheel", _.noop)
            }
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("roomMemberSettings", function() {
        return {
            templateUrl: "/templates/partials/room-member-settings.html",
            restrict: "E",
            scope: {},
            replace: !0,
            controller: ["$scope", "RoomState", "User", "permissionService", function(e, t, n, o) {
                e.RoomState = t, e.shouldShowAllBlocks = function() {
                    return o.canBlockOtherThanOwner() && t.blocks.length > 0
                }, e.shouldShowBlocksOwnedByYou = function() {
                    return o.canBlockOtherThanOwnerAndMember() && e.blocksOwnedByYou.length > 0
                }, e.shouldShowBlocksOwnedByOthers = function() {
                    return o.canBlockOtherThanOwnerAndMember() && e.blocksOwnedByOthers.length > 0
                }, e.$watchCollection(function() {
                    return t.blocks
                }, function() {
                    var o = _.partition(t.blocks, function(e) {
                        return e.blockedBy === n.data.userId
                    });
                    e.blocksOwnedByYou = o[0], e.blocksOwnedByOthers = o[1]
                }), e.RoomState = t, e.isCurrentlyLoggedInUser = function(e) {
                    return e.userId === n.data.userId
                }, e.User = n
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("clickToAppStore", ["$window", function(e) {
        return {
            restrict: "A",
            link: function(t, n, o) {
                n.on("click", function() {
                    function t(t, n) {
                        var o = e.open(t, n, "height=725, width=1080");
                        return o && o.focus && o.focus(), !1
                    }
                    var n = o.clickToAppStore,
                        i = "https://play.google.com/store/apps/details?id=appear.in.app",
                        r = "https://itunes.apple.com/no/app/appear.in-free-group-video/id878583078";
                    return "android" === n ? t(i, "google play url") : "ios" === n ? t(r, "itunes app store") : void 0
                })
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("inviteBySms", function() {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/invite-by-sms.html",
            scope: {},
            replace: !0,
            controller: ["$scope", "$rootScope", "Event", "serverTemplate", "RoomState", "User", "$element", "$timeout", "Analytics", "AnalyticsEvents", "$q", function(e, t, n, o, i, r, a, c, s, l, u) {
                e.invite = {
                    isSendEnabled: !0,
                    phone: {}
                };
                var d = a.find(".sms-dialog"),
                    m = a.find(".dropdown-inner");
                e.$watch("invite.status", function(e) {
                    if ("standby" === e || "sent" === e) {
                        var t = d.height();
                        return void m.height(t)
                    }
                    m.height(0)
                });
                var f = {
                    UNKNOWN_ERROR: "unknown_error",
                    INVALID_PHONE_NUMBER: "invalid_phone_number"
                };
                e.submitInviteFormHandler = function() {
                    function t() {
                        return e.invite.error = f.UNKNOWN_ERROR, e.invite.isMessageSent = !1, e.invite.status = "standby", u.reject()
                    }

                    function n() {
                        var t = 2e3;
                        e.invite.error = null, e.invite.isMessageSent = !0, s.helpers.contacts.recordInviteContact("SMS"), s.sendEvent(l.INVITE.SENT_SMS_INVITE), e.invite.status = "sent", c(function() {
                            e.invite.status = "closed"
                        }, t)
                    }

                    function o() {
                        e.invite.status = "sending";
                        var o = e.invite.phone.prefix + e.invite.phone.number;
                        e.invite.isSendEnabled = !1, e.invite.statusMessage = "Sending...", r.inviteBySms(o, i.roomName).then(n, t)
                    }
                    return !e.invite.phone.number || e.invite.phone.number.length < 2 ? void(e.invite.error = f.INVALID_PHONE_NUMBER) : e.invite.phone.number.match(/^[0-9]*$/) ? void(e.invite.isSendEnabled && o()) : void(e.invite.error = f.INVALID_PHONE_NUMBER)
                }, e.handleKeyDown = function() {
                    e.invite.isSendEnabled = !0, e.invite.error = null
                }, e.$watch(function() {
                    return r.isLoggedIn
                }, function() {
                    var t = "<%= displayName || 'Someone' %> wants to talk to you right now in https://appear.in<%= roomName %>. Click to join the conversation.";
                    o.getTemplate("call_sms.ujs.txt", t).then(function(t) {
                        e.exampleSms = t({
                            displayName: r.data.displayName,
                            roomName: i.roomName
                        })
                    })
                }), e.$watch("invite.phone.number", function(t) {
                    t && (e.invite.isMessageSent = !1)
                }), e.$watch("invite.phone.prefix", function(t) {
                    t && (e.invite.isMessageSent = !1)
                }), e.invite.status = "closed", e.toggleSmsPanelOpen = function() {
                    e.invite.status = "standby", s.sendEvent(l.INVITE.OPENED_SMS_SEND_DIALOG)
                }, e.cancel = function() {
                    e.invite.error = null, e.invite.status = "closed", s.sendEvent(l.INVITE.CLOSED_SMS_SEND_DIALOG)
                }
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("facebookSendButton", ["facebook", "Analytics", "AnalyticsEvents", function(e, t, n) {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/facebook-send-button.html",
            scope: {
                buttonText: "@?"
            },
            replace: !0,
            link: function(o) {
                o.buttonText || (o.buttonText = "Send"), o.openSendDialog = function() {
                    e.openSendDialog(), t.sendEvent(n.INVITE.OPENED_FACEBOOK_SEND_DIALOG)
                }, o.facebook = e
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("smsSendButton", function() {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/sms-send-button.html",
            scope: {
                buttonText: "@?"
            },
            replace: !0,
            link: function(e) {
                e.buttonText || (e.buttonText = "Send")
            }
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("contextMenu", function() {
        return {
            templateUrl: "/templates/partials/context-menu.html",
            restrict: "E",
            replace: !0,
            transclude: !0,
            scope: {
                isOpen: "="
            },
            controller: ["$scope", "$element", function(e, t) {
                var n = t.find(".context-menu-item-wrapper");
                e.$watch("isOpen", function(e) {
                    if (e) {
                        var o = t.offset();
                        n.css({
                            top: o.top,
                            left: o.left
                        })
                    }
                }), e.hideContextMenu = function() {
                    e.isOpen = !1
                }
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("contextMenuItem", function() {
        return {
            templateUrl: "/templates/partials/context-menu-item.html",
            restrict: "E",
            replace: !0,
            transclude: !0
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("permission", ["RoomState", "permissionService", function(e, t) {
        return {
            restrict: "A",
            link: function(e, n, o) {
                function i() {
                    n.css({
                        display: "none"
                    })
                }

                function r() {
                    n.css({
                        display: ""
                    })
                }
                var a = o.permission;
                if (!a) throw new Error("No permission set");
                if (!_.isFunction(t[a])) throw new Error("Permission not found: " + a);
                e.$watch(function() {
                    return t[a]()
                }, function(e) {
                    return e ? void r() : i()
                })
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("sticker", function() {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/sticker.html",
            scope: {
                sticker: "="
            },
            replace: !0,
            controller: ["Analytics", "$scope", "stickerService", "modalService", "ModalConfig", "$timeout", "$window", "$rootScope", "Event", "$sce", function(e, t, n, o, i, r, a, c, s, l) {
                t.shouldShowPreview = !1;
                var u, d, m = 4e3,
                    f = 700;
                t.getStickerUrl = function() {
                    return l.trustAsResourceUrl(t.sticker.url)
                }, t.handleMouseEnter = function() {
                    r.cancel(u), u = r(function() {
                        t.shouldShowPreview = !0, t.sticker.isLocked && e.helpers.videoStickers.viewedLockedStickerDescriptionWithId(t.sticker.id), d = r(function() {
                            t.shouldShowPreview = !1
                        }, m)
                    }, f)
                }, c.$on(s.STICKER_ANIMATION_COMPLETE, function() {
                    r.cancel(d), r(function() {
                        t.shouldShowPreview = !1
                    })
                }), t.handleMouseLeave = function() {
                    r.cancel(u)
                }, t.cancelPreview = function() {
                    r.cancel(d), r.cancel(u), t.shouldShowPreview = !1
                }, t.sendStickerIfUnlocked = function() {
                    return t.sticker.isLocked ? void 0 : n.sendSticker(t.sticker.id).then(function() {
                        return o.closeModal(i.Modals.STICKER_SELECT)
                    })
                }
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("fileUploadButton", function() {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/file-upload-button.html",
            transclude: !0,
            scope: {
                model: "=",
                name: "@",
                type: "@",
                accept: "@",
                resize: "="
            }
        }
    })
}, function(e, t) {
    "use strict";

    function n(e, t, n, o, i) {
        function r() {
            return o.enumerateDevices().then(function(e) {
                return _.chain(e).map(function(e) {
                    return {
                        deviceId: e.deviceId,
                        kind: e.kind,
                        label: e.label
                    }
                }).groupBy("kind").value()
            })
        }

        function a(e) {
            e.getTracks().forEach(function(e) {
                e.stop()
            })
        }

        function c(t) {
            m && a(m), m = t;
            var n = e.document.getElementById(d.videoElemId);
            n.srcObject = t, n.muted = !0, n.play()
        }

        function s(e, t) {
            var o = _.extend({}, n.getMediaConstraints());
            o.audio.deviceId = t, o.video.deviceId = e, n.getUserMedia(o, c, _.noop)
        }

        function l() {
            if (s(d.selectedCameraInput.deviceId, d.selectedAudioInput.deviceId), window.HTMLMediaElement && "sinkId" in HTMLMediaElement.prototype) {
                var t = e.document.getElementById(d.videoElemId);
                t.setSinkId(d.selectedAudioOutput.deviceId)
            }
        }

        function u() {
            i.sendEvent(i.events.MEDIA_SELECTOR.SAVED_SELECTION), o.setPreferredDeviceIds({
                videoId: d.selectedCameraInput.deviceId,
                audioId: d.selectedAudioInput.deviceId,
                outputId: d.selectedAudioOutput.deviceId
            }), o.setPreferredQuality(d.selectedQuality), e.location.reload()
        }
        var d = this;
        d.videoElemId = "media-picker-camera-preview";
        var m, f = {
                VIDEO: "videoinput",
                AUDIO: "audioinput",
                OUTPUT: "audiooutput"
            },
            g = o.getPreferredDeviceIds();
        d.onSelectionUpdated = l, d.saveSelection = u, r().then(function(e) {
            d.cameraDevices = e[f.VIDEO] || [], d.audioDevices = e[f.AUDIO] || [], d.audioOutputDevices = e[f.OUTPUT] || [], d.selectedCameraInput = _.find(d.cameraDevices, function(e) {
                return e.deviceId === g.videoId
            }) || d.cameraDevices[0], d.selectedAudioInput = _.find(d.audioDevices, function(e) {
                return e.deviceId === g.audioId
            }) || d.audioDevices[0], d.selectedAudioOutput = _.find(d.audioOutputDevices, function(e) {
                return e.deviceId === g.outputId
            }) || d.audioOutputDevices[0], l()
        }), d.selectedQuality = o.getPreferredQuality(), t.$on("$destroy", function() {
            m && a(m)
        }), d.supportsSinkId = function() {
            return "sinkId" in HTMLMediaElement.prototype
        }
    }
    angular.module("videoconference").component("mediaSelector", {
        templateUrl: "/templates/partials/media-selector.html",
        controller: ["$window", "$scope", "webrtcProvider", "MediaDevices", "Analytics", n]
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("login", ["ModalConfig", function(e) {
        var t = {
            REQUEST_CODE: "request_code",
            SUBMIT_CODE: "submit_code"
        };
        return {
            restrict: "E",
            templateUrl: "/templates/partials/modals/login.html",
            require: "^modal",
            replace: !0,
            link: function(t, n, o, i) {
                _.extend(t, i.exports), i.initialize(e.Modals.LOGIN, n[0]), n.on("close", function() {
                    t.resetState()
                })
            },
            controller: ["$rootScope", "$scope", "appearinApi", "$log", "modalService", "$element", "RoomState", "Analytics", "inRoomNotificationService", "browserExtension", "$timeout", "RoomService", "FollowerService", "User", "Event", function(n, o, i, r, a, c, s, l, u, d, m, f, g, p, E) {
                function _() {
                    var e = o.getContext();
                    return "claim" === e
                }

                function v() {
                    var e = o.getContext();
                    return "acceptMembership" === e
                }

                function h() {
                    return o.endpoint.address ? "roomName" : o.phone.number ? "phoneNumber" : o.email.value ? "email" : void 0
                }

                function S(e) {
                    var t = 100;
                    m(function() {
                        var t = c.find(e)[0];
                        t && t.focus()
                    }, t)
                }
                o.State = t, o.getContext = function() {
                    var e = o.currentModal();
                    return e && e.context || "default"
                }, o.loginCode = {
                    code: ""
                }, o.endpoint = {
                    type: "",
                    name: {
                        phone: "SMS",
                        email: "email"
                    },
                    address: s.isClaimed && s.roomName && s.isSelfOwner ? s.roomName.substring(1) : ""
                }, o.resetState = function() {
                    o.phone = {
                        prefix: "+47",
                        number: ""
                    }, o.email = {
                        value: ""
                    }, o.activeState = t.REQUEST_CODE;
                    var e = _() || v();
                    o.setModalCentered(e), o.resetForm()
                }, o.$watch(o.getContext, o.resetState), c.on("open", function() {
                    o.resetState()
                }), o.preferredEndpoint = "", o.checkPreferredEndpoint = function(e) {
                    var t = c.find("input." + e);
                    if (0 !== t.length) return t.val().toString().length > 0 ? void(o.preferredEndpoint = e) : void(o.preferredEndpoint = "")
                };
                var C;
                o.requestLoginCode = function() {
                    C = h();
                    var e;
                    switch (C) {
                        case "roomName":
                            e = {
                                roomName: "/" + o.endpoint.address
                            };
                            break;
                        case "phoneNumber":
                            e = {
                                phoneNumber: o.phone.prefix + o.phone.number
                            };
                            break;
                        case "email":
                            e = {
                                email: o.email.value
                            };
                            break;
                        default:
                            return void o.triggerError("Please provide either a phone number, email, or room name")
                    }
                    i({
                        method: "POST",
                        url: "/device/link-tokens",
                        data: e
                    }).then(function() {
                        function e() {
                            S("input.code")
                        }
                        l.helpers.login.recordRequestLoginCode(C), e(), o.activeState = t.SUBMIT_CODE
                    }, function(e) {
                        return 404 === e.status ? void o.triggerError("Could not find profile") : void o.triggerError("Unknown error fetching user")
                    })
                }, o.shouldDisableInputWithName = function(e) {
                    return o.preferredEndpoint && o.preferredEndpoint !== e
                }, o.resetForm = function() {
                    function e() {
                        S("input.main-input")
                    }
                    o.clearError(), o.email.value = "", o.phone.number = "", o.endpoint.address = "", o.preferredEndpoint = "", o.loginCode.code = "", e()
                }, o.goToRequestCode = function() {
                    o.resetForm(), o.activeState = t.REQUEST_CODE
                }, o.openUserRegistration = function() {
                    var t, n = o.getContext();
                    switch (n) {
                        case "default":
                            t = e.Flows.DEFAULT_SIGNUP;
                            break;
                        case "claim":
                            t = e.Flows.CLAIM_SIGNUP;
                            break;
                        case "acceptMembership":
                            t = e.Flows.ACCEPT_MEMBERSHIP_SIGNUP;
                            break;
                        default:
                            throw new Error("Can not open registration flow for context: " + n)
                    }
                    a.openFlow(t)
                }, o.submitLoginCode = function() {
                    if ("" === o.loginCode.code) return void o.triggerError("Please enter the login code");
                    for (var e = "" + o.loginCode.code; e.length < 6;) e = "0" + e;
                    var t = {
                        code: e
                    };
                    switch (C) {
                        case "phoneNumber":
                            t.phoneNumber = o.phone.prefix + o.phone.number;
                            break;
                        case "email":
                            t.email = o.email.value;
                            break;
                        case "roomName":
                            t.roomName = "/" + o.endpoint.address;
                            break;
                        default:
                            return void o.triggerError("Please provide either a phone number, email, or room name")
                    }
                    i({
                        method: "POST",
                        url: "/device/links",
                        data: t
                    }).then(function() {
                        var e = n.$on(E.USER_LOGGED_IN, function() {
                            e(), o.closeModal()
                        });
                        p.fetchUserAndDependentObjects()
                    }, function() {
                        o.triggerError("Invalid code")
                    })
                }
            }]
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("userRegistration", ["ModalConfig", function(e) {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/modals/user-registration.html",
            require: "^modal",
            replace: !0,
            link: function(t, n, o, i) {
                t.getPartialPath = function(e) {
                    var t = "/templates/partials/modals/user-registration/";
                    return t + e + ".html"
                }, t.states = ["profile", "phone_number", "email"], _.extend(t, i.exports), i.initialize(e.Modals.USER_REGISTRATION, n[0])
            },
            controller: ["$scope", "$element", "User", "RoomState", "RoomService", "Analytics", "$timeout", "$log", "$q", "browserExtension", "modalService", function(t, n, o, i, r, a, c, s, l, u, d) {
                function m() {
                    var e = t.getContext();
                    return "claim" === e
                }

                function f() {
                    var e = t.getContext();
                    return "acceptMembership" === e
                }

                function g(e) {
                    var o = 100;
                    c(function() {
                        var o = n.find("." + t.activeState + " " + e)[0];
                        o && o.focus()
                    }, o)
                }

                function p() {
                    g("input.code")
                }

                function E() {
                    t.phoneNumber.prefix && t.phoneNumber.number ? t.phoneNumber.value = t.phoneNumber.prefix + t.phoneNumber.number.trim() : t.phoneNumber.value = null
                }

                function v(e) {
                    var n = {};
                    return n[constants.RESTErrors.InvalidCountryCode] = constants.RESTErrors.InvalidCountryCode, n[constants.ContactPointValidationErrors.InvalidFormat] = "Please enter a valid phone number.", n[constants.ContactPointValidationErrors.AlreadyRegistered] = {
                            type: constants.ContactPointValidationErrors.AlreadyRegistered
                        },
                        function(o) {
                            var i = o.data;
                            return i && i.error && i.error in n ? t[e].error = n[i.error] : t[e].error = "Something went wrong when sending your verification code. Please try again.", t.triggerError(), l.reject(o)
                        }
                }

                function h(e) {
                    var n = t[e];
                    R++, 1 === R && (t.showTryAgainLink = !0);
                    var i = I[e] || e;
                    return o.verifyContactPoint(i, n.value, n.verificationCode).then(function(n) {
                        return n.data.isVerified ? void 0 : (t[e].error = "Invalid code. Please try again.", t.triggerError(), l.reject())
                    })
                }

                function S() {
                    return o.create(t.userData)
                }

                function C() {
                    return S().then(function() {
                        r.claimRoom(t.userData.roomName)["catch"](function() {
                            s.error("Could not claim room + %s. Continuing.", t.userData.roomName)
                        }).then(o.fetchUserAndDependentObjects)
                    })
                }
                t.isClaimContext = m;
                var y = function() {
                    t.setActiveState(t.states[0]);
                    var e = m() || f();
                    t.setModalCentered(e), t.phoneNumber = {
                        verificationProperty: "number",
                        verificationCode: "",
                        number: "",
                        isVerifying: !1,
                        error: null
                    }, t.email = {
                        verificationCode: "",
                        value: "",
                        isVerifying: !1,
                        error: null
                    }, t.userData = {
                        displayName: "",
                        avatarImage: null,
                        phoneIsNotifiable: !0,
                        emailIsNotifiable: !0,
                        roomName: null
                    }, t.clearError()
                };
                t.getContext = function() {
                    var e = t.currentModal();
                    return e && e.context || "default"
                }, t.$watch(t.getContext, y), t.currentRoomName = i.roomName.substring(1), t.getRoomNameValueSuggestion = function() {
                    return m() ? i.roomName : null
                }, t.randomRoomNameSuggestionsDisabled = function() {
                    return t.isOpen() && !m()
                }, t.validationErrors = constants.ContactPointValidationErrors;
                var I = {
                    phoneNumber: "phone"
                };
                n.on("open", function() {
                    y()
                }), t.shouldShowClaimPitch = function() {
                    return m()
                }, t.setActiveState = function(e) {
                    function n() {
                        g("input.main-input")
                    }
                    t.activeState = e, n(), a.helpers.userRegistration.recordSetActiveState(e)
                }, t.forms = {}, t.verificationCodePattern = /^\d{6}$/, t.isDataValid = function() {
                    var e = t.forms[t.activeState];
                    return e && e.$valid
                }, t.$watch("phoneNumber.prefix", E), t.$watch("phoneNumber.number", E);
                var O = 3e3;
                t.sendVerificationCodeToContactPoint = function(e) {
                    var n = I[e] || e;
                    return a.helpers.userRegistration.recordSentVerificationCode(n), o.sendVerificationCode(n, t[e].value, !0)["catch"](v(e)).then(function() {
                        t[e].error = void 0, t[e].isVerifying && (t[e].verificationCodeResent = !0, c(function() {
                            t[e].verificationCodeResent = !1
                        }, O)), t[e].isVerifying = !0
                    }).then(p)
                };
                var R = 0;
                t.isRoomNameInputEnabled = function() {
                    return "claim" !== t.getContext()
                }, t.verifyContactPointAndContinue = function(e) {
                    a.helpers.userRegistration.recordAttemptVerifyContactPoint(e), h(e).then(function() {
                        t.userData[e] = _.pick(t[e], "verificationCode", "value")
                    }).then(function() {
                        return C()["catch"](function(n) {
                            return a.sendEvent(a.events.SIGNUP_ERROR), s.error(n), t[e].error = "There was an error creating your user. Please try again.", t.triggerError(), l.reject(n)
                        })
                    })["catch"](function() {
                        return o.isLoggedIn ? l.when() : l.reject()
                    }).then(function() {
                        t.closeModal()
                    })
                }, t.openLogin = function() {
                    var n, o = t.getContext();
                    switch (o) {
                        case "default":
                            n = e.Flows.DEFAULT_LOGIN;
                            break;
                        case "claim":
                            n = e.Flows.CLAIM_LOGIN;
                            break;
                        case "acceptMembership":
                            n = e.Flows.ACCEPT_MEMBERSHIP_LOGIN;
                            break;
                        default:
                            throw new Error("Can not open login flow for context: " + o)
                    }
                    d.openFlow(n)
                }, t.phoneNumberOnKeydown = function() {
                    t.phoneNumber.isVerifying = !1, t.phoneNumber.verificationCode = "", t.clearError()
                }, t.emailOnKeydown = function() {
                    t.email.isVerifying = !1, t.email.verificationCode = "", t.clearError()
                }
            }]
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("deleteUser", function() {
        return {
            restrict: "E",
            scope: {
                isOpen: "="
            },
            replace: !0,
            templateUrl: "/templates/partials/delete-user.html",
            controller: ["$scope", "appearinApi", "RoomState", "Analytics", "$rootScope", "Event", "$timeout", function(e, t, n, o, i, r, a) {
                function c() {
                    e.deleteStatus = s.STANDBY, e.verificationStatus = {}, e.verificationInput.roomName = ""
                }
                var s = {
                        STANDBY: "standby",
                        CONFIRMING: "confirming",
                        DELETING: "deleting",
                        FAILED: "failed",
                        SUCCESS: "success"
                    },
                    l = {
                        VERIFICATION_ERROR: "verification_error"
                    };
                e.verificationInput = {
                    roomName: ""
                }, c();
                var u = function(e) {
                    if (!e) return !1;
                    var t = e;
                    return "/" !== t[0] && (t = "/" + t), t === n.roomName
                };
                e.confirmUserDeletion = function() {
                    e.deleteStatus = s.DELETING, t({
                        method: "DELETE",
                        url: "/user"
                    }).then(function() {
                        o.sendEvent(o.events.USER_DELETION.DELETED_USER), e.deleteStatus = s.SUCCESS
                    })["catch"](function() {
                        e.deleteStatus = s.FAILED
                    })
                }, e.goToConfirmation = function() {
                    return u(this.verificationInput.roomName) ? void(e.deleteStatus = s.CONFIRMING) : void(e.verificationStatus.status = l.VERIFICATION_ERROR)
                }, e.close = function() {
                    c(), e.isOpen = !1
                }, e.closeUserSettings = function() {
                    i.$emit(r.CLOSE_USER_SETTINGS)
                }, i.$on(r.CLOSE_USER_SETTINGS, function() {
                    a(e.close, 800)
                })
            }]
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("roomSettingsModal", ["ModalConfig", function(e) {
        return {
            restrict: "E",
            require: "^modal",
            scope: {},
            replace: !0,
            templateUrl: "/templates/partials/room-settings-modal.html",
            link: function(t, n, o, i) {
                i.initialize(e.Modals.ROOM_SETTINGS, n[0]), _.extend(t, i.exports)
            },
            controller: ["$rootScope", "$scope", "$log", "RoomState", "$window", "Analytics", "ImageParser", "RoomService", "Event", "modalService", "ModalConfig", "permissionService", "FollowerService", "User", function(e, t, n, o, i, r, a, c, s, l, u, d, m, f) {
                function g(e) {
                    return !e || !!(new Date > new Date(e))
                }
                t.RoomState = o, t.$watch(function() {
                    return o.isKnockingEnabled
                }, function() {
                    t.isKnockingEnabled = o.isKnockingEnabled
                }), t.$watch("isKnockingEnabled", function(e) {
                    void 0 !== e && e !== o.isKnockingEnabled && c.setKnockingEnabled(e)["catch"](function(e) {
                        n.error("Failed to change knockability of the room:", e)
                    })
                }), t.$watch("isNotificationsEnabled", function(e) {
                    void 0 !== e && e !== g(o.mutedUntil) && (e ? m.unmuteNotificationsForUser(o.roomName, f.data.userId) : m.muteNotificationsForUser(o.roomName, f.data.userId))
                }), t.$watch(function() {
                    return o.mutedUntil
                }, function() {
                    t.isNotificationsEnabled = g(o.mutedUntil)
                }), t.clearChatHistory = {
                    clear: function() {
                        t.clearChatHistory.isConfirming = !0
                    },
                    cancel: function() {
                        t.clearChatHistory.isConfirming = !1
                    },
                    confirm: function() {
                        e.$emit(s.CLEAR_CHAT_HISTORY), t.clearChatHistory.isConfirming = !1
                    },
                    isConfirming: !1
                }, t.handleSelectedFile = function(e) {
                    function n(e) {
                        a.parseFileAsImage({
                            file: e
                        }, function(e, n) {
                            t.$apply(function() {
                                return e ? void(t.customizeRoomError = e) : void c.submitBackgroundImage(a.base64toBlob(n, "image/jpeg"))
                            })
                        })
                    }
                    r.sendEvent(r.events.BACKGROUND_IMAGE_SELECT_CLICK), n(e)
                }, t.useDefaultBackgroundImage = function() {
                    c.resetBackgroundImage()
                }, e.$on(s.OPEN_ROOM_SETTINGS, function() {
                    l.openModal(u.Modals.ROOM_SETTINGS)
                }), e.$on(s.CLIENT_ROLE_CHANGED, function(e, t) {
                    t.clientId === o.selfId && (d.canAccessRoomSettings() || l.closeModal(u.Modals.ROOM_SETTINGS))
                })
            }]
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("inviteModal", ["ModalConfig", function(e) {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/invite-modal.html",
            require: "^modal",
            replace: !0,
            link: function(t, n, o, i) {
                i.initialize(e.Modals.INVITE, n[0]), _.extend(t, i.exports)
            },
            controller: ["$scope", "$timeout", "$element", "Analytics", "User", "serverTemplate", "RoomState", function(e, t, n, o, i, r, a) {
                function c(e) {
                    return e[0].scrollHeight - e.scrollTop() === e.outerHeight()
                }
                e.User = i, e.contactSearchString = "", e.forceSearchFilter = function() {
                    e.contactSearchString = n.find(".contact-search").val()
                };
                var s = "<%= displayName || 'Someone' %> wants to talk to you right now in https://appear.in<%= roomName %>. Click to join the conversation.";
                r.getTemplate("call_sms.ujs.txt", s).then(function(t) {
                    e.exampleSms = t({
                        displayName: i.data.displayName,
                        roomName: a.roomName
                    })
                });
                var l = e.entriesPerPage || 20,
                    u = e.entriesOnPageLoad || 5 * l,
                    d = u,
                    m = n.find(".content-wrapper"),
                    f = function() {
                        var t = function() {
                            return i.unregisteredContacts.slice(d, d + l)
                        };
                        e.renderedPhoneContacts = e.renderedPhoneContacts.concat(t()), d += l
                    },
                    g = !1;
                n.on("open", function() {
                    var t = function() {
                        g || (g = !0, e.renderedPhoneContacts = i.unregisteredContacts.slice(0, u), o.sendEvent(o.events.INVITE.OPENED_INVITE_MODAL))
                    };
                    t()
                }), m.on("scroll", function() {
                    e.$apply(function() {
                        c(m) && f()
                    })
                })
            }]
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("inviteMember", ["ModalConfig", function(e) {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/modals/invite-member.html",
            require: "^modal",
            replace: !0,
            link: function(t, n, o, i) {
                _.extend(t, i.exports), i.initialize(e.Modals.INVITE_MEMBER, n[0])
            },
            controller: ["Analytics", "$scope", "modalService", "RoomState", "User", "$q", "Event", "roleService", "$element", "$timeout", function(t, n, o, i, r, a, c, s, l, u) {
                function d(e) {
                    return e ? s.setAsMember(i.roomName, r.data.userId, e).then(function() {
                        t.sendEvent(t.events.MEMBERSHIP.ACCEPT_MEMBERSHIP_OFFER)
                    }) : a.reject()
                }
                n.currentInviteMemberKey = null, n.$on(c.MEMBER_INVITE, function(r, a) {
                    n.currentInviteMemberKey = a.inviteMemberKey, n.inviter = _.find(i.clients, function(e) {
                        return e.userId === a.inviter.userId
                    }), o.openModal(e.Modals.INVITE_MEMBER), t.sendEvent(t.events.MEMBERSHIP.SEE_MEMBERSHIP_OFFER)
                }), n.User = r, n.acceptMembership = function() {
                    var e = n.currentInviteMemberKey;
                    d(e)["finally"](function() {
                        n.closeModal()
                    })
                }, n.signupAndAcceptMembership = function() {
                    var t = n.currentInviteMemberKey;
                    return o.openFlow(e.Flows.ACCEPT_MEMBERSHIP_SIGNUP, {
                        inviteMemberKey: t
                    }).then(function() {
                        return r.isLoggedIn ? d(t) : void 0
                    })["finally"](function() {
                        n.closeModal()
                    })
                }, n.loginAndAcceptMembership = function() {
                    var t = n.currentInviteMemberKey;
                    return o.openFlow(e.Flows.ACCEPT_MEMBERSHIP_LOGIN, {
                        inviteMemberKey: t
                    }).then(function() {
                        return r.isLoggedIn ? d(t) : void 0
                    })["finally"](function() {
                        n.closeModal()
                    })
                }, l.on("open", function() {
                    u(function() {
                        l.find(".balance-text").balanceText()
                    })
                }), l.on("close", function() {
                    n.currentInviteMemberKey = null
                }), n.cancel = function() {
                    n.closeModal()
                }
            }]
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("inviteMemberConfirmation", ["ModalConfig", function(e) {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/modals/invite-member-confirmation.html",
            require: "^modal",
            replace: !0,
            link: function(t, n, o, i) {
                _.extend(t, i.exports), i.initialize(e.Modals.INVITE_MEMBER_CONFIRMATION, n[0])
            },
            controller: ["$scope", "RoomService", "modalService", "$element", "RoomState", "$rootScope", "Event", function(t, n, o, i, r, a, c) {
                t.inviteMember = function() {
                    if (r.isSelfOwner && !t.client.isOwner) {
                        var e = t.client.id;
                        n.inviteClientAsMember(e), t.closeModal()
                    }
                };
                var s;
                i.on("open", function() {
                    t.client = o.modals[e.Modals.INVITE_MEMBER_CONFIRMATION].context, $(i).find(".balance-text").balanceText(), s = a.$on(c.CLIENT_LEFT, function(e, n) {
                        n.clientId === t.client.id && t.closeModal()
                    })
                }), i.on("close", function() {
                    s()
                }), t.cancel = function() {
                    t.closeModal()
                }
            }]
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("congratulations", ["ModalConfig", function(e) {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/modals/congratulations.html",
            require: "^modal",
            replace: !0,
            link: function(t, n, o, i) {
                _.extend(t, i.exports), i.initialize(e.Modals.CONGRATULATIONS, n[0])
            },
            controller: ["$rootScope", "$scope", "$element", "Event", "RoomState", "browserExtension", function(t, n, o, i, r, a) {
                n.currentRoom = r.roomName, n.lastClaimedRoom = null, n.getContext = function() {
                    var e = n.currentModal();
                    return e && e.context || "default"
                }, n.openRoomSettings = function() {
                    n.closeModal(), n.openModal(e.Modals.ROOM_SETTINGS)
                }, n.extension = {
                    shouldShowUpsell: function() {
                        return !a.hasExtension && a.canInstall()
                    },
                    triggerInstall: function() {
                        a.triggerInstall({
                            reason: "desktop-notifications"
                        })
                    },
                    browser: a.browserPlatform
                }, o.on("open", function() {
                    var e = "default" !== n.getContext();
                    n.setModalCentered(e)
                }), t.$on(i.ROOM_CLAIMED, function(e, t) {
                    n.lastClaimedRoom = t.roomName
                })
            }]
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("mobileAppUpsell", ["ModalConfig", function(e) {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/modals/mobile-app-upsell.html",
            require: "^modal",
            replace: !0,
            link: function(t, n, o, i) {
                _.extend(t, i.exports), i.initialize(e.Modals.MOBILE_APP_UPSELL, n[0])
            },
            controller: ["$scope", function(e) {
                e.goToNext = function() {
                    e.closeModal()
                }
            }]
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("desktopNotificationsUpsell", ["ModalConfig", function(e) {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/modals/desktop-notifications-upsell.html",
            require: "^modal",
            replace: !0,
            link: function(t, n, o, i) {
                _.extend(t, i.exports), i.initialize(e.Modals.DESKTOP_NOTIFICATIONS_UPSELL, n[0])
            },
            controller: ["$scope", "browserExtension", "Event", "$element", function(e, t, n, o) {
                o.on("open", function() {
                    !t.hasExtension && t.canInstall() || e.closeModal()
                }), e.browserPlatform = t.browserPlatform, e.installExtension = function() {
                    t.triggerInstall({
                        reason: "following"
                    })
                }, e.$on(n.EXTENSION_INSTALL, function(n, o) {
                    "following" === o.installReason && e.isOpen() && ("loaded" === o.state && t.toggleDesktopNotifications(!0), e.closeModal())
                })
            }]
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("claimRoom", ["ModalConfig", function(e) {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/modals/claim-room.html",
            require: "^modal",
            replace: !0,
            link: function(t, n, o, i) {
                _.extend(t, i.exports), i.initialize(e.Modals.CLAIM_ROOM, n[0])
            },
            controller: ["$scope", "RoomService", "RoomState", function(e, t, n) {
                e.RoomState = n, e.claimRoom = function() {
                    t.claimRoom(n.roomName).then(function() {
                        e.closeModal()
                    })
                }
            }]
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("stickerSelectModal", ["ModalConfig", "modalService", "$timeout", function(e, t) {
        return {
            restrict: "E",
            templateUrl: "/templates/partials/sticker-select-modal.html",
            scope: {},
            require: "^modal",
            replace: !0,
            link: function(n, o, i, r) {
                r.initialize(e.Modals.STICKER_SELECT, o[0]), _.extend(n, r.exports), o.on("open", function() {
                    var o = t.modals[e.Modals.STICKER_SELECT].context.boundingRect;
                    o && r.spawnFromBoundingRect(o), n.isOpening = !0, n.shouldSlideRight = !1
                })
            },
            controller: ["$scope", "stickerService", "$element", "$timeout", "$rootScope", "Event", function(e, t, n, o, i, r) {
                function a() {
                    t.getStickerCategories().then(function(t) {
                        e.categories = t || [], e.activeCategory = t[0] || {}, e.shouldShowTabBar = t && t.length > 1
                    })["catch"](function() {
                        e.shouldShowTabBar = !1, e.categories = []
                    })
                }

                function c(t) {
                    return _.find(e.categories, function(e) {
                        return t === e.id
                    })
                }

                function s(t, n) {
                    return e.categories.indexOf(t) < e.categories.indexOf(n) ? "left" : "right"
                }
                e.categories = [], e.activeCategory = {}, a(), e.goToCategory = function(t) {
                    if (0 === e.categories.length) throw new Error("No categories are loaded");
                    if (t !== e.activeCategory.id) {
                        e.shouldRenderStickers = !1, e.isOpening = !1;
                        var n = e.activeCategory,
                            i = c(t);
                        e.fadeoutCategory = n, e.activeCategory = i, e.shouldSlideRight = !1;
                        var r = 100;
                        o(function() {
                            e.shouldSlideRight = "right" === s(n, i), e.shouldRenderStickers = !0
                        }, r)
                    }
                }, i.$on(r.USER_LOGGED_OUT, a), i.$on(r.USER_LOGGED_IN, a), i.$on(r.STICKERS_UNLOCKED, a)
            }]
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").directive("mediaSelectorModal", ["ModalConfig", function(e) {
        return {
            restrict: "E",
            require: "^modal",
            scope: {},
            replace: !0,
            templateUrl: "/templates/partials/modals/media-selector.html",
            link: function(t, n, o, i) {
                i.initialize(e.Modals.MEDIA_SELECTOR, n[0]), _.extend(t, i.exports)
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").controller("errorController", ["$scope", "$routeParams", "RoomName", function(e, t, n) {
        e.errorName = t.errorName, e.origin = t.origin, e.roomNameRequirements = n.requirements
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").controller("webRtcErrorController", ["$scope", "$routeParams", "$location", "webrtcProvider", function(e, t, n, o) {
        var i = t.origin;
        return e.webRtcDetectedBrowser = o.webRtcDetectedBrowser, e.isWebRtcEnabled = o.isWebRtcEnabled(), i && o.isWebRtcEnabled() ? void n.url(i) : void 0
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").controller("roomController", ["$scope", "serverSocket", "$timeout", "$location", "$rootScope", "RoomState", "RoomService", "Event", "State", "Analytics", "$window", "$log", "splitscreenRefresher", "splitscreenElements", "splitscreenLayouts", "RoomName", "isEmbedded", "webrtcProvider", "inRoomNotificationService", "$i18next", "features", "screenShareExtension", "User", "mobileService", "serverTemplate", "isMobileWeb", "ChatService", "UIState", "blockService", "permissionService", "facebook", function(e, t, n, o, i, r, a, c, s, l, u, d, m, f, g, p, E, v, h, S, C, y, I, O, R, T, N, A, b, D, k) {
        function w() {
            return o.host().split(".")[0]
        }

        function M() {
            e.videoTutorialUrl = null
        }

        function L(e) {
            return 0 !== e
        }

        function U() {
            var n = [t.$on(protocol.res.MEDIA_SHARED, function(e) {
                W(e.url)
            }), t.$on("connect_failed", function() {
                e.state !== s.READY && (l.sendEvent(l.events.ERROR_CONNECTION), o.path("/error/connection"))
            })];
            return function() {
                n.forEach(function(e) {
                    e()
                })
            }
        }

        function $(e) {
            return b.listBlocks(e).then(function(e) {
                r.blocks = e
            })
        }
        var P = function(e) {
            return e.replace(o.protocol() + "://", "")
        };
        e.mobileService = O, e.features = C, e.User = I, e.RoomService = a, e.RoomState = r, e.isMobileWeb = T, e.isChatOpen = !1, e.UIState = A, e.facebook = k;
        var B = o.search() || {};
        if (B.resetToken) return void o.search("resetToken", null).path("/error/invalid-link");
        B.lowData && o.search("lowData", null), e.$watch(function() {
            return N.isOpen
        }, function(t) {
            e.isChatOpen = t
        }), e.$watch(function() {
            return r.selfStream
        }, function(t) {
            e.selfStream = t
        }), e.closeUserSettings = function() {
            i.$emit(c.CLOSE_USER_SETTINGS)
        };
        var x = function(e) {
                return e.split("?")[0]
            },
            K = C.isPremiumVersion ? "/" + w() + o.path() : o.path();
        if (r.roomName = p.normalize(K), l.helpers.recordVisitedRoom({
                roomName: r.roomName,
                renderedLanguage: S.options.lng,
                browserLanguage: navigator.language,
                userAgent: navigator.userAgent
            }), E) {
            var V;
            try {
                V = u.top.location.host
            } catch (F) {
                V = "SecurityError: host on http"
            }
            l.helpers.recordEmbeddedVersionLoaded(V)
        }
        if (!v.isWebRtcEnabled()) return void v.handleIncompatibleBrowser();
        u.addEventListener("unload", function() {
            l.sendEvent(l.events.CLOSED_TAB)
        });
        var G = {
            NORMAL: "normal",
            SUPERSIZE: "supersize",
            ALTERNATIVE: "alternative",
            MEDIA_SHARE: "media-share"
        };
        e.viewmode = {
            mode: G.NORMAL,
            options: {
                smallLocalClient: e.isMobileWeb
            }
        }, e.mediaShareUrl = "";
        var H = !1,
            W = function(t) {
                e.viewmode = {
                    mode: G.NORMAL,
                    options: {
                        mediaShare: "youtube"
                    }
                }, e.mediaShareUrl = t, l.sendEvent(l.events.MEDIA_SHARE.MEDIA_SHARE_PLAYED_IN_ROOM), H = !r.localClient.isAudioInputEnabled, a.setAudioInputEnabled(!1), n(e.enableSuperSizeMedia)
            },
            q = function() {
                e.viewmode = {
                    mode: G.NORMAL
                }, e.mediaShareUrl = "", H || a.setAudioInputEnabled(!0), e.disableSuperSizeMedia()
            };
        e.$on("youtube.player.ended", function(e, t) {
            "media-share" === t.id && (l.sendEvent(l.events.MEDIA_SHARE.MEDIA_SHARE_FINISHED), q()), "tutorial" === t.id && (l.sendEvent(l.events.VIEWED_VIDEO_TUTORIAL_TO_COMPLETION), M())
        }), e.$on(c.MEDIA_SHARE, function(e, t) {
            l.helpers.mediaShare.mediaShareStarted(r.clients.length), W(t.url)
        }), e.closeMediaShare = function() {
            l.sendEvent(l.events.MEDIA_SHARE.MEDIA_SHARE_CLOSED), q()
        }, e.$watch("viewmode.mode", function(e) {
            i.$broadcast(c.VIEWMODE_CHANGED, e)
        }), e.toggleViewMode = function() {
            return e.viewmode.mode === G.NORMAL ? void(e.viewmode.mode = G.SUPERSIZE) : void(e.viewmode.mode = G.NORMAL)
        }, e.state = "", e.localClient = null;
        var j = C.isVideoDisabledByDefault,
            z = C.isAudioDisabledByDefault;
        e.clients = r.clients, e.selfStream = r.selfStream, i.controller = "room", e.exitRoom = function() {
            var e = r.roomName;
            a.leaveRoom({
                analyticsEvent: l.events.LEFT_USING_LEAVE_BUTTON
            }), a.goToSessionFeedback(e)
        }, e.openPopupForType = function(e) {
            var t = "/information";
            switch (e) {
                case "tos":
                    t += "/tos";
                    break;
                default:
                    t = "/"
            }
            u.open(t, "", "height=500,width=500,resizable=yes,scrollable=yes,scrollbars=yes")
        };
        var Y = decodeURI(o.absUrl());
        e.urlWithoutProtocolAndFeatures = x(P(Y)), e.backgroundStyle = {}, e.isEmbedded = E, e.installInstructions = {
            show: !1,
            type: ""
        }, e.$on(c.EXTENSION_INSTALL, function(t, n) {
            switch (n.state) {
                case "started":
                    e.installInstructions = {
                        show: !0,
                        type: n.installReason
                    };
                    break;
                case "installed":
                    e.installInstructions = {
                        show: !1,
                        type: ""
                    };
                    break;
                case "error":
                    e.installInstructions = {
                        show: !1,
                        type: ""
                    };
                    break;
                case "loaded":
            }
        }), e.$on(c.EXTENSION_INSTALL, function(e, t) {
            var n = "extension-installed-notifications";
            "notification" === t.installReason && "loaded" === t.state && h.setNotification({
                id: n,
                type: "info",
                displayDurationMillis: 4e3,
                templateUrl: "/templates/partials/" + n + ".html"
            })
        }), e.splashScreenClickHandler = function() {
            var t;
            try {
                t = window.top.location.host
            } catch (n) {
                t = "SecurityError: host on http"
            }
            l.helpers.recordEnterEmbeddedRoom(t), e.state = s.WAITING_FOR_CONNECTION
        };
        var J = {
            LARGE: "large",
            SMALL: "small"
        };
        e.localVideoViewState = J.LARGE, e.getNumberOfConnectedClients = function() {
            return e.clients.length
        }, e.webRtcDetectedBrowser = v.webRtcDetectedBrowser, e.userAgent = {}, -1 !== u.navigator.userAgent.indexOf("Macintosh") && (e.userAgent.os = "macintosh"), -1 !== u.navigator.userAgent.indexOf("Windows") && (e.userAgent.os = "windows"), -1 !== u.navigator.userAgent.indexOf("Android") ? (e.userAgent.device = "phone", e.userAgent.os = "android") : e.userAgent.device = "desktop", e.$watch("state", function(o) {
            function c() {
                e.localClient = r.localClient, e.clients = r.clients
            }
            switch (o) {
                case s.WAITING_FOR_CONNECTION:
                    t.connect();
                    var l = i.$on("connected", function() {
                        e.state = s.WAITING_FOR_ACCESS, l()
                    });
                    break;
                case s.WAITING_FOR_ACCESS:
                    a.getMediaAccess(v.getMediaConstraints(), function(t) {
                        r.selfStream = t, e.state = s.WAITING_FOR_ROOM_INFORMATION
                    });
                    break;
                case s.WAITING_FOR_ROOM_INFORMATION:
                    a.joinRoom();
                    break;
                case s.READY:
                    (j || u.sessionStorageAdapter("muteStatus", "localVideoMuted")) && a.setLocalVideoEnabledByUser(!1), (z || u.sessionStorageAdapter("muteStatus", "localAudioMuted")) && a.setAudioInputEnabled(!1), c(), n(function() {
                        m.refreshLayout()
                    }, 0)
            }
        }), e.$watch(function() {
            return r.backgroundImageUrl
        }, function(t) {
            e.backgroundStyle = t ? {
                background: "url('" + t + "') no-repeat",
                "background-size": "cover"
            } : {}
        }), e.closeModal = function(t) {
            var n = e.modals[t];
            return n ? void n.close() : void d.warn("Could not find a modal with name " + t)
        }, e.getModal = function(t) {
            return e.modals[t]
        }, e.openModal = function(t, n) {
            var o = e.modals[t];
            return o ? void o.open(n) : void d.warn("Could not find a modal with name " + t)
        };
        var X = function(e) {
            var t = {
                attrs: {}
            };
            angular.extend(this, angular.extend(t, e))
        };
        X.prototype.open = function(e) {
            this.hasOpened || (l.helpers.recordModalOpened(this.name), this.hasOpened = !0), this.isOpen = !0, e && (this.onClose = e.onClose, this.attrs = e || {})
        }, X.prototype.close = function() {
            this.isOpen = !1, this.onClose && (this.onClose(), this.onClose = void 0)
        }, e.modals = {
            knockers: new X({
                name: constants.Modals.DISPLAYED_KNOCKER,
                hasOpened: !1,
                isOpen: !1
            })
        }, e.toggleLocalVideoLarge = function() {
            e.localVideoViewState === J.LARGE ? e.localVideoViewState = J.SMALL : e.localVideoViewState === J.SMALL && (e.localVideoViewState = J.LARGE)
        }, e.$on(c.EXTENSION_INSTALL, function(e, t) {
            "screenShare" === t.installReason && "loaded" === t.state && y.shareScreen()
        }), e.$on("screenShareExtension:share-screen", function(e, t) {
            return t ? void v.getUserMedia({
                audio: !1,
                video: {
                    mandatory: {
                        maxWidth: window.screen.width,
                        maxHeight: window.screen.height,
                        maxFrameRate: 3,
                        chromeMediaSource: "desktop",
                        chromeMediaSourceId: t
                    }
                }
            }, function(e) {
                a.shareScreen(e), d.log("Success setting up screen share with stream: %o", e)
            }, function(e) {
                d.log("Error setting up screen share %o", e)
            }) : void d.log("User cancelled screen share")
        }), e.$on(c.NEW_CLIENT, function() {
            M()
        });
        var Q = function(e) {
                f.prepareEnlarge(e), g.setEnlargeView()
            },
            Z = function() {
                f.prepareEnlarge(null), g.setDefaultView(), f.putLocalVideoInCorrectPlace(e.localClient.id)
            },
            ee = function(e) {
                return e === f.getCurrentEnlargedId()
            },
            te = function(e, t) {
                return t ? Q(e) : Z()
            };
        e.enableSuperSizeClient = function(t) {
            t && 1 !== e.getNumberOfConnectedClients() && (te(t.id, !0), _.each(e.clients, function(e) {
                e.isSuperSized = !1
            }), t.isSuperSized = !0)
        }, e.disableSuperSizeClient = function(e) {
            e && (te(e.id, !1), e.isSuperSized = !1)
        }, e.enableSuperSizeMedia = function() {
            te("media", !0)
        }, e.disableSuperSizeMedia = function() {
            te("media", !1)
        };
        var ne = !1;
        e.$on(c.NEW_STREAM_STARTED, function(e, t) {
            L(t.streamId) && (ne = !ee(t.clientId), N.toggleChat(!1), Q(t.clientId))
        }), e.$on(c.STREAM_ENDED, function(e, t) {
            ne && ee(t.clientId) && (ne = !1, Z())
        });
        var oe = function() {
            return e.clients.length < 2
        };
        e.$on(c.CLIENT_LEFT, function() {
            return oe() ? void(e.isSuperSized && Z()) : void 0
        }), e.$on(c.CLIENT_KICKED, function() {
            e.state = s.KICKED
        }), e.$on(c.ROOM_JOINED, function(t, n) {
            if (n && n.error) switch (n.error) {
                case protocol.err.ROOM_LOCKED:
                    l.sendEvent(l.events.ROOM_LOCKED), r.isLocked = n.isLocked, r.isClaimed = n.isClaimed, e.roomData = r.roomData, e.state = s.ROOM_LOCKED;
                    break;
                case protocol.err.ROOM_FULL:
                    l.sendEvent(l.events.ROOM_FULL), r.isClaimed = n.isClaimed, e.state = s.ROOM_FULL;
                    break;
                case protocol.err.INVALID_ROOM_NAME:
                    l.sendEvent(l.events.ROOM_INVALID), u.location = "/error/invalid-room";
                    break;
                default:
                    d.warn("Unhandled error from JOIN_ROOM: %s", n.error)
            } else e.inviteBoxVersion = l.runExperiment("video tutorial experiment 3", r.localClient.deviceId, [{
                name: "tutorial v1",
                weight: 1
            }, {
                name: "tutorial v2",
                weight: 1
            }]), e.state = s.READY
        }), e.clickedOpenTutorial = function() {
            l.sendEvent(l.events.STARTED_VIDEO_TUTORIAL);
            var t = "tutorial v1" === e.inviteBoxVersion ? "fVVFYsgkMlQ" : "XavtMU7X1tI";
            e.videoTutorialUrl = "https://www.youtube.com/watch?v=" + t
        }, e.clickedCloseTutorial = function() {
            l.sendEvent(l.events.CLOSED_VIDEO_TUTORIAL), M()
        };
        var ie = U();
        e.$on("$destroy", function() {
                ie(), a.leaveRoom();
                var e = angular.element(document).find("body")[0];
                e.style.display = "none", e.style.display = "block", i.controller = ""
            }), e.getCategories = g.getCategories, e.getCurrentCategory = g.getCurrentCategory, e.setCurrentCategory = g.setCurrentCategory, e.$watch(g.getCurrentCategory, function(t) {
                e.isSuperSized = "enlarged" === t
            }), e.navigateToFrontPage = function() {
                window.location.href = "/"
            }, e.clickedHelpButton = function() {
                l.sendEvent(l.events.CLICKED_HELP_BUTTON), window.location.href = "/information/faq#faq-top"
            }, E ? e.state = s.SPLASH_SCREEN : e.state = s.WAITING_FOR_CONNECTION,
            function() {
                if (e.isAndroid = navigator.userAgent.indexOf("Android") > -1, e.isAndroid) {
                    var t = "<%= displayName || 'Someone' %> wants to talk to you right now in https://appear.in<%= roomName %>. Click to join the conversation.";
                    R.getTemplate("call_sms.ujs.txt", t).then(function(t) {
                        var n = t({
                            displayName: I.data.displayName,
                            roomName: r.roomName
                        });
                        e.androidSmsText = "intent:#Intent;scheme=sms;S.sms_body=" + n.replace(/ /g, "%20") + ";end;"
                    })
                }
            }(), e.closeMobileWaitingText = function() {
                e.mobileWaitingTextClosed = !0
            }, i.$on(c.BLOCK_ADDED, function() {
                $(r.roomName)
            }), i.$on(c.BLOCK_REMOVED, function(e, t) {
                r.blocks = r.blocks.filter(function(e) {
                    return e.blockId !== t.blockId
                })
            }), i.$on(c.ROOM_JOINED, function() {
                D.canBlockSomebody() && $(r.roomName)
            })
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").controller("sessionFeedbackController", ["$scope", "$location", "$timeout", "appearinApi", "getstats", "$rootScope", function(e, t, n, o, i, r) {
        e.status = "standby", r.controller = "session-feedback";
        var a = 100,
            c = t.search(),
            s = c.roomName,
            l = [{
                id: "audio_quality",
                title: "Audio quality",
                body: "How was the audio quality?"
            }, {
                id: "video_quality",
                title: "Video quality",
                body: "How was the video quality?"
            }];
        e.chosenQuestion = _.sample(l), e.returnToRoom = function() {
            t.path(s).search({})
        }, e.goToFrontpage = function() {
            window.location = "/"
        };
        var u = function(t, n) {
            if (!(t.text && t.text.length > constants.Questionnaire.MAX_NUMBER_OF_CHARACTERS)) {
                var r = {
                    questionId: e.chosenQuestion.id,
                    text: t.text,
                    rating: t.rating,
                    timestamp: new Date,
                    id: e.feedbackId,
                    roomName: s
                };
                o({
                    authRequired: !1,
                    method: "POST",
                    url: "/questionnaire",
                    data: r
                }).then(n, n), i.sendFeedback(t.rating / a, t.text)
            }
        };
        e.checkMessageLength = function() {
            e.messageTooLong = this.textFeedback.length > constants.Questionnaire.MAX_NUMBER_OF_CHARACTERS
        }, e.setRating = function(t) {
            if (e.status = "submitting", !e.ratingTest) {
                e.ratingTest = t;
                var n = "positive" === t ? a : 0;
                u({
                    rating: n
                }, function(n) {
                    e.rating = t, e.feedbackId = n.id, e.status = "submitted"
                })
            }
        }, e.submitFeedback = function() {
            u({
                text: this.textFeedback
            }, function() {
                e.status = "end"
            })
        }, e.postTo = function(e) {
            var t;
            switch (e) {
                case "facebook":
                    t = "https://www.facebook.com/sharer/sharer.php?u=http://appear.in";
                    break;
                case "twitter":
                    t = "http://twitter.com/?status=I+just+had+an+AMAZING+video+conversation+with+https://appear.in/.+So+easy+it+almost+hurts!";
                    break;
                case "googleplus":
                    t = "https://plus.google.com/share?url=https://appear.in"
            }
            var n = window.open(t, "", "menubar=no,toolbar=no,resizable=no,scrollbars=no,height=530,width=480");
            window.focus && n.focus()
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("blockService", ["$q", "appearinApi", function(e, t) {
        function n(n, o) {
            return n ? o ? t({
                method: "POST",
                url: "/room/" + encodeURIComponent(n) + "/blocks/",
                data: {
                    userId: o
                }
            }).then(function(e) {
                return e.data
            }) : e.reject(new Error("userId is required")) : e.reject(new Error("roomName is required"))
        }

        function o(n, o) {
            return n ? o ? t({
                method: "DELETE",
                url: "/room/" + encodeURIComponent(n) + "/blocks/" + o
            }).then(function(e) {
                return e.data
            }) : e.reject(new Error("blockId is required")) : e.reject(new Error("roomName is required"))
        }

        function i(n) {
            return n ? t({
                method: "GET",
                url: "/room/" + encodeURIComponent(n) + "/blocks/?fields=blockId,createdAt,blockedBy,user"
            }).then(function(e) {
                return e.data.blocks.map(function(e) {
                    return _.extend({}, e, {
                        createdAt: new Date(e.createdAt)
                    })
                })
            }) : e.reject(new Error("roomName is required"))
        }
        return {
            blockUser: n,
            removeBlock: o,
            listBlocks: i
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("permissionService", ["RoomState", function(e) {
        function t(t) {
            return e.localClient && e.localClient.role ? t.some(function(t) {
                return e.localClient.role.roleName === t
            }) : !1
        }
        return {
            knock: {
                canAccept: function() {
                    return e.isClaimed ? t([constants.RoomRoleName.OWNER, constants.RoomRoleName.MEMBER]) : !0
                },
                canReject: function() {
                    return e.isClaimed ? t([constants.RoomRoleName.OWNER, constants.RoomRoleName.MEMBER]) : !0
                }
            },
            canAccessRoomSettings: function() {
                return t([constants.RoomRoleName.OWNER, constants.RoomRoleName.MEMBER])
            },
            canShowGeneralUserSettings: function() {
                return t([constants.RoomRoleName.OWNER])
            },
            canToggleAllowFollowing: function() {
                return t([constants.RoomRoleName.OWNER])
            },
            canShowRoleContextMenu: function() {
                return t([constants.RoomRoleName.OWNER, constants.RoomRoleName.MEMBER])
            },
            canRemoveRole: function() {
                return t([constants.RoomRoleName.OWNER])
            },
            canRemoveRoleIfSelf: function() {
                return t([constants.RoomRoleName.MEMBER, constants.RoomRoleName.FOLLOWER])
            },
            canBlockSomebody: function() {
                return this.canBlockOtherThanOwner() || this.canBlockOtherThanOwnerAndMember()
            },
            canBlockOtherThanOwner: function() {
                return t([constants.RoomRoleName.OWNER])
            },
            canBlockOtherThanOwnerAndMember: function() {
                return t([constants.RoomRoleName.MEMBER])
            },
            helper: {
                isAllowedToLockRoom: function() {
                    return !e.isClaimed || t([constants.RoomRoleName.OWNER, constants.RoomRoleName.MEMBER])
                },
                canBlockClient: function(e, t) {
                    return e && e.role ? e.role.roleName === constants.RoomRoleName.OWNER ? t.role.roleName !== constants.RoomRoleName.OWNER : e.role.roleName === constants.RoomRoleName.MEMBER ? t.role.roleName !== constants.RoomRoleName.OWNER && t.role.roleName !== constants.RoomRoleName.MEMBER : !1 : !1
                },
                canKickClient: function(e, t) {
                    return e && e.role ? e.role.roleName === constants.RoomRoleName.OWNER ? t.role.roleName !== constants.RoomRoleName.OWNER : e.role.roleName === constants.RoomRoleName.MEMBER ? t.role.roleName !== constants.RoomRoleName.OWNER && t.role.roleName !== constants.RoomRoleName.MEMBER : !1 : !1
                }
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("MessageEventService", ["$rootScope", function(e) {
        var t = {},
            n = {};
        return t.addEventListener = function(e, t) {
            n[e] = t
        }, window.addEventListener("message", function(t) {
            if (void 0 !== t.data) {
                var o;
                o = "string" == typeof t.data ? t.data : t.data.type, n[o] && e.$apply(function() {
                    n[o](t)
                })
            }
        }, !1), t
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("avatarProvider", ["$rootScope", "Event", "RoomState", "$document", "Snapshooter", function(e, t, n, o, i) {
        return {
            getAvatar: function() {
                var r = n.localClient;
                if (!r || !r.isVideoEnabled) return null;
                var a = o[0].getElementById(r.id);
                if (!a) return null;
                var c = i.takeSnapshot(a, 80, 60, 1500);
                return e.$emit(t.AVATAR_DATA, {
                    avatar: c
                }), c
            },
            setAvatar: function() {}
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("inRoomNotificationService", ["$rootScope", "Event", function(e, t) {
        function n(e) {
            o = e, e && (e.requiresAction = !1, e.isVisible = !0, e.displayDurationMillis = e.displayDurationMillis || 2e3)
        }
        var o = null,
            i = [];
        return e.$on(t.IN_ROOM_NOTIFICATION, function(e, t) {
            n(t)
        }), {
            setNotification: n,
            getNotification: function() {
                return o
            },
            getCurrentActionRequired: function() {
                return i[0]
            },
            addActionRequired: function(e) {
                this.removeActionRequiredById(e.id), e.requiresAction = !0, e.isVisible = !0, i.push(e)
            },
            removeCurrentActionRequired: function() {
                if (i.length < 1) return null;
                var e = i[0];
                return i.splice(0, 1), e
            },
            removeActionRequiredById: function(e) {
                i = i.filter(function(t) {
                    return t.id !== e
                })
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("RoomService", ["RoomState", "RTCManager", "serverSocket", "Event", "Client", "Stream", "$window", "$timeout", "$location", "$rootScope", "$log", "Analytics", "webrtcProvider", "ConnectionStatus", "Knocker", "screenShareExtension", "User", "appearinApi", "getstats", "roleService", "permissionService", "splitscreenRefresher", function(e, t, n, o, i, r, a, c, s, l, u, d, m, f, g, p, E, v, h, S, C, y) {
        function I() {
            e.resetState(), k.sessionKey = void 0
        }

        function O() {
            e.resetClaimState()
        }

        function R(t) {
            e.clients.push(t)
        }

        function T(t, n) {
            t.setAudioInputEnabled(!!n.isAudioEnabled), t.setVideoEnabled(!!n.isVideoEnabled), t.name = n.name, t.isOwner = n.isOwner, t.userId = n.userId, t.role = n.role, t === e.localClient && (e.isSelfOwner = t.isOwner, t.userId !== E.data.userId && (t.userId ? E.setUserId(t.userId) : E.setUserId(null))), t.isOwner && (e.isClaimed = !0)
        }

        function N() {
            M = c(function() {
                var t = e.clients.length;
                d.helpers.recordMinuteElapsed(t), N()
            }, 1e3 * w)
        }

        function A() {
            null !== M && c.cancel(M)
        }

        function b() {
            !L && e.clients.length >= 2 && (d.sendEvent(d.events.IN_A_CONVERSATION_TEMPORARY), L = !0)
        }

        function D() {
            var r = [n.$on(protocol.res.CLIENT_ROLE_CHANGED, function(e) {
                var t = k.getClient(e.clientId);
                return t ? (t.role = e.role, void l.$broadcast(o.CLIENT_ROLE_CHANGED, e)) : void 0
            }), n.$on(protocol.res.CLIENT_USER_ID_CHANGED, function(e) {
                var t = k.getClient(e.client.id);
                return t ? void T(t, e.client) : void 0
            }), n.$on(protocol.res.NEW_CLIENT, function(e) {
                d.sendEvent(d.events.NEW_CLIENT_JOINED);
                var t = k.getClient(e.client.id);
                return t ? void T(t, e.client) : (t = new i(e.client), R(t), e.client.streams.forEach(function(e) {
                    t.newStreamFromId(e)
                }), E.broadcastUserData(), l.$broadcast(o.NEW_CLIENT), void b())
            }), n.$on(protocol.res.CLIENT_READY, function(e) {
                function n(e) {
                    return e && e.url && e.url.indexOf("turn:") >= 0
                }
                e.iceServers && e.iceServers.iceServers && !e.iceServers.iceServers.some(n) && d.sendEvent(d.events.TURN_SERVER_NOT_SUPPLIED), t.accept(e.clientId, e.iceServers)
            }), n.$on(protocol.res.CLIENT_KICKED, function(e) {
                return d.sendEvent(d.events.CLIENT_KICKED), k.handleRoomExit(), e.error ? void 0 : void l.$broadcast(o.CLIENT_KICKED, e)
            }), n.$on(protocol.res.CLIENT_LEFT, function(n) {
                var i;
                e.clients.forEach(function(e, o) {
                    e.id === n.clientId && (t.disconnect(e.id), i = o)
                }), void 0 !== i && e.clients.splice(i, 1), l.$broadcast(o.CLIENT_LEFT, n)
            }), n.$on(protocol.res.NEW_STREAM_STARTED, function(e) {
                var t = k.getClient(e.clientId);
                return t ? (t.newStreamFromId(e.streamId), void l.$broadcast(o.NEW_STREAM_STARTED, e)) : void u.error("Client does not exist: " + e.clientId)
            }), n.$on(protocol.res.STREAM_ENDED, function(e) {
                var t = k.getClient(e.clientId);
                return t ? (t.removeStream(e.streamId), void l.$broadcast(o.STREAM_ENDED, e)) : void u.error("Client does not exist: " + e.clientId)
            }), n.$on(protocol.res.AUDIO_ENABLED, function(e) {
                var t = k.getClient(e.clientId);
                return t ? void t.setAudioInputEnabled(e.isAudioEnabled) : void u.error("Client does not exist: " + e.clientId)
            }), n.$on(protocol.res.VIDEO_ENABLED, function(e) {
                var t = k.getClient(e.clientId);
                return t ? void t.setVideoEnabled(e.isVideoEnabled) : void u.error("Client does not exist: " + e.clientId)
            }), n.$on(protocol.res.OWNERS_CHANGED, function(t) {
                function n() {
                    function n(t) {
                        e.isClaimed && t === e.localClient && d.sendEvent(d.events.CLIENT_BECAME_OWNER)
                    }
                    if (!t.error) {
                        if (t.deviceId) {
                            var o = k.getClientsByDeviceId(t.deviceId);
                            o.forEach(function(e) {
                                e.isOwner = !0, n(e)
                            }), e.isSelfOwner = e.localClient.isOwner
                        }
                        e.isClaimed || d.helpers.recordRoomClaimed(!!t.token, e.roomName), e.isClaimed = !0
                    }
                }
                t.userId ? n() : O(), l.$broadcast(o.OWNERS_CHANGED, t)
            }), n.$on(protocol.res.ROOM_LOCKED, function(t) {
                return t.error && l.$broadcast("room_locked:error", t), void 0 !== t.isLocked && (e.isLocked = t.isLocked), e.isLocked ? void l.$emit(o.IN_ROOM_NOTIFICATION, {
                    type: "info",
                    text: "This room is locked. Guests need to knock to enter.",
                    displayDurationMillis: 6e3
                }) : void l.$emit(o.IN_ROOM_NOTIFICATION, {
                    type: "info",
                    text: "This room is now unlocked."
                })
            }), n.$on(protocol.res.ROOM_KNOCKED, function(e) {
                e.error || k.addKnockers([e])
            }), n.$on(protocol.res.KNOCKER_LEFT, function(e) {
                k.removeKnocker(e.clientId)
            }), n.$on(protocol.res.BACKGROUND_IMAGE_CHANGED, function(t) {
                t.error || (d.sendEvent(d.events.BACKGROUND_IMAGE_CHANGED), e.backgroundImageUrl = t.backgroundImageUrl)
            }), n.$on(protocol.res.MEMBERS_SET, function(t) {
                t.error || (e.roomData.members = t.members)
            }), n.$on("reconnect", function() {
                d.helpers.recordSocketConnection("reconnect", n.getTransport());
                var e = l.$on("connected", function() {
                    e(), U(), k.joinRoom()
                })
            }), n.$on(protocol.res.ROOM_FOLLOW_SETTINGS_CHANGED, function(t) {
                e.setFollowEnabled(t.isFollowEnabled)
            }), n.$on(protocol.res.FOLLOWERS_UPDATED, k.updateRoles)];
            U = function() {
                r.forEach(function(e) {
                    e()
                }), U = _.noop
            }
        }
        var k = {},
            w = 60,
            M = null,
            L = !1,
            U = _.noop;
        k.updateRoles = function() {
            e.roomName && S.getRolesForRoom(e.roomName).then(function(t) {
                var n = t.roles;
                e.setRoles(n, t.total)
            })
        }, I(), a.addEventListener && a.addEventListener("unload", function() {
            var t = e.localClient;
            t && t.streams && 0 !== t.streams.length && t.streams[0].stream && t.streams[0].stream.getTracks().forEach(function(e) {
                e.stop()
            })
        }), k.getClientType = function(e) {
            var t = k.getClient(e);
            return t.isOwner ? "owner" : "client"
        }, k.setRoomMembers = function(e) {
            n.emit(protocol.req.SET_MEMBERS, {
                members: e
            })
        }, k.getRoomMembers = function() {
            return e.roomData.members ? e.roomData.members.join(", ") : ""
        }, k.hasWatchersOtherThan = function(t) {
            return !!e.roomData.subscriberCount || !!e.roomData.watchers && e.roomData.watchers.some(function(e) {
                return e !== t
            })
        }, k.getMediaAccess = function B(e, t) {
            m.getUserMedia(e, t, function() {
                e.video && e.audio ? B({
                    audio: e.audio || !0
                }, t) : e.audio ? B({
                    video: e.video || !0
                }, t) : t()
            })
        }, k.shareScreen = function(o) {
            o && (e.localClient.newStream(r.type.SCREEN_SHARE, o.id).setup(o), n.emitIfConnected(protocol.req.ENABLE_VIDEO, {
                enabled: !0
            }), o.getVideoTracks()[0].onended = function() {
                k.setLocalScreenShareEnabled(!1)
            }, t.addNewStream(o.id, o), y.refreshLayout())
        }, k.setAudioInputEnabled = function(t) {
            n.emitIfConnected(protocol.req.ENABLE_AUDIO, {
                enabled: t
            }), e.localClient.setAudioInputEnabled(t), d.helpers.recordAudioEnabled(t), a.sessionStorageAdapter("muteStatus", "localAudioMuted", !t), h.sendAudioMuted(!t)
        }, k.setAudioOutputEnabled = function(e, t) {
            e.setAudioOutputEnabled(t), d.helpers.recordAudioOutputEnabled(t)
        };
        var $ = function(t, o) {
            e.localClient.isScreenSharingEnabled() || (n.emitIfConnected(protocol.req.ENABLE_VIDEO, {
                enabled: t
            }), e.localClient.setVideoEnabled(t), d.helpers.recordVideoEnabled(t), h.sendVideoMuted(!t), o && (a.sessionStorageAdapter("muteStatus", "localVideoMuted", !t), e.localClient.userHasExplicitlyDisabledVideo = !t))
        };
        k.setLocalVideoEnabledByUser = function(e) {
            $(e, !0)
        }, k.setLocalVideoEnabled = function(e) {
            $(e, !1)
        }, k.isScreenShareSupported = function() {
            return e.localClient && e.localClient.capabilities.screen_share ? !("chrome" === m.webRtcDetectedBrowser && !p.canInstall()) : !1
        }, k.setLocalScreenShareEnabled = function(o) {
            if (e.localClient.capabilities.screen_share) {
                if (d.hasSharedScreen || (d.sendEvent(d.events.USED_SCREEN_SHARE), d.hasSharedScreen = !0), !o) {
                    var i = e.localClient.getStreamByType(r.type.SCREEN_SHARE);
                    if (!i || !i.stream) return;
                    return e.localClient.removeStreamByType(r.type.SCREEN_SHARE), t.removeStream(i.stream.id, i.stream), e.localClient.stopScreenShare(), e.localClient.userHasExplicitlyDisabledVideo && n.emitIfConnected(protocol.req.ENABLE_VIDEO, {
                        enabled: !1
                    }), void y.refreshLayout()
                }
                return "firefox" === m.webRtcDetectedBrowser ? void navigator.mediaDevices.getUserMedia({
                    video: {
                        mediaSource: "screen"
                    }
                }).then(function(e) {
                    k.shareScreen(e)
                })["catch"](function() {
                    u.log("User cancelled screen share")
                }) : p.hasExtension ? void p.shareScreen() : !p.hasExtension && p.canInstall() ? void p.triggerInstall({
                    reason: "screenShare"
                }) : void 0
            }
        }, k.toggleChat = function() {
            l.$broadcast(o.TOGGLE_CHAT)
        }, l.$on(f.event.NEGOTIATING_PEER_CONNECTION, function(e, t) {
            var n = k.getClient(t.clientId)
        }), l.$on(f.event.CLIENT_CONNECTION_STATUS_CHANGED, function(e, t) {
            var n = k.getClient(t.clientId);
            if (n) return n.isLocalClient ? void u.error("CLIENT_CONNECTION_STATUS_CHANGED events should not go to the local client!") : void n.setStatus(t)
        });
        var P = function(t) {
            return _.findWhere(e.knockers, {
                clientId: t
            })
        };
        return l.$on(f.event.CLIENT_CONNECTION_STATUS_CHANGED, function(e, t) {
            var n = P(t.clientId);
            n && (n.setStatus(t), l.$broadcast(o.KNOCKER_STATUS_CHANGED, {
                knocker: n,
                status: t.status,
                previous: t.previous
            }))
        }), l.$on(f.event.STREAM_ADDED, function(e, t) {
            var n = P(t.clientId);
            n && n.newCameraStream().setup(t.stream).setAudioEnabled(!1)
        }), l.$on(f.event.STREAM_ADDED, function(e, t) {
            var n = k.getClient(t.clientId);
            n && n.updateStreamWithMedia(t.stream)
        }), k.claimRoom = function(t) {
            return v({
                method: "POST",
                url: "/room/claim",
                data: {
                    roomName: t
                }
            }).then(function() {
                d.helpers.recordRoomClaimed(!0, e.roomName), e.isClaimed && d.sendEvent(d.events.CLIENT_BECAME_OWNER), l.$emit(o.ROOM_CLAIMED, {
                    roomName: t
                })
            })
        }, k.setAndBroadcastNewRoomLockStatus = function(t) {
            return k.isAllowedToLock() ? (n.emit(protocol.req.SET_LOCK, {
                locked: t
            }), void d.helpers.recordLockRoom(t, e.localClient.role.roleName)) : void l.$emit(o.IN_ROOM_NOTIFICATION, {
                type: "error",
                text: "Only owners and members can " + (e.isLocked ? "unlock" : "lock") + " rooms."
            })
        }, k.submitBackgroundImage = function(t) {
            return d.sendEvent(d.events.BACKGROUND_IMAGE_SUBMITTED), l.$broadcast("backgroundSent"), v({
                method: "POST",
                url: "/room/background-image",
                data: {
                    image: t,
                    roomName: e.roomName
                },
                transformRequest: function(e) {
                    var t = new FormData;
                    return angular.forEach(e, function(e, n) {
                        t.append(n, e)
                    }), t
                },
                headers: {
                    "Content-Type": void 0
                }
            })
        }, k.resetBackgroundImage = function() {
            n.emit(protocol.req.RESET_BACKGROUND_IMAGE)
        }, k.joinRoom = function() {
            if (e.roomName) {
                var t = e.localClient && e.localClient.streams[0],
                    n = {
                        isAudioEnabled: t ? e.localClient.streams[0].isAudioEnabled : e.selfStream && e.selfStream.getAudioTracks().length > 0,
                        isVideoEnabled: t ? e.localClient.streams[0].isVideoEnabled : e.selfStream && e.selfStream.getVideoTracks().length > 0
                    },
                    o = {
                        roomName: e.roomName,
                        sessionKey: k.sessionKey,
                        config: n
                    };
                k._emitJoinRoomWithPayload(o)
            }
        }, k._emitJoinRoomWithPayload = function(r) {
            e.selfId && (r.selfId = e.selfId), n.emit(protocol.req.JOIN_ROOM, r), n.$once(protocol.res.ROOM_JOINED, function(n) {
                function r() {
                    e.selfStream && e.localClient.newCameraStream().setup(e.selfStream)
                }
                if (n.error) return void l.$broadcast(o.ROOM_JOINED, n);
                e.selfStream && t.addNewStream("0", e.selfStream), e.roomData = n.room, e.setFollowEnabled(n.room.isFollowEnabled), e.isLocked = n.room.isLocked, e.isKnockingEnabled = n.room.isKnockingEnabled !== !1;
                var a = e.selfId === n.selfId;
                e.selfId = n.selfId, e.isClaimed = n.room.isClaimed, k.addKnockers(n.room.knockers), n.room.backgroundImageUrl && (e.backgroundImageUrl = n.room.backgroundImageUrl);
                var c = function(t) {
                    t.isLocalClient = !0, t.setStatus({
                        status: f.status.CONNECTION_SUCCESSFUL
                    }), t.capabilities.video = !(!e.selfStream || 0 === e.selfStream.getVideoTracks().length), t.isVideoEnabled = t.capabilities.video, t.capabilities.audio = !(!e.selfStream || 0 === e.selfStream.getAudioTracks().length), t.isAudioInputEnabled = t.capabilities.audio, "chrome" === m.webRtcDetectedBrowser && -1 === window.navigator.userAgent.indexOf("Android") && (t.capabilities.screen_share = !0), "firefox" === m.webRtcDetectedBrowser && (t.capabilities.screen_share = !0), e.localClient = t, e.isSelfOwner = e.localClient.isOwner, e.isSelfOwner && l.$broadcast(o.OWNERS_CHANGED), h.newSession(e.roomName.slice(1), t.userId || t.deviceId, E.data.displayName)
                };
                return e.roomData.clients.forEach(function(t) {
                    function o(t) {
                        var n = k.getClient(t.id);
                        return n ? n.id !== e.selfId && (n = T(n, t)) : (n = new i(t), R(n)), n
                    }
                    var r = o(t);
                    if (!a) return t.id === n.selfId ? void c(r) : void t.streams.forEach(function(e) {
                        r.newStreamFromId(e)
                    })
                }), D(), a ? void d.sendEvent(d.events.RECONNECT_TO_ROOM) : (d.helpers.recordEnteredRoom(e.clients.length), b(), r(), N(), E.isLoggedIn && E.broadcastUserData(), k.updateRoles(), void l.$broadcast(o.ROOM_JOINED))
            })
        }, k.setKnockingEnabled = function(t) {
            return v({
                method: "PUT",
                url: "/room/" + encodeURIComponent(e.roomName) + "/knockable",
                data: {
                    isKnockingEnabled: t
                }
            }).then(function() {
                e.isKnockingEnabled = t
            })
        }, k.addKnockers = function(n) {
            function i(n) {
                var i = new g(n.clientId, n.imageUrl, n.liveVideo);
                n.iceServers && t.accept(n.clientId, n.iceServers, !1), e.knockers.push(i), l.$emit(o.ROOM_KNOCKED, i)
            }
            _.each(n, i)
        }, k.removeKnocker = function(n) {
            e.knockers = _.reject(e.knockers, function(e) {
                return n === e.clientId
            }), t.disconnect(n)
        }, k.getClient = function(t) {
            return _.findWhere(e.clients, {
                id: t
            })
        }, k.getClientsByDeviceId = function(t) {
            return _.where(e.clients, {
                deviceId: t
            })
        }, k.inviteClientAsMember = function(e) {
            d.sendEvent(d.events.MEMBERSHIP.OFFERED_MEMBERSHIP), n.emit(protocol.req.INVITE_CLIENT_AS_MEMBER, {
                clientId: e
            })
        }, k.block = function(e) {
            n.emit(protocol.req.BLOCK_CLIENT, {
                clientId: e
            })
        }, k.kick = function(e) {
            n.emit(protocol.req.KICK_CLIENT, {
                clientId: e
            })
        }, k.handleRoomExit = function() {
            A(), n.disconnect(), t.disconnectAll(), U(), e.selfStream && e.selfStream.getTracks().forEach(function(e) {
                e.stop()
            }), I()
        }, k.leaveRoom = function(t) {
            var i = e.roomName;
            e.selfId && (t && t.analyticsEvent && d.sendEvent(t.analyticsEvent), n.emit(protocol.req.LEAVE_ROOM), k.handleRoomExit(), l.$broadcast(o.LEAVE_ROOM, {
                roomName: i
            }))
        }, k.goToSessionFeedback = function(e) {
            s.path("/u/feedback").search("roomName", e)
        }, k.sendClientMetadata = function(e) {
            n.emit(protocol.req.SEND_CLIENT_METADATA, e)
        }, k.isAllowedToLock = function() {
            return C.helper.isAllowedToLockRoom()
        }, k.isAllowedToChangeBackground = function() {
            return e.isSelfOwner
        }, n.$on(protocol.res.KNOCK_ACCEPTED, function(e) {
            e && e.sessionKey && (t.disconnectAll(), l.$broadcast(o.KNOCK_ACCEPTED), k.sessionKey = e.sessionKey, k.joinRoom(), d.sendEvent(d.events.KNOCKER_JOINED_ROOM))
        }), n.$on(protocol.res.MEMBER_INVITE, function(e) {
            l.$broadcast(o.MEMBER_INVITE, e)
        }), n.$on(protocol.res.BLOCK_ADDED, function() {
            l.$broadcast(o.BLOCK_ADDED, {})
        }), n.$on(protocol.res.BLOCK_REMOVED, function(e) {
            return e && e.blockId ? void l.$broadcast(o.BLOCK_REMOVED, e) : void u.error("Received malformed data for %s.", protocol.res.BLOCK_REMOVED)
        }), n.$on(protocol.res.CLIENT_METADATA_RECEIVED, function(t) {
            if (!t || !t.type || !t.payload) return void u.error("Received malformed data.");
            switch (t.type) {
                case "UserData":
                    var n = _.find(e.clients, function(e) {
                        return e.id === t.payload.clientId
                    });
                    n.userData = t.payload
            }
            l.$broadcast(o.CLIENT_METADATA_RECEIVED, t)
        }), l.$on(o.USER_LOGGED_IN, k.updateRoles), l.$on(o.USER_LOGGED_OUT, k.updateRoles), k
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("googleAnalytics", ["$window", function(e) {
        var t = {};
        return e.ga("set", "anonymizeIp", !0), t.setDimension = function(t, n) {
            e.ga("set", t, n)
        }, t.sendEvent = function(t) {
            if (!t) throw new Error("gaEvent is required");
            var n = {};
            if (!t.category) throw new Error("gaEvent.category is required");
            if (!t.action) throw new Error("gaEvent.action is required");
            n.eventCategory = t.category, n.eventAction = t.action, t.label && (n.eventLabel = t.label), t.value && (n.eventValue = t.value), t.nonInteraction && (n.nonInteraction = !!t.nonInteraction), e.ga("send", "event", n)
        }, t
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("kissmetrics", ["$window", "$q", "features", "$log", function(e, t, n, o) {
        var i = {};
        return i.identify = function(t) {
            e._kmq.push(["identify", t])
        }, i.clearIdentity = function() {
            e._kmq.push(["clearIdentity"])
        }, i.getId = function() {
            return e.KM && e.KM.i()
        }, i.record = function(t, i) {
            n.isEventLoggingEnabled && o.info("Sent KM event: %o", t), e._kmq.push(["record", t, i])
        }, i.set = function(t) {
            n.isEventLoggingEnabled && o.info("Set KM property: %o", t), e._kmq.push(["set", t])
        }, i.setProperty = function(e, t) {
            var n = {};
            n[e] = t, i.set(n)
        }, i
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("Intercom", ["$log", "features", function(e, t) {
        function n(t, n) {
            return window.Intercom ? void window.Intercom(t, n) : void e.warn("Missing intercom")
        }
        var o = {
            app_id: "c84mcfzg"
        };
        return {
            boot: function(e) {
                n("boot", _.defaults(e, o))
            },
            update: function(e) {
                n("update", e)
            },
            clearData: function() {
                n("shutdown")
            },
            trackEvent: function(o, i) {
                _.keys(i).length > 5 || (t.isEventLoggingEnabled && e.info("Sent IC event: %o", o), n("trackEvent", o, i))
            },
            recordPageChange: function() {
                n("update")
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("PerfectAudience", ["$log", "features", function(e, t) {
        function n(n, o) {
            return window._pq ? (t.isEventLoggingEnabled && e.info("Sent PA event: %o", n), void window._pq.push(["track", n, o])) : void e.warn("Missing PerfectAudience")
        }
        return {
            track: n
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("Analytics", ["kissmetrics", "googleAnalytics", "Intercom", "PerfectAudience", "AnalyticsEvents", "$log", "features", function(e, t, n, o, i, r, a) {
        function c(e, t) {
            function n(e) {
                var t = 0;
                if (0 === e.length) return t;
                for (var n = 0; n < e.length; n++) {
                    var o = e.charCodeAt(n);
                    t = (t << 5) - t + o, t &= t
                }
                return t
            }
            var o = _.flatten(t.map(function(e) {
                var t = new Array(Math.ceil(e.weight));
                return _.times(t.length, function(n) {
                    t[n] = e.name
                }), t
            }));
            return o[Math.abs(n(e) % o.length)]
        }

        function s(e) {
            var t = _.pluck(e, "weight").reduce(function(e, t) {
                return e + t
            });
            if (0 >= t) throw "Sum of weights must be larger than 0"
        }

        function l(t, n, o) {
            s(o);
            var i = c(t + n, o);
            return e.setProperty(t, i), i
        }
        var u = function(e) {
                if (!e) throw new Error("Event is required");
                t.sendEvent(e), a.isEventLoggingEnabled && r.info("Sent GA event: %o", e)
            },
            d = function(t) {
                return t && (t.googleAnalytics || t.kissmetrics || t.intercom || t.perfectAudience) ? (t.googleAnalytics && u(t.googleAnalytics), t.kissmetrics && e.record(t.kissmetrics), t.intercom && n.trackEvent(t.intercom.eventName, t.intercom.eventData), void(t.perfectAudience && o.track(t.perfectAudience.eventName))) : void r.error("The event does not exist")
            },
            m = {
                recordLockRoom: function(e, t) {
                    if (!_.isBoolean(e)) throw new Error("Lock state missing");
                    if (!t) throw new Error("Locker role missing");
                    return t === constants.RoomRoleName.OWNER ? d(e ? i.TOPBAR.OWNER_LOCKED_ROOM : i.TOPBAR.OWNER_UNLOCKED_ROOM) : t === constants.RoomRoleName.MEMBER ? d(e ? i.TOPBAR.MEMBER_LOCKED_ROOM : i.TOPBAR.MEMBER_UNLOCKED_ROOM) : void 0
                },
                recordBlockEvent: function(e, t, n) {
                    if (!n || !i.hasOwnProperty(n)) throw new Error("Block event context missing");
                    if ("owner" === e) {
                        if ("member" === t) return d(i[n].OWNER_BLOCKED_MEMBER);
                        if ("follower" === t) return d(i[n].OWNER_BLOCKED_FOLLOWER);
                        if ("visitor" === t) return d(i[n].OWNER_BLOCKED_VISITOR)
                    }
                    if ("member" === e) {
                        if ("follower" === t) return d(i[n].MEMBER_BLOCKED_FOLLOWER);
                        if ("visitor" === t) return d(i[n].MEMBER_BLOCKED_VISITOR)
                    }
                },
                recordEmbeddedVersionLoaded: function(e) {
                    var t = i.EMBED.EMBEDDED_VERSION_LOADED;
                    t.googleAnalytics.label = e, d(t)
                },
                recordEnterEmbeddedRoom: function(e) {
                    var t = i.EMBED.ENTERED_ROOM;
                    t.googleAnalytics.label = e, d(t)
                },
                recordChatHistoryButtonClick: function(e) {
                    var t = e ? i.CHAT_HISTORY_CLOSED_USING_TOGGLE : i.CHAT_HISTORY_OPENED_USING_TOGGLE;
                    d(t)
                },
                recordKickedUser: function(e, t) {
                    var n;
                    switch (e) {
                        case "member":
                            n = t ? i.OWNER_KICKED_MEMBER : i.MEMBER_KICKED_MEMBER;
                            break;
                        case "owner":
                            n = t ? i.OWNER_KICKED_OWNER : i.MEMBER_KICKED_OWNER;
                            break;
                        case "client":
                            n = t ? i.OWNER_KICKED_CLIENT : i.MEMBER_KICKED_CLIENT
                    }
                    d(n)
                },
                recordModalOpened: function(e) {
                    var t;
                    if (e) {
                        switch (e) {
                            case constants.Modals.SCREENSHARE_INSTRUCTIONS:
                                t = i.ALLOW_SCREEN_SHARE_MODAL;
                                break;
                            case constants.Modals.DISPLAYED_KNOCKER:
                                t = i.KNOCKERS_MODAL;
                                break;
                            default:
                                var n = e;
                                t = i.OPENED_MODAL(n)
                        }
                        d(t)
                    }
                },
                recordModalClosed: function(e) {
                    var t = i.CLOSED_MODAL(e);
                    d(t)
                },
                recordAudioEnabled: function(e) {
                    var t = e ? i.AUDIO_ENABLED : i.AUDIO_DISABLED;
                    d(t)
                },
                recordAudioOutputEnabled: function(e) {
                    var t = e ? i.AUDIO_OUTPUT_ENABLED : i.AUDIO_OUTPUT_DISABLED;
                    d(t)
                },
                recordVideoEnabled: function(e) {
                    var t = e ? i.VIDEO_ENABLED : i.VIDEO_DISABLED;
                    d(t)
                },
                recordActivePanelAction: function(e, t) {
                    var n;
                    switch (e) {
                        case "admin":
                            n = t ? i.OPENED_ADMIN_PANEL : i.CLOSED_ADMIN_PANEL;
                            break;
                        case "claim":
                            n = t ? i.OPENED_CLAIM_PANEL : i.CLOSED_CLAIM_PANEL
                    }
                    d(n)
                },
                recordConnectionType: function(e) {
                    var n = angular.copy(i.CONNECTION_TYPE).googleAnalytics;
                    n.label = e, t.sendEvent(n)
                },
                recordConnectionStatus: function(e) {
                    var n = angular.copy(i.CONNECTION_STATUS).googleAnalytics;
                    n.label = e, t.sendEvent(n)
                },
                recordSendResetEmail: function(n) {
                    var o = angular.copy(i.SENT_RESET_EMAIL),
                        r = o.googleAnalytics;
                    r.label = "Sent from " + (n ? n : "unknown page"), t.sendEvent(r), e.record(o.kissmetrics)
                },
                recordSocketConnection: function(e, n) {
                    var o;
                    switch (e) {
                        case "disconnect":
                            o = i.SOCKET_DISCONNECT;
                            break;
                        case "connect":
                            o = i.SOCKET_CONNECT;
                            break;
                        case "connect_failed":
                            o = i.SOCKET_CONNECT_FAILED;
                            break;
                        case "reconnect":
                            o = i.SOCKET_RECONNECT;
                            break;
                        case "reconnect_failed":
                            o = i.SOCKET_RECONNECT_FAILED;
                            break;
                        case "error":
                            o = i.SOCKET_ERROR;
                            break;
                        default:
                            return void r.error("No analytics event for connection status :" + e)
                    }
                    o = angular.copy(o);
                    var a = o.googleAnalytics;
                    a.label = n, t.sendEvent(a)
                },
                recordRoomClaimed: function(t, n) {
                    t ? (e.record(i.CLIENT_CLAIMED_ROOM.kissmetrics, {
                        roomName: n
                    }), u(i.CLIENT_CLAIMED_ROOM.googleAnalytics)) : d(i.ANOTHER_CLAIMED_ROOM)
                },
                recordMinuteElapsed: function(e) {
                    t.setDimension("dimension5", e);
                    var n = angular.copy(i.MINUTE_ELAPSED.googleAnalytics);
                    n.value = e, u(n)
                },
                recordVisitedRoom: function(t) {
                    e.record(i.VISITED_ROOM.kissmetrics, t), o.track(i.VISITED_ROOM.perfectAudience.eventName)
                },
                recordEnteredRoom: function(t) {
                    t >= 2 ? e.record(i.ENTERED_EXISTING_ROOM.kissmetrics, {
                        numberOfParticipants: t
                    }) : e.record(i.ENTERED_NEW_ROOM.kissmetrics)
                },
                recordWebRTCError: function(e) {
                    var n = angular.copy(i.WEBRTC_ERROR).googleAnalytics;
                    n.label = e, t.sendEvent(n)
                },
                userRegistration: {
                    recordSetActiveState: function(e) {
                        if (e) {
                            var t = angular.copy(i.REGISTRATION.SET_ACTIVE_STATE);
                            t.googleAnalytics.label = "" + e, t.kissmetrics += e, d(t)
                        }
                    },
                    recordSentVerificationCode: function(e) {
                        if (e) {
                            var t = angular.copy(i.REGISTRATION.SENT_VERIFICATION_CODE);
                            t.googleAnalytics.label = "" + e, t.kissmetrics += e, d(t)
                        }
                    },
                    recordAttemptVerifyContactPoint: function(e) {
                        if (e) {
                            var t = angular.copy(i.REGISTRATION.ATTEMPT_VERIFY_CONTACT_POINT);
                            t.googleAnalytics.label = "" + e, t.kissmetrics += e, d(t)
                        }
                    },
                    recordUserCreated: function() {
                        d(i.REGISTRATION.USER_CREATED)
                    },
                    recordNotificationChoice: function(e) {
                        if (e) {
                            var t = _.some(e, _.identity),
                                n = angular.copy(i.REGISTRATION.SUBMITTED_NOTIFICATION_CHOICE);
                            n.googleAnalytics.label = t, n.kissmetrics += t, d(n)
                        }
                    }
                },
                contacts: {
                    recordInviteContact: function(e) {
                        if (e) {
                            var t = angular.copy(i.CONTACTS.INVITE);
                            t.googleAnalytics.label = e, t.kissmetrics += e, d(t)
                        }
                    },
                    recordSavedAsPhoneContact: function() {
                        d(i.CONTACTS.SAVED_AS_PHONE_CONTACT)
                    }
                },
                login: {
                    recordRequestLoginCode: function(e) {
                        if (e) {
                            var t = angular.copy(i.LOGIN.REQUEST_LOGIN_CODE);
                            t.googleAnalytics.label = e, t.kissmetrics += e, d(t)
                        }
                    }
                },
                userSettings: {
                    toggleDesktopNotifications: function(e) {
                        var t = e ? i.USER_SETTINGS.ENABLE_DESKTOP_NOTIFICATIONS : i.USER_SETTINGS.DISABLE_DESKTOP_NOTIFICATIONS;
                        d(angular.copy(t))
                    }
                },
                videoStickers: {
                    sentSticker: function() {
                        var e = angular.copy(i.VIDEO_STICKERS.SENT_STICKER);
                        d(e)
                    },
                    sentStickerWithId: function(e) {
                        var t = angular.copy(i.VIDEO_STICKERS.SENT_STICKER_WITH_ID);
                        t.googleAnalytics.label = e, t.kissmetrics += e, d(t)
                    },
                    viewedLockedStickerDescriptionWithId: function(e) {
                        if (!e) throw "Analytics event requires stickerId to be defined";
                        var t = angular.copy(i.VIDEO_STICKERS.VIEWED_LOCKED_DESCRIPTION_WITH_ID);
                        t.kissmetrics += e, d(t)
                    },
                    receivedSticker: function() {
                        var e = angular.copy(i.VIDEO_STICKERS.RECEIVED_STICKER);
                        d(e)
                    },
                    receivedStickerWithId: function(e) {
                        var t = angular.copy(i.VIDEO_STICKERS.RECEIVED_STICKER_WITH_ID);
                        t.googleAnalytics.label = e, t.kissmetrics += e, d(t)
                    },
                    recordUnlockedSticker: function(e) {
                        if (!e) throw "Analytics event requires stickerId to be defined";
                        var t = angular.copy(i.VIDEO_STICKERS.UNLOCKED_STICKER_WITH_ID);
                        t.kissmetrics += e, d(t)
                    }
                },
                mediaShare: {
                    mediaShareStarted: function(e) {
                        var t = angular.copy(i.MEDIA_SHARE.MEDIA_SHARE_STARTED);
                        t.googleAnalytics.value = e, d(t)
                    }
                },
                follow: {
                    recordNotificationsMuted: function(e) {
                        var t = angular.copy(i.FOLLOW.MUTE);
                        t.googleAnalytics.label = e, d(t)
                    },
                    recordNotificationsUnmuted: function(e) {
                        var t = angular.copy(i.FOLLOW.UNMUTE);
                        t.googleAnalytics.label = e, d(t)
                    }
                }
            };
        return {
            perfectAudience: o,
            events: i,
            helpers: m,
            sendEvent: d,
            googleAnalytics: t,
            kissmetrics: e,
            runExperiment: l
        }
    }])
}, function(e, t, n) {
    "use strict";
    angular.module("videoconference").factory("RTCManager", ["$rootScope", "$timeout", "$log", "$q", "Analytics", "ConnectionStatus", "RoomState", "serverSocket", "User", "features", "$interval", "webrtcProvider", "Stream", "getstats", function(e, t, o, i, r, a, c, s, l, u, d, m, f, g) {
        function p(e) {
            return e in H.peerConnections ? H.peerConnections[e].pc : null
        }

        function E(e) {
            return e in H.peerConnections ? "stable" === H.peerConnections[e].pc.signalingState && !H.peerConnections[e].isOperationPending : !1
        }

        function v(e) {
            return e in H.peerConnections ? H.peerConnections[e].bandwidth : 0
        }

        function h(e) {
            return _.pick(e, "sdp", "type")
        }

        function S(e, t) {
            if ("firefox" !== m.webRtcDetectedBrowser) {
                var n = new MediaStream;
                if (c.localClient && c.localClient.isScreenSharingEnabled()) {
                    t.getAudioTracks().forEach(function(e) {
                        n.addTrack(e)
                    });
                    var o = c.localClient.getStreamByType(f.type.SCREEN_SHARE);
                    o && o.stream.getVideoTracks().forEach(function(e) {
                        n.addTrack(e)
                    })
                } else t.getTracks().forEach(function(e) {
                    n.addTrack(e)
                });
                e.addStream(n)
            } else e.addStream(t)
        }

        function C(e, t, n) {
            function r(e, t) {
                var n = e.match(/a=ssrc-group:FID (\d+) (\d+)\r\n/),
                    o = t.match(/a=ssrc-group:FID (\d+) (\d+)\r\n/);
                n || (n = e.match(/a=ssrc:(\d+) cname:(.*)\r\n/g)[1].match(/a=ssrc:(\d+)/), o = t.match(/a=ssrc:(\d+) cname:(.*)\r\n/g)[1].match(/a=ssrc:(\d+)/));
                for (var i = 1; i < n.length; i++) t = t.replace(new RegExp(o[i], "g"), n[i]);
                return t
            }
            var a = p(e);
            if (!a) return void o.warn("No RTCPeerConnection in replaceVideoTrack()", e);
            if (window.RTCRtpSender && RTCRtpSender.prototype.replaceTrack) {
                for (var c = a.getSenders(), s = 0; s < c.length; s++)
                    if (c[s].track.id === t.id) return c[s].replaceTrack(n), i.resolve();
                return i.reject()
            }
            if (!E(e)) return void H.peerConnections[e].pending.push(C.bind(void 0, e, t, n));
            H.peerConnections[e].isOperationPending = !0;
            for (var l = !1, u = a.getLocalStreams(), d = 0; d < u.length; d++)
                for (var m = u[d].getTracks(), f = 0; f < m.length; f++)
                    if (m[f].kind === n.kind) {
                        l = !0, u[d].removeTrack(m[f]), u[d].addTrack(n);
                        break
                    }
            return l ? "offer" === a.localDescription.type ? a.createOffer().then(function(e) {
                return e.sdp = r(a.localDescription.sdp, e.sdp), a.setLocalDescription(e)
            }).then(function() {
                return a.setRemoteDescription(a.remoteDescription)
            }) : a.setRemoteDescription(a.remoteDescription).then(function() {
                return a.createAnswer()
            }).then(function(e) {
                return e.sdp = r(a.localDescription.sdp, e.sdp), a.setLocalDescription(e)
            }) : i.reject()
        }

        function y(n, o) {
            var i = p(n),
                c = H.peerConnections[n].connectionStatus;
            c !== o && (c === a.status.CONNECTION_DISCONNECTED && o === a.status.CONNECTING || (H.peerConnections[n].connectionStatus = o, r.helpers.recordConnectionStatus(a.analyticsText[o]), t(function() {
                e.$broadcast(a.event.CLIENT_CONNECTION_STATUS_CHANGED, {
                    clientId: n,
                    status: o,
                    previous: c,
                    pc: i
                })
            })))
        }

        function I(e, t, n) {
            var o = n.split(/\s+/),
                i = o[4]; - 1 !== i.indexOf(":") && (i = "[" + i + "]");
            var r = i + ":" + o[5],
                a = o[7],
                c = H.peerConnections[e].iceCandidates[t];
            return c[r] = a, c[i] || (c[i] = a), a;
        }

        function O(e, t, n) {
            var o = n.split(/\n+/);
            return o.forEach(function(n) {
                n.match(/^a=candidate:/) && I(e, t, n)
            }), n
        }

        function R(e, t, n) {
            return [e, t].sort().join("-to-") + (n && 4 !== n ? " (ipv" + n + ")" : "")
        }

        function T(e, t) {
            t || (t = "UNKNOWN (detection failed)"), o.info("Connection type to %s is %s", e, t), H.peerConnections[e].connectionType = t, r.helpers.recordConnectionType(t)
        }

        function N(e, t) {
            function n(e, t, n) {
                switch (n.candidateType) {
                    case "host":
                    case "serverreflexive":
                    case "peerreflexive":
                        return "peer";
                    case "relayed":
                        return "relay(" + n.ipAddress + ")";
                    default:
                        return o.warn("Connection is using an unknown", t, "ICE candidate, clientId =", e, "candidate =", n), "unknown"
                }
            }
            t.getStats(null).then(function(t) {
                var o = null;
                t.forEach(function(e) {
                    if ("candidatepair" === e.type) {
                        var i = t.get(e.componentId);
                        if (i.activeConnection && !o) {
                            var r = t.get(e.localCandidateId),
                                a = t.get(e.remoteCandidateId),
                                c = n(r.candidateType),
                                s = n(a.candidateType);
                            o = R(c, s)
                        }
                    }
                }), T(e, o), H.maybeRestrictRelayBandwidth(e, o)
            })["catch"](function(t) {
                o.warn("RTCPeerConnection.getStats() failed, clientId =", e, t)
            })
        }

        function A(e, t) {
            function n(e, t, n) {
                var i = H.peerConnections[e].iceCandidates[t],
                    r = n.split(/:/)[0],
                    a = i[n] || i[r];
                switch (a) {
                    case "host":
                    case "srflx":
                    case "prflx":
                        return "peer";
                    case "relay":
                        return "relay";
                    default:
                        return o.warn("Connection is using an unknown", t, "ICE candidate, clientId =", e, "address =", n, "iceCandidates =", i), "unknown"
                }
            }
            t.getStats(function(t) {
                var o = t.result(),
                    i = null;
                o.forEach(function(t) {
                    if ("googCandidatePair" === t.type && "true" === t.stat("googActiveConnection") && !i) {
                        var o = t.stat("googLocalAddress"),
                            r = t.stat("googRemoteAddress"),
                            a = "[" === o[0] ? 6 : 4,
                            c = n(e, "local", o),
                            s = n(e, "remote", r);
                        i = R(c, s, a)
                    }
                }), T(e, i), H.maybeRestrictRelayBandwidth(e, i)
            })
        }

        function b(e) {
            var t = p(e);
            if (!t) return void o.warn("No RTCPeerConnection in determineConnectionType()", e);
            if (void 0 !== t.getStats) try {
                "firefox" === m.webRtcDetectedBrowser ? N(e, t) : "chrome" === m.webRtcDetectedBrowser && A(e, t)
            } catch (n) {
                o.warn("Failed to get connection type, clientId =", e, n)
            }
        }

        function D(e, t) {
            t = parseInt(t, 10);
            var n, o, i = F.splitSections(e);
            for (n = 1; n < i.length; n++) {
                var r = F.splitLines(i[n]),
                    a = r[0].substr(2).split(" "),
                    c = a[0];
                if ("video" === c) {
                    for (o = 1; o < r.length; o++)
                        if (0 === r[o].indexOf("c=")) {
                            0 === r[o + 1].indexOf("b=") ? 0 !== t ? r[o + 1] = "b=AS:" + t : r.splice(o + 1, 1) : 0 !== t && r.splice(o + 1, 0, "b=AS:" + t);
                            break
                        }
                    if ("chrome" === m.webRtcDetectedBrowser && 0 !== t)
                        for (o = 3; o < a.length; o++) {
                            var s = a[o],
                                l = F.matchPrefix(i[n], "a=rtpmap:" + s + " ")[0];
                            if (l) {
                                var u = F.parseRtpMap(l);
                                switch (u.parameters = [], u.name.toUpperCase()) {
                                    case "VP8":
                                    case "VP9":
                                    case "H264":
                                        var d = F.matchPrefix(i[n], "a=fmtp:" + s + " ");
                                        d.length && (u.parameters = F.parseFmtp(d[0]), r.splice(r.indexOf(d[0]), 1)), u.parameters["x-google-start-bitrate"] = Math.min(t, 400), r.splice(r.indexOf(l) + 1, 0, F.writeFmtp(u).trim())
                                }
                            }
                        }
                    i[n] = r.join("\r\n") + "\r\n"
                }
            }
            return i.join("")
        }

        function k(e) {
            var t = p(e);
            return t ? E(e) ? (H.peerConnections[e].isOperationPending = !0, void t.createOffer(function(n) {
                n.sdp = D(n.sdp, v(e)), s.emit(protocol.relay.SDP_OFFER, {
                    receiverId: e,
                    message: h(n)
                }), t.setLocalDescription(n, _.noop, function(e) {
                    o.warn("RTCPeerConnection.setLocalDescription() failed with local offer", e), r.helpers.recordWebRTCError("set local offer")
                })
            }, function(e) {
                o.warn("RTCPeerConnection.createOffer() failed to create local offer", e), r.helpers.recordWebRTCError("create local offer")
            }, G)) : void H.peerConnections[e].pending.push(k.bind(void 0, e)) : void o.warn("No RTCPeerConnection in negotiatePeerConnection()", e)
        }

        function w(e) {
            if ("chrome" === m.webRtcDetectedBrowser) {
                var t = p(e);
                "disconnected" !== t.iceConnectionState && "failed" !== t.iceConnectionState || "offer" === t.localDescription.type && (H.peerConnections[e].connectionType = null, H.peerConnections[e].bestRelayCandidateTypeSeen = null, H.peerConnections[e].iceCandidates = {
                    local: {},
                    remote: {}
                }, k(e))
            }
        }

        function M(e, t) {
            if ("firefox" !== m.webRtcDetectedBrowser) {
                var n = p(e);
                if (!n) return void o.warn("No RTCPeerConnection in setBandwidth()", e);
                if (t !== v(e)) {
                    if (!E(e)) return void H.peerConnections[e].pending.push(M.bind(void 0, e, t));
                    H.peerConnections[e].bandwidth = t, H.peerConnections[e].isOperationPending = !0;
                    var i = new RTCSessionDescription({
                        type: "offer",
                        sdp: n.remoteDescription.sdp
                    });
                    i.sdp = D(i.sdp, t), "offer" === n.localDescription.type ? n.setLocalDescription(n.localDescription).then(function() {
                        return i.type = "answer", n.setRemoteDescription(i)
                    })["catch"](function(e) {
                        o.error(e)
                    }) : "answer" === n.localDescription.type && (i.type = "offer", n.setRemoteDescription(i).then(function() {
                        return n.setLocalDescription(n.localDescription)
                    })["catch"](function(e) {
                        o.error(e)
                    }))
                }
            }
        }

        function L(e, t) {
            -1 !== t.indexOf("relay") && 0 === v(e) && M(e, m.getMaximumTURNBandwidth())
        }

        function U(e) {
            var t = Object.keys(H.peerConnections).length;
            if (e && (t += 1), 0 === t) return 0;
            var n;
            switch (u.bandwidth) {
                case "high":
                    n = {
                        1: 0,
                        2: 384,
                        3: 256,
                        4: 192,
                        5: 128,
                        6: 128,
                        7: 64
                    }[t];
                    break;
                case "low":
                    n = {
                        1: 0,
                        2: 384,
                        3: 192,
                        4: 128,
                        5: 96,
                        6: 64,
                        7: 32
                    }[t];
                    break;
                case "low5plus":
                    n = {
                        1: 0,
                        2: 384,
                        3: 192,
                        4: 96,
                        5: 64,
                        6: 32,
                        7: 32
                    }[t];
                    break;
                case "linear":
                    n = Math.floor(512 / t);
                    break;
                default:
                    n = u.bandwidth ? parseInt(u.bandwidth, 10) : 0
            }
            return void 0 === n ? 0 : (Object.keys(H.peerConnections).forEach(function(e) {
                M(e, n)
            }), n)
        }

        function $(t, n, i, r) {
            function l(e) {
                void 0 === H.peerConnections[e] && (H.peerConnections[e] = {
                    iceServers: {},
                    iceCandidates: {
                        local: {},
                        remote: {}
                    },
                    bestRelayCandidateTypeSeen: null,
                    pc: null,
                    connectionType: null,
                    connectionStatus: null,
                    intervalId: null,
                    stats: {
                        totalSent: 0,
                        totalRecv: 0
                    },
                    bandwidth: r || 0,
                    pending: [],
                    isOperationPending: !1
                })
            }
            l(t);
            var d = {
                optional: []
            };
            "chrome" === m.webRtcDetectedBrowser && (u.disableIPv6ICE && d.optional.push({
                googIPv6: !1
            }), u.disableDSCP || d.optional.push({
                googDscp: !0
            }), d.optional.push({
                googCpuOveruseDetection: !0
            })), u.useOnlyTURN && (n.iceTransportPolicy = "relay"), u.disableTURN && (n.iceServers = [{
                url: "stun:turn.appear.in:443"
            }]), u.turnserver && n.iceServers.forEach(function(e) {
                e.url = e.url.replace(/turn.appear.in/, u.turnserver)
            }), "chrome" === m.webRtcDetectedBrowser && (n.bundlePolicy = "max-bundle", n.rtcpMuxPolicy = "require");
            var f = new m.RTCPeerConnection(n, d);
            H.peerConnections[t].pc = f, H.peerConnections[t].delayedCandidates = [], H.peerConnections[t].isRemoteDescriptionSet = !1;
            var p = _.find(c.clients, {
                id: t
            });
            p ? g.collectStats(f, p.userId || p.deviceId) : o.error("no client for id: ", t), f.onnegotiationneeded = function() {
                e.$broadcast(a.event.NEGOTIATING_PEER_CONNECTION, {
                    pc: f,
                    clientId: t
                }), "new" !== f.iceConnectionState && H.peerConnections[t].connectionStatus && k(t)
            }, f.onicecandidate = function(e) {
                function n(e) {
                    return _.pick(e, "sdpMLineIndex", "sdpMid", "candidate")
                }
                if (e.candidate) {
                    var o = I(t, "local", e.candidate.candidate),
                        i = H.peerConnections[t].bestRelayCandidateTypeSeen,
                        r = parseInt(e.candidate.candidate.split(" ")[3], 10) >> 24;
                    if ("relay" === o) {
                        if (!(null === i || r >= i)) return;
                        H.peerConnections[t].bestRelayCandidateTypeSeen = r
                    }
                    s.emit(protocol.relay.ICE_CANDIDATE, {
                        receiverId: t,
                        message: n(e.candidate)
                    })
                }
            }, f.onaddstream = function(n) {
                e.$apply(function() {
                    e.$broadcast(a.event.STREAM_ADDED, {
                        clientId: t,
                        stream: n.stream
                    })
                })
            }, f.oniceconnectionstatechange = function() {
                var e, n = H.peerConnections[t].connectionStatus;
                switch (f.iceConnectionState) {
                    case "checking":
                        e = a.status.CONNECTING;
                        break;
                    case "connected":
                    case "completed":
                        e = a.status.CONNECTION_SUCCESSFUL, !H.peerConnections[t].connectionType && ("completed" === f.iceConnectionState || "chrome" === m.webRtcDetectedBrowser && f.localDescription && "answer" === f.localDescription.type) && b(t);
                        break;
                    case "disconnected":
                        e = a.status.CONNECTION_DISCONNECTED, H.maybeRestartIce(t);
                        break;
                    case "failed":
                        e = a.status.CONNECTION_FAILED, n !== e && H.maybeRestartIce(t);
                        break;
                    default:
                        return
                }
                y(t, e)
            };
            var E = f.signalingState;
            f.onsignalingstatechange = function() {
                if (E !== f.signalingState && (E = f.signalingState, "stable" === f.signalingState)) {
                    H.peerConnections[t].isOperationPending = !1;
                    var e = H.peerConnections[t].pending.shift();
                    e && e.apply()
                }
            }, (i || void 0 === i && H.localStreams[0]) && S(f, H.localStreams[0])
        }

        function P(e, t) {
            var n = new WebSocket("wss://" + u.sfu + "/sub/" + e);
            n.onmessage = function(t) {
                var i = p(e);
                i.onicecandidate = null;
                var r = JSON.parse(t.data);
                i.setRemoteDescription(new RTCSessionDescription(r)).then(function() {
                    return i.createAnswer()
                }).then(function(e) {
                    return n.send(JSON.stringify({
                        type: "answer",
                        sdp: e.sdp
                    })), i.setLocalDescription(e)
                })["catch"](function(e) {
                    o.error("negotiateSFUConnectioned() failed", e)
                })
            };
            var i = s.getSelfId();
            if (!p(i)) {
                $(i, t);
                var r = new WebSocket("wss://" + u.sfu + "/pub/" + i);
                r.onmessage = function(e) {
                    var t = p(i);
                    t.onicecandidate = null;
                    var n = JSON.parse(e.data);
                    t.setRemoteDescription(new RTCSessionDescription(n)).then(function() {
                        return t.createAnswer()
                    }).then(function(e) {
                        return r.send(JSON.stringify({
                            type: "answer",
                            sdp: e.sdp
                        })), t.setLocalDescription(e)
                    })["catch"](function(e) {
                        o.error("negotiateSFUConnectioned() failed", e)
                    })
                }
            }
        }

        function B(e, t) {
            e.addIceCandidate(new m.RTCIceCandidate(t), _.noop, function(e) {
                o.warn("Failed to add ICE candidate ('%s'): %s", t.candidate, e)
            })
        }

        function x(e, t) {
            H.peerConnections[t].isRemoteDescriptionSet = !0, H.peerConnections[t].delayedCandidates.forEach(B.bind(void 0, e)), H.peerConnections[t].delayedCandidates = []
        }

        function K(e) {
            return -1 !== e.indexOf("mozilla")
        }

        function V() {
            s.$on(protocol.relay.READY_TO_RECEIVE_OFFER, function(e) {
                H.connect(e.clientId, e.iceServers)
            }), s.$on(protocol.relay.ICE_CANDIDATE, function(e) {
                var t = p(e.clientId);
                return t ? (I(e.clientId, "remote", e.message.candidate), H.peerConnections[e.clientId].isRemoteDescriptionSet || "firefox" !== m.webRtcDetectedBrowser ? void B(t, e.message) : void H.peerConnections[e.clientId].delayedCandidates.push(e.message)) : void o.warn("No RTCPeerConnection on ICE_CANDIDATE", e)
            }), s.$on(protocol.relay.SDP_OFFER, function(e) {
                var t = p(e.clientId);
                return t ? (O(e.clientId, "remote", e.message.sdp), H.peerConnections[e.clientId].isFirefox = K(e.message.sdp), void t.setRemoteDescription(new m.RTCSessionDescription(e.message), function() {
                    x(t, e.clientId), t.createAnswer(function(n) {
                        n.sdp = D(n.sdp, v(e.clientId)), s.emit(protocol.relay.SDP_ANSWER, {
                            receiverId: e.clientId,
                            message: h(n)
                        }), t.setLocalDescription(n, function() {}, function(e) {
                            o.warn("Could not set local description from local answer: ", e), r.helpers.recordWebRTCError("set local answer")
                        })
                    }, function(e) {
                        o.warn("Could not create answer to remote offer: ", e), r.helpers.recordWebRTCError("create answer")
                    })
                }, function(e) {
                    o.warn("Could not set remote description from remote offer: ", e), r.helpers.recordWebRTCError("set remote offer")
                })) : void o.warn("No RTCPeerConnection on SDP_OFFER", e)
            }), s.$on(protocol.relay.SDP_ANSWER, function(e) {
                var t = p(e.clientId);
                return t ? (O(e.clientId, "remote", e.message.sdp), H.peerConnections[e.clientId].isFirefox = K(e.message.sdp), void t.setRemoteDescription(new m.RTCSessionDescription(e.message), function() {
                    if (x(t, e.clientId), "firefox" === m.webRtcDetectedBrowser && c.localClient.isScreenSharingEnabled()) {
                        var n = c.localClient.getStreamByType(f.type.SCREEN_SHARE);
                        n && C(e.clientId, H.localStreams[0].getVideoTracks()[0], n.stream.getVideoTracks()[0])
                    }
                }, function(e) {
                    o.warn("Could not set remote description from remote answer: ", e), r.helpers.recordWebRTCError("set remote answer")
                })) : void o.warn("No RTCPeerConnection on SDP_ANSWER", e)
            })
        }
        var F = n(97),
            G = m.getSDPConstraints(),
            H = {};
        return H.peerConnections = {}, H.localStreams = {}, H.setBandwidth = D, H.maybeRestartIce = w, H.changeBandwidth = M, H.maybeRestrictRelayBandwidth = L, H.getPeerConnections = function() {
            return Object.keys(H.peerConnections).map(function(e) {
                return p(e)
            })
        }, H.addNewStream = function(e, t) {
            if (H.localStreams[e] = t, 0 === e) Object.keys(H.peerConnections).forEach(function(e) {
                var n = p(e);
                S(n, t)
            });
            else {
                var n = t.getVideoTracks()[0],
                    o = H.localStreams[0].getVideoTracks()[0];
                o ? Object.keys(H.peerConnections).forEach(function(e) {
                    C(e, o, n)
                }) : (s.emit(protocol.req.START_NEW_STREAM, {
                    streamId: t.id
                }), Object.keys(H.peerConnections).forEach(function(e) {
                    var n = p(e);
                    n.addStream(t)
                }))
            }
        }, H.removeStream = function(e, t) {
            delete H.localStreams[e];
            var n = t.getVideoTracks()[0],
                o = H.localStreams[0].getVideoTracks()[0];
            o ? Object.keys(H.peerConnections).forEach(function(e) {
                C(e, n, o)
            }) : Object.keys(H.peerConnections).forEach(function(e) {
                s.emit(protocol.req.END_STREAM, {
                    endedStream: t.id
                });
                var n = p(e);
                n.removeStream(t)
            })
        }, H.connect = function(e, t) {
            if (p(e)) return o.warn("RTCPeerConnection already exists on connect()", e), void H.maybeRestartIce(e, t);
            var n = U(!0);
            $(e, t, u.sfu ? !1 : void 0, n), u.sfu ? P(e, t) : k(e)
        }, H.accept = function(e, t, n) {
            if (p(e)) return o.warn("RTCPeerConnection already exists on accept()", e), void H.maybeRestartIce(e, t);
            var i = U(!0);
            $(e, t, u.sfu ? !1 : n, i), s.emit(protocol.relay.READY_TO_RECEIVE_OFFER, {
                receiverId: e,
                iceServers: t
            }), u.sfu && P(e, t)
        }, H.disconnect = function(e) {
            var t = p(e);
            if (!t) return void o.warn("No RTCPeerConnection in RTCManager.disconnect()", e);
            try {
                t.close()
            } catch (n) {}
            d.cancel(H.peerConnections[e].intervalId), delete H.peerConnections[e], U(!1)
        }, H.disconnectAll = function() {
            Object.keys(H.peerConnections).forEach(function(e) {
                H.disconnect(e)
            }), H.peerConnections = {}
        }, V(), H
    }])
}, function(e, t) {
    "use strict";
    var n = {};
    n.generateIdentifier = function() {
        return Math.random().toString(36).substr(2, 10)
    }, n.localCName = n.generateIdentifier(), n.splitLines = function(e) {
        return e.trim().split("\n").map(function(e) {
            return e.trim()
        })
    }, n.splitSections = function(e) {
        var t = e.split("\nm=");
        return t.map(function(e, t) {
            return (t > 0 ? "m=" + e : e).trim() + "\r\n"
        })
    }, n.matchPrefix = function(e, t) {
        return n.splitLines(e).filter(function(e) {
            return 0 === e.indexOf(t)
        })
    }, n.parseCandidate = function(e) {
        var t;
        t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" ");
        for (var n = {
                foundation: t[0],
                component: t[1],
                protocol: t[2].toLowerCase(),
                priority: parseInt(t[3], 10),
                ip: t[4],
                port: parseInt(t[5], 10),
                type: t[7]
            }, o = 8; o < t.length; o += 2) switch (t[o]) {
            case "raddr":
                n.relatedAddress = t[o + 1];
                break;
            case "rport":
                n.relatedPort = parseInt(t[o + 1], 10);
                break;
            case "tcptype":
                n.tcpType = t[o + 1]
        }
        return n
    }, n.writeCandidate = function(e) {
        var t = [];
        t.push(e.foundation), t.push(e.component), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.ip), t.push(e.port);
        var n = e.type;
        return t.push("typ"), t.push(n), "host" !== n && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), "candidate:" + t.join(" ")
    }, n.parseRtpMap = function(e) {
        var t = e.substr(9).split(" "),
            n = {
                payloadType: parseInt(t.shift(), 10)
            };
        return t = t[0].split("/"), n.name = t[0], n.clockRate = parseInt(t[1], 10), n.numChannels = 3 === t.length ? parseInt(t[2], 10) : 1, n
    }, n.writeRtpMap = function(e) {
        var t = e.payloadType;
        return void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType), "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== e.numChannels ? "/" + e.numChannels : "") + "\r\n"
    }, n.parseExtmap = function(e) {
        var t = e.substr(9).split(" ");
        return {
            id: parseInt(t[0], 10),
            uri: t[1]
        }
    }, n.writeExtmap = function(e) {
        return "a=extmap:" + (e.id || e.preferredId) + " " + e.uri + "\r\n"
    }, n.parseFmtp = function(e) {
        for (var t, n = {}, o = e.substr(e.indexOf(" ") + 1).split(";"), i = 0; i < o.length; i++) t = o[i].trim().split("="), n[t[0].trim()] = t[1];
        return n
    }, n.writeFmtp = function(e) {
        var t = "",
            n = e.payloadType;
        if (void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
            var o = [];
            Object.keys(e.parameters).forEach(function(t) {
                o.push(t + "=" + e.parameters[t])
            }), t += "a=fmtp:" + n + " " + o.join(";") + "\r\n"
        }
        return t
    }, n.parseRtcpFb = function(e) {
        var t = e.substr(e.indexOf(" ") + 1).split(" ");
        return {
            type: t.shift(),
            parameter: t.join(" ")
        }
    }, n.writeRtcpFb = function(e) {
        var t = "",
            n = e.payloadType;
        return void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach(function(e) {
            t += "a=rtcp-fb:" + n + " " + e.type + " " + e.parameter + "\r\n"
        }), t
    }, n.parseSsrcMedia = function(e) {
        var t = e.indexOf(" "),
            n = {
                ssrc: parseInt(e.substr(7, t - 7), 10)
            },
            o = e.indexOf(":", t);
        return o > -1 ? (n.attribute = e.substr(t + 1, o - t - 1), n.value = e.substr(o + 1)) : n.attribute = e.substr(t + 1), n
    }, n.getDtlsParameters = function(e, t) {
        var o = n.splitLines(e);
        o = o.concat(n.splitLines(t));
        var i = o.filter(function(e) {
                return 0 === e.indexOf("a=fingerprint:")
            })[0].substr(14),
            r = {
                role: "auto",
                fingerprints: [{
                    algorithm: i.split(" ")[0],
                    value: i.split(" ")[1]
                }]
            };
        return r
    }, n.writeDtlsParameters = function(e, t) {
        var n = "a=setup:" + t + "\r\n";
        return e.fingerprints.forEach(function(e) {
            n += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n"
        }), n
    }, n.getIceParameters = function(e, t) {
        var o = n.splitLines(e);
        o = o.concat(n.splitLines(t));
        var i = {
            usernameFragment: o.filter(function(e) {
                return 0 === e.indexOf("a=ice-ufrag:")
            })[0].substr(12),
            password: o.filter(function(e) {
                return 0 === e.indexOf("a=ice-pwd:")
            })[0].substr(10)
        };
        return i
    }, n.writeIceParameters = function(e) {
        return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n"
    }, n.parseRtpParameters = function(e) {
        for (var t = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: [],
                rtcp: []
            }, o = n.splitLines(e), i = o[0].split(" "), r = 3; r < i.length; r++) {
            var a = i[r],
                c = n.matchPrefix(e, "a=rtpmap:" + a + " ")[0];
            if (c) {
                var s = n.parseRtpMap(c),
                    l = n.matchPrefix(e, "a=fmtp:" + a + " ");
                switch (s.parameters = l.length ? n.parseFmtp(l[0]) : {}, s.rtcpFeedback = n.matchPrefix(e, "a=rtcp-fb:" + a + " ").map(n.parseRtcpFb), t.codecs.push(s), s.name.toUpperCase()) {
                    case "RED":
                    case "ULPFEC":
                        t.fecMechanisms.push(s.name.toUpperCase())
                }
            }
        }
        return n.matchPrefix(e, "a=extmap:").forEach(function(e) {
            t.headerExtensions.push(n.parseExtmap(e))
        }), t
    }, n.writeRtpDescription = function(e, t) {
        var o = "";
        return o += "m=" + e + " ", o += t.codecs.length > 0 ? "9" : "0", o += " UDP/TLS/RTP/SAVPF ", o += t.codecs.map(function(e) {
            return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType
        }).join(" ") + "\r\n", o += "c=IN IP4 0.0.0.0\r\n", o += "a=rtcp:9 IN IP4 0.0.0.0\r\n", t.codecs.forEach(function(e) {
            o += n.writeRtpMap(e), o += n.writeFmtp(e), o += n.writeRtcpFb(e)
        }), o += "a=rtcp-mux\r\n"
    }, n.parseRtpEncodingParameters = function(e) {
        var t, o = [],
            i = n.parseRtpParameters(e),
            r = -1 !== i.fecMechanisms.indexOf("RED"),
            a = -1 !== i.fecMechanisms.indexOf("ULPFEC"),
            c = n.matchPrefix(e, "a=ssrc:").map(function(e) {
                return n.parseSsrcMedia(e)
            }).filter(function(e) {
                return "cname" === e.attribute
            }),
            s = c.length > 0 && c[0].ssrc,
            l = n.matchPrefix(e, "a=ssrc-group:FID").map(function(e) {
                var t = e.split(" ");
                return t.shift(), t.map(function(e) {
                    return parseInt(e, 10)
                })
            });
        l.length > 0 && l[0].length > 1 && l[0][0] === s && (t = l[0][1]), i.codecs.forEach(function(e) {
            if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
                var n = {
                    ssrc: s,
                    codecPayloadType: parseInt(e.parameters.apt, 10),
                    rtx: {
                        payloadType: e.payloadType,
                        ssrc: t
                    }
                };
                o.push(n), r && (n = JSON.parse(JSON.stringify(n)), n.fec = {
                    ssrc: t,
                    mechanism: a ? "red+ulpfec" : "red"
                }, o.push(n))
            }
        }), 0 === o.length && s && o.push({
            ssrc: s
        });
        var u = n.matchPrefix(e, "b=");
        return u.length && (0 === u[0].indexOf("b=TIAS:") ? u = parseInt(u[0].substr(7), 10) : 0 === u[0].indexOf("b=AS:") && (u = parseInt(u[0].substr(5), 10)), o.forEach(function(e) {
            e.maxBitrate = u
        })), o
    }, n.writeSessionBoilerplate = function() {
        return "v=0\r\no=thisisadapterortc 8169639915646943137 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
    }, n.writeMediaSection = function(e, t, o, i) {
        var r = n.writeRtpDescription(e.kind, t);
        if (r += n.writeIceParameters(e.iceGatherer.getLocalParameters()), r += n.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === o ? "actpass" : "active"), r += "a=mid:" + e.mid + "\r\n", r += e.rtpSender && e.rtpReceiver ? "a=sendrecv\r\n" : e.rtpSender ? "a=sendonly\r\n" : e.rtpReceiver ? "a=recvonly\r\n" : "a=inactive\r\n", e.rtpSender) {
            var a = "msid:" + i.id + " " + e.rtpSender.track.id + "\r\n";
            r += "a=" + a, r += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + a
        }
        return r += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + n.localCName + "\r\n"
    }, n.getDirection = function(e, t) {
        for (var o = n.splitLines(e), i = 0; i < o.length; i++) switch (o[i]) {
            case "a=sendrecv":
            case "a=sendonly":
            case "a=recvonly":
            case "a=inactive":
                return o[i].substr(2)
        }
        return t ? n.getDirection(t) : "sendrecv"
    }, e.exports = n
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("ChatService", ["$rootScope", "$window", "$timeout", "serverSocket", "avatarProvider", "Event", "RoomState", "User", "isEmbedded", "appearinApi", "Analytics", "AnalyticsEvents", "features", function(e, t, n, o, i, r, a, c, s, l, u, d, m) {
        function f(e) {
            var t = a.localClient && a.localClient.userId,
                n = e.senderId === a.selfId,
                o = e.userId && e.userId === t;
            return !(!n && !o)
        }

        function g(e, t) {
            var n = "/images/empty-avatar.png";
            if (t) return c.data.avatarUrl || n;
            var o = _.find(a.clients, {
                    id: e
                }),
                i = null;
            return o && (i = o.latestSnapshot || o.userData && o.userData.avatarUrl), i || n
        }

        function p(e, t) {
            var n = _.find(a.clients, {
                id: e
            });
            n && (n.latestSnapshot = t)
        }

        function E(e) {
            var t = _.find(a.clients, {
                id: e
            });
            return t && t.userData && t.userData.displayName || "Someone"
        }

        function v(e, t) {
            return _.some(e, function(e) {
                return e.userId === t
            })
        }

        function h() {
            return a.isFollowEnabled && v(a.roles, c.data.userId)
        }

        function S(e) {
            return e.reduce(function(e, t) {
                return e + t.count
            }, 0)
        }

        function C(e, t) {
            function n() {
                return k.entries.length > 0 && G(k.entries).timestamp
            }
            return {
                timestamp: t || n(),
                displayName: E(e),
                avatar: g(e),
                color: N(e)
            }
        }

        function y(t) {
            e.$emit(r.CHAT_READ_STATE_CHANGED, t, k.readState)
        }

        function I(t) {
            if (!t) throw new Error("roomName required for fetching chat history");
            return l({
                url: "/room/" + encodeURIComponent(a.roomName) + "/history"
            }).then(function(t) {
                function o(e) {
                    return k.entries.filter(function(t) {
                        return t.timestamp === e.timestamp && t.text === e.text
                    }).length > 0
                }

                function i() {
                    a.clients.forEach(function(e) {
                        a.localClient && a.localClient.id === e.id || (k.readState[e.id] = C(e.id, e.timestamp), y(e.id))
                    })
                }
                var c = t.data && t.data.history;
                c && 0 !== c.length && (c.forEach(function(e) {
                    var t = new A(e);
                    t.isRead = t.timestamp >= w && t.timestamp <= M, o(t) || k.entries.push(t)
                }), K(), e.$broadcast(r.CHAT_HISTORY_UPDATED), n(i, void 0, !1))
            })
        }

        function O(e, t) {
            k.readState[e] = C(e, t), y(e)
        }
        var R = ["#5AD099", "#31A7CF", "#B76DD6", "#EAC63E", "#F8984C"],
            T = {},
            N = function(e) {
                if (!(e in T)) {
                    var t = Object.keys(T).length,
                        n = t % R.length,
                        o = R[n];
                    T[e] = o
                }
                return T[e]
            },
            A = function(e) {
                if (e) switch (this.isFromSelf = f(e), this.isRead = !1, this.messageType = e.messageType, this.timestamp = e.timestamp, this.text = e.text, this.avatar = e.avatar || g(e.senderId, this.isFromSelf), this.color = N(e.senderId), e.messageType) {
                    case constants.ChatMessageType.TOMBSTONE:
                        this.count = 0;
                        break;
                    default:
                        this.count = 1
                }
            },
            b = "history",
            D = "is-open",
            k = {};
        k.isEnabled = !s, k.entries = [], k.unreadCount = 0, k.unreadCountBefore = 0, k.unreadCountAfter = 0, k.usersTyping = {}, k.sessionStorageKey = void 0, k.toggleChat = function(n) {
            k.isOpen = void 0 !== n ? n : !k.isOpen, t.sessionStorageAdapter(k.sessionStorageKey, D, k.isOpen), e.$emit(r.CHAT_TOGGLED, k.isOpen)
        }, e.$on(r.TOGGLE_CHAT, function() {
            k.toggleChat()
        }), e.$on(r.VIEWMODE_CHANGED, function(e, t) {
            "normal" !== t && k.toggleChat(!1)
        });
        var w, M;
        k.reloadTimestamps = function() {
            w = t.sessionStorageAdapter(k.sessionStorageKey, "earliestReadTimestamp"), M = t.sessionStorageAdapter(k.sessionStorageKey, "latestReadTimestamp")
        };
        var L = _.throttle(function(e) {
                o.emit(protocol.relay.CHAT_READ_STATE, {
                    timestamp: e
                })
            }, 5e3),
            U = function(e) {
                w = e, t.sessionStorageAdapter(k.sessionStorageKey, "earliestReadTimestamp", e)
            },
            $ = function(e) {
                M = e, t.sessionStorageAdapter(k.sessionStorageKey, "latestReadTimestamp", e), L(e)
            },
            P = function(e, t) {
                (w > e || !w) && U(e), (t > M || !M) && $(t)
            },
            B = function(e, t) {
                return k.entries.filter(function(n) {
                    return !n.isRead && n.timestamp >= e && n.timestamp <= t
                })
            },
            x = function(e, t) {
                B(e, t).forEach(function(e) {
                    e.isRead = !0
                })
            },
            K = function(e, t) {
                var n = k.entries.filter(function(e) {
                    return !e.isRead
                });
                if (k.unreadCount = S(n), e && t) {
                    var o = n.filter(function(t) {
                            return t.timestamp < e
                        }),
                        i = n.filter(function(e) {
                            return e.timestamp > t
                        });
                    k.unreadCountBefore = S(o), k.unreadCountAfter = S(i)
                }
            };
        k.setVisibleTimestamps = function(e) {
            P(e.earliest, e.latest), x(e.earliest, e.latest), K(e.earliest, e.latest)
        };
        var V = function() {
                return k.entries.filter(function(e) {
                    return !e.isRead
                })
            },
            F = function(e) {
                return e.reduce(function(e, t) {
                    return e.timestamp > t.timestamp ? t : e
                })
            },
            G = function(e) {
                return e.reduce(function(e, t) {
                    return e.timestamp < t.timestamp ? t : e
                })
            };
        k.earliestUnreadTimestamp = function() {
            return F(V()).timestamp
        }, k.latestUnreadTimestamp = function() {
            return G(V()).timestamp
        }, k.clearEntries = function() {
            k.entries.splice(0, k.entries.length), t.sessionStorageAdapter(k.sessionStorageKey, b, k.entries)
        }, k.clearHistory = function() {
            return o.emit(protocol.req.CLEAR_CHAT_HISTORY)
        }, k.sendMessage = function(t) {
            var n = {
                    text: t
                },
                a = i.getAvatar();
            a && (n.avatar = a), o.emit(protocol.relay.CHAT_MESSAGE, n), e.$emit(r.CHAT_MESSAGE_SENT, n)
        }, k.setChatState = function() {
            var e = constants.ChatState.INACTIVE;
            return function(t) {
                if (_.contains(constants.ChatState, t) && e !== t) {
                    e = t;
                    var n = {
                        chatState: t
                    };
                    o.emit(protocol.relay.CHAT_STATE, n)
                }
            }
        }();
        var H = !1;
        return e.$on(r.ROOM_JOINED, function() {
            function e() {
                var e = a.localClient && a.localClient.role && a.localClient.role.roleName;
                return "visitor" === e && a.isClaimed
            }
            k.sessionStorageKey = a.roomName + "-chat";
            var n = t.sessionStorageAdapter(k.sessionStorageKey, D);
            if (void 0 !== n ? k.isOpen = n : k.isOpen = !m.isPremiumVersion, k.reloadTimestamps(), H = !0, k.entries = k.entries.concat(t.sessionStorageAdapter(k.sessionStorageKey, b) || []), e()) {
                var o = new A({
                    messageType: "warning",
                    timestamp: (new Date).toISOString(),
                    senderId: a.selfId
                });
                k.entries = [o].concat(k.entries), k.isOpen || K()
            }
            h() && I(a.roomName)
        }), e.$on(r.USER_LOGGED_IN, function() {
            a.roomName && h() && H && I(a.roomName)
        }), e.$on(r.LEAVE_ROOM, function() {
            k.clearEntries()
        }), e.$on(r.USER_LOGGED_OUT, function() {
            k.clearEntries()
        }), e.$on(r.CLEAR_CHAT_HISTORY, function() {
            k.clearHistory(), u.sendEvent(d.ROOM_SETTINGS.CLEARED_CHAT)
        }), o.$on(protocol.relay.CHAT_MESSAGE, function(n) {
            if (n && !n.error) {
                n.avatar && p(n.senderId, n.avatar);
                var o = new A(n);
                k.entries.push(o), t.sessionStorageAdapter(k.sessionStorageKey, b, k.entries), K(), e.$broadcast(r.NEW_CHAT_MESSAGE, o)
            }
        }), k.readState = {}, o.$on(protocol.relay.CHAT_READ_STATE, function(e) {
            e && !e.error && e.clientId && O(e.clientId, e.timestamp)
        }), o.$on(protocol.relay.CHAT_STATE, function(t) {
            if (t && !t.error && t.clientId) {
                switch (t.chatState) {
                    case constants.ChatState.TYPING:
                        k.usersTyping[t.clientId] = {
                            displayName: E(t.clientId),
                            avatar: g(t.clientId),
                            color: N(t.clientId)
                        };
                        break;
                    case constants.ChatState.INACTIVE:
                        delete k.usersTyping[t.clientId]
                }
                e.$emit(r.CHAT_USERS_TYPING_CHANGED, k.usersTyping)
            }
        }), o.$on(protocol.res.NEW_CLIENT, function(e) {
            var t = a.clients[e.client.id] || {};
            O(e.client.id, t && t.readTimestamp)
        }), o.$on(protocol.res.CLIENT_LEFT, function(t) {
            delete k.usersTyping[t.clientId], e.$emit(r.CHAT_USERS_TYPING_CHANGED, k.usersTyping), k.readState.hasOwnProperty(t.clientId) && !k.readState[t.clientId].isFollower && (delete k.readState[t.clientId], y(t.clientId))
        }), o.$on(protocol.res.CHAT_HISTORY_CLEARED, function() {
            k.clearEntries(), e.$broadcast(r.CHAT_HISTORY_UPDATED)
        }), k
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").service("ImageParser", function() {
        function e(e, t) {
            function n(e, o) {
                o = o || .9;
                var i = e.toDataURL("image/jpeg", o),
                    r = i.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
                    a = atob(r).length;
                return a > t.sizeLimit && o >= .1 ? n(e, o - .1) : r
            }

            function o(e, t, n) {
                var o, i, r = e.height,
                    a = e.width;
                return (a > t || r > n) && (i = n, o = i / r * a, o > t && (o = t, i = o / a * r)), {
                    width: o || a,
                    height: i || r
                }
            }
            var i = o(e, t.maxWidth, t.maxHeight),
                r = document.createElement("canvas");
            return r.width = i.width, r.height = i.height, r.getContext("2d").drawImage(e, 0, 0, i.width, i.height), n(r)
        }
        var t = {
            sizeLimit: 524288,
            maxWidth: 1920,
            maxHeight: 1200
        };
        this.isValidImage = function(e) {
            return -1 !== e.type.indexOf("image")
        }, this.base64toBlob = function(e, t, n) {
            t = t || "", n = n || 512;
            for (var o = atob(e), i = [], r = 0; r < o.length; r += n) {
                for (var a = o.slice(r, r + n), c = new Array(a.length), s = 0; s < a.length; s++) c[s] = a.charCodeAt(s);
                var l = new Uint8Array(c);
                i.push(l)
            }
            var u = new Blob(i, {
                type: t
            });
            return u
        }, this.parseFileAsImage = function(n, o) {
            var i = _.defaults(n && n.restrictions || {}, t),
                r = n.file,
                a = new FileReader;
            a.onload = function(t) {
                var n = new Image;
                n.onload = function() {
                    var t = e(this, i);
                    return atob(t).length > i.sizeLimit ? void o("Sorry, that image was too large.") : void o(void 0, t)
                };
                var a = "data:" + r.type + ";base64," + btoa(t.target.result);
                n.src = a
            }, a.readAsBinaryString(r)
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("Snapshooter", [function() {
        var e = function(e, t, n, o) {
            var i = 2,
                r = i * t,
                a = i * n,
                c = angular.element('<canvas width="' + r + '" height="' + a + '" />')[0],
                s = c.getContext("2d");
            s.drawImage(e, 0, 0, r, a);
            for (var l = angular.element('<canvas width="' + t + '" height="' + n + '" />')[0], u = l.getContext("2d"), d = s.getImageData(0, 0, r, a), m = u.getImageData(0, 0, t, n), f = function(e, t) {
                    return [d.data[4 * (e + t * r) + 0], d.data[4 * (e + t * r) + 1], d.data[4 * (e + t * r) + 2]]
                }, g = function(e, n, o) {
                    m.data[4 * (e + n * t) + 0] = o[0], m.data[4 * (e + n * t) + 1] = o[1], m.data[4 * (e + n * t) + 2] = o[2], m.data[4 * (e + n * t) + 3] = 255
                }, p = function(e) {
                    var t = [0, 0, 0];
                    return e.forEach(function(e) {
                        t[0] += e[0], t[1] += e[1], t[2] += e[2]
                    }), t[0] /= e.length, t[1] /= e.length, t[2] /= e.length, t
                }, E = 0; t > E; E++)
                for (var _ = 0; n > _; _++) {
                    for (var v = [], h = E * i;
                        (E + 1) * i > h; h++)
                        for (var S = _ * i;
                            (_ + 1) * i > S; S++) v.push(f(h, S));
                    g(E, _, p(v))
                }
            u.putImageData(m, 0, 0);
            var C = function(e) {
                    var t = e.substring(e.indexOf(",") + 1),
                        n = 6 * t.length;
                    return Math.ceil(n / 8)
                },
                y = 1,
                I = null;
            do I = l.toDataURL("image/jpeg", y), y -= .1; while (C(I) > o && y > 0);
            return I
        };
        return {
            takeSnapshot: e
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("features", ["objStore", "$location", "$window", function(e, t, n) {
        var o = t.search(),
            i = e("features").loadOrDefault({}),
            r = function(e) {
                var t = _.clone(e);
                return _.each(t, function(e, n) {
                    e || delete t[n]
                }), t
            },
            a = t.host().split(".").length > 2,
            c = {
                isVideoDisabledByDefault: "off" === o.video,
                isAudioDisabledByDefault: "off" === o.audio,
                isPremiumVersion: a,
                disableIPv6ICE: o.noipv6,
                disableDSCP: o.noDSCP,
                isEmbedded: o.embedded,
                isEventLoggingEnabled: o.eventLogging,
                keyCombinationDebug: o.keyCombinationDebug,
                turnserver: o.turnserver,
                sfu: o.sfu,
                useOnlyTURN: o.turnonly,
                disableTURN: o.disableturn,
                lowDataModeEnabled: o.lowData,
                widescreen: o.widescreen,
                bandwidth: o.bandwidth || (a ? "low5plus" : void 0),
                outputdevice: o.outputdevice,
                shouldShowCopyLinkButton: function() {
                    try {
                        return n.document.execCommand("copy") === !1
                    } catch (e) {
                        return !1
                    }
                }()
            };
        return _.defaults(r(c), i)
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("Credentials", ["objStore", "$http", "apiUrl", "$timeout", "$q", "$rootScope", function(e, t, n, o, i, r) {
        function a() {
            function e(i) {
                var r = n + "/devices";
                t({
                    method: "POST",
                    url: r
                }).success(function(e) {
                    u.save(e), i.resolve(e)
                }).error(function() {
                    o(e.bind(null, i), 2e3)
                })
            }
            var r = i.defer();
            return e(r), r.promise
        }

        function c() {
            if (!l) {
                var e = u.loadOrDefault(!1);
                e && (l = i.when(e))
            }
        }

        function s() {
            l = null
        }
        var l, u = e("CredentialsStorage"),
            d = {
                event: {
                    CREDENTIALS_CHANGED: "credentials-changed"
                }
            };
        return d.getCredentials = function() {
            return c(), l || (l = a()), l
        }, d.getCurrentCredentials = function() {
            return c(), l ? l : i.when(null)
        }, d.setUserId = function(e) {
            var t = !!l;
            return d.getCurrentCredentials().then(function(n) {
                if (!n) throw new Error("Illegal state. No credentials to set user id for");
                var o = n.userId !== e;
                o && d.save(_.extend({}, n, {
                    userId: e
                }));
                var i = !t || o;
                return i
            })
        }, d.save = function(e) {
            s(), u.save(e), r.$broadcast(d.event.CREDENTIALS_CHANGED)
        }, d
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("timeProvider", [function() {
        return function() {
            return (new Date).getTime()
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("dismissHistory", ["multiMap", "objStore", function(e, t) {
        var n = t("dismissHistory"),
            o = e(n.loadOrDefault({}));
        return {
            add: function(e, t) {
                o.add(e, t), n.save(o.getAllItems())
            },
            getHistory: function(e) {
                return o.get(e)
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("extensionDesktopNotificationsSignup", ["browserExtension", "Analytics", "RoomService", "$rootScope", "Event", function(e, t, n, o, i) {
        var r = function() {
                t.sendEvent(t.events.USER_SETTINGS.DESKTOP_NOTIFICATIONS_TRIGGER_INSTALL), e.triggerInstall({
                    reason: "desktop-notifications"
                })
            },
            a = function(n) {
                e.toggleDesktopNotifications(n), t.helpers.userSettings.toggleDesktopNotifications(n)
            };
        return o.$on(i.EXTENSION_INSTALL, function(e, t) {
            "loaded" === t.state && "desktop-notifications" === t.installReason && a(!0)
        }), {
            canInstallExtension: e.canInstall.bind(e),
            hasExtension: function() {
                return e.hasExtension
            },
            installOrToggleDesktopNotifications: function() {
                e.hasExtension ? a(!e.isDesktopNotificationsEnabled) : r()
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").run(["User", function(e) {
        e.maybeLogin()
    }]).factory("User", ["appearinApi", "$q", "serverSocket", "$log", "Analytics", "Intercom", "kissmetrics", "$rootScope", "Event", "Contact", "Credentials", "RoomState", "FollowState", function(e, t, n, o, i, r, a, c, s, l, u, d, m) {
        function f(e) {
            return {
                user_id: e.userId,
                name: e.displayName,
                email: e.email
            }
        }

        function g(e) {
            return e.type === constants.Contact.Type.User
        }

        function p(e) {
            return _.sortBy(e, "displayName")
        }

        function E(e) {
            return e.filter(function(e) {
                return !(!e.lastInviteTime && !e.lastConversationTime)
            })
        }

        function v(e) {
            return _.sortBy(e, function(e) {
                return e = _.defaults(e, {
                    lastInviteTime: 0,
                    lastConversationTime: 0
                }), Math.max(e.lastInviteTime, e.lastConversationTime)
            }).reverse()
        }

        function h(e) {
            var t = E(e);
            return _.map(v(t).slice(0, I - 1), function(e) {
                return new l(e, O)
            })
        }

        function S(e) {
            return _.filter(e, function(e) {
                return e.phoneNumbers.length > 0
            })
        }

        function C(e) {
            O.data = {}, O.broadcastUserData(), O.isLoggedIn = e ? !1 : void 0, O.registeredContacts = [], O.unregisteredContacts = [], O.recentContacts = []
        }
        var y = "/user",
            I = 20,
            O = {};
        O.data = {}, O.showSignupDialog = !1, n.$on(protocol.res.CONTACTS_UPDATED, function() {
            O.getContacts()
        }), O.hasContacts = function() {
            return 0 !== O.registeredContacts.length || 0 !== O.unregisteredContacts.length
        };
        var R = function(e) {
            return _.partition(_.map(e, function(e) {
                return new l(e, O)
            }), g)
        };
        O.getContacts = function() {
            var t = y + "/contacts";
            return e({
                method: "GET",
                url: t,
                params: {
                    type: "user"
                }
            }).then(function(e) {
                var t = R(e.data.contacts),
                    n = S(t[1]);
                O.recentContacts = h(e.data.contacts), O.registeredContacts = p(t[0]), O.unregisteredContacts = p(n);
                var o = {
                    recent_contacts: O.recentContacts.length,
                    user_contacts: O.registeredContacts.length,
                    phone_contacts: O.unregisteredContacts.length
                };
                r.update(o), a.set(o)
            }).then(function() {
                c.$broadcast(s.CONTACTS_UPDATED)
            })
        }, O.callUser = function(t, n) {
            var o = n ? {
                roomName: n
            } : {};
            return e({
                method: "POST",
                url: "/users/" + t + "/call",
                data: o
            })
        }, O.callContact = function(t, n) {
            var o = n || {};
            return e({
                method: "POST",
                url: "/user/contacts/" + t + "/call",
                data: o
            })
        }, O.create = function(n) {
            return e({
                method: "POST",
                url: "/users",
                data: n
            }).then(function(e) {
                return O.isLoggedIn = !0, O.data = e.data, r.boot(f(e.data)), a.identify(e.data.userId), i.helpers.userRegistration.recordUserCreated(), e.data
            })["catch"](function(e) {
                return C(!0), t.reject(e)
            })
        }, O.sendVerificationCode = function(t, n, o) {
            return e({
                method: "POST",
                url: "/verification/" + t + "/send-code",
                data: {
                    contactPoint: n,
                    isVerifying: !!o
                }
            })
        }, O.update = function(t) {
            return e({
                method: "PUT",
                url: y,
                data: t
            }).then(function(e) {
                return r.update(f(e.data)), e.data
            })
        }, O.setPhoneNumber = function(e) {
            return O.update({
                phoneNumber: e
            }).then(function() {
                return O.setSmsEndpoint(e)
            })
        }, O.setDisplayName = function(e) {
            return O.update({
                displayName: e
            })
        }, O.setPersonalRoomName = function(e) {
            return O.update({
                roomName: e
            })
        }, O.setEmail = function(e) {
            return O.update({
                email: e
            }).then(O.fetchUser)
        }, O.verifyContactPoint = function(t, n, o) {
            var i = "/verification/" + t,
                r = {
                    contactPoint: n,
                    code: "" + o
                };
            return e({
                method: "GET",
                params: r,
                url: i
            })
        }, O.sendAppLink = function() {
            return e({
                method: "POST",
                url: "/user/sendAppLink"
            })
        }, O.uploadAvatar = function(t) {
            var n = {
                    avatar: t
                },
                o = y + "/avatar",
                i = {
                    "Content-Type": void 0
                };
            return e({
                method: "PUT",
                url: o,
                data: n,
                transformRequest: function(e) {
                    var t = new FormData;
                    return angular.forEach(e, function(e, n) {
                        t.append(n, e)
                    }), t
                },
                headers: i
            })
        }, O.setUserId = function(e) {
            return u.setUserId(e).then(function(t) {
                if (t) {
                    if (e) return O.fetchUserAndDependentObjects();
                    var n = !0;
                    C(n), a.clearIdentity(), r.clearData()
                }
            })
        }, O.maybeLogin = function() {
            O.isLoggedIn || u.getCurrentCredentials().then(function(e) {
                return e && e.userId ? O.fetchUserAndDependentObjects() : void 0
            })
        }, O.fetchUser = function() {
            return e({
                method: "GET",
                url: "/user"
            }).then(function(e) {
                return e.data.error ? (O.isLoggedIn = !1, t.reject(e.data.error)) : _.isEqual(O.data, e.data) ? O.data : (O.data = e.data, O.isLoggedIn = !0, O.broadcastUserData(), O.getRolesAndUpdateUser(), r.boot(f(O.data)), a.identify(O.data.userId), i.sendEvent(i.events.LOGIN.USER_LOGGED_IN), u.setUserId(O.data.userId).then(function() {
                    return O.data
                }))
            })["catch"](function(e) {
                return C(!0), t.reject(e)
            })
        }, O._getFollowedRooms = function() {
            return e({
                method: "GET",
                url: "/user/followed-rooms"
            }).then(function(e) {
                return e.data.followedRooms
            })
        }, O.getRolesAndUpdateUser = function() {
            e({
                method: "GET",
                url: "/user/roles"
            }).then(function(e) {
                O.rooms = _.map(e.data.roles, function(e) {
                    return {
                        roomName: e.roomName,
                        userRole: e.roleName,
                        mutedUntil: e.mutedUntil,
                        numberOfUnreadMessages: e.numberOfUnreadMessages
                    }
                });
                var t = _.findWhere(O.rooms, {
                    roomName: d.roomName
                });
                t && (d.mutedUntil = t.mutedUntil)
            })
        }, O.getFollowedRoomsAndUpdateFollowState = function() {
            function e(e) {
                return e.map(function(e) {
                    return _.extend({}, e, {
                        isClaimedByUser: O._isRoomClaimedByUser(e.roomName)
                    })
                })
            }
            return O._getFollowedRooms().then(function(t) {
                var n = e(t);
                m.setFollowedRooms(n)
            })
        }, O._isRoomClaimedByUser = function(e) {
            return !!(O.data.rooms && O.data.rooms.indexOf(e) > -1)
        }, O.fetchUserAndDependentObjects = function() {
            return O.fetchUser().then(function() {
                return t.all([O.getContacts(), O.getFollowedRoomsAndUpdateFollowState()])
            }).then(function() {
                c.$emit(s.USER_LOGGED_IN)
            })
        }, O.fetchUserAndContacts = function() {
            return O.fetchUser().then(function() {
                O.getContacts()
            })
        }, O.addContact = function(n) {
            var r = y + "/contacts";
            return e({
                method: "POST",
                url: r,
                data: [n]
            }).then(function() {
                return i.sendEvent(i.events.CONTACT_ADDED_MANUALLY), t.when()
            })["catch"](function(e) {
                return i.sendEvent(i.events.CONTACT_ADDED_MANUALLY_FAILED), o.error("Could not add contact: %O", e), t.reject(e)
            })
        }, O.logout = function() {
            var t = y + "/device";
            return e({
                method: "DELETE",
                url: t
            }).then(function(e) {
                return O.setUserId(null).then(function() {
                    c.$emit(s.USER_LOGGED_OUT)
                }).then(_.constant(e))
            })
        }, O.deletePhoneNumber = function() {
            var n = y + "/field/phoneNumber";
            return e({
                method: "DELETE",
                url: n
            }).then(function(e) {
                return e.data
            })["catch"](function(e) {
                return 400 === e.status ? t.reject({
                    error: "Need email"
                }) : t.reject({
                    error: "Unknown error"
                })
            })
        }, O.deleteEmail = function() {
            var n = y + "/field/email";
            return e({
                method: "DELETE",
                url: n
            }).then(function(e) {
                return e.data
            })["catch"](function(e) {
                return 400 === e.status ? t.reject({
                    error: "Need phone number"
                }) : t.reject({
                    error: "Unknown error"
                })
            })
        }, O.inviteBySms = function(t, n) {
            return e({
                method: "POST",
                url: y + "/invitation",
                data: {
                    type: "sms",
                    roomName: n,
                    phoneNumber: t
                }
            })
        }, O.addPhoneContact = function(t, n) {
            var o = {
                id: uuid.v4(),
                displayName: t,
                phoneNumbers: n
            };
            return e({
                method: "POST",
                url: y + "/contacts/phonebook",
                data: [o]
            })
        }, O.hideContact = function(t) {
            return e({
                method: "PUT",
                url: y + "/contacts/" + t.id + "/flags",
                data: {
                    hidden: !0
                }
            })
        }, O.broadcastUserData = function() {
            if (d.selfId) {
                var e = {
                    type: "UserData",
                    payload: {
                        clientId: d.selfId,
                        displayName: O.data.displayName,
                        avatarUrl: O.data.avatarUrl
                    }
                };
                n.emit(protocol.req.SEND_CLIENT_METADATA, e)
            }
        };
        var T = _.throttle(function() {
            return e({
                method: "GET",
                url: y + "/notifications"
            }).then(function(e) {
                return e.data
            })
        }, 1e3, {
            trailing: !1
        });
        return O.getNotifications = function() {
            return T() || t.when()
        }, O.markNotificationsAsReadAt = function(t) {
            return e({
                method: "PUT",
                url: y + "/notifications/read-indicator",
                data: {
                    lastReadAt: t
                }
            })
        }, c.$on(s.NOTIFICATIONS_MUTE_SETTINGS_CHANGED, function() {
            O.getRolesAndUpdateUser()
        }), c.$on(s.CLIENT_ROLE_CHANGED, function() {
            O.getRolesAndUpdateUser()
        }), C(), O
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("modalService", ["$q", "$window", function(e, t) {
        function n(e) {
            if (!e) throw new Error("type is a required argument");
            if (!(e in r)) throw new Error("Modal of type '" + e + "' does not exist");
            return a && r[e].isOpen
        }

        function o(e) {
            r[e].isOpen = !1, a = null;
            var t = r[e].element;
            t.dispatchEvent(c(e))
        }
        var i, r = {},
            a = null,
            c = function(e) {
                return new t.CustomEvent("close", {
                    detail: {
                        message: "Closed modal " + e,
                        time: new Date
                    },
                    bubbles: !1,
                    cancelable: !0
                })
            },
            s = function(e) {
                return new t.CustomEvent("open", {
                    detail: {
                        message: "Opened modal " + e,
                        time: new Date
                    },
                    bubbles: !1,
                    cancelable: !0
                })
            },
            l = function(e) {
                n(e) && (o(e), i && i.resolve())
            },
            u = function(e) {
                n(e) && (o(e), i && i.reject())
            },
            d = function(t, n) {
                if (!t) throw new Error("type is a required argument");
                if (!(t in r)) throw new Error("Modal of type '" + t + "' does not exist");
                if (a === t) return e.reject();
                a && u(a), r[t].isOpen = !0, r[t].context = n || null, a = t;
                var o = r[t].element;
                return i = e.defer(), o.dispatchEvent(s(t)), i.promise
            },
            m = function(e) {
                return d(e, null)
            },
            f = function(e, t) {
                if (!e) throw new Error("type is a required argument");
                if (!t) throw new Error("element is a required argument");
                r[e] = {
                    element: t
                }
            },
            g = function(t, n) {
                function o() {
                    var n = i && i.after && i.after();
                    if (0 !== r.length) return i = r[0], r = r.slice(1), e.when(n).then(function() {
                        return d(i.name, t.context).then(o)
                    })
                }
                if (!t) throw new Error("flow is a required argument");
                t.options = n || {};
                var i, r = t.modals;
                return o()
            };
        return {
            modals: r,
            openModal: m,
            openModalWithContext: d,
            closeModal: l,
            abortModal: u,
            addModal: f,
            openFlow: g
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("GeoLookup", ["$q", "objStore", function(e, t) {
        var n, o = t("GeoLookupCache"),
            i = o.loadOrDefault(null),
            r = function(e) {
                return e && e.data && e.data.country && e.data.country.iso_code
            },
            a = function(e) {
                return e.country.iso_code.toLowerCase()
            },
            c = function() {
                return n || (n = e.defer(), r(i) ? n.resolve(a(i.data)) : geoip2.country(function(e) {
                    o.save({
                        timestamp: (new Date).getTime(),
                        data: e
                    }), n.resolve(a(e))
                }, function() {
                    n.resolve("no")
                })), n.promise
            };
        return {
            get: c
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("serverTemplate", ["appearinApi", "$q", "$log", function(e, t, n) {
        function o(o, i) {
            return e({
                method: "GET",
                url: "/notifications/template",
                params: {
                    name: o
                }
            }).then(function(e) {
                return e.data && e.data.template || t.reject()
            })["catch"](function() {
                return n.warn("Unable to get server-side template %s. Using default.", o), i
            }).then(function(e) {
                return _.template(e)
            })
        }
        return {
            getTemplate: o
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("countryCodeLookup", ["appearinApi", function(e) {
        var t = [{
                country_code: "dz",
                image_path: "/images/flags/dz.png",
                calling_code: "+213",
                country_name: "Algeria (+213)"
            }, {
                country_code: "ad",
                image_path: "/images/flags/ad.png",
                calling_code: "+376",
                country_name: "Andorra (+376)"
            }, {
                country_code: "ao",
                image_path: "/images/flags/ao.png",
                calling_code: "+244",
                country_name: "Angola (+244)"
            }, {
                country_code: "ai",
                image_path: "/images/flags/ai.png",
                calling_code: "+1264",
                country_name: "Anguilla (+1264)"
            }, {
                country_code: "ag",
                image_path: "/images/flags/ag.png",
                calling_code: "+1268",
                country_name: "Antigua & Barbuda (+1268)"
            }, {
                country_code: "ar",
                image_path: "/images/flags/ar.png",
                calling_code: "+54",
                country_name: "Argentina (+54)"
            }, {
                country_code: "am",
                image_path: "/images/flags/am.png",
                calling_code: "+374",
                country_name: "Armenia (+374)"
            }, {
                country_code: "aw",
                image_path: "/images/flags/aw.png",
                calling_code: "+297",
                country_name: "Aruba (+297)"
            }, {
                country_code: "au",
                image_path: "/images/flags/au.png",
                calling_code: "+61",
                country_name: "Australia (+61)"
            }, {
                country_code: "at",
                image_path: "/images/flags/at.png",
                calling_code: "+43",
                country_name: "Austria (+43)"
            }, {
                country_code: "az",
                image_path: "/images/flags/az.png",
                calling_code: "+994",
                country_name: "Azerbaijan (+994)"
            }, {
                country_code: "bs",
                image_path: "/images/flags/bs.png",
                calling_code: "+1242",
                country_name: "Bahamas (+1242)"
            }, {
                country_code: "bh",
                image_path: "/images/flags/bh.png",
                calling_code: "+973",
                country_name: "Bahrain (+973)"
            }, {
                country_code: "bd",
                image_path: "/images/flags/bd.png",
                calling_code: "+880",
                country_name: "Bangladesh (+880)"
            }, {
                country_code: "bb",
                image_path: "/images/flags/bb.png",
                calling_code: "+1246",
                country_name: "Barbados (+1246)"
            }, {
                country_code: "by",
                image_path: "/images/flags/by.png",
                calling_code: "+375",
                country_name: "Belarus (+375)"
            }, {
                country_code: "be",
                image_path: "/images/flags/be.png",
                calling_code: "+32",
                country_name: "Belgium (+32)"
            }, {
                country_code: "bz",
                image_path: "/images/flags/bz.png",
                calling_code: "+501",
                country_name: "Belize (+501)"
            }, {
                country_code: "bj",
                image_path: "/images/flags/bj.png",
                calling_code: "+229",
                country_name: "Benin (+229)"
            }, {
                country_code: "bm",
                image_path: "/images/flags/bm.png",
                calling_code: "+1441",
                country_name: "Bermuda (+1441)"
            }, {
                country_code: "bt",
                image_path: "/images/flags/bt.png",
                calling_code: "+975",
                country_name: "Bhutan (+975)"
            }, {
                country_code: "bo",
                image_path: "/images/flags/bo.png",
                calling_code: "+591",
                country_name: "Bolivia (+591)"
            }, {
                country_code: "ba",
                image_path: "/images/flags/ba.png",
                calling_code: "+387",
                country_name: "Bosnia Herzegovina (+387)"
            }, {
                country_code: "bw",
                image_path: "/images/flags/bw.png",
                calling_code: "+267",
                country_name: "Botswana (+267)"
            }, {
                country_code: "br",
                image_path: "/images/flags/br.png",
                calling_code: "+55",
                country_name: "Brazil (+55)"
            }, {
                country_code: "bn",
                image_path: "/images/flags/bn.png",
                calling_code: "+673",
                country_name: "Brunei (+673)"
            }, {
                country_code: "bg",
                image_path: "/images/flags/bg.png",
                calling_code: "+359",
                country_name: "Bulgaria (+359)"
            }, {
                country_code: "bf",
                image_path: "/images/flags/bf.png",
                calling_code: "+226",
                country_name: "Burkina Faso (+226)"
            }, {
                country_code: "bi",
                image_path: "/images/flags/bi.png",
                calling_code: "+257",
                country_name: "Burundi (+257)"
            }, {
                country_code: "kh",
                image_path: "/images/flags/kh.png",
                calling_code: "+855",
                country_name: "Cambodia (+855)"
            }, {
                country_code: "cm",
                image_path: "/images/flags/cm.png",
                calling_code: "+237",
                country_name: "Cameroon (+237)"
            }, {
                country_code: "ca",
                image_path: "/images/flags/ca.png",
                calling_code: "+1",
                country_name: "Canada (+1)"
            }, {
                country_code: "cv",
                image_path: "/images/flags/cv.png",
                calling_code: "+238",
                country_name: "Cape Verde Islands (+238)"
            }, {
                country_code: "ky",
                image_path: "/images/flags/ky.png",
                calling_code: "+1345",
                country_name: "Cayman Islands (+1345)"
            }, {
                country_code: "cf",
                image_path: "/images/flags/cf.png",
                calling_code: "+236",
                country_name: "Central African Republic (+236)"
            }, {
                country_code: "cl",
                image_path: "/images/flags/cl.png",
                calling_code: "+56",
                country_name: "Chile (+56)"
            }, {
                country_code: "cn",
                image_path: "/images/flags/cn.png",
                calling_code: "+86",
                country_name: "China (+86)"
            }, {
                country_code: "co",
                image_path: "/images/flags/co.png",
                calling_code: "+57",
                country_name: "Colombia (+57)"
            }, {
                country_code: "km",
                image_path: "/images/flags/km.png",
                calling_code: "+269",
                country_name: "Comoros (+269)"
            }, {
                country_code: "cg",
                image_path: "/images/flags/cg.png",
                calling_code: "+242",
                country_name: "Congo (+242)"
            }, {
                country_code: "ck",
                image_path: "/images/flags/ck.png",
                calling_code: "+682",
                country_name: "Cook Islands (+682)"
            }, {
                country_code: "cr",
                image_path: "/images/flags/cr.png",
                calling_code: "+506",
                country_name: "Costa Rica (+506)"
            }, {
                country_code: "hr",
                image_path: "/images/flags/hr.png",
                calling_code: "+385",
                country_name: "Croatia (+385)"
            }, {
                country_code: "cu",
                image_path: "/images/flags/cu.png",
                calling_code: "+53",
                country_name: "Cuba (+53)"
            }, {
                country_code: "cy",
                image_path: "/images/flags/cy.png",
                calling_code: "+90392",
                country_name: "Cyprus North (+90392)"
            }, {
                country_code: "cy",
                image_path: "/images/flags/cy.png",
                calling_code: "+357",
                country_name: "Cyprus South (+357)"
            }, {
                country_code: "cz",
                image_path: "/images/flags/cz.png",
                calling_code: "+420",
                country_name: "Czech Republic (+420)"
            }, {
                country_code: "dk",
                image_path: "/images/flags/dk.png",
                calling_code: "+45",
                country_name: "Denmark (+45)"
            }, {
                country_code: "dj",
                image_path: "/images/flags/dj.png",
                calling_code: "+253",
                country_name: "Djibouti (+253)"
            }, {
                country_code: "dm",
                image_path: "/images/flags/dm.png",
                calling_code: "+1809",
                country_name: "Dominica (+1809)"
            }, {
                country_code: "do",
                image_path: "/images/flags/do.png",
                calling_code: "+1809",
                country_name: "Dominican Republic (+1809)"
            }, {
                country_code: "ec",
                image_path: "/images/flags/ec.png",
                calling_code: "+593",
                country_name: "Ecuador (+593)"
            }, {
                country_code: "eg",
                image_path: "/images/flags/eg.png",
                calling_code: "+20",
                country_name: "Egypt (+20)"
            }, {
                country_code: "sv",
                image_path: "/images/flags/sv.png",
                calling_code: "+503",
                country_name: "El Salvador (+503)"
            }, {
                country_code: "gq",
                image_path: "/images/flags/gq.png",
                calling_code: "+240",
                country_name: "Equatorial Guinea (+240)"
            }, {
                country_code: "er",
                image_path: "/images/flags/er.png",
                calling_code: "+291",
                country_name: "Eritrea (+291)"
            }, {
                country_code: "ee",
                image_path: "/images/flags/ee.png",
                calling_code: "+372",
                country_name: "Estonia (+372)"
            }, {
                country_code: "et",
                image_path: "/images/flags/et.png",
                calling_code: "+251",
                country_name: "Ethiopia (+251)"
            }, {
                country_code: "fk",
                image_path: "/images/flags/fk.png",
                calling_code: "+500",
                country_name: "Falkland Islands (+500)"
            }, {
                country_code: "fo",
                image_path: "/images/flags/fo.png",
                calling_code: "+298",
                country_name: "Faroe Islands (+298)"
            }, {
                country_code: "fj",
                image_path: "/images/flags/fj.png",
                calling_code: "+679",
                country_name: "Fiji (+679)"
            }, {
                country_code: "fi",
                image_path: "/images/flags/fi.png",
                calling_code: "+358",
                country_name: "Finland (+358)"
            }, {
                country_code: "fr",
                image_path: "/images/flags/fr.png",
                calling_code: "+33",
                country_name: "France (+33)"
            }, {
                country_code: "gf",
                image_path: "/images/flags/gf.png",
                calling_code: "+594",
                country_name: "French Guiana (+594)"
            }, {
                country_code: "pf",
                image_path: "/images/flags/pf.png",
                calling_code: "+689",
                country_name: "French Polynesia (+689)"
            }, {
                country_code: "ga",
                image_path: "/images/flags/ga.png",
                calling_code: "+241",
                country_name: "Gabon (+241)"
            }, {
                country_code: "gm",
                image_path: "/images/flags/gm.png",
                calling_code: "+220",
                country_name: "Gambia (+220)"
            }, {
                country_code: "ge",
                image_path: "/images/flags/ge.png",
                calling_code: "+7880",
                country_name: "Georgia (+7880)"
            }, {
                country_code: "de",
                image_path: "/images/flags/de.png",
                calling_code: "+49",
                country_name: "Germany (+49)"
            }, {
                country_code: "gh",
                image_path: "/images/flags/gh.png",
                calling_code: "+233",
                country_name: "Ghana (+233)"
            }, {
                country_code: "gi",
                image_path: "/images/flags/gi.png",
                calling_code: "+350",
                country_name: "Gibraltar (+350)"
            }, {
                country_code: "gr",
                image_path: "/images/flags/gr.png",
                calling_code: "+30",
                country_name: "Greece (+30)"
            }, {
                country_code: "gl",
                image_path: "/images/flags/gl.png",
                calling_code: "+299",
                country_name: "Greenland (+299)"
            }, {
                country_code: "gd",
                image_path: "/images/flags/gd.png",
                calling_code: "+1473",
                country_name: "Grenada (+1473)"
            }, {
                country_code: "gp",
                image_path: "/images/flags/gp.png",
                calling_code: "+590",
                country_name: "Guadeloupe (+590)"
            }, {
                country_code: "gu",
                image_path: "/images/flags/gu.png",
                calling_code: "+671",
                country_name: "Guam (+671)"
            }, {
                country_code: "gt",
                image_path: "/images/flags/gt.png",
                calling_code: "+502",
                country_name: "Guatemala (+502)"
            }, {
                country_code: "gn",
                image_path: "/images/flags/gn.png",
                calling_code: "+224",
                country_name: "Guinea (+224)"
            }, {
                country_code: "gw",
                image_path: "/images/flags/gw.png",
                calling_code: "+245",
                country_name: "Guinea - Bissau (+245)"
            }, {
                country_code: "gy",
                image_path: "/images/flags/gy.png",
                calling_code: "+592",
                country_name: "Guyana (+592)"
            }, {
                country_code: "ht",
                image_path: "/images/flags/ht.png",
                calling_code: "+509",
                country_name: "Haiti (+509)"
            }, {
                country_code: "hn",
                image_path: "/images/flags/hn.png",
                calling_code: "+504",
                country_name: "Honduras (+504)"
            }, {
                country_code: "hk",
                image_path: "/images/flags/hk.png",
                calling_code: "+852",
                country_name: "Hong Kong (+852)"
            }, {
                country_code: "hu",
                image_path: "/images/flags/hu.png",
                calling_code: "+36",
                country_name: "Hungary (+36)"
            }, {
                country_code: "is",
                image_path: "/images/flags/is.png",
                calling_code: "+354",
                country_name: "Iceland (+354)"
            }, {
                country_code: "in",
                image_path: "/images/flags/in.png",
                calling_code: "+91",
                country_name: "India (+91)"
            }, {
                country_code: "id",
                image_path: "/images/flags/id.png",
                calling_code: "+62",
                country_name: "Indonesia (+62)"
            }, {
                country_code: "ir",
                image_path: "/images/flags/ir.png",
                calling_code: "+98",
                country_name: "Iran (+98)"
            }, {
                country_code: "iq",
                image_path: "/images/flags/iq.png",
                calling_code: "+964",
                country_name: "Iraq (+964)"
            }, {
                country_code: "ie",
                image_path: "/images/flags/ie.png",
                calling_code: "+353",
                country_name: "Ireland (+353)"
            }, {
                country_code: "il",
                image_path: "/images/flags/il.png",
                calling_code: "+972",
                country_name: "Israel (+972)"
            }, {
                country_code: "it",
                image_path: "/images/flags/it.png",
                calling_code: "+39",
                country_name: "Italy (+39)"
            }, {
                country_code: "jm",
                image_path: "/images/flags/jm.png",
                calling_code: "+1876",
                country_name: "Jamaica (+1876)"
            }, {
                country_code: "jp",
                image_path: "/images/flags/jp.png",
                calling_code: "+81",
                country_name: "Japan (+81)"
            }, {
                country_code: "jo",
                image_path: "/images/flags/jo.png",
                calling_code: "+962",
                country_name: "Jordan (+962)"
            }, {
                country_code: "kz",
                image_path: "/images/flags/kz.png",
                calling_code: "+7",
                country_name: "Kazakhstan (+7)"
            }, {
                country_code: "ke",
                image_path: "/images/flags/ke.png",
                calling_code: "+254",
                country_name: "Kenya (+254)"
            }, {
                country_code: "ki",
                image_path: "/images/flags/ki.png",
                calling_code: "+686",
                country_name: "Kiribati (+686)"
            }, {
                country_code: "kp",
                image_path: "/images/flags/kp.png",
                calling_code: "+850",
                country_name: "Korea North (+850)"
            }, {
                country_code: "kr",
                image_path: "/images/flags/kr.png",
                calling_code: "+82",
                country_name: "Korea South (+82)"
            }, {
                country_code: "kw",
                image_path: "/images/flags/kw.png",
                calling_code: "+965",
                country_name: "Kuwait (+965)"
            }, {
                country_code: "kg",
                image_path: "/images/flags/kg.png",
                calling_code: "+996",
                country_name: "Kyrgyzstan (+996)"
            }, {
                country_code: "la",
                image_path: "/images/flags/la.png",
                calling_code: "+856",
                country_name: "Laos (+856)"
            }, {
                country_code: "lv",
                image_path: "/images/flags/lv.png",
                calling_code: "+371",
                country_name: "Latvia (+371)"
            }, {
                country_code: "lb",
                image_path: "/images/flags/lb.png",
                calling_code: "+961",
                country_name: "Lebanon (+961)"
            }, {
                country_code: "ls",
                image_path: "/images/flags/ls.png",
                calling_code: "+266",
                country_name: "Lesotho (+266)"
            }, {
                country_code: "lr",
                image_path: "/images/flags/lr.png",
                calling_code: "+231",
                country_name: "Liberia (+231)"
            }, {
                country_code: "ly",
                image_path: "/images/flags/ly.png",
                calling_code: "+218",
                country_name: "Libya (+218)"
            }, {
                country_code: "li",
                image_path: "/images/flags/li.png",
                calling_code: "+417",
                country_name: "Liechtenstein (+417)"
            }, {
                country_code: "lt",
                image_path: "/images/flags/lt.png",
                calling_code: "+370",
                country_name: "Lithuania (+370)"
            }, {
                country_code: "lu",
                image_path: "/images/flags/lu.png",
                calling_code: "+352",
                country_name: "Luxembourg (+352)"
            }, {
                country_code: "mo",
                image_path: "/images/flags/mo.png",
                calling_code: "+853",
                country_name: "Macao (+853)"
            }, {
                country_code: "mk",
                image_path: "/images/flags/mk.png",
                calling_code: "+389",
                country_name: "Macedonia (+389)"
            }, {
                country_code: "mg",
                image_path: "/images/flags/mg.png",
                calling_code: "+261",
                country_name: "Madagascar (+261)"
            }, {
                country_code: "mw",
                image_path: "/images/flags/mw.png",
                calling_code: "+265",
                country_name: "Malawi (+265)"
            }, {
                country_code: "my",
                image_path: "/images/flags/my.png",
                calling_code: "+60",
                country_name: "Malaysia (+60)"
            }, {
                country_code: "mv",
                image_path: "/images/flags/mv.png",
                calling_code: "+960",
                country_name: "Maldives (+960)"
            }, {
                country_code: "ml",
                image_path: "/images/flags/ml.png",
                calling_code: "+223",
                country_name: "Mali (+223)"
            }, {
                country_code: "mt",
                image_path: "/images/flags/mt.png",
                calling_code: "+356",
                country_name: "Malta (+356)"
            }, {
                country_code: "mh",
                image_path: "/images/flags/mh.png",
                calling_code: "+692",
                country_name: "Marshall Islands (+692)"
            }, {
                country_code: "mq",
                image_path: "/images/flags/mq.png",
                calling_code: "+596",
                country_name: "Martinique (+596)"
            }, {
                country_code: "mr",
                image_path: "/images/flags/mr.png",
                calling_code: "+222",
                country_name: "Mauritania (+222)"
            }, {
                country_code: "yt",
                image_path: "/images/flags/yt.png",
                calling_code: "+269",
                country_name: "Mayotte (+269)"
            }, {
                country_code: "mx",
                image_path: "/images/flags/mx.png",
                calling_code: "+52",
                country_name: "Mexico (+52)"
            }, {
                country_code: "fm",
                image_path: "/images/flags/fm.png",
                calling_code: "+691",
                country_name: "Micronesia (+691)"
            }, {
                country_code: "md",
                image_path: "/images/flags/md.png",
                calling_code: "+373",
                country_name: "Moldova (+373)"
            }, {
                country_code: "mc",
                image_path: "/images/flags/mc.png",
                calling_code: "+377",
                country_name: "Monaco (+377)"
            }, {
                country_code: "mn",
                image_path: "/images/flags/mn.png",
                calling_code: "+976",
                country_name: "Mongolia (+976)"
            }, {
                country_code: "ms",
                image_path: "/images/flags/ms.png",
                calling_code: "+1664",
                country_name: "Montserrat (+1664)"
            }, {
                country_code: "ma",
                image_path: "/images/flags/ma.png",
                calling_code: "+212",
                country_name: "Morocco (+212)"
            }, {
                country_code: "mz",
                image_path: "/images/flags/mz.png",
                calling_code: "+258",
                country_name: "Mozambique (+258)"
            }, {
                country_code: "mn",
                image_path: "/images/flags/mn.png",
                calling_code: "+95",
                country_name: "Myanmar (+95)"
            }, {
                country_code: "na",
                image_path: "/images/flags/na.png",
                calling_code: "+264",
                country_name: "Namibia (+264)"
            }, {
                country_code: "nr",
                image_path: "/images/flags/nr.png",
                calling_code: "+674",
                country_name: "Nauru (+674)"
            }, {
                country_code: "np",
                image_path: "/images/flags/np.png",
                calling_code: "+977",
                country_name: "Nepal (+977)"
            }, {
                country_code: "nl",
                image_path: "/images/flags/nl.png",
                calling_code: "+31",
                country_name: "Netherlands (+31)"
            }, {
                country_code: "nc",
                image_path: "/images/flags/nc.png",
                calling_code: "+687",
                country_name: "New Caledonia (+687)"
            }, {
                country_code: "nz",
                image_path: "/images/flags/nz.png",
                calling_code: "+64",
                country_name: "New Zealand (+64)"
            }, {
                country_code: "ni",
                image_path: "/images/flags/ni.png",
                calling_code: "+505",
                country_name: "Nicaragua (+505)"
            }, {
                country_code: "ne",
                image_path: "/images/flags/ne.png",
                calling_code: "+227",
                country_name: "Niger (+227)"
            }, {
                country_code: "ng",
                image_path: "/images/flags/ng.png",
                calling_code: "+234",
                country_name: "Nigeria (+234)"
            }, {
                country_code: "nu",
                image_path: "/images/flags/nu.png",
                calling_code: "+683",
                country_name: "Niue (+683)"
            }, {
                country_code: "nf",
                image_path: "/images/flags/nf.png",
                calling_code: "+672",
                country_name: "Norfolk Islands (+672)"
            }, {
                country_code: "np",
                image_path: "/images/flags/np.png",
                calling_code: "+670",
                country_name: "Northern Marianas (+670)"
            }, {
                country_code: "no",
                image_path: "/images/flags/no.png",
                calling_code: "+47",
                country_name: "Norway (+47)"
            }, {
                country_code: "om",
                image_path: "/images/flags/om.png",
                calling_code: "+968",
                country_name: "Oman (+968)"
            }, {
                country_code: "pk",
                image_path: "/images/flags/pk.png",
                calling_code: "+92",
                country_name: "Pakistan (+92)"
            }, {
                country_code: "pw",
                image_path: "/images/flags/pw.png",
                calling_code: "+680",
                country_name: "Palau (+680)"
            }, {
                country_code: "pa",
                image_path: "/images/flags/pa.png",
                calling_code: "+507",
                country_name: "Panama (+507)"
            }, {
                country_code: "pg",
                image_path: "/images/flags/pg.png",
                calling_code: "+675",
                country_name: "Papua New Guinea (+675)"
            }, {
                country_code: "py",
                image_path: "/images/flags/py.png",
                calling_code: "+595",
                country_name: "Paraguay (+595)"
            }, {
                country_code: "pe",
                image_path: "/images/flags/pe.png",
                calling_code: "+51",
                country_name: "Peru (+51)"
            }, {
                country_code: "ph",
                image_path: "/images/flags/ph.png",
                calling_code: "+63",
                country_name: "Philippines (+63)"
            }, {
                country_code: "pl",
                image_path: "/images/flags/pl.png",
                calling_code: "+48",
                country_name: "Poland (+48)"
            }, {
                country_code: "pt",
                image_path: "/images/flags/pt.png",
                calling_code: "+351",
                country_name: "Portugal (+351)"
            }, {
                country_code: "pr",
                image_path: "/images/flags/pr.png",
                calling_code: "+1787",
                country_name: "Puerto Rico (+1787)"
            }, {
                country_code: "qa",
                image_path: "/images/flags/qa.png",
                calling_code: "+974",
                country_name: "Qatar (+974)"
            }, {
                country_code: "re",
                image_path: "/images/flags/re.png",
                calling_code: "+262",
                country_name: "Reunion (+262)"
            }, {
                country_code: "ro",
                image_path: "/images/flags/ro.png",
                calling_code: "+40",
                country_name: "Romania (+40)"
            }, {
                country_code: "ru",
                image_path: "/images/flags/ru.png",
                calling_code: "+7",
                country_name: "Russia (+7)"
            }, {
                country_code: "rw",
                image_path: "/images/flags/rw.png",
                calling_code: "+250",
                country_name: "Rwanda (+250)"
            }, {
                country_code: "sm",
                image_path: "/images/flags/sm.png",
                calling_code: "+378",
                country_name: "San Marino (+378)"
            }, {
                country_code: "st",
                image_path: "/images/flags/st.png",
                calling_code: "+239",
                country_name: "Sao Tome & Principe (+239)"
            }, {
                country_code: "sa",
                image_path: "/images/flags/sa.png",
                calling_code: "+966",
                country_name: "Saudi Arabia (+966)"
            }, {
                country_code: "sn",
                image_path: "/images/flags/sn.png",
                calling_code: "+221",
                country_name: "Senegal (+221)"
            }, {
                country_code: "rs",
                image_path: "/images/flags/rs.png",
                calling_code: "+381",
                country_name: "Serbia (+381)"
            }, {
                country_code: "sc",
                image_path: "/images/flags/sc.png",
                calling_code: "+248",
                country_name: "Seychelles (+248)"
            }, {
                country_code: "sl",
                image_path: "/images/flags/sl.png",
                calling_code: "+232",
                country_name: "Sierra Leone (+232)"
            }, {
                country_code: "sg",
                image_path: "/images/flags/sg.png",
                calling_code: "+65",
                country_name: "Singapore (+65)"
            }, {
                country_code: "sk",
                image_path: "/images/flags/sk.png",
                calling_code: "+421",
                country_name: "Slovak Republic (+421)"
            }, {
                country_code: "si",
                image_path: "/images/flags/si.png",
                calling_code: "+386",
                country_name: "Slovenia (+386)"
            }, {
                country_code: "sb",
                image_path: "/images/flags/sb.png",
                calling_code: "+677",
                country_name: "Solomon Islands (+677)"
            }, {
                country_code: "so",
                image_path: "/images/flags/so.png",
                calling_code: "+252",
                country_name: "Somalia (+252)"
            }, {
                country_code: "za",
                image_path: "/images/flags/za.png",
                calling_code: "+27",
                country_name: "South Africa (+27)"
            }, {
                country_code: "es",
                image_path: "/images/flags/es.png",
                calling_code: "+34",
                country_name: "Spain (+34)"
            }, {
                country_code: "lk",
                image_path: "/images/flags/lk.png",
                calling_code: "+94",
                country_name: "Sri Lanka (+94)"
            }, {
                country_code: "sh",
                image_path: "/images/flags/sh.png",
                calling_code: "+290",
                country_name: "St. Helena (+290)"
            }, {
                country_code: "kn",
                image_path: "/images/flags/kn.png",
                calling_code: "+1869",
                country_name: "St. Kitts (+1869)"
            }, {
                country_code: "sc",
                image_path: "/images/flags/sc.png",
                calling_code: "+1758",
                country_name: "St. Lucia (+1758)"
            }, {
                country_code: "sd",
                image_path: "/images/flags/sd.png",
                calling_code: "+249",
                country_name: "Sudan (+249)"
            }, {
                country_code: "sr",
                image_path: "/images/flags/sr.png",
                calling_code: "+597",
                country_name: "Suriname (+597)"
            }, {
                country_code: "sz",
                image_path: "/images/flags/sz.png",
                calling_code: "+268",
                country_name: "Swaziland (+268)"
            }, {
                country_code: "se",
                image_path: "/images/flags/se.png",
                calling_code: "+46",
                country_name: "Sweden (+46)"
            }, {
                country_code: "ch",
                image_path: "/images/flags/ch.png",
                calling_code: "+41",
                country_name: "Switzerland (+41)"
            }, {
                country_code: "si",
                image_path: "/images/flags/si.png",
                calling_code: "+963",
                country_name: "Syria (+963)"
            }, {
                country_code: "tw",
                image_path: "/images/flags/tw.png",
                calling_code: "+886",
                country_name: "Taiwan (+886)"
            }, {
                country_code: "tj",
                image_path: "/images/flags/tj.png",
                calling_code: "+992",
                country_name: "Tajikstan (+992)"
            }, {
                country_code: "th",
                image_path: "/images/flags/th.png",
                calling_code: "+66",
                country_name: "Thailand (+66)"
            }, {
                country_code: "tg",
                image_path: "/images/flags/tg.png",
                calling_code: "+228",
                country_name: "Togo (+228)"
            }, {
                country_code: "to",
                image_path: "/images/flags/to.png",
                calling_code: "+676",
                country_name: "Tonga (+676)"
            }, {
                country_code: "tt",
                image_path: "/images/flags/tt.png",
                calling_code: "+1868",
                country_name: "Trinidad & Tobago (+1868)"
            }, {
                country_code: "tn",
                image_path: "/images/flags/tn.png",
                calling_code: "+216",
                country_name: "Tunisia (+216)"
            }, {
                country_code: "tr",
                image_path: "/images/flags/tr.png",
                calling_code: "+90",
                country_name: "Turkey (+90)"
            }, {
                country_code: "tm",
                image_path: "/images/flags/tm.png",
                calling_code: "+993",
                country_name: "Turkmenistan (+993)"
            }, {
                country_code: "tc",
                image_path: "/images/flags/tc.png",
                calling_code: "+1649",
                country_name: "Turks & Caicos Islands (+1649)"
            }, {
                country_code: "tv",
                image_path: "/images/flags/tv.png",
                calling_code: "+688",
                country_name: "Tuvalu (+688)"
            }, {
                country_code: "ug",
                image_path: "/images/flags/ug.png",
                calling_code: "+256",
                country_name: "Uganda (+256)"
            }, {
                country_code: "gb",
                image_path: "/images/flags/gb.png",
                calling_code: "+44",
                country_name: "UK (+44)"
            }, {
                country_code: "ua",
                image_path: "/images/flags/ua.png",
                calling_code: "+380",
                country_name: "Ukraine (+380)"
            }, {
                country_code: "ae",
                image_path: "/images/flags/ae.png",
                calling_code: "+971",
                country_name: "United Arab Emirates (+971)"
            }, {
                country_code: "uy",
                image_path: "/images/flags/uy.png",
                calling_code: "+598",
                country_name: "Uruguay (+598)"
            }, {
                country_code: "us",
                image_path: "/images/flags/us.png",
                calling_code: "+1",
                country_name: "USA (+1)"
            }, {
                country_code: "uz",
                image_path: "/images/flags/uz.png",
                calling_code: "+998",
                country_name: "Uzbekistan (+998)"
            }, {
                country_code: "vu",
                image_path: "/images/flags/vu.png",
                calling_code: "+678",
                country_name: "Vanuatu (+678)"
            }, {
                country_code: "va",
                image_path: "/images/flags/va.png",
                calling_code: "+379",
                country_name: "Vatican City (+379)"
            }, {
                country_code: "ve",
                image_path: "/images/flags/ve.png",
                calling_code: "+58",
                country_name: "Venezuela (+58)"
            }, {
                country_code: "vn",
                image_path: "/images/flags/vn.png",
                calling_code: "+84",
                country_name: "Vietnam (+84)"
            }, {
                country_code: "vg",
                image_path: "/images/flags/vg.png",
                calling_code: "+1284",
                country_name: "Virgin Islands - British (+1284)"
            }, {
                country_code: "vi",
                image_path: "/images/flags/vi.png",
                calling_code: "+1340",
                country_name: "Virgin Islands - US (+1340)"
            }, {
                country_code: "wf",
                image_path: "/images/flags/wf.png",
                calling_code: "+681",
                country_name: "Wallis & Futuna (+681)"
            }, {
                country_code: "ye",
                image_path: "/images/flags/ye.png",
                calling_code: "+969",
                country_name: "Yemen (North)(+969)"
            }, {
                country_code: "ye",
                image_path: "/images/flags/ye.png",
                calling_code: "+967",
                country_name: "Yemen (South)(+967)"
            }, {
                country_code: "zm",
                image_path: "/images/flags/zm.png",
                calling_code: "+260",
                country_name: "Zambia (+260)"
            }, {
                country_code: "zw",
                image_path: "/images/flags/zw.png",
                calling_code: "+263",
                country_name: "Zimbabwe (+263)"
            }],
            n = _.indexBy(t, "country_code"),
            o = function(t) {
                return e({
                    method: "GET",
                    url: "/utils/phone-number/" + t
                })
            },
            i = function() {
                return t
            },
            r = function(e) {
                return e = e.toLowerCase(), n[e]
            };
        return {
            fetchCountryCodeForPhoneNumber: o,
            getCountryList: i,
            getCountryFromCountryCode: r
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("mobileService", function() {
        var e, t, n = {},
            o = function() {
                n = {
                    height: window.innerHeight,
                    width: window.innerWidth
                }, e = !1, window.screen && window.screen.orientation && (t = window.screen.orientation.type.indexOf("portrait") >= 0)
            },
            i = function() {
                $(window).resize(function() {
                    n.width === window.innerWidth && (n.height > window.innerHeight ? (e = !0, window.document.activeElement.scrollIntoViewIfNeeded ? window.document.activeElement.scrollIntoViewIfNeeded() : window.document.activeElement.scrollIntoView()) : e = !1)
                })
            },
            r = function() {
                window.screen && window.screen.orientation && (window.screen.orientation.onchange = function() {
                    t = window.screen.orientation.type.indexOf("portrait") >= 0, n = {
                        height: window.innerHeight,
                        width: window.innerWidth
                    }
                })
            };
        return o(), i(), r(), {
            isPortrait: function() {
                return t
            },
            size: function() {
                return n
            },
            isKeyboardActive: function() {
                return e
            }
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("getstats", ["$window", "$q", "$log", "isProduction", function(e, t, n, o) {
        function i(e, t) {
            r && r.sendEvent(e, t)
        }
        var r, a = "4a249235-e5c2-f670-110f-0f0816c9a65d";
        return {
            newSession: function(t, i, c) {
                o && (n.info("Enabling getstats.io for " + t + "."), r = e.getstatsIo.newSession(a, t, i, c))
            },
            collectStats: function(e, t) {
                r && (n.info("collecting stats for peer connection."), r.collectStats(e, t))
            },
            sendFeedback: function(e, t) {
                r && r.sendFeedback(e, t)
            },
            sendAudioMuted: function(e) {
                i("audio_muted", e)
            },
            sendVideoMuted: function(e) {
                i("video_muted", e)
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("AssetResolver", [function() {
        var e = {
            cdnPathProvidedByGrunt: null
        };
        return {
            cdn: e.cdnPathProvidedByGrunt || ""
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("stickerService", ["serverSocket", "Analytics", "$log", "$window", "$timeout", "$q", "appearinApi", "$rootScope", "Event", "features", "RoomState", function(e, t, n, o, i, r, a, c, s, l, u) {
        function d(e) {
            return e.stickerUrl || "html" !== e.contentType
        }

        function m(e) {
            var t = {
                senderId: e.clientId,
                stickerUrl: e.sticker.url
            };
            _(t)
        }

        function f(e) {
            return e.error || !d(e) ? void n.error("Could not render video sticker") : (t.helpers.videoStickers.receivedSticker(), t.helpers.videoStickers.receivedStickerWithId(e.stickerId), void _(e))
        }

        function g(n) {
            if (!n) throw new Error("stickerId must be defined");
            return t.helpers.videoStickers.sentSticker(), t.helpers.videoStickers.sentStickerWithId(n), e.emit(protocol.relay.VIDEO_STICKER, {
                stickerId: n
            }), r.when()
        }

        function p() {
            return a({
                method: "GET",
                url: "/user/sticker-categories/?includeRewards=true"
            }).then(function(e) {
                return e.data.categories
            })
        }
        var E = {},
            _ = function(e) {
                var t = e.senderId || u.selfId;
                E[t].render({
                    url: e.stickerUrl
                })
            },
            v = function(e, t, n) {
                E[e] = {
                    render: t,
                    remove: n
                }
            },
            h = function(e) {
                delete E[e]
            };
        return e.$on(protocol.relay.VIDEO_STICKER, f), e.$on(protocol.res.PLAY_CLIENT_STICKER, m), e.$on(protocol.res.STICKERS_UNLOCKED, function(e) {
            c.$emit(s.STICKERS_UNLOCKED), e.stickerIds.forEach(function(e) {
                t.helpers.videoStickers.recordUnlockedSticker(e)
            })
        }), o.addEventListener("message", function(e) {
            e && e.data && "STICKER_ANIMATION" === e.data.type && "ANIMATION_COMPLETE" === e.data.event && c.$emit(s.STICKER_ANIMATION_COMPLETE, e.data)
        }), c.$on(s.STICKER_ANIMATION_COMPLETE, function(e) {
            e.senderId && E[e.senderId] && E[e.senderId].remove()
        }), {
            renderSticker: f,
            registerListener: v,
            unregisterListener: h,
            sendSticker: g,
            listeners: E,
            getStickerCategories: p
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("isMobileWeb", ["$window", "isEmbedded", function(e, t) {
        return e.innerWidth <= 640 && !t
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("mediaShareService", ["youtubeEmbedUtils", "$sce", "$sanitize", "linkyFilter", "$rootScope", "Event", "Analytics", function(e, t, n, o, i, r, a) {
        function c(e) {
            return o(e, "_blank")
        }

        function s(e) {
            var t = angular.element("<p></p>"),
                o = c(e);
            return t.html(n(o)), t
        }

        function l(e) {
            return e.find("a").toArray()
        }

        function u(t) {
            return !!e.getIdFromURL(t.href)
        }

        function d(e) {
            e.setAttribute("shareable-media-url", e.href), t.trustAsHtml(e.outerHTML)
        }

        function m(e) {
            var t = s(e);
            return l(t).filter(u)
        }
        return i.$on(r.CHAT_MESSAGE_SENT, function(e, t) {
            var n = m(t.text).length;
            _.times(n, function() {
                a.sendEvent(a.events.MEDIA_SHARE.PASTED_MEDIA_LINK_IN_CHAT)
            })
        }), {
            getMediaShareLinks: m,
            urlsToLinks: function(e) {
                var t = s(e);
                return l(t).filter(u).forEach(d), t.html()
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("KnockService", ["RTCManager", "Analytics", "serverSocket", "Snapshooter", "RoomState", function(e, t, n, o, i) {
        var r = function(e) {
                return 0 === e.videoWidth || 0 === e.videoHeight ? {
                    width: 640,
                    height: 480
                } : {
                    width: e.videoWidth,
                    height: e.videoHeight
                }
            },
            a = function(e) {
                var t = r(e),
                    n = Math.ceil(6 * constants.Room.KNOCK_ROOM_FILE_SIZE / 8);
                return o.takeSnapshot(e, t.width / 2, t.height / 2, n)
            },
            c = function(o) {
                var r = {
                    imageUrl: a(o),
                    roomName: i.roomName,
                    liveVideo: !0
                };
                n.emit(protocol.req.KNOCK_ROOM, r), t.sendEvent(t.events.KNOCKER_KNOCKED_ROOM), e.addNewStream("0", i.selfStream)
            };
        return {
            knockRoom: c
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("AndroidService", ["serverTemplate", "User", "RoomState", "$window", function(e, t, n, o) {
        function i() {
            var o = "<%= displayName || 'Someone' %> wants to talk to you right now in https://appear.in<%= roomName %>. Click to join the conversation.";
            return e.getTemplate("call_sms.ujs.txt", o).then(function(e) {
                var o = e({
                    displayName: t.data.displayName,
                    roomName: n.roomName
                });
                return "intent:#Intent;scheme=sms;S.sms_body=" + o.replace(/ /g, "%20") + ";end;"
            })
        }
        var r;
        return i().then(function(e) {
            r = e
        }), {
            sendSms: function() {
                o.location.href = r
            },
            isAndroid: function() {
                return o.navigator.userAgent.indexOf("Android") > -1
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("FollowerService", ["appearinApi", "Analytics", "$rootScope", "Event", function(e, t, n, o) {
        function i(i, r) {
            return t.helpers.follow.recordNotificationsMuted(i), e({
                method: "PUT",
                url: "/room/" + encodeURIComponent(i) + "/followers/" + r,
                data: {
                    mutedFor: 99999999999999
                }
            }).then(function() {
                n.$emit(o.NOTIFICATIONS_MUTE_SETTINGS_CHANGED)
            })
        }

        function r(i, r) {
            return t.helpers.follow.recordNotificationsUnmuted(i), e({
                method: "PUT",
                url: "/room/" + encodeURIComponent(i) + "/followers/" + r,
                data: {
                    mutedFor: 0
                }
            }).then(function() {
                n.$emit(o.NOTIFICATIONS_MUTE_SETTINGS_CHANGED)
            })
        }
        return {
            muteNotificationsForUser: i,
            unmuteNotificationsForUser: r
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("FollowState", [function() {
        var e = function() {
            this.rooms = []
        };
        return e.prototype.setFollowedRooms = function(e) {
            this.rooms = e
        }, new e
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("roleService", ["appearinApi", function(e) {
        return {
            getRolesForRoom: function(t) {
                if (!t) throw new Error("roomName is required");
                return e({
                    method: "GET",
                    url: "/room/" + encodeURIComponent(t) + "/roles?fields=userId,roleName,user"
                }).then(function(e) {
                    return e.data
                })
            },
            changeRoleToFollower: function(t, n) {
                return e({
                    method: "PUT",
                    url: "/room/" + encodeURIComponent(t) + "/roles/" + n + "/role-name",
                    data: {
                        roleName: "follower"
                    }
                })
            },
            removeRole: function(t, n) {
                return e({
                    method: "DELETE",
                    url: "/room/" + encodeURIComponent(t) + "/roles/" + n
                })
            },
            unclaimRoom: function(t) {
                return e({
                    method: "DELETE",
                    url: "/room/" + encodeURIComponent(t)
                })
            },
            setAsMember: function(t, n, o) {
                return e({
                    method: "PUT",
                    url: "/room/" + encodeURIComponent(t) + "/members/" + n,
                    data: {
                        inviteMemberKey: o
                    }
                })
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("KeyCombinationManager", function() {
        function e(e) {
            function t(e, t) {
                c.filter(function(t) {
                    return t.matcher(e)
                }).forEach(function(n) {
                    n.callback(e, t)
                })
            }

            function n(e, t) {
                return e.push(t), e.length <= r ? e : e.slice(e.length - r)
            }

            function o(e) {
                if ("INPUT" !== e.target.nodeName && !(e.keyCode in s)) {
                    var o = {
                        keyCode: e.keyCode,
                        eventType: "DOWN",
                        timeStamp: e.timeStamp,
                        pressedKeys: _.extend({}, s)
                    };
                    a = n(a, o), t(a), s[e.keyCode] = e.timeStamp
                }
            }

            function i(e) {
                if ("INPUT" !== e.target.nodeName) {
                    var o = {
                        keyCode: e.keyCode,
                        eventType: "UP",
                        timeStamp: e.timeStamp,
                        duration: e.timeStamp - (s[e.keyCode] || 0),
                        pressedKeys: _.extend({}, s)
                    };
                    a = n(a, o), t(a)
                }
                delete s[e.keyCode]
            }
            var r = e || 40,
                a = [],
                c = [],
                s = {};
            return {
                onCombination: function(e, t) {
                    c.push({
                        matcher: e,
                        callback: t
                    })
                },
                removeListener: function(e) {
                    c = c.filter(_.isEqual.bind(null, e))
                },
                addSource: function(e) {
                    return e.on("keyup", i), e.on("keydown", o), this
                },
                removeSource: function(e) {
                    return e.off("keyup", i), e.off("keydown", o), this
                }
            }
        }
        return e
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("keyCombinationMatchers", function() {
        function e(e) {
            return function() {
                var t = arguments;
                return _.every(e, function(e) {
                    return e.apply(null, t)
                })
            }
        }

        function t(e) {
            return function() {
                var t = arguments;
                return _.some(e, function(e) {
                    return e.apply(null, t)
                })
            }
        }

        function n(e) {
            if (!e) throw new Error("key must be defined");
            return function(t) {
                return t.keyCode === e
            }
        }

        function o(e) {
            return function(t) {
                return _.every(e, function(e) {
                    return void 0 !== t.pressedKeys[e]
                })
            }
        }

        function i(e) {
            return function(t) {
                return t.eventType === e
            }
        }

        function r(e) {
            var t = _.indexBy(e);
            return function(e) {
                return void 0 !== t[e.keyCode]
            }
        }

        function a(e) {
            return function(t) {
                return t.duration >= e
            }
        }

        function c(e) {
            return e.forEach(function(e) {
                    if (!e) throw new Error("matcher must be defined")
                }),
                function(t) {
                    if (t.length < e.length) return !1;
                    var n = t.length - e.length;
                    return _.every(e, function(e, o) {
                        return e(t[n + o])
                    })
                }
        }

        function s(e, t) {
            if (!e) throw new Error("predicate must be defined");
            if (!t) throw new Error("func must be defined");
            return function(n) {
                return 0 === n.length ? !1 : e(n[n.length - 1]) ? t(n.filter(e)) : !1
            }
        }
        var l = {
                matchKey: n,
                matchKeys: r,
                matchEventType: i,
                durationAtLeast: a,
                matchCurrentlyPressedKeys: o
            },
            u = {
                matchCombination: c,
                filter: s,
                or: t,
                and: e,
                any: function() {
                    return !0
                }
            },
            d = {
                ENTER: 13,
                ESC: 27,
                LEFT: 37,
                UP: 38,
                DOWN: 40,
                RIGHT: 39
            };
        return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(function(e) {
            d[e] = e.charCodeAt(0)
        }), {
            keys: l,
            combinations: u,
            keyCodes: d
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").service("keyCombinations", ["keyCombinationMatchers", function(e) {
        function t(e, t) {
            return _.mapObject(t, function(t) {
                return r.and(e.concat(t))
            })
        }

        function n(e) {
            return e.split("").map(function(e) {
                var t = i[e.toUpperCase()];
                return r.and([c, o.matchKey(t)])
            })
        }
        var o = e.keys,
            i = e.keyCodes,
            r = e.combinations,
            a = {
                LEFT: o.matchKey(i.LEFT),
                UP: o.matchKey(i.UP),
                RIGHT: o.matchKey(i.RIGHT),
                DOWN: o.matchKey(i.DOWN),
                A: o.matchKey(i.A),
                B: o.matchKey(i.B),
                START: o.matchKey(i.ENTER)
            },
            c = o.matchEventType("DOWN"),
            s = o.matchEventType("UP"),
            l = t([c], a);
        return {
            ANY: r.any,
            ANY_DOWN: r.filter(c, r.any),
            ANY_UP: r.filter(s, r.any),
            isKeysSupported: function(e) {
                return e.split("").every(function(e) {
                    return i[e.toUpperCase()]
                })
            },
            matchKeys: function(e) {
                return r.filter(c, r.matchCombination(n(e)))
            },
            KONAMI: r.filter(c, r.matchCombination([l.UP, l.UP, l.DOWN, l.DOWN, l.LEFT, l.RIGHT, l.LEFT, l.RIGHT, l.B, l.A, l.START]))
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("RoomState", [function() {
        var e = function() {
            this.resetState()
        };
        return e.prototype.resetClaimState = function() {
            this.isSelfOwner = !1, this.isClaimed = !1
        }, e.prototype.setRoles = function(e, t) {
            this.roles = e || [], this.totalRoles = t
        }, e.prototype.setFollowEnabled = function(e) {
            this.isFollowEnabled = e
        }, e.prototype.resetState = function() {
            this.selfId = "", this.clients = [], this.knockers = [], this.roomData = {}, this.roomName = "", this.isKnockingEnabled = !0, this.selfStream = void 0, this.backgroundImageUrl = void 0, this.localClient = void 0, this.blocks = [], this.roles = [], this.totalRoles = 0, this.isFollowEnabled = void 0, this.resetClaimState()
        }, new e
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("UIState", ["$rootScope", "Event", function(e, t) {
        function n() {
            this.userSettings = {
                isOpen: !1,
                activeTab: "profile"
            }
        }
        var o = new n;
        return e.$on(t.OPEN_USER_SETTINGS, function() {
            o.userSettings.isOpen = !0
        }), e.$on(t.CLOSE_USER_SETTINGS, function() {
            o.userSettings.isOpen = !1
        }), e.$on(t.OPEN_ROOM_PANEL, function() {
            o.userSettings.isOpen = !0, o.userSettings.activeTab = "rooms"
        }), e.$on(t.USER_LOGGED_OUT, function() {
            o.userSettings.isOpen = !1
        }), o
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("serverSocketConfig", ["$location", function(e) {
        var t = e.protocol() + "://" + e.host() + ":" + e.port();
        return {
            host: t,
            timeout: 1e4,
            reconnectionDelay: 5e3,
            reconnectionDelayMax: 3e4,
            path: "/protocol/socket.io/v1"
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("knockerQueue", ["RoomState", "Event", "Analytics", "$log", "$rootScope", function(e, t, n, o, i) {
        var r = {
                knocker: null,
                isEmpty: function() {
                    return null !== r.knocker
                }
            },
            a = function(e) {
                return 0 === e.length ? void(r.knocker = null) : void(_.contains(e, r.knocker) && r.knocker.isReady() || (r.knocker = _.find(e, function(e) {
                    return e.isReady()
                })))
            };
        return i.$on(t.KNOCKER_STATUS_CHANGED, function(t, n) {
            n.knocker.isReady() && a(e.knockers)
        }), i.$watchCollection(function() {
            return e.knockers
        }, a), r
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("createSocket", function() {
        return function(e, t) {
            return io(e, t)
        }
    }).factory("serverSocket", ["$location", "$rootScope", "Analytics", "serverSocketConfig", "$q", "Credentials", "createSocket", function(e, t, n, o, i, r, a) {
        function c() {
            function e() {
                u.on("disconnect", function() {
                    n.helpers.recordSocketConnection("disconnect", l.getTransport())
                }), u.on("connect", function() {
                    n.helpers.recordSocketConnection("connect", l.getTransport())
                }), u.on("connect_error", function() {
                    n.helpers.recordSocketConnection("connect_failed", l.getTransport())
                }), u.on("reconnect_error", function() {
                    n.helpers.recordSocketConnection("reconnect_failed", l.getTransport())
                }), u.on("error", function() {
                    n.helpers.recordSocketConnection("error", l.getTransport())
                })
            }
            l.$on(protocol.res.ROOM_JOINED, function(e) {
                s = e.selfId
            }), u.on("connect", function() {
                function e() {
                    var e = i.defer();
                    return r.getCredentials().then(function(t) {
                        var n = {
                            deviceCredentials: t
                        };
                        u.emit(protocol.req.IDENTIFY_DEVICE, n), l.$once(protocol.res.DEVICE_IDENTIFIED, function(t) {
                            return t.error ? void e.reject(t.error) : void e.resolve(t.deviceCredentials)
                        })
                    })["catch"](e.reject), e.promise
                }
                e().then(function(e) {
                    r.save(e), t.$broadcast("connected")
                }, function() {
                    l.disconnect()
                })
            }), u.on("disconnect", function() {
                t.$broadcast("disconnected")
            }), e()
        }
        var s, l = {},
            u = a(o.host, {
                timeout: o.timeout,
                reconnection: !0,
                reconnectionDelay: o.reconnectionDelay,
                reconnectionDelayMax: o.reconnectionDelayMax,
                path: o.path,
                autoConnect: !1,
                multiplex: !1,
                query: "socketType=room"
            });
        return l.connect = function() {
            l.isConnected() || l.isConnecting() || (c(), u.open())
        }, l.disconnect = function() {
            u.disconnect()
        }, l.getSelfId = function() {
            return s
        }, l.disconnectOnConnect = function() {
            u.once("connect", function() {
                u.disconnect()
            })
        }, l.getTransport = function() {
            return u && u.io && u.io.engine && u.io.engine.transport && u.io.engine.transport.name
        }, l.isConnecting = function() {
            return u && u.connecting
        }, l.isConnected = function() {
            return u && u.connected
        }, l.emit = function(e, t) {
            return u.emit(e, t), l
        }, l.$on = function(e, n) {
            function o(e, o) {
                t.$apply(n(e, o))
            }
            return u.on(e, o),
                function() {
                    u.removeListener(e, o)
                }
        }, l.$once = function(e, n) {
            return u.once(e, function(e, o) {
                t.$apply(n(e, o))
            }), l
        }, l.emitIfConnected = function(e, t) {
            l.isConnected() && l.emit(e, t)
        }, l
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("webrtcProvider", ["$window", "$timeout", "$location", "serverSocket", "Analytics", "features", "MediaDevices", function(e, t, n, o, i, r, a) {
        function c(e, n, o) {
            if (!n || !o) throw "getUserMedia success and error callbacks are required.";
            return navigator.getUserMedia(e, function() {
                var e = this,
                    o = arguments;
                t(function() {
                    n.apply(e, o)
                })
            }, function() {
                var e = this,
                    n = arguments;
                t(function() {
                    o.apply(e, n)
                })
            })
        }

        function s() {
            return e.navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
        }

        function l() {
            return !(!navigator.getUserMedia || !window.RTCPeerConnection || s())
        }

        function u() {
            var o = function(n, o) {
                    e.location.href = n, t(function() {
                        e.location.replace(o)
                    }, 2e3)
                },
                i = "appearin:/" + n.path(),
                r = e.location.origin + "/information/ios";
            o(i, r)
        }

        function d() {
            if (s()) return void u();
            i.sendEvent(i.events.ERROR_WEBRTC), o.disconnectOnConnect();
            var e = n.url();
            n.path("/error/webrtc").search({
                origin: e
            })
        }

        function m() {
            var e = a.getPreferredDeviceIds(),
                t = a.getPreferredQuality(),
                n = r.lowDataModeEnabled || "low" === t;
            return {
                audio: {
                    deviceId: e.audioId
                },
                video: {
                    deviceId: e.videoId,
                    width: n ? h : E,
                    height: n ? S : _,
                    frameRate: n ? C : v
                }
            }
        }

        function f() {
            return {
                offerToReceiveAudio: 1,
                offerToReceiveVideo: 1,
                iceRestart: !0
            }
        }

        function g() {
            return y
        }
        var p = window.webrtcDetectedBrowser,
            E = r.widescreen ? 720 : 640,
            _ = r.widescreen ? 405 : 480,
            v = 25,
            h = 320,
            S = 240,
            C = 15,
            y = 768;
        return {
            getUserMedia: c,
            RTCPeerConnection: window.RTCPeerConnection,
            RTCSessionDescription: window.RTCSessionDescription,
            RTCIceCandidate: window.RTCIceCandidate,
            webRtcDetectedBrowser: p,
            isWebRtcEnabled: l,
            handleIncompatibleBrowser: d,
            getMediaConstraints: m,
            getSDPConstraints: f,
            getMaximumTURNBandwidth: g
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("Stream", ["$sce", "$window", function(e, t) {
        var n = "0",
            o = function(e, t) {
                if (null === e || void 0 === e) throw new Error("id is required");
                if (!t) throw new Error("type is required");
                this.id = "" + e, this.type = t, this.isFullScreen = !1, this.isAudioEnabled = !0, this.isVideoEnabled = !0
            };
        return o.type = {
            CAMERA: "camera",
            SCREEN_SHARE: "screen_share"
        }, o.getCameraId = function() {
            return n
        }, o.getTypeFromId = function(e) {
            if (null === e || void 0 === e) throw new Error("id is required");
            var t = "" + e;
            return t === n ? o.type.CAMERA : o.type.SCREEN_SHARE
        }, o.prototype.setup = function(n) {
            return this.stream = n, this.streamUrl = e.trustAsResourceUrl(t.URL.createObjectURL(n)), this.streamId = n.id, this.isVideoEnabled = this.isVideoEnabled && n.getVideoTracks().length > 0, this.isAudioEnabled = this.isAudioEnabled && n.getAudioTracks().length > 0, this
        }, o.prototype.setVideoEnabled = function(e) {
            this.isVideoEnabled = e, this.stream && this.stream.getVideoTracks().forEach(function(t) {
                t.enabled = e
            })
        }, o.prototype.setAudioEnabled = function(e) {
            this.isAudioEnabled = e, this.stream && this.stream.getAudioTracks().forEach(function(t) {
                t.enabled = e
            })
        }, o
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("Client", ["ConnectionStatus", "Stream", function(e, t) {
        var n = function(t) {
            this.id = t.id, this.name = t.name, this.latestSnapshot = null, this.userId = t.userId, this.deviceId = t.deviceId, this.isOwner = t.isOwner, this.role = t.role, this.isVideoEnabled = t.isVideoEnabled, this.isAudioInputEnabled = t.isAudioEnabled, this.isAudioOutputEnabled = !0, this.isLocalClient = !1, this.streams = [], this.capabilities = {
                audio: !1,
                video: !1,
                screen_share: !1
            }, this.status = e.status.CONNECTING, this.userHasExplicitlyDisabledVideo = !1
        };
        return n.prototype.isScreenSharingEnabled = function() {
            return this.streams.some(function(e) {
                return e.type === t.type.SCREEN_SHARE
            })
        }, n.prototype.stopScreenShare = function() {
            this.removeStreamByType(t.type.SCREEN_SHARE)
        }, n.prototype.setStreamAudioEnabled = function(e) {
            this.streams.forEach(function(t) {
                t.setAudioEnabled(e)
            })
        }, n.prototype.setAudioInputEnabled = function(e) {
            this.isAudioInputEnabled = e, this.isLocalClient && this.setStreamAudioEnabled(e)
        }, n.prototype.setAudioOutputEnabled = function(e) {
            this.isAudioOutputEnabled = e, this.setStreamAudioEnabled(e)
        }, n.prototype.setVideoEnabled = function(e) {
            this.streams[0] && (this.isVideoEnabled = e, this.streams[0].setVideoEnabled(e))
        }, n.prototype.newCameraStream = function() {
            return this.newStream(t.type.CAMERA, t.getCameraId())
        }, n.prototype.newStreamFromId = function(e) {
            var n = t.getTypeFromId(e);
            return this.newStream(n, e)
        }, n.prototype.newStream = function(e, n) {
            var o = new t(n, e);
            return e !== t.type.CAMERA || this.isVideoEnabled || (o.isVideoEnabled = !1), this.streams.push(o), o
        }, n.prototype.getStream = function(e) {
            return this.streams.reduce(function(t, n) {
                return n.id === e ? n : t
            }, null)
        }, n.prototype.getStreamByType = function(e) {
            return this.streams.reduce(function(t, n) {
                return n.type === e ? n : t
            }, null)
        }, n.prototype.updateStreamWithMedia = function(e) {
            var n = this.getStream(e.id);
            n || (n = this.getStream(t.getCameraId())), n.setup(e), this.capabilities.audio = e.getAudioTracks().length > 0, this.capabilities.video = e.getVideoTracks().length > 0
        }, n.prototype.removeStream = function(e) {
            this.streams.forEach(function(t, n) {
                t.id === e && this.streams.splice(n, 1)
            }, this)
        }, n.prototype.removeStreamByType = function(e) {
            this.streams.forEach(function(t, n) {
                t.type === e && (this.streams.splice(n, 1), t.stream.getTracks().forEach(function(e) {
                    e.stop()
                }))
            }, this)
        }, n.prototype.setStatus = function(e) {
            this.status = e.status
        }, n
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("Knocker", ["serverSocket", "Stream", "ConnectionStatus", function(e, t, n) {
        var o = function(e, t, n) {
            this.clientId = e, this.imageUrl = t, this.liveVideo = n, this.stream = null, this.status = null
        };
        return o.prototype.newCameraStream = function() {
            return this.stream = new t(t.getCameraId(), t.type.CAMERA), this.stream
        }, o.prototype.accept = function() {
            e.emit(protocol.req.ACCEPT_KNOCK, {
                clientId: this.clientId
            })
        }, o.prototype.reject = function() {
            e.emit(protocol.req.REJECT_KNOCK, {
                clientId: this.clientId
            })
        }, o.prototype.setStatus = function(e) {
            this.status = e.status
        }, o.prototype.isReady = function() {
            return this.liveVideo ? this.status === n.status.CONNECTION_FAILED || this.status === n.status.CONNECTION_SUCCESSFUL : !0
        }, o
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("InstallableExtension", ["$rootScope", "Event", "$log", "$window", function(e, t, n, o) {
        var i = function(e) {
            if (!e) throw new Error("ExtensionIds are required");
            this.hasExtension = !1, this.installState = {}, this.extensionIds = e
        };
        return i.prototype._canInstallChromeExtension = function() {
            return "undefined" != typeof o.chrome && "undefined" != typeof o.chrome.webstore && !!this.extensionIds.chrome
        }, i.prototype._canInstallOperaExtension = function() {
            return "undefined" != typeof o.opr && "undefined" != typeof o.opr.addons && !!this.extensionIds.opera
        }, i.prototype._canInstallFirefoxExtension = function() {
            return o.navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && !!this.extensionIds.firefox
        }, i.prototype.canInstall = function() {
            return this._canInstallChromeExtension() || this._canInstallOperaExtension() || this._canInstallFirefoxExtension()
        }, i.prototype.checkForExtension = function() {
            this.hasExtension !== !0 && this.sendMessage("check-extension", void 0, "check-extension")
        }, i.prototype.isAwaitingLoadAfterInstall = function() {
            return this.hasExtension && this.installState && this.installState.awaitingLoadAfterInstall
        }, i.prototype.triggerExtensionLoaded = function() {
            this.hasExtension = !0, this.isAwaitingLoadAfterInstall() && (e.$broadcast(t.EXTENSION_INSTALL, {
                state: "loaded",
                installReason: this.installState.installReason
            }), this.installState = {})
        }, i.prototype.triggerInstall = function(i) {
            function r() {
                return o.opr.addons.installExtension.apply(o.opr.addons, [l.extensionIds.opera].concat(_.toArray(arguments)))
            }

            function a() {
                return o.chrome.webstore.install.apply(o.chrome.webstore, ["https://chrome.google.com/webstore/detail/" + l.extensionIds.chrome].concat(_.toArray(arguments)))
            }

            function c(o, r) {
                function a() {
                    e.$apply(function() {
                        e.$broadcast(t.EXTENSION_INSTALL, {
                            state: "installed",
                            installReason: o.installReason
                        }), s.onSuccess && s.onSuccess()
                    })
                }

                function c(i) {
                    n.debug("Error installing extension: %o", i), e.$apply(function() {
                        e.$broadcast(t.EXTENSION_INSTALL, {
                            state: "error",
                            installReason: o.installReason,
                            data: i
                        }), l.installState = {}, s.onError && s.onError(i)
                    })
                }
                var s = i || {},
                    l = this;
                e.$broadcast(t.EXTENSION_INSTALL, {
                    state: "started",
                    installReason: i.reason
                });
                try {
                    r(a, c)
                } catch (u) {
                    c(u)
                }
            }

            function s() {
                InstallTrigger.install([l.extensionIds.firefox]), e.$broadcast(t.EXTENSION_INSTALL, {
                    state: "loaded",
                    installReason: i.reason
                })
            }
            if (!i) throw new Error("obj is required");
            if (!i.reason) throw new Error("reason is required");
            var l = this;
            return this.installState = {
                awaitingLoadAfterInstall: !0,
                installReason: i.reason
            }, l._canInstallChromeExtension() ? void c(this.installState, a) : l._canInstallOperaExtension() ? void c(this.installState, r) : l._canInstallFirefoxExtension() ? void s() : void 0
        }, i
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("browserExtension", ["$rootScope", "$log", "RoomState", "RoomService", "inRoomNotificationService", "kissmetrics", "$timeout", "$window", "Event", "InstallableExtension", "MessageEventService", "Credentials", function(e, t, n, o, i, r, a, c, s, l, u, d) {
        function m() {
            return d.getCredentials().then(function(e) {
                return _.sendDeviceCredentials(e)
            })
        }

        function f(e) {
            _.isDesktopNotificationsEnabled = e.isDesktopNotificationsEnabled
        }

        function g() {
            _.sendMessage("get-notification-settings", void 0, "get-notification-settings")
        }
        var p = function(e, t) {
                return e && e.hasOwnProperty(t) ? e[t] : null
            },
            E = function() {
                l.call(this, {
                    opera: "abampbecppfdnijhjglobpaklldleagb",
                    chrome: "pokjppmpccggefgcenpngoleemajgnmo",
                    firefox: "https://addons.mozilla.org/firefox/downloads/latest/622452/addon-622452-latest.xpi?src=ss"
                }), this.features = {}, this.isDesktopNotificationsEnabled = !1, this.browserPlatform = function() {
                    var e = c.navigator.userAgent;
                    return e.indexOf("OPR") >= 0 ? "Opera" : e.indexOf("Chrome") >= 0 ? "Chrome" : e.indexOf("Firefox") >= 0 ? "Firefox" : void 0
                }()
            };
        E.prototype = Object.create(l.prototype), E.prototype.constructor = E, E.prototype.sendMessage = function(e, n, o) {
            t.info("ChromeNotifierAction: %s message: %o", e, n), window.postMessage({
                type: "ChromeNotifierAction",
                action: e,
                argument: n,
                callback: o
            }, "*");
            var i = document.createEvent("CustomEvent");
            i.initCustomEvent("FirefoxNotifierAction", !0, !0, {
                action: e,
                argument: n,
                callback: o
            }), document.documentElement.dispatchEvent(i)
        }, E.prototype.toggleDesktopNotifications = function(e) {
            this.sendMessage("set-notification-settings", {
                isDesktopNotificationsEnabled: e
            }, "set-notification-settings")
        }, E.prototype.sendAvatarData = function(e) {
            this.sendMessage("new_avatar", e, "new_avatar")
        }, E.prototype.triggerInstall = function() {
            this.canInstall() && l.prototype.triggerInstall.apply(this, arguments)
        }, E.prototype.sendAnalyticsInformation = function(e) {
            this.sendMessage("analytics-information", e)
        }, E.prototype.sendDeviceCredentials = function(e) {
            this.sendMessage("device-credentials", {
                deviceCredentials: e
            })
        };
        var _ = new E,
            v = function h() {
                if (_.hasExtension) {
                    var e = r.getId();
                    return e ? void _.sendAnalyticsInformation({
                        kissmetricsId: e
                    }) : void a(h, 1e3)
                }
            };
        return u.addEventListener("ChromeNotifierInjected", function() {
            _.checkForExtension(), v()
        }), u.addEventListener("ChromeNotifierResponse", function(n) {
            switch (n.data.callback) {
                case "check-extension":
                    n.data.response && (_.features = p(n.data.response, "features") || {}), t.log("Got extension information: %o", n.data.response), g(), m(), v(), _.triggerExtensionLoaded();
                    break;
                case "set-notification-settings":
                case "get-notification-settings":
                    f(n.data.response);
                    break;
                case "change-owner":
                    break;
                case "share-screen":
                    e.$broadcast("chromeExtension:share-screen", n.data.response)
            }
        }), e.$on(d.event.CREDENTIALS_CHANGED, m), _.checkForExtension(), e.$on(s.AVATAR_DATA, function(e, t) {
            _.sendAvatarData(t)
        }), _
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("screenShareExtension", ["$log", "$rootScope", "InstallableExtension", "$window", "isEmbedded", function(e, t, n, o, i) {
        var r = function() {
                var e = o.navigator.appVersion.match(/Chrome\/(.*?)[.]/);
                return e ? parseInt(e[1]) : null
            },
            a = function(e) {
                return r() >= e
            },
            c = function() {
                n.call(this, {
                    chrome: "bodncoafpihbhpfljcaofnebjkaiaiga"
                })
            };
        c.prototype = Object.create(n.prototype), c.prototype.constructor = c, c.prototype.shareScreen = function() {
            this.sendMessage("share-screen", void 0)
        }, c.prototype.canInstall = function() {
            return n.prototype.canInstall.call(this) && a(34) && !i
        }, c.prototype.sendMessage = function(t, n, o) {
            e.info("ScreenShareAction: %s message: %o", t, n), window.postMessage({
                type: "ScreenShareAction",
                action: t,
                argument: n,
                callback: o
            }, "*")
        };
        var s = new c;
        return window.addEventListener("message", function(e) {
            e.source === window && void 0 !== e.data && ("ScreenShareInjected" === e.data.type ? s.checkForExtension() : "ScreenShareResponse" === e.data.type && t.$apply(function() {
                switch (e.data.callback) {
                    case "check-extension":
                        s.triggerExtensionLoaded();
                        break;
                    case "share-screen":
                        t.$broadcast("screenShareExtension:share-screen", e.data.response)
                }
            }))
        }), s.checkForExtension(), s
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("objStore", ["$window", "$log", function(e, t) {
        return function(n) {
            return {
                loadOrDefault: function(o) {
                    try {
                        if (e.localStorage[n]) try {
                            return JSON.parse(e.localStorage.getItem(n))
                        } catch (i) {}
                        return o
                    } catch (i) {
                        return t.warn("Error getting access to storage. Are cookies are blocked?"), o
                    }
                },
                save: function(o) {
                    try {
                        e.localStorage.setItem(n, JSON.stringify(o))
                    } catch (i) {
                        t.warn("Error getting access to storage. Are cookies are blocked?")
                    }
                }
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("multiMap", function() {
        return function(e) {
            var t = e || {};
            return {
                add: function(e, n) {
                    t[e] || (t[e] = []), t[e].push(n)
                },
                get: function(e) {
                    return t[e] || []
                },
                getAllItems: function() {
                    return t
                }
            }
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("isProduction", ["$location", function(e) {
        var t = e.host();
        return "local.appear.in" === t ? !1 : -1 !== t.indexOf("appear.in")
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("apiUrlResolver", ["isProduction", function(e) {
        function t(t) {
            return e ? "https://api.appear.in" : t.protocol() + "://" + t.host() + ":8090"
        }
        return {
            resolve: t
        }
    }]).factory("apiUrl", ["apiUrlResolver", "$location", function(e, t) {
        return e.resolve(t)
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("appearinApi", ["$http", "$q", "Credentials", "apiUrl", function(e, t, n, o) {
        function i(e) {
            return e ? {
                Authorization: "Basic " + window.btoa(e.credentials.uuid + ":" + e.hmac)
            } : {}
        }

        function r(t, n) {
            var r = n && n.url || "/",
                a = _.defaults({
                    "X-Appearin-Device-Platform": "web"
                }, i(t), n.headers),
                c = _.defaults({
                    url: o + r,
                    headers: a
                }, n);
            return e(c)
        }

        function a(e) {
            return n.getCredentials().then(function(n) {
                return n.credentials ? r(n, e) : t.reject("no credentials")
            })
        }

        function c(e) {
            return n.getCurrentCredentials().then(function(t) {
                return r(t, e)
            })
        }

        function s(e) {
            var t = e.authRequired !== !1,
                n = _.omit(e, "optionalAuth");
            return t ? a(n) : c(n)
        }
        return s
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("Contact", ["Analytics", "$log", function(e, t) {
        function n(e, t) {
            if (!e) throw new Error("Malformed contact parameters");
            this.id = e.id, this.type = e.type, this.userId = e.userId, this.displayName = e.displayName, this.avatarUrl = e.avatarUrl, e.lastInviteTime && (this.lastInviteTime = e.lastInviteTime), e.lastConversationTime && (this.lastConversationTime = e.lastConversationTime), e.phoneNumbers && (this.phoneNumbers = e.phoneNumbers), this.inviteState = {
                state: "none"
            }, o = t
        }
        var o, i = {
            CONFIRMATION: "confirmation",
            IN_PROGRESS: "in-progress",
            ERROR: "error",
            SUCCESS: "success",
            THROTTLED: "throttled",
            NONE: "none"
        };
        return n.prototype.cancelInvite = function() {
            this.inviteState = i.NONE
        }, n.prototype.callUser = function(t) {
            return this.inviteState.state !== i.CONFIRMATION ? void this.setInviteState(i.CONFIRMATION) : (e.helpers.contacts.recordInviteContact("user"), void this.sendInvite(t))
        }, n.prototype.sendInvite = function(e, n) {
            if (this.inviteState.state !== i.IN_PROGRESS) {
                this.setInviteState(i.IN_PROGRESS);
                var r = {
                    roomName: e
                };
                n && (r.phoneNumber = n), o.callContact(this.id, r).then(this.setInviteState.bind(this, i.SUCCESS), function(e) {
                    return t.warn("Failed to invite user: %o", e), 429 === e.status ? void this.setInviteState(i.THROTTLED) : void this.setInviteState(i.ERROR)
                }.bind(this))
            }
        }, n.prototype.setInviteState = function(e) {
            this.inviteState = {
                state: e,
                timestamp: (new Date).getTime()
            }
        }, n
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("userAgentService", ["$window", function(e) {
        return {
            isIos: function() {
                return !!e.navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
            },
            isAndroid: function() {
                return e.navigator.userAgent.indexOf("Android") > -1
            }
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("facebook", ["RoomState", "isProduction", "$timeout", "$window", function(e, t, n, o) {
        function i() {
            return o.FB ? (o.FB.init({
                version: s.version,
                appId: s.appId,
                status: !0
            }), r.openSendDialog = o.FB.ui.bind(null, {
                method: "send",
                link: "https://appear.in/" + e.roomName
            }), void(r.isInitialized = !0)) : void n(i, 1e3)
        }
        var r = {
                isInitialized: !1
            },
            a = {
                appId: "1774675589426083",
                version: "v2.4"
            },
            c = {
                appId: "1411558269071152",
                version: "v2.4"
            },
            s = t ? c : a;
        return i(), r
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("ModalConfig", ["User", "$log", "RoomState", "RoomService", "inRoomNotificationService", "$q", "roleService", function(e, t, n, o, i, r, a) {
        function c(e) {
            i.setNotification({
                type: "info",
                text: e,
                displayDurationMillis: 3e3
            })
        }

        function s() {
            return o.claimRoom(n.roomName)
        }
        var l = {
                LOGIN: "login",
                USER_REGISTRATION: "user_registration",
                DELETE_USER: "delete_user",
                INVITE_MEMBER: "invite_member",
                INVITE_MEMBER_CONFIRMATION: "invite_member_confirmation",
                CLAIM_ROOM: "claim_room",
                ROOM_SETTINGS: "room_settings",
                MEDIA_SELECTOR: "media_selector",
                INVITE: "invite",
                CONGRATULATIONS: "congratulations",
                STICKER_SELECT: "sticker_select",
                MOBILE_APP_UPSELL: "mobile_app_upsell",
                DESKTOP_NOTIFICATIONS_UPSELL: "desktop_notifications_upsell"
            },
            u = {
                ACCEPT_MEMBERSHIP_SIGNUP: {
                    modals: [{
                        name: l.USER_REGISTRATION,
                        after: function() {
                            if (!e.isLoggedIn) return r.reject();
                            var t = u.ACCEPT_MEMBERSHIP_SIGNUP.options.inviteMemberKey;
                            return t ? a.setAsMember(n.roomName, e.data.userId, t) : r.reject()
                        }
                    }, {
                        name: l.DESKTOP_NOTIFICATIONS_UPSELL
                    }, {
                        name: l.MOBILE_APP_UPSELL
                    }, {
                        name: l.CONGRATULATIONS
                    }],
                    context: "acceptMembership"
                },
                ACCEPT_MEMBERSHIP_LOGIN: {
                    modals: [{
                        name: l.LOGIN,
                        after: function() {
                            var t = u.ACCEPT_MEMBERSHIP_LOGIN.options.inviteMemberKey;
                            return t ? a.setAsMember(n.roomName, e.data.userId, t) : r.reject()
                        }
                    }],
                    context: "acceptMembership"
                },
                CLAIM_SIGNUP: {
                    modals: [{
                        name: l.USER_REGISTRATION,
                        after: function() {
                            return e.isLoggedIn ? void 0 : r.reject()
                        }
                    }, {
                        name: l.CONGRATULATIONS
                    }],
                    context: "claim"
                },
                CLAIM_LOGIN: {
                    modals: [{
                        name: l.LOGIN,
                        after: s
                    }, {
                        name: l.CONGRATULATIONS
                    }],
                    context: "claim"
                },
                DEFAULT_LOGIN: {
                    modals: [{
                        name: l.LOGIN,
                        after: function() {
                            e.isLoggedIn && c("Welcome back! You're now logged in.")
                        }
                    }],
                    context: "default"
                },
                DEFAULT_SIGNUP: {
                    modals: [{
                        name: l.USER_REGISTRATION,
                        after: function() {
                            return e.isLoggedIn ? void 0 : r.reject()
                        }
                    }, {
                        name: l.CONGRATULATIONS
                    }],
                    context: "default"
                },
                CLAIM_AS_USER: {
                    modals: [{
                        name: l.CLAIM_ROOM,
                        after: function() {
                            return n.isSelfOwner ? void 0 : r.reject()
                        }
                    }, {
                        name: l.CONGRATULATIONS
                    }],
                    context: "claim"
                }
            };
        return {
            Flows: u,
            Modals: l
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("appearinUrlResolver", ["isProduction", function(e) {
        function t(t) {
            return e ? "https://appear.in" : t.protocol() + "://" + t.host() + ":8443"
        }
        return {
            resolve: t
        }
    }]).factory("appearinUrl", ["appearinUrlResolver", "$location", function(e, t) {
        return e.resolve(t)
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("goToRoom", ["appearinUrl", "$window", function(e, t) {
        return function(n) {
            t.document.location.href = e + n
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("MediaDevices", ["$window", "objStore", "$q", function(e, t, n) {
        function o() {
            return d.loadOrDefault(s)
        }

        function i(e) {
            if (!e) throw new Error("Devices cannot be falsy");
            d.save(_.extend({}, s, {
                videoId: e.videoId || "default",
                audioId: e.audioId || "default",
                outputId: e.outputId || "default"
            }))
        }

        function r() {
            return m.loadOrDefault({
                quality: u
            }).quality
        }

        function a(e) {
            if (!e) throw new Error("Quality cannot be falsy");
            m.save({
                quality: e
            })
        }

        function c() {
            var t = n.defer();
            return e.navigator.mediaDevices.enumerateDevices().then(t.resolve)["catch"](t.reject), t.promise
        }
        var s = {
                videoId: "default",
                audioId: "default",
                outputId: "default"
            },
            l = {
                LOW: "low",
                HIGH: "high"
            },
            u = l.HIGH,
            d = t("MediaDevicesStore"),
            m = t("QualityStore");
        return {
            getPreferredDeviceIds: o,
            setPreferredDeviceIds: i,
            getPreferredQuality: r,
            setPreferredQuality: a,
            enumerateDevices: c
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").filter("clientFilter", function() {
        return function(e, t) {
            return _.filter(e, function(e) {
                return e !== t ? e : void 0
            })
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").filter("capitalize", function() {
        return function(e) {
            return e ? e.charAt(0).toUpperCase() + e.slice(1) : e
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").filter("timestamp", function() {
        return function(e) {
            var t = 864e5,
                n = new Date(e);
            return (new Date).getTime() - n.getTime() > t ? n.toISOString().substring(0, 10) : n.toTimeString().substring(0, 5)
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").filter("mediaShareFilter", ["mediaShareService", function(e) {
        return function(t) {
            return e.urlsToLinks(t)
        }
    }])
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("Event", function() {
        return {
            STATE_CHANGED: "state_changed",
            LOCAL_CAMERA_TOGGLED: "local_camera_toggled",
            LOCAL_MICROPHONE_TOGGLED: "local_microphone_toggled",
            LOCAL_SCREENSHARE_TOGGLED: "local_screenshare_toggled",
            CLIENT_LEFT: "client_left",
            NEW_CLIENT: "new_client",
            NEW_STREAM_STARTED: "new_stream_started",
            STREAM_ENDED: "stream_ended",
            KNOCK_ACCEPTED: "knock_accepted",
            KNOCKER_STATUS_CHANGED: "knocker_status_change",
            ROOM_KNOCKED: "room_knocked",
            KNOCKER_HANDLED: "knocker_handled",
            OWNERS_CHANGED: "owners_changed",
            CLIENT_KICKED: "client_kicked",
            PROMPT_FOR_ROOM_EMAIL: "prompt_for_room_email",
            IN_ROOM_NOTIFICATION: "in_room_notification",
            IN_ROOM_NOTIFICATION_CHANGED: "in_room_notification_changed",
            EXTENSION_INSTALL: "extension_install",
            CLIENT_METADATA_RECEIVED: "client_metadata_received",
            USER_LOGGED_IN: "user_logged_in",
            USER_LOGGED_OUT: "user_logged_out",
            CONTACTS_UPDATED: "contacts_updated",
            MEDIA_SHARE: "media_share",
            ROOM_JOINED: "room_joined",
            LEAVE_ROOM: "leave_room",
            TOGGLE_CHAT: "toggle_chat",
            CLEAR_CHAT_HISTORY: "clear_chat_history",
            CHAT_TOGGLED: "chat_toggled",
            NEW_CHAT_MESSAGE: "new_chat_message",
            CHAT_READ_STATE_CHANGED: "chat_read_state_changed",
            CHAT_USERS_TYPING_CHANGED: "chat_users_typing_changed",
            CHAT_MESSAGE_SENT: "chat_message_sent",
            CHAT_HISTORY_UPDATED: "chat_history_updated",
            VIEWMODE_CHANGED: "viewmode_changed",
            AVATAR_DATA: "avatar_data",
            OPEN_INVITE_PANE: "open_invite_pane",
            CLOSE_INVITE_PANE: "close_invite_pane",
            TOGGLE_TOOLBAR: "toggle_toolbar",
            SET_ACTIVE_ROOM_ADMIN_PANEL_TAB: "set_active_room_admin_panel_tab",
            OPEN_USER_SETTINGS: "open_user_settings",
            CLOSE_USER_SETTINGS: "close_user_settings",
            OPEN_ROOM_SETTINGS: "open_room_settings",
            CLOSE_ROOM_SETTINGS: "close_room_settings",
            OPEN_ROOM_PANEL: "open_room_panel",
            BLOCK_ADDED: "block_added",
            BLOCK_REMOVED: "block_removed",
            ROOM_CLAIMED: "claimed_room",
            MEMBER_INVITE: "member_invite",
            CLIENT_ROLE_CHANGED: "client_role_changed",
            STICKER_ANIMATION_COMPLETE: "sticker_animation_complete",
            NEW_KNOCKER: "new_knocker",
            STICKERS_UNLOCKED: "stickers_unlocked",
            NOTIFICATIONS_MUTE_SETTINGS_CHANGED: "notificationsMuteSettingsChanged"
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("State", function() {
        return {
            WAITING_FOR_CONNECTION: "waiting_for_connection",
            WAITING_FOR_ACCESS: "waiting_for_access",
            WAITING_FOR_ROOM_INFORMATION: "waiting_for_room_information",
            ROOM_LOCKED: "room_locked",
            ROOM_FULL: "room_full",
            READY: "ready",
            SPLASH_SCREEN: "splash_screen",
            KICKED: "kicked",
            EMBEDDED: "embedded"
        }
    })
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("ConnectionStatus", function() {
        return {
            event: {
                CLIENT_CONNECTION_STATUS_CHANGED: "client_connection_status_changed",
                STREAM_ADDED: "stream_added",
                NEGOTIATING_PEER_CONNECTION: "negotiating_peer_connection"
            },
            status: {
                CONNECTING: "connecting",
                CONNECTION_FAILED: "connection_failed",
                CONNECTION_SUCCESSFUL: "connection_successful",
                CONNECTION_DISCONNECTED: "connection_disconnected"
            },
            analyticsText: {
                connecting: "Connection started",
                connection_failed: "Connection failed",
                connection_successful: "Connection established",
                connection_disconnected: "Connection disconnected"
            }
        }
    })
}, function(e, t, n) {
    "use strict";
    ! function(e) {
        e.req = {
            ACCEPT_KNOCK: "accept_knock",
            BLOCK_CLIENT: "block_client",
            CLAIM_ROOM: "claim_room",
            CLEAR_CHAT_HISTORY: "clear_chat_history",
            ENABLE_AUDIO: "enable_audio",
            ENABLE_VIDEO: "enable_video",
            END_STREAM: "end_stream",
            END_WATCH: "end_watch",
            IDENTIFY_DEVICE: "identify_device",
            INVITE_CLIENT_AS_MEMBER: "invite_client_as_member",
            JOIN_ROOM: "join_room",
            KICK_CLIENT: "kick_client",
            KNOCK_ROOM: "knock_room",
            LEAVE_ROOM: "leave_room",
            REJECT_KNOCK: "reject_knock",
            RESET_BACKGROUND_IMAGE: "reset_background_image",
            SEND_CLIENT_METADATA: "send_client_metadata",
            SET_LOCK: "set_lock",
            SHARE_MEDIA: "share_media",
            START_NEW_STREAM: "start_new_stream",
            START_WATCH: "start_watch"
        }, e.res = {
            AUDIO_ENABLED: "audio_enabled",
            BACKGROUND_IMAGE_CHANGED: "background_image_changed",
            BLOCK_ADDED: "block_added",
            BLOCK_REMOVED: "block_removed",
            CHAT_HISTORY_CLEARED: "chat_history_cleared",
            CLIENT_BLOCKED: "client_blocked",
            CLIENT_INVITED_AS_MEMBER: "client_invited_as_member",
            CLIENT_KICKED: "client_kicked",
            CLIENT_LEFT: "client_left",
            CLIENT_METADATA_RECEIVED: "client_metadata_received",
            CLIENT_READY: "client_ready",
            CLIENT_ROLE_CHANGED: "client_role_changed",
            CLIENT_USER_ID_CHANGED: "client_user_id_changed",
            CONTACTS_UPDATED: "contacts_updated",
            DEVICE_IDENTIFIED: "device_identified",
            FOLLOWERS_UPDATED: "followers_updated",
            KNOCK_ACCEPTED: "knock_accepted",
            KNOCK_REJECTED: "knock_rejected",
            KNOCKER_LEFT: "knocker_left",
            MEDIA_SHARED: "media_shared",
            MEMBER_INVITE: "member_invite",
            NEW_CLIENT: "new_client",
            NEW_STREAM_STARTED: "new_stream_started",
            NOTIFICATIONS_AVAILABLE: "notifications_available",
            OWNER_NOTIFIED: "owner_notified",
            OWNERS_CHANGED: "owners_changed",
            PLAY_CLIENT_STICKER: "play_client_sticker",
            ROOM_FOLLOW_SETTINGS_CHANGED: "room_follow_settings_changed",
            ROOM_JOINED: "room_joined",
            ROOM_KNOCKED: "room_knocked",
            ROOM_LEFT: "room_left",
            ROOM_LOCKED: "room_locked",
            SOCKET_USER_ID_CHANGED: "socket_user_id_changed",
            STICKERS_UNLOCKED: "stickers_unlocked",
            STREAM_ENDED: "stream_ended",
            USER_NOTIFIED: "user_notified",
            VIDEO_ENABLED: "video_enabled",
            WATCH_ENDED: "watch_ended",
            WATCH_KICKED: "watch_kicked",
            WATCH_STARTED: "watch_started"
        }, e.err = {
            CANNOT_INVITE_YOURSELF: "cannot_invite_yourself",
            CLIENT_MISSING_DEVICE_ID: "client_missing_device_id",
            FORBIDDEN: "forbidden",
            INTERNAL_SERVER_ERROR: "internal_server_error",
            INVALID_AVATAR: "invalid_avatar",
            INVALID_PARAMETERS: "invalid_parameters",
            INVALID_ROOM_NAME: "invalid_room_name",
            MISSING_PARAMETERS: "missing_parameters",
            MISSING_ROOM_NAME: "missing_room_name",
            NOT_AN_OWNER: "not_an_owner",
            NOT_IN_A_ROOM: "not_in_a_room",
            ROOM_ALREADY_CLAIMED: "room_already_claimed",
            ROOM_EMAIL_MISSING: "room_email_missing",
            ROOM_FULL: "room_full",
            ROOM_LOCKED: "room_locked",
            TOO_LONG_TEXT: "too_long_text",
            VIDEO_STICKER_DOES_NOT_EXIST: "video_sticker_does_not_exist",
            VIDEO_STICKER_FORMAT_ERROR: "video_sticker_format_error"
        }, e.relay = {
            CHAT_MESSAGE: "chat_message",
            CHAT_READ_STATE: "chat_read_state",
            CHAT_STATE: "chat_state",
            ICE_CANDIDATE: "ice_candidate",
            READY_TO_RECEIVE_OFFER: "ready_to_receive_offer",
            REMOTE_CLIENT_MEDIA_REQUEST: "remote_client_media_request",
            SDP_ANSWER: "sdp_answer",
            SDP_OFFER: "sdp_offer",
            VIDEO_STICKER: "video_sticker"
        }
    }(t)
}, function(e, t, n) {
    "use strict";
    ! function(e) {
        e.UPSELL = {
            DELAY_AFTER_IN_CONVERSATION: 12e4,
            IS_ENABLED: !1,
            QUIET_PERIOD_SINCE_LAST_DISMISS: 2592e6
        }, e.Stickers = {
            SERVER_STICKER_PREFIX: "SECRET_SERVER_STICKER-",
            Server_Stickers: {
                MEMBERSHIP_GRANTED: "membership_granted",
                REWARD_UNLOCKED: "reward_unlocked"
            }
        }, e.Room = {
            ROOM_FULL_THRESHOLD: 8,
            KNOCK_ROOM_FILE_SIZE: 6e4,
            CHAT_HISTORY_MAXIMUM_AGE: 1296e6,
            CAMERA_STREAM_ID: "0"
        }, e.Time = {
            INVITE_MEMBER_KEY_VALIDITY_IN_SECONDS: 18e3,
            SESSION_KEY_VALIDITY_IN_SECONDS: 1800,
            THREE_DAYS_IN_SECONDS: 259200
        }, e.Validator = {
            BASE_64_JPEG: /^data:image\/jpeg;base64,[a-zA-Z0-9+\/=]+$/,
            EMAIL: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
        }, e.ConnectionReason = {
            BACKEND_RESTARTED: "backend_restart",
            CLIENT_RECONNECTED: "client_reconnection",
            NEW_CLIENT: "new_client"
        }, e.Modals = {
            DISPLAYED_KNOCKER: "displayed_knocker",
            SCREENSHARE_INSTRUCTIONS: "screenshare_instructions"
        }, e.Questionnaire = {
            MAX_NUMBER_OF_CHARACTERS: 2e3
        }, e.ContactPointType = {
            apns: "apns",
            gcm: "gcm"
        }, e.NotificationType = {
            BADGE_NUMBER: "badge_number",
            CALL: "call",
            CHAT_MESSAGE: "chat_message",
            KNOCK: "knock",
            NEW_CLIENT: "new_client",
            NEW_FOLLOWER: "new_follower",
            USER_BLOCKED: "user_blocked"
        }, e.ChatState = {
            INACTIVE: "inactive",
            TYPING: "typing"
        }, e.ChatMessageType = {
            TEXT: "text",
            TOMBSTONE: "tombstone"
        }, e.RoomRoleName = {
            FOLLOWER: "follower",
            MEMBER: "member",
            NONE: "none",
            OWNER: "owner",
            VISITOR: "visitor"
        }, e.SQL = {
            POSTGRES_UNIQUE_VIOLATION_CODE: "23505",
            SQLITE_CONSTRAINT: "SQLITE_CONSTRAINT"
        }, e.Peers = {
            A: "A",
            B: "B"
        }, e.ConnectionType = {
            PEER_TO_PEER: "peer_to_peer",
            PUBLISHER: "publisher",
            RECV_SUBSCRIBER: "recv_subscriber",
            SEND_SUBSCRIBER: "send_subscriber"
        }, e.ConnectionClient = {
            NO_PARTICULAR_RECEIVER: "no_particular_receiver"
        }, e.PhoneContact = {
            AllowedInputFields: ["id", "displayName", "emails", "phoneNumbers"]
        }, e.Contact = {
            AllowedReturnFields: ["id", "userId", "displayName", "roomName", "avatarUrl", "type", "phoneNumbers", "lastInviteTime", "lastConversationTime"],
            ContactPointLimitPerType: 20,
            RequiredInputFields: ["id", "displayName"],
            Type: {
                PhoneContact: "phone-contact",
                User: "user"
            }
        }, e.Throttle = {
            DefaultWindowSize: 3e4,
            DefaultMaxHitsDuringWindow: 10
        }, e.ContactPointValidationErrors = {
            AlreadyRegistered: "already registered",
            InvalidFormat: "invalid format",
            InvalidType: "invalid type"
        }, e.RESTErrors = {
            ContactPointAlreadyRegistered: "contact point already registered",
            InvalidCountryCode: "Invalid country calling code",
            InvalidPhoneNumberErrors: ["The string supplied is too short to be a phone number"]
        }
    }(t)
}, function(e, t) {
    "use strict";
    angular.module("videoconference").factory("AnalyticsEvents", function() {
        var e = {
            ROOM: "Room",
            EMBED: "Embed",
            RTC: "RTC",
            SOCKETIO: "Socket.io",
            CHAT: "Chat",
            KNOCK: "Knock",
            CLAIM_ROOM: "Claim room",
            CUSTOMIZE_ROOM: "Customize Room",
            FAQ: "FAQ",
            USER: "User",
            MODAL: "Modal",
            REGISTRATION: "Registration",
            CONTACTS: "Contacts",
            LOGIN: "Login",
            USER_SETTINGS: "User Settings",
            USER_DELETION: "User Deletion",
            VIDEO_STICKERS: "Video Stickers",
            MEDIA_SHARE: "Media Share",
            FOLLOW: "Follow",
            ROOM_SETTINGS: "Room Settings",
            SESSION_SETTING: "Session setting",
            VIDEO_TOOLBAR: "Video toolbar",
            TOPBAR: "Room topbar",
            ENTERTAINMENT_BUTTON: "Entertainment button",
            INVITE: "invite",
            MEMBERSHIP: "membership",
            MEDIA_SELECTOR: "Media Selector"
        };
        return {
            INVITE: {
                OPENED_INVITE_MODAL: {
                    googleAnalytics: {
                        category: e.INVITE,
                        action: "Opened invite modal"
                    },
                    kissmetrics: "Invite: Opened invite modal"
                },
                OPENED_SMS_SEND_DIALOG: {
                    googleAnalytics: {
                        category: e.INVITE,
                        action: "Opened SMS send dialog"
                    },
                    kissmetrics: "Invite: Opened SMS send dialog",
                    intercom: {
                        eventName: "Invite: Opened SMS send dialog"
                    }
                },
                CLOSED_SMS_SEND_DIALOG: {
                    googleAnalytics: {
                        category: e.INVITE,
                        action: "Closed SMS send dialog"
                    },
                    kissmetrics: "Invite: Closed SMS send dialog",
                    intercom: {
                        eventName: "Invite: Closed SMS send dialog"
                    }
                },
                SENT_SMS_INVITE: {
                    googleAnalytics: {
                        category: e.INVITE,
                        action: "Sent SMS invite"
                    },
                    kissmetrics: "Invite: Sent SMS invite",
                    intercom: {
                        eventName: "Invite: Sent SMS invite"
                    }
                },
                OPENED_FACEBOOK_SEND_DIALOG: {
                    googleAnalytics: {
                        category: e.INVITE,
                        action: "Opened Facebook messenger send dialog"
                    },
                    kissmetrics: "Invite: Opened Facebook messenger send dialog"
                }
            },
            ENTERTAINMENT_BUTTON: {
                OPENED_ENTERTAINMENT_MENU: {
                    googleAnalytics: {
                        category: e.ENTERTAINMENT_BUTTON,
                        action: "Opened entertainment menu"
                    },
                    kissmetrics: "Entertainment button: Opened entertainment menu",
                    intercom: {
                        eventName: "Entertainment button: Opened entertainment menu"
                    }
                }
            },
            TOPBAR: {
                OWNER_LOCKED_ROOM: {
                    googleAnalytics: {
                        category: e.TOPBAR,
                        action: "Owner locked the room"
                    },
                    kissmetrics: "Topbar: Owner locked the room",
                    intercom: {
                        eventName: "Topbar: Owner locked the room',"
                    }
                },
                OWNER_UNLOCKED_ROOM: {
                    googleAnalytics: {
                        category: e.TOPBAR,
                        action: "Owner unlocked the room"
                    },
                    kissmetrics: "Topbar: Owner unlocked the room",
                    intercom: {
                        eventName: "Topbar: Owner unlocked the room',"
                    }
                },
                MEMBER_LOCKED_ROOM: {
                    googleAnalytics: {
                        category: e.TOPBAR,
                        action: "Member locked the room"
                    },
                    kissmetrics: "Topbar: Member locked the room",
                    intercom: {
                        eventName: "Topbar: Member locked the room',"
                    }
                },
                MEMBER_UNLOCKED_ROOM: {
                    googleAnalytics: {
                        category: e.TOPBAR,
                        action: "Member unlocked the room"
                    },
                    kissmetrics: "Topbar: Member unlocked the room",
                    intercom: {
                        eventName: "Topbar: Member unlocked the room',"
                    }
                }
            },
            OWNER_KICKED_OWNER: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Owner kicked owner"
                },
                kissmetrics: "Room: Owner kicked owner",
                intercom: {
                    eventName: "Room: Owner kicked owner"
                }
            },
            OWNER_KICKED_CLIENT: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Owner kicked client"
                },
                kissmetrics: "Room: Owner kicked client",
                intercom: {
                    eventName: "Room: Owner kicked client"
                }
            },
            OWNER_KICKED_MEMBER: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Owner kicked member"
                },
                kissmetrics: "Room: Owner kicked member",
                intercom: {
                    eventName: "Room: Owner kicked member"
                }
            },
            MEMBER_KICKED_OWNER: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Member kicked owner"
                },
                kissmetrics: "Room: Member kicked owner",
                intercom: {
                    eventName: "Room: Member kicked owner"
                }
            },
            MEMBER_KICKED_CLIENT: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Member kicked client"
                },
                kissmetrics: "Room: Member kicked client",
                intercom: {
                    eventName: "Room: Member kicked client"
                }
            },
            MEMBER_KICKED_MEMBER: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Member kicked member"
                },
                kissmetrics: "Room: Member kicked member",
                intercom: {
                    eventName: "Room: Member kicked member"
                }
            },
            SENT_FEEDBACK: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "Sent feedback"
                },
                kissmetrics: "Room: Sent feedback"
            },
            LEFT_USING_LEAVE_BUTTON: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "Left room using the leave room button"
                },
                kissmetrics: "Room: Left room using the leave room button"
            },
            USED_FULL_SCREEN: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "Used full screen"
                },
                kissmetrics: "Room: Used full screen"
            },
            SHARE_ROOM_LINK_TO_TWITTER: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "Shared room link to Twitter"
                },
                kissmetrics: "Room: Shared room link to Twitter"
            },
            SHARE_ROOM_LINK_TO_FACEBOOK: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "Shared room link to Facebook"
                },
                kissmetrics: "Room: Shared room link to Facebook"
            },
            SHARE_ROOM_LINK_TO_GOOGLE: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "Shared room link to Google+"
                },
                kissmetrics: "Room: Shared room link to Google+"
            },
            ALLOW_SCREEN_SHARE_MODAL: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "allow screen share instructions modal"
                },
                kissmetrics: "Room: allow screen share instructions modal"
            },
            KNOCKERS_MODAL: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "displayed knockers modal"
                },
                kissmetrics: "Room: displayed knockers modal"
            },
            COPIED_LINK_TO_CLIPBOARD: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "Copy to clipboard"
                },
                kissmetrics: "Room: Copy to clipboard"
            },
            OPENED_ADMIN_PANEL: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "opened admin panel"
                },
                kissmetrics: "Room: opened admin panel"
            },
            CLOSED_ADMIN_PANEL: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "closed admin panel"
                },
                kissmetrics: "Room: closed admin panel"
            },
            OPENED_CLAIM_PANEL: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "opened claim panel"
                },
                kissmetrics: "Room: opened claim panel"
            },
            CLOSED_CLAIM_PANEL: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "closed claim panel"
                },
                kissmetrics: "Room: closed claim panel"
            },
            OPENED_MODAL: function(t) {
                return {
                    googleAnalytics: {
                        category: e.MODAL,
                        action: "Opened Modal",
                        label: t
                    },
                    kissmetrics: "Modal: opened " + t
                }
            },
            CLOSED_MODAL: function(t) {
                return {
                    googleAnalytics: {
                        category: e.MODAL,
                        action: "Closed Modal",
                        label: t
                    },
                    kissmetrics: "Modal: closed " + t
                }
            },
            AUDIO_ENABLED: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "Audio enabled"
                },
                kissmetrics: "Room: Audio enabled"
            },
            AUDIO_DISABLED: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "Audio disabled"
                },
                kissmetrics: "Room: Audio disabled"
            },
            AUDIO_OUTPUT_ENABLED: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "Audio output enabled"
                },
                kissmetrics: "Room: Audio output enabled"
            },
            AUDIO_OUTPUT_DISABLED: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "Audio output disabled"
                },
                kissmetrics: "Room: Audio output disabled"
            },
            VIDEO_ENABLED: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "Video enabled"
                },
                kissmetrics: "Room: Video enabled"
            },
            VIDEO_DISABLED: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "Video disabled"
                },
                kissmetrics: "Room: Video disabled"
            },
            USED_SCREEN_SHARE: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Used feature",
                    label: "Used screen share"
                },
                kissmetrics: "Room: Used screen share"
            },
            TURN_SERVER_NOT_SUPPLIED: {
                googleAnalytics: {
                    category: e.RTC,
                    action: "Data from server",
                    label: "TURN server not supplied",
                    nonInteraction: !0
                }
            },
            CONNECTION_TYPE: {
                googleAnalytics: {
                    category: e.RTC,
                    action: "Connection Type",
                    nonInteraction: !0
                }
            },
            CONNECTION_STATUS: {
                googleAnalytics: {
                    category: e.RTC,
                    action: "Connection",
                    nonInteraction: !0
                }
            },
            SOCKET_DISCONNECT: {
                googleAnalytics: {
                    category: e.SOCKETIO,
                    action: "Disconnect",
                    nonInteraction: !0
                }
            },
            SOCKET_CONNECT: {
                googleAnalytics: {
                    category: e.SOCKETIO,
                    action: "Connect",
                    nonInteraction: !0
                }
            },
            SOCKET_RECONNECT: {
                googleAnalytics: {
                    category: e.SOCKETIO,
                    action: "Reconnect",
                    nonInteraction: !0
                }
            },
            SOCKET_CONNECT_FAILED: {
                googleAnalytics: {
                    category: e.SOCKETIO,
                    action: "Connect failed",
                    nonInteraction: !0
                }
            },
            SOCKET_RECONNECT_FAILED: {
                googleAnalytics: {
                    category: e.SOCKETIO,
                    action: "Reconnect failed",
                    nonInteraction: !0
                }
            },
            SOCKET_ERROR: {
                googleAnalytics: {
                    category: e.SOCKETIO,
                    action: "Unknown error",
                    nonInteraction: !0
                }
            },
            CHAT_OPENED_USING_TOGGLE: {
                googleAnalytics: {
                    category: e.CHAT,
                    action: "History opened",
                    label: "toggle button click"
                },
                kissmetrics: "Chat history opened via button"
            },
            CHAT_CLOSED_USING_TOGGLE: {
                googleAnalytics: {
                    category: e.CHAT,
                    action: "History closed",
                    label: "toggle button click"
                },
                kissmetrics: "Chat history closed via button"
            },
            CHAT_OPENED_USING_KEYBOARD_SHORTCUT: {
                googleAnalytics: {
                    category: e.CHAT,
                    action: "History opened",
                    label: "keyboard shortcut"
                },
                kissmetrics: "Chat history opened via keyboard shortcut"
            },
            CHAT_CLOSED_USING_KEYBOARD_SHORTCUT: {
                googleAnalytics: {
                    category: e.CHAT,
                    action: "History closed",
                    label: "keyboard shortcut"
                },
                kissmetrics: "Chat history closed via keyboard shortcut"
            },
            CHAT_DISPLAYED_PREVIEW: {
                googleAnalytics: {
                    category: e.CHAT,
                    action: "Displayed chat message",
                    label: "preview"
                },
                kissmetrics: "Chat displayed chat message preview"
            },
            CHAT_OPENED_CLICKING_PREVIEW: {
                googleAnalytics: {
                    category: e.CHAT,
                    action: "History opened",
                    label: "preview"
                },
                kissmetrics: "Chat history opened by clicking preview"
            },
            CHAT_CLICKED_UNREAD_BEFORE_INDICATOR: {
                googleAnalytics: {
                    category: e.CHAT,
                    action: "Clicked directional unread indicator",
                    label: "before"
                },
                kissmetrics: "Chat clicked directional unread indicator"
            },
            CHAT_CLICKED_UNREAD_AFTER_INDICATOR: {
                googleAnalytics: {
                    category: e.CHAT,
                    action: "Clicked directional unread indicator",
                    label: "after"
                },
                kissmetrics: "Chat clicked directional unread indicator"
            },
            CHAT_MESSAGE_SENT: {
                googleAnalytics: {
                    category: e.CHAT,
                    action: "Message sent"
                },
                kissmetrics: "Chat message sent"
            },
            NEW_KNOCKER: {
                googleAnalytics: {
                    category: e.KNOCK,
                    action: "New knocker"
                },
                kissmetrics: "Knock: New knocker"
            },
            ACCEPT_KNOCKER: {
                googleAnalytics: {
                    category: e.KNOCK,
                    action: "Accept knocker"
                },
                kissmetrics: "Knock: Accept knocker"
            },
            REJECT_KNOCKER: {
                googleAnalytics: {
                    category: e.KNOCK,
                    action: "Reject knocker"
                },
                kissmetrics: "Knock: Reject knocker"
            },
            KNOCKER_KNOCKED_ROOM: {
                googleAnalytics: {
                    category: e.KNOCK,
                    action: "Knocked room"
                },
                kissmetrics: "Knock: Knocked room"
            },
            KNOCKER_JOINED_ROOM: {
                googleAnalytics: {
                    category: e.KNOCK,
                    action: "Joined knocked room"
                },
                kissmetrics: "Knock: Joined knocked room"
            },
            CHANGED_ROOM_CODE: {
                googleAnalytics: {
                    category: e.CLAIM_ROOM,
                    action: "User changed room code"
                },
                kissmetrics: "User changed room code"
            },
            SENT_RESET_EMAIL: {
                googleAnalytics: {
                    category: e.CLAIM_ROOM,
                    action: "Sent reset instructions via email"
                },
                kissmetrics: "Sent reset instructions via email"
            },
            BECAME_OWNER: {
                googleAnalytics: {
                    category: e.CLAIM_ROOM,
                    action: "Current client because owner",
                    nonInteraction: !0
                },
                kissmetrics: "Current client because owner"
            },
            BACKGROUND_IMAGE_SELECT_CLICK: {
                googleAnalytics: {
                    category: e.CUSTOMIZE_ROOM,
                    action: "Background image selected",
                    label: "From file select button"
                },
                kissmetrics: "Background image selected from file selector"
            },
            BACKGROUND_IMAGE_SELECT_DROP: {
                googleAnalytics: {
                    category: e.CUSTOMIZE_ROOM,
                    action: "Background image selected",
                    label: "From drag and drop"
                },
                kissmetrics: "Background image selected from drag and drop"
            },
            BACKGROUND_IMAGE_SUBMITTED: {
                googleAnalytics: {
                    category: e.CUSTOMIZE_ROOM,
                    action: "Background image submitted"
                },
                kissmetrics: "Background image submitted",
                intercom: {
                    eventName: "Background image submitted"
                }
            },
            ERROR_WEBRTC: {
                kissmetrics: "Redirected to WebRTC error page"
            },
            CLOSED_TAB: {
                kissmetrics: "closed tab"
            },
            ERROR_CONNECTION: {
                kissmetrics: "Client redirected to /error/connection"
            },
            ROOM_LOCKED: {
                kissmetrics: "Access denied: Room is locked"
            },
            ROOM_FULL: {
                kissmetrics: "Access denied: Room is full"
            },
            ROOM_INVALID: {
                kissmetrics: "Access denied: Room is invalid"
            },
            RECONNECT_TO_ROOM: {
                kissmetrics: "Reconnected to a room"
            },
            ENTERED_EXISTING_ROOM: {
                kissmetrics: "Entered existing room"
            },
            ENTERED_NEW_ROOM: {
                kissmetrics: "Entered new room"
            },
            NEW_CLIENT_JOINED: {
                kissmetrics: "New client joined"
            },
            CLIENT_KICKED: {
                kissmetrics: "Client kicked from room"
            },
            CLIENT_BECAME_OWNER: {
                googleAnalytics: {
                    category: e.CLAIM_ROOM,
                    action: "Current client became owner",
                    nonInteraction: !0
                },
                kissmetrics: "Current client became owner"
            },
            CLIENT_CLAIMED_ROOM: {
                googleAnalytics: {
                    category: e.CLAIM_ROOM,
                    action: "Current client claimed the room"
                },
                kissmetrics: "Current client claimed the room"
            },
            ANOTHER_CLAIMED_ROOM: {
                googleAnalytics: {
                    category: e.CLAIM_ROOM,
                    action: "Another client claimed the room",
                    nonInteraction: !0
                },
                kissmetrics: "Another client claimed the room"
            },
            ROOM_CLAIMED: {
                kissmetrics: "Room claimed"
            },
            BACKGROUND_IMAGE_CHANGED: {
                kissmetrics: "Background image changed"
            },
            SET_LOCK: {
                kissmetrics: "room room "
            },
            IN_A_CONVERSATION_TEMPORARY: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "In a conversation (temporary)",
                    nonInteraction: !0
                },
                kissmetrics: "In a conversation (temporary)",
                intercom: {
                    eventName: "In a conversation"
                }
            },
            VISITED_ROOM: {
                kissmetrics: "Visited room",
                perfectAudience: {
                    eventName: "visited room"
                }
            },
            MINUTE_ELAPSED: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Minute elapsed",
                    label: "Minute elapsed in conversation"
                }
            },
            WEBRTC_ERROR: {
                googleAnalytics: {
                    category: e.RTC,
                    action: "error",
                    nonInteraction: !0
                }
            },
            CONTACT_ADDED_MANUALLY: {
                googleAnalytics: {
                    category: e.CONTACTS,
                    action: "Added contact manually"
                },
                kissmetrics: "Added contact manually"
            },
            CONTACT_ADDED_MANUALLY_FAILED: {
                googleAnalytics: {
                    category: e.CONTACTS,
                    action: "Could not add contact manually"
                },
                kissmetrics: "Could not add contact manually"
            },
            SIGNUP_ERROR: {
                googleAnalytics: {
                    category: e.USER,
                    action: "Signup API call error"
                },
                kissmetrics: "Signup API call error"
            },
            EMBED: {
                EMBEDDED_VERSION_LOADED: {
                    googleAnalytics: {
                        category: e.EMBED,
                        action: "Embedded version loaded",
                        label: null,
                        nonInteraction: !0
                    }
                },
                ENTERED_ROOM: {
                    googleAnalytics: {
                        category: e.EMBED,
                        action: "Entered room",
                        label: null
                    }
                }
            },
            REGISTRATION: {
                SET_ACTIVE_STATE: {
                    googleAnalytics: {
                        category: e.REGISTRATION,
                        action: "Changed active state",
                        label: null
                    },
                    kissmetrics: "Registration: changed active state: "
                },
                SENT_VERIFICATION_CODE: {
                    googleAnalytics: {
                        category: e.REGISTRATION,
                        action: "Sent verification code",
                        label: null
                    },
                    kissmetrics: "Registration: sent verification code: "
                },
                ATTEMPT_VERIFY_CONTACT_POINT: {
                    googleAnalytics: {
                        category: e.REGISTRATION,
                        action: "Attempted to verify contact point",
                        label: null
                    },
                    kissmetrics: "Registration: attempted to verify contact point: "
                },
                USER_CREATED: {
                    googleAnalytics: {
                        category: e.REGISTRATION,
                        action: "User created"
                    },
                    kissmetrics: "Registration: User created"
                },
                SUBMITTED_NOTIFICATION_CHOICE: {
                    googleAnalytics: {
                        category: e.REGISTRATION,
                        action: "Submitted notification choice",
                        label: null
                    },
                    kissmetrics: "Registration: submitted notification choice: "
                },
                ATTEMPTED_DOWNLOAD_EXTENSION: {
                    googleAnalytics: {
                        category: e.REGISTRATION,
                        action: "Attempted to download extension"
                    },
                    kissmetrics: "Registration: attempted to download extension"
                }
            },
            CONTACTS: {
                INVITE: {
                    googleAnalytics: {
                        category: e.CONTACTS,
                        action: "Invited contact",
                        label: null
                    },
                    kissmetrics: "Contacts: invited contact: ",
                    intercom: {
                        eventName: "Invited contact"
                    }
                },
                SAVED_AS_PHONE_CONTACT: {
                    googleAnalytics: {
                        category: e.CONTACTS,
                        action: "Saved as phone contact"
                    },
                    kissmetrics: "Contacts: saved as phone contact"
                }
            },
            MEDIA_SELECTOR: {
                OPENED_SELECTOR_FROM_TOPBAR: {
                    googleAnalytics: {
                        category: e.MEDIA_SELECTOR,
                        action: "Opened selector from topbar"
                    },
                    kissmetrics: "Media Selector: opened selector from topbar",
                    intercom: {
                        eventName: "Opened Media Selector"
                    }
                },
                SAVED_SELECTION: {
                    googleAnalytics: {
                        category: e.MEDIA_SELECTOR,
                        action: "Saved selection"
                    },
                    kissmetrics: "Media Selector: saved selection",
                    intercom: {
                        eventName: "Saved Media Selector"
                    }
                }
            },
            LOGIN: {
                REQUEST_LOGIN_CODE: {
                    googleAnalytics: {
                        category: e.LOGIN,
                        action: "Requested login code",
                        label: null
                    },
                    kissmetrics: "Login: requested login code: "
                },
                USER_LOGGED_IN: {
                    perfectAudience: {
                        eventName: "logged in"
                    },
                    googleAnalytics: {
                        category: e.LOGIN,
                        action: "Logged in"
                    },
                    kissmetrics: "Logged in"
                }
            },
            ROOM_SETTINGS: {
                CLEARED_CHAT: {
                    googleAnalytics: {
                        category: e.ROOM_SETTINGS,
                        action: "Room settings: Cleared chat"
                    },
                    kissmetrics: "Room settings: Cleared chat"
                },
                ROOM_OWNER_BLOCKED_SOMEONE: {
                    googleAnalytics: {
                        category: e.ROOM_SETTINGS,
                        action: "Room settings: Room owner blocked someone"
                    },
                    kissmetrics: "Room settings: Room owner blocked someone"
                },
                ROOM_OWNER_CHANGED_SOMEONES_ROLE: {
                    FROM_FOLLOWER_TO_VISITOR: {
                        googleAnalytics: {
                            category: e.ROOM_SETTINGS,
                            action: "Room settings: Room owner changed someones role from follower to visitor"
                        },
                        kissmetrics: "Room settings: Room owner changed someones role from follower to visitor",
                        intercom: {
                            eventName: "Room settings: Room owner changed someones role from follower to visitor"
                        }
                    },
                    FROM_MEMBER_TO_VISITOR: {
                        googleAnalytics: {
                            category: e.ROOM_SETTINGS,
                            action: "Room settings: Room owner changed someones role from member to visitor"
                        },
                        kissmetrics: "Room settings: Room owner changed someones role from member to visitor",
                        intercom: {
                            eventName: "Room settings: Room owner changed someones role from member to visitor"
                        }
                    }
                },
                ROOM_MEMBER_CHANGED_SOMEONES_ROLE: {
                    FROM_FOLLOWER_TO_VISITOR: {
                        googleAnalytics: {
                            category: e.ROOM_SETTINGS,
                            action: "Room settings: Room member changed someones role from follower to visitor"
                        },
                        kissmetrics: "Room settings: Room member changed someones role from follower to visitor"
                    }
                },
                OWNER_BLOCKED_MEMBER: {
                    googleAnalytics: {
                        category: e.ROOM_SETTINGS,
                        action: "Room settings: Owner blocked member"
                    },
                    kissmetrics: "Room settings: Owner blocked member",
                    intercom: {
                        eventName: "Room settings: Owner blocked member"
                    }
                },
                OWNER_BLOCKED_FOLLOWER: {
                    googleAnalytics: {
                        category: e.ROOM_SETTINGS,
                        action: "Room settings: Owner blocked follower"
                    },
                    kissmetrics: "Room settings: Owner blocked follower",
                    intercom: {
                        eventName: "Room settings: Owner blocked follower"
                    }
                },
                OWNER_BLOCKED_VISITOR: {
                    googleAnalytics: {
                        category: e.ROOM_SETTINGS,
                        action: "Room settings: Owner blocked visitor"
                    },
                    kissmetrics: "Room settings: Owner blocked visitor",
                    intercom: {
                        eventName: "Room settings: Owner blocked visitor"
                    }
                },
                MEMBER_BLOCKED_FOLLOWER: {
                    googleAnalytics: {
                        category: e.ROOM_SETTINGS,
                        action: "Room settings: Member blocked follower"
                    },
                    kissmetrics: "Room settings: Member blocked follower",
                    intercom: {
                        eventName: "Room settings: Member blocked follower"
                    }
                },
                MEMBER_BLOCKED_VISITOR: {
                    googleAnalytics: {
                        category: e.ROOM_SETTINGS,
                        action: "Room settings: Member blocked visitor"
                    },
                    kissmetrics: "Room settings: Member blocked visitor",
                    intercom: {
                        eventName: "Room settings: Member blocked visitor"
                    }
                }
            },
            USER_SETTINGS: {
                ENABLE_DESKTOP_NOTIFICATIONS: {
                    googleAnalytics: {
                        category: e.USER_SETTINGS,
                        action: "Enabled desktop notifications",
                        label: null
                    },
                    kissmetrics: "User settings: enable desktop notifications"
                },
                DISABLE_DESKTOP_NOTIFICATIONS: {
                    googleAnalytics: {
                        category: e.USER_SETTINGS,
                        action: "Disabled desktop notifications",
                        label: null
                    },
                    kissmetrics: "User settings: disable desktop notifications"
                },
                DESKTOP_NOTIFICATIONS_TRIGGER_INSTALL: {
                    googleAnalytics: {
                        category: e.USER_SETTINGS,
                        action: "Trigger Install Extension",
                        label: "desktop-notifications"
                    },
                    kissmetrics: "User settings: trigger install extension: desktop-notifications"
                },
                UNCLAIM_ROOM: {
                    googleAnalytics: {
                        category: e.USER_SETTINGS,
                        action: "Unclaimed room"
                    },
                    kissmetrics: "User settings: unclaimed room"
                },
                UNFOLLOW_ROOM: {
                    googleAnalytics: {
                        category: e.USER_SETTINGS,
                        action: "Unfollowed room"
                    },
                    kissmetrics: "User settings: unfollow room"
                },
                MUTE_NOTIFICATIONS_FOR_ROOM: {
                    googleAnalytics: {
                        category: e.USER_SETTINGS,
                        action: "Muted notifications for room"
                    },
                    kissmetrics: "User settings: muted notifications for room"
                },
                UNMUTE_NOTIFICATIONS_FOR_ROOM: {
                    googleAnalytics: {
                        category: e.USER_SETTINGS,
                        action: "Unmuted notifications for room"
                    },
                    kissmetrics: "User settings: unmuted notifications for room"
                },
                UPLOADED_AVATAR_IMAGE_FROM_FILE: {
                    googleAnalytics: {
                        category: e.USER_SETTINGS,
                        action: "Uploaded an avatar image from file"
                    },
                    kissmetrics: "User settings: uploaded avatar image from image"
                },
                UPLOADED_AVATAR_IMAGE_FROM_CAMERA: {
                    googleAnalytics: {
                        category: e.USER_SETTINGS,
                        action: "Uploaded an avatar image from camera"
                    },
                    kissmetrics: "User settings: uploaded avatar image from camera"
                }
            },
            USER_DELETION: {
                DELETED_USER: {
                    googleAnalytics: {
                        category: e.USER_DELETION,
                        action: "Deleted User",
                        label: null
                    },
                    kissmetrics: "User deletion: User deleted their user"
                }
            },
            VIDEO_STICKERS: {
                SENT_STICKER_WITH_ID: {
                    googleAnalytics: {
                        category: e.VIDEO_STICKERS,
                        action: "Sent video sticker",
                        label: null
                    },
                    kissmetrics: "Video stickers: User sent a sticker: "
                },
                SENT_STICKER: {
                    kissmetrics: "Video stickers: User sent a sticker",
                    intercom: {
                        eventName: "Sent video sticker"
                    }
                },
                RECEIVED_STICKER_WITH_ID: {
                    googleAnalytics: {
                        category: e.VIDEO_STICKERS,
                        action: "Received video sticker",
                        label: null,
                        nonInteraction: !0
                    },
                    kissmetrics: "Video stickers: User received a sticker: "
                },
                RECEIVED_STICKER: {
                    kissmetrics: "Video stickers: User received a sticker",
                    intercom: {
                        eventName: "Received video sticker"
                    }
                },
                VIEWED_LOCKED_DESCRIPTION_WITH_ID: {
                    kissmetrics: "Video stickers: Viewed description of locked sticker: "
                },
                UNLOCKED_STICKER_WITH_ID: {
                    kissmetrics: "Video stickers: Unlocked sticker: "
                }
            },
            MEDIA_SHARE: {
                PASTED_MEDIA_LINK_IN_CHAT: {
                    googleAnalytics: {
                        category: e.MEDIA_SHARE,
                        action: "Pasted media link in chat",
                        label: null
                    },
                    kissmetrics: "Pasted media link in chat"
                },
                MEDIA_SHARE_STARTED: {
                    googleAnalytics: {
                        category: e.MEDIA_SHARE,
                        action: "Media share started",
                        label: null,
                        value: null
                    },
                    kissmetrics: "Media share started",
                    intercom: {
                        eventName: "Media share started"
                    }
                },
                MEDIA_SHARE_PLAYED_IN_ROOM: {
                    googleAnalytics: {
                        category: e.MEDIA_SHARE,
                        action: "Media share played in room",
                        label: null
                    },
                    kissmetrics: "Media share played in room",
                    intercom: {
                        eventName: "Media share played in room"
                    }
                },
                MEDIA_SHARE_FINISHED: {
                    googleAnalytics: {
                        category: e.MEDIA_SHARE,
                        action: "Media share finished",
                        label: null
                    },
                    kissmetrics: "Media share finished"
                },
                MEDIA_SHARE_CLOSED: {
                    googleAnalytics: {
                        category: e.MEDIA_SHARE,
                        action: "Media share closed",
                        label: null
                    },
                    kissmetrics: "Media share closed"
                }
            },
            FOLLOW: {
                MUTE: {
                    googleAnalytics: {
                        category: e.FOLLOW,
                        action: "Muted notifications",
                        label: null
                    },
                    kissmetrics: "Muted notifications"
                },
                UNMUTE: {
                    googleAnalytics: {
                        category: e.FOLLOW,
                        action: "Unmuted notifications",
                        label: null
                    },
                    kissmetrics: "Unmuted notifications"
                }
            },
            VIDEO_TOOLBAR: {
                OWNER_BLOCKED_MEMBER: {
                    googleAnalytics: {
                        category: e.VIDEO_TOOLBAR,
                        action: "Video toolbar: Owner blocked member"
                    },
                    kissmetrics: "Video toolbar: Owner blocked member",
                    intercom: {
                        eventName: "Video toolbar: Owner blocked member"
                    }
                },
                OWNER_BLOCKED_FOLLOWER: {
                    googleAnalytics: {
                        category: e.VIDEO_TOOLBAR,
                        action: "Video toolbar: Owner blocked follower"
                    },
                    kissmetrics: "Video toolbar: Owner blocked follower",
                    intercom: {
                        eventName: "Video toolbar: Owner blocked follower"
                    }
                },
                OWNER_BLOCKED_VISITOR: {
                    googleAnalytics: {
                        category: e.VIDEO_TOOLBAR,
                        action: "Video toolbar: Owner blocked visitor"
                    },
                    kissmetrics: "Video toolbar: Owner blocked visitor",
                    intercom: {
                        eventName: "Video toolbar: Owner blocked visitor"
                    }
                },
                MEMBER_BLOCKED_FOLLOWER: {
                    googleAnalytics: {
                        category: e.VIDEO_TOOLBAR,
                        action: "Video toolbar: Member blocked follower"
                    },
                    kissmetrics: "Video toolbar: Member blocked follower",
                    intercom: {
                        eventName: "Video toolbar: Member blocked follower"
                    }
                },
                MEMBER_BLOCKED_VISITOR: {
                    googleAnalytics: {
                        category: e.VIDEO_TOOLBAR,
                        action: "Video toolbar: Member blocked visitor"
                    },
                    kissmetrics: "Video toolbar: Member blocked visitor",
                    intercom: {
                        eventName: "Video toolbar: Member blocked visitor"
                    }
                }
            },
            MEMBERSHIP: {
                OFFERED_MEMBERSHIP: {
                    googleAnalytics: {
                        category: e.MEMBERSHIP,
                        action: "Offered membership"
                    },
                    kissmetrics: "Offered membership"
                },
                SEE_MEMBERSHIP_OFFER: {
                    googleAnalytics: {
                        category: e.MEMBERSHIP,
                        action: "See membership offer"
                    },
                    kissmetrics: "See membership offer"
                },
                ACCEPT_MEMBERSHIP_OFFER: {
                    googleAnalytics: {
                        category: e.MEMBERSHIP,
                        action: "Accept membership offer"
                    },
                    kissmetrics: "Accept membership offer"
                }
            },
            CLICKED_HELP_BUTTON: {
                googleAnalytics: {
                    category: e.ROOM,
                    action: "Clicked help button"
                },
                kissmetrics: "Room: Clicked help button"
            },
            STARTED_VIDEO_TUTORIAL: {
                kissmetrics: "Started video tutorial"
            },
            CLOSED_VIDEO_TUTORIAL: {
                kissmetrics: "Closed video tutorial"
            },
            VIEWED_VIDEO_TUTORIAL_TO_COMPLETION: {
                kissmetrics: "Viewed video tutorial to completion"
            }
        }
    })
}, function(e, t, n) {
    "use strict";
    ! function(e) {
        function t(e) {
            return e && "/" !== e[0] ? "/" + e : e
        }
        var n = ["protocol", "templates", "styles", "scripts", "libraries", "i", "images", "information", "error", "extensions", "translations", "robots.txt", "assets", "apple-app-site-association"];
        e.requirements = "the room name cannot start with / or be any of these reserved words: " + n.join(", ") + ".", e.pattern = "(?!(?:" + n.join("|") + ")(?:/.*|$))([^?#]+)", e.normalize = function(e) {
            var n = t(e);
            return (n + "").trim().toLowerCase().replace(/\/*$/, "")
        }, e.validRoomNamePattern = new RegExp("^\\/" + e.pattern + "$"), e.isLegalRoomName = function(t) {
            return e.validRoomNamePattern.test(t)
        }
    }(t)
}, function(e, t, n) {
    "use strict";
    var o = n(159);
    angular.module("videoconference").factory("RoomName", function() {
        return o
    })
}, function(e, t) {
    "use strict";
    ! function() {
        function e(e, t, n, o) {
            if (e) {
                if (void 0 === t) {
                    var i = {},
                        r = e;
                    return Object.keys(r).forEach(function(e) {
                        try {
                            i[e] = JSON.parse(r[e])
                        } catch (t) {}
                    }), i
                }
                var a;
                if (e[t]) try {
                    a = JSON.parse(e.getItem(t))
                } catch (c) {}
                return a || (a = {}), 4 !== arguments.length || void 0 !== o && null !== o ? void 0 !== o ? (a[n] = o, e.setItem(t, JSON.stringify(a)), a[n]) : void 0 !== n ? a[n] : a : (delete a[n], void e.setItem(t, JSON.stringify(a)))
            }
        }
        window.localStorageAdapter = function() {
            try {
                window.localStorage.toString()
            } catch (t) {
                return void window.console.warn("Error getting access to storage. Are cookies are blocked?")
            }
            return e.apply(null, [window.localStorage].concat(Array.prototype.slice.call(arguments)))
        }, window.sessionStorageAdapter = function() {
            try {
                window.sessionStorage.toString()
            } catch (t) {
                return void window.console.warn("Error getting access to storage. Are cookies are blocked?")
            }
            return e.apply(null, [window.sessionStorage].concat(Array.prototype.slice.call(arguments)))
        }
    }()
}, function(e, t) {
    "use strict";
    var n = function(e, t) {
            var n = 640,
                o = 480,
                i = [],
                r = null,
                a = function() {
                    null !== r && r()
                },
                c = function(e) {
                    return e.videoWidth > 0 && e.videoHeight > 0
                },
                s = function(e) {
                    e.missingVideoDimensionsTimeout || (e.missingVideoDimensionsTimeout = t(function() {
                        c(e) && (t.cancel(e.missingVideoDimensionsTimeout), e.missingVideoDimensionsTimeout = null, a())
                    }, 500))
                },
                l = function(e) {
                    return void 0 === e || void 0 === e.videoWidth || void 0 === e.videoHeight ? [n, o] : c(e) ? [e.videoWidth, e.videoHeight] : (s(e), [n, o])
                },
                u = function() {
                    return i[0].attr("vc-id")
                };
            return {
                setUpdateHandler: function(e) {
                    r = e
                },
                getElementCount: function() {
                    return i.length
                },
                getElementByOrdinality: function(e) {
                    return i[e]
                },
                getVideoDimensions: l,
                getDimensionsByOrdinality: function(e) {
                    var t = i[e];
                    if (!t) return [n, o];
                    var r = t.find("[vc-splitscreen-is-aspect-ratio-source=true]")[0];
                    return l(r)
                },
                registerElement: function(e) {
                    i.push(e), a()
                },
                unregisterElement: function(e) {
                    for (var t in i)
                        if (i[t][0] === e[0]) return i.splice(t, 1), void a()
                },
                swapElements: function(e, t) {
                    var n, o;
                    for (var r in i) i[r][0] === e[0] ? n = r : i[r][0] === t[0] && (o = r);
                    i[n] = t, i[o] = e, a()
                },
                prepareEnlarge: function(e) {
                    if (i[0].removeClass("enlarged"), e) {
                        var t, n = i[0],
                            o = 0;
                        i.forEach(function(n, i) {
                            var r = n.attr("vc-id");
                            return e === r ? (o = i, void(t = n)) : void 0
                        }), t.addClass("enlarged"), i[0] = t, i[o] = n, a()
                    }
                },
                getCurrentEnlargedId: u,
                putLocalVideoInCorrectPlace: function(e) {
                    if (e !== u()) {
                        var t = i[0],
                            n = i[1];
                        i[0] = n, i[1] = t, a()
                    }
                }
            }
        },
        o = function(e, t) {
            var n = 0,
                o = 1,
                i = 100,
                r = function() {
                    this.setCurrentCategory("enlarged")
                },
                a = function() {
                    this.setCurrentCategory("default")
                },
                c = function(n) {
                    var o, i, r, a, c = 5,
                        s = null;
                    return {
                        recalculate: function(t, s, l, u) {
                            t += c, s += c, l -= 2 * c, u -= 2 * c;
                            var d, m, f = e.getDimensionsByOrdinality(n),
                                g = f[0],
                                p = f[1];
                            g / p > l / u ? (d = l, m = p * l / g) : (m = u, d = g * u / p);
                            var E = t + (l - d) / 2,
                                _ = s + (u - m) / 2;
                            return o = E, i = _, r = d, a = m, [r, a]
                        },
                        utilization: function() {
                            return r * a
                        },
                        positionElements: function() {
                            s = e.getElementByOrdinality(n), s.css({
                                left: o + "px",
                                top: i + "px",
                                width: r + "px",
                                height: a + "px",
                                "font-size": r / 50 + "pt"
                            }), t(function() {
                                var e = ["left", "top", "width", "height", "font-size"],
                                    t = ".3s",
                                    n = e.map(function(e) {
                                        return e + " " + t
                                    }).join(", ");
                                s.css("transition", n), s.css("transition-timing-function", "ease-in")
                            }), 510 >= r ? s.addClass("mini") : s.removeClass("mini")
                        },
                        getLeafCount: function() {
                            return 1
                        }
                    }
                },
                s = function(e, t, i, r) {
                    return {
                        recalculate: function(a, c, s, l) {
                            var u = [],
                                d = 0,
                                m = 1;
                            r.forEach(function() {
                                u.push(m), d += m, m *= t
                            });
                            var f = [],
                                g = [],
                                p = [],
                                E = [],
                                _ = a,
                                v = c;
                            r.forEach(function(t, i) {
                                p.push(_), E.push(v);
                                var r = u[i] / d;
                                e === n ? (g.push(l), f.push(s * r), _ += f[i]) : e === o && (g.push(l * r), f.push(s), v += g[i])
                            });
                            var h = 0;
                            return r.forEach(function(t, i) {
                                var r = t.recalculate(p[i], E[i], f[i], g[i]);
                                e === n ? h += r[0] : e === o && (h += r[1]), f[i] = r[0], g[i] = r[1]
                            }), i && (_ = a, v = c, e === n ? _ += (s - h) / 2 : e === o && (v += (l - h) / 2), r.forEach(function(t, i) {
                                e === n ? (t.recalculate(_, v, f[i], l), _ += f[i]) : e === o && (t.recalculate(_, v, s, g[i]), v += g[i])
                            })), [s, l]
                        },
                        utilization: function() {
                            return r.reduce(function(e, t) {
                                return e + t.utilization()
                            }, 0)
                        },
                        positionElements: function() {
                            r.forEach(function(e) {
                                e.positionElements()
                            })
                        },
                        getLeafCount: function() {
                            return r.reduce(function(e, t) {
                                return e + t.getLeafCount()
                            }, 0)
                        }
                    }
                },
                l = function(t, n, o, r) {
                    var a = [],
                        l = s(t, n, o, a),
                        u = function(e) {
                            for (e -= r; a.length > e;) a.pop();
                            for (; a.length < e;) a.push(c(r + a.length))
                        };
                    return {
                        recalculate: function(t, n, o, i) {
                            return u(e.getElementCount()), l.recalculate(t, n, o, i)
                        },
                        utilization: function() {
                            return l.utilization()
                        },
                        positionElements: function() {
                            l.positionElements()
                        },
                        getLeafCount: function() {
                            return i
                        }
                    }
                },
                u = function(t) {
                    var r = [],
                        a = null,
                        l = 0,
                        u = function(e) {
                            if (r = [], !(t > e))
                                for (var i = 2; e - 1 > i; i++) {
                                    for (var a = Math.floor(e / i), l = e - a * i, u = [], d = 0, m = 0; i > m; m++) {
                                        for (var f = [], g = 0; a > g; g++) f.push(c(d++));
                                        l > 0 && (f.push(c(d++)), l--);
                                        var p = s(n, 1, !1, f);
                                        u.push(p)
                                    }
                                    var E = s(o, 1, !1, u);
                                    r.push(E)
                                }
                        },
                        d = function(e, t, n, o) {
                            a = null, l = 0;
                            for (var i = 0; i < r.length; i++) {
                                var c = r[i];
                                c.recalculate(e, t, n, o);
                                var s = c.utilization();
                                s > l && (a = c, l = s)
                            }
                        };
                    return {
                        recalculate: function(t, n, o, i) {
                            return u(e.getElementCount()), d(t, n, o, i), null !== a ? a.recalculate(t, n, o, i) : void 0
                        },
                        utilization: function() {
                            return l
                        },
                        positionElements: function() {
                            a.positionElements()
                        },
                        getLeafCount: function() {
                            return i
                        }
                    }
                },
                d = s,
                m = c,
                f = {
                    "default": {
                        description: "Mixed layout",
                        layouts: [l(n, 1, !1, 0), l(o, 1, !1, 0), d(n, 4 / 3, !1, [d(o, 1, !1, [m(0), m(2)]), m(1)]), d(o, 1, !1, [d(n, 1, !1, [m(0), m(1)]), d(n, 1, !1, [m(2), m(3)])]), d(n, .75, !1, [d(o, 1, !1, [m(0), m(3)]), d(o, 1, !1, [m(1), m(2), m(4)])]), u(6)]
                    },
                    enlarged: {
                        description: "Supersize",
                        layouts: [d(n, .2, !1, [m(0), l(o, 1, !0, 1)]), d(o, 4.5, !1, [l(n, 1, !0, 1), m(0)])]
                    }
                },
                g = "default",
                p = null,
                E = function() {
                    null !== p && p()
                };
            return {
                getCategories: function() {
                    return f
                },
                getCurrentCategory: function() {
                    return g
                },
                setCurrentCategory: function(e) {
                    g = e, E()
                },
                setUpdateHandler: function(e) {
                    p = e
                },
                getBestLayout: function(t, n, o, r) {
                    var a = e.getElementCount(),
                        c = null,
                        s = 0,
                        l = f[g].layouts;
                    return l.forEach(function(e) {
                        var l = e.getLeafCount();
                        if (!(i > l && l !== a)) {
                            e.recalculate(t, n, o, r);
                            var u = e.utilization();
                            (null === c || u > s) && (c = e, s = u)
                        }
                    }), c
                },
                setEnlargeView: r,
                setDefaultView: a
            }
        },
        i = function(e, t, n) {
            var o = null,
                i = 0,
                r = function() {
                    n(function() {
                        var e = i,
                            n = 0,
                            o = angular.element(".video-wrapper").width() - i,
                            r = angular.element(".video-wrapper").height(),
                            a = t.getBestLayout(e, n, o, r);
                        a.positionElements(e, n, o, r)
                    }, 100)
                },
                a = function() {
                    null !== o && n.cancel(o), o = n(function() {
                        o = null, r()
                    }, 100)
                },
                c = !1;
            return {
                ensureStarted: function() {
                    c || (c = !0, r(), e.setUpdateHandler(r), t.setUpdateHandler(r), $(window).resize(a))
                },
                setOffset: function(e) {
                    i = e, r()
                },
                refreshLayout: r
            }
        };
    angular.module("videoconference").factory("splitscreenElements", ["$timeout", "$interval", n]).factory("splitscreenLayouts", ["splitscreenElements", "$timeout", o]).factory("splitscreenRefresher", ["splitscreenElements", "splitscreenLayouts", "$timeout", i]).directive("vcSplitscreen", ["splitscreenElements", "splitscreenRefresher", function(e, t) {
        return function(n, o, i) {
            n.$watch(i.vcSplitscreen, function(t) {
                t === !0 ? e.registerElement(o) : (e.unregisterElement(o), o.removeAttr("style"))
            }), o.bind("$destroy", function() {
                e.unregisterElement(o), o.removeAttr("style")
            }), t.ensureStarted()
        }
    }]).directive("vcSplitscreenIsAspectRatioSource", ["splitscreenRefresher", function(e) {
        return function(t, n, o) {
            o.$observe("vcSplitscreenIsAspectRatioSource", function(t) {
                "true" === t && e.refreshLayout()
            }), n[0].addEventListener("resize", function() {
                e.refreshLayout()
            })
        }
    }]).directive("vcSplitscreenDragdrop", ["splitscreenElements", function(e) {
        return function(t, n) {
            var o = null;
            void 0 === n[0].dragDropInitialized && (n[0].dragDropInitialized = !0, n.draggable({
                cancel: ".splitscreen-not-draggable",
                revert: "invalid",
                revertDuration: 250,
                scroll: !1,
                scope: "splitscreen",
                helper: function() {
                    return $('<div class="splitscreen-draggable-helper" />').width(n.width()).height(n.height())
                }
            }).droppable({
                scope: "splitscreen",
                tolerance: "pointer",
                over: function() {
                    o = $('<div class="splitscreen-droppable" />'), n.append(o)
                },
                out: function() {
                    o.remove()
                },
                drop: function(t, i) {
                    o.remove(), e.swapElements(i.draggable, n)
                }
            }))
        }
    }]).directive("vcSplitscreenOffset", ["splitscreenRefresher", function(e) {
        return function(t, n, o) {
            t.$watch(o.vcSplitscreenOffset, function(t) {
                e.setOffset(t)
            })
        }
    }])
}]);
