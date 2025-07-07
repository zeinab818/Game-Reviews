
let row=document.getElementById('row');
let rowDetails=document.getElementById('rowDetails');


class displayGame{
    constructor(image,name,desc,developer,platform ,id){
        this.image=image;
        this.name=name;
        this.desc=desc;
        this.developer=developer;
        this.platform=platform;
        this.id=id;

    }
    render(){
        let cartoon=`
        
            <div class="col-lg-3 col-md-6 col-12">
                        
                        <div class="inner p-3"  onclick="goToDetails(${this.id})">
                            <div class="image ">
                                <img class="w-100" src="${this.image}" alt="${this.name}">
                            </div>
                            <div class="caption">
                                <div class="header text-capitalize d-flex flex-row justify-content-between align-items-center">
                                    <p class="main-font">${this.name}</p>
                                    <button >free</button>
                                </div>
                                <div class="content text-center sec-font">
                                    <p>
                                        ${this.desc.slice(0,80)}
                                    </p>
                                </div>
                                <div class="footer sec-font d-flex flex-row justify-content-between align-items-center">
                                    <button >${this.developer}</button>
                                    <button >${this.platform}</button>

                                </div>
                            </div>
                        </div>

                    </div>
        
        
        `;

        row.innerHTML += cartoon;


    }
}


class displayDetails{
    constructor(image,name,category, desc,developer,platform ,status ,id,url){
        
        this.image=image;
        this.name=name;
        this.desc=desc;
        this.category=category;
        this.platform=platform;
        this.developer=developer;
        this.status=status;
        this.id=id;
        this.url = url;

    }
    render(){
        let cartoon=`
        
                <div class="col-lg-4 col-12">
                    <div class="inner">
                        <img class="w-100" src="${this.image}" alt="${this.name}">
                    </div>
                </div>
                <div class="col-lg-8 col-12">
                    <div class="inner">
                        <p class="main-font title"> Title:  ${this.name}</p>
                        <p class="sec-font remain"><span> category : </span> <span  class="br"> ${this.category} </p>
                        <p class="sec-font remain"><span> Platform : </span> <span class="br"> ${this.platform} </span></p>
                        <p class="sec-font remain"><span> Status : </span> <span class="br"> ${this.status} </span></p>
                        <p class="sec-font remain pb-3">
                            ${this.desc}
                        </p>

                        <a class="sec-font" href="${this.url}" target="_blank" >
                            show game
                        </a>
                    </div>
                </div>
        
        
        `;

        rowDetails.innerHTML += cartoon;


    }



}