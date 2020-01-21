export var messages = {
    'en': {
        app: {
            about: 'About',
            settings: "Settings"
        },
        about: {
            versionShort: 'v'
        },
        error: {
            title: 'Error',
            notes: 'This page is not found.'
        },
        home: {
            wnrWelcome: {
                title: "wnr-JR",
                notes: "Welcome to wnr-jr! "
            },
            onlyRest: "Only rest",
            starterTip: 'Start!',
            placeholder: {
                title: 'Title (optional)',
                workTime: 'Work Time (minute)',
                restTime: 'Rest Time (minute)',
                loop: 'Loops',
                notes: 'Notes (optional)'
            },
            allSum: {
                1: "all together",
                2: "minutes, to"
            },
            illegalInput: "Illegal Input. ",
            illegalReason: {
                badContent: "Please insert positive numbers in the form. ",
                tooBig: "The total time is too long, or there're too many loops. "
            }
        },
        timer: {
            h: "h ",
            min: "min ",
            s: "s ",
            ended: "End",
            working: "WORKING",
            resting: "RESTING",
            workingCountDown: "Working...",
            restingCountDown: "Resting...",
            backer: "Let's Back Home",
            allTime: {
                title: "Time Used: "
            },
            workTimeEnd: {
                title: "Work Time End",
                body: "You can now rest. "
            },
            restTimeEnd: {
                title: "Rest Time End",
                body: "You should now back to work. "
            },
            allTimeEnd: {
                title: "Schedule End",
                body: "You can have another schedule. "
            },
            oneMinTip: {
                title: "Only One Minute Left",
                body: "You can prepare to stop the thing you are doing now."
            }
        },
        settings: {
            submit: "Save all & Back",
            defaultWorkTime: "Default work time: ",
            defaultWorkTimeMessage: "Set the default work time. <i>(Only positive integer, time less than a day.)</i>",
            defaultRestTime: "Default rest time: ",
            defaultRestTimeMessage: "Set the default rest time. <i>(Only positive integer, time less than a day.)</i>",
            defaultLoop: "Default loops: ",
            defaultLoopMessage: "Set how many rounds do you want. <i>(Only positive integer, less than 20.)</i>",
            oneMinTip: "1 Min Left Tip: ",
            oneMinTipMessage: "Set if you want to have a tip when a period of time is only 1 minute left. <i>(Only true/false are OK.)</i> "
        }
    },
    'zh-CN': {
        app: {
            about: '关于',
            settings: "设置"
        },
        about: {
            versionShort: '版本'
        },
        error: {
            title: '出错了',
            notes: 'wnr找不到这个页面了……返回首页吧。'
        },
        home: {
            wnrWelcome: {
                title: "欢迎来到wnr-jr",
                notes: "希望wnr-jr能给你带来更好的时间管理体验！（注：许多复杂的wnr功能，无法在wnr-jr上使用）"
            },
            onlyRest: "仅休息",
            starterTip: '开始',
            placeholder: {
                title: '请输入任务名称（选填）',
                workTime: '请输入工作时间（分钟）',
                restTime: '请输入休息时间（分钟）',
                loop: '请输入时间循环次数',
                notes: '还有什么想要记的吗（选填）'
            },
            allSum: {
                1: "共计",
                2: "分钟，到"
            },
            illegalInput: "wnr觉得有些项的内容不是很合理呢…",
            illegalReason: {
                badContent: "请在全部的必填项中输入一个正整数。",
                tooBig: "总时间太长了，长于一天，或是循环次数太多。"
            }
        },
        timer: {
            h: "时 ",
            min: "分 ",
            s: "秒 ",
            ended: "!!完成了!!",
            working: "工作",
            resting: "休息",
            workingCountDown: "工作计时中……",
            restingCountDown: "休息计时中……",
            backer: "点左上角返回首页，开启下一段时间",
            allTime: {
                title: "总时间："
            },
            workTimeEnd: {
                title: "工作时间结束！",
                body: "你可以休息了。"
            },
            restTimeEnd: {
                title: "休息时间结束！",
                body: "你应当工作了。"
            },
            allTimeEnd: {
                title: "计划结束了！",
                body: "你可以用wnr开启下一段时间了！"
            },
            oneMinTip: {
                title: "这一段时间还剩下一分钟。",
                body: "如果手上的事情还未完成，可以准备暂时休整了。"
            }
        },
        settings: {
            submit: "保存并返回",
            defaultWorkTime: "默认工作时间：",
            defaultWorkTimeMessage: "设置默认工作时间。<i>（只能输入正整数，且时长应小于一天。）</i>",
            defaultRestTime: "默认休息时间：",
            defaultRestTimeMessage: "设置默认休息时间。<i>（只能输入正整数，且时长应小于一天。）</i>",
            defaultLoop: "默认循环次数：",
            defaultLoopMessage: "设置默认循环次数。<i>（只能输入正整数，且小于20。）</i>",
            oneMinTip: "是否在剩余1分钟时提示：",
            oneMinTipMessage: "设置是否在剩余1分钟时提示准备休整。<i>（只能输入true/false，或者留空。）</i>"
        }
    }
}