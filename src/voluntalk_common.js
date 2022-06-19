function BottomSwitchButton(props) {
    return (
        <a href={props.href}
            onClick={() => props.render()}
            className={
                props.active == "true" ? "mdui-bottom-nav-active" : ""
            }>
            <i className="mdui-icon material-icons">{props.icon}</i>
            <label>{props.label}</label>
        </a>
    );
}

function BottomNav(props) {
    return (
        <div className="mdui-bottom-nav mdui-bottom-nav-text-auto mdui-color-white">
            <BottomSwitchButton href="#" render={Page_Life_Render} active="false" icon="local_drink" label="生活" />
            <BottomSwitchButton href="#" render={Page_QNA_Render} active="false" icon="border_color" label="提问" />
            <BottomSwitchButton href="#" render={Page_Communicate_Render} active="true" icon="question_answer" label="沟通" />
            <BottomSwitchButton href="#" render={Page_Official_Render} active="false" icon="account_balance" label="官方" />
            <BottomSwitchButton href="#" render={Page_Me_Render} active="false" icon="face" label="我的" />
        </div>
    );
}


function SearchButton() {
    return (
        <div className="mdui-textfield mdui-textfield-expandable mdui-center">
            <button className="mdui-textfield-icon mdui-btn mdui-btn-icon">
                <i className="mdui-icon material-icons">search</i>
            </button>
            <input className="mdui-textfield-input" type="text" placeholder="Search" />
            <button className="mdui-textfield-close mdui-btn mdui-btn-icon">
                <i className="mdui-icon material-icons">close</i>
            </button>
        </div>
    );
}
function AppBar(props) {
    return (
        <div className="mdui-appbar mdui-appbar-fixed mdui-color-white">
            <div className="mdui-tab mdui-tab-scrollable mdui-tab-centered" mdui-tab="true">
                <a href="#communicate-new-tab" className="mdui-ripple">最新</a>
                <a href="#communicate-popular-tab" className="mdui-ripple">最热</a>
                <a href="#communicate-random-tab" className="mdui-ripple">随机</a>
            </div>
        </div>
    );
}

function Card(props) {
    return (
        <div className="mdui-card">
            <div className="mdui-card-header">
                <img className="mdui-card-header-avatar"
                    src={props.avatar} />
                <div className="mdui-card-header-title">{props.name}</div>
                <div className="mdui-card-header-subtitle">{props.quote}</div>
            </div>
            <div className="mdui-card-media">
                <img src={props.imgurl} />
                <div className="mdui-card-media-covered">
                    <div className="mdui-card-primary">
                        <div className="mdui-card-primary-title">{props.school}</div>
                    </div>
                </div>
            </div>
            <div className="mdui-card-actions">
                <button className="mdui-btn mdui-ripple mdui-ripple-white">查看详情</button>
                <button className="mdui-btn mdui-ripple mdui-ripple-white">发起咨询</button>
            </div>
        </div>
    );
}

function CardCollection() {
    const element = (
        <div>
            <Card
                name="罗潇阳"
                avatar="https://ccviolett-1307804825.cos.ap-shanghai.myqcloud.com/img/QQ图片20220619102435.jpg"
                quote="愿你成为自己的太阳，无需借助别人的光。"
                shcool="东北大学秦皇岛分校"
                imgurl="https://www.neuq.edu.cn/images/20211129.jpg"
            />

            <Card
                name="张紫琪"
                avatar="https://ccviolett-1307804825.cos.ap-shanghai.myqcloud.com/img/QQ图片20220619102445.jpg"
                quote="如果撑伞不够诚意，那我就淋雨爱你"
                shcool="东北大学秦皇岛分校"
                imgurl="https://www.neuq.edu.cn/images/20211129zhiyuanting.jpg"
            />

            <Card
                name="宗琳昕"
                avatar="https://s2.loli.net/2022/03/25/TNopxjtU4D2lAWY.jpg"
                quote="希望我们都能够如愿以偿"
                shcool="东北大学秦皇岛分校"
                imgurl="https://www.neuq.edu.cn/images/20211129.jpg"
            />

            <Card
                name="潘乐洋"
                avatar="https://s2.loli.net/2022/03/25/27fcM6t4lIpCe5F.jpg"
                quote="所爱隔山海，山海亦可平"
                shcool="东北大学秦皇岛分校"
                imgurl="https://www.neuq.edu.cn/images/20211129.jpg"
            />

            <Card
                name="曹嘉瑜"
                avatar="https://s2.loli.net/2022/03/25/GB5wgiQob4aLSej.jpg"
                quote="厚积薄发"
                shcool="东北大学秦皇岛分校"
                imgurl="https://www.neuq.edu.cn/images/20211129.jpg"
            />

            <Card
                name="赵科尧"
                avatar="https://s2.loli.net/2022/03/25/8AZRcCBoQkUIgnD.jpg"
                quote="敬这大争之世 敬这小酌之时"
                shcool="东北大学秦皇岛分校"
                imgurl="https://www.neuq.edu.cn/images/20211129.jpg"
            />

            <Card
                name="李华宇"
                avatar="https://s2.loli.net/2022/03/25/whXprN8FTjn6z5f.jpg"
                quote="山水萬程，皆要好运"
                shcool="东北大学秦皇岛分校"
                imgurl="https://www.neuq.edu.cn/images/20211129.jpg"
            />
        </div>
    )
    return element;
}

function Page_Communicate_Render() {
    const element = (
        <div>
            <AppBar />
            <SearchButton />

            <div id="communicate-new-tab">
                <CardCollection />
            </div>
            <div id="communicate-popular-tab"></div>
            <div id="communicate-random-tab"></div>
        </div>
    );
    ReactDOM.render(element, document.getElementById("page-div"));
}

function Page_Life_Render() {
    const element = (<div></div>);
    ReactDOM.render(element, document.getElementById("page-div"));
}

function Page_QNA_Render() {
    const element = (<div></div>);
    ReactDOM.render(element, document.getElementById("page-div"));
}
function Page_Official_Render() {
    const element = (<div></div>);
    ReactDOM.render(element, document.getElementById("page-div"));
}

function Page_Me_Render() {
    const element = (<div></div>);
    ReactDOM.render(element, document.getElementById("page-div"));
}

const element = (
    <BottomNav />
);

ReactDOM.render(element, document.getElementById("bottom-div"));

Page_Communicate_Render();
