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

ReactDOM.render(
    <div>
        <Card 
            name="罗潇阳" 
            avatar="https://s2.loli.net/2022/03/25/G3C2rikzAgo9PQf.jpg"
            quote="愿你成为自己的太阳，无需借助别人的光。"
            shcool="东北大学秦皇岛分校"
            imgurl="https://www.neuq.edu.cn/images/20211129.jpg"
        />

        <Card 
            name="张紫琪" 
            avatar="https://s2.loli.net/2022/03/25/UqHuzIywDBlWPjC.jpg"
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
    ,
    document.getElementById("communicate-new-tab")
);