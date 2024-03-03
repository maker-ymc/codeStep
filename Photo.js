class Photo {
    constructor(container, src, x, y, width, height) {
        // content position and size
        this.container = container;
        this.img = document.createElement("img");
        this.src = src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img.src = this.src;

        //style setting
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";

        this.img.style.border = "2px solid gray";
        this.img.style.boxSizing = "border-box";

        //attach board
        this.container.appendChild(this.img);

        //click event -> change info
        $(this.img).click(() => {
            let index = thumbArray.indexOf(this);
            console.log("index No. : ", index);
            let obj = movie.marvel[index];
            $("#pic").attr("src", this.src);

            // change title
            $("#header").html("<h5>" + obj.title + "</h5>");

            // tagging
            let tag = "";
            tag += "부제목 : " + obj.phase + "<br>";
            tag += "장르 : " + obj.category_name + "<br>";
            tag += "개봉일 : " + obj.release_date + "<br>";
            tag += "런타임 : " + obj.running_time + "<br>";
            tag += "예산 : " + obj.budget + "<br>";
            tag += "수익 : " + obj.gross;
            $("#content").html(tag);
        });
    }
}