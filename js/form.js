class Form{
    constructor(){
        this.title= createElement("h1");
        this.register=createElement("h3");
        this.Signin=createElement("h3");

        this.rname =createInput("Name");
        this.rphone =createInput("Phone");
        this.remail =createInput("email");
        this.rpassword=createInput("password"); 
        this.submit=createButton("Submit")
        this.suser=createInput("Username/Email") 
        this.spass=createInput("Password") 
        this.sbutton=createButton("Sign in")     
}
display()
{
    this.title.html("DESI CART")
    this.title.position(windowWidth/2-50,20);
 
    this.register.html("Register")
    this.register.position(windowWidth/6,150)

    this.Signin.html("Sign in")
    this.Signin.position(windowWidth-300,150)

    var a = createElement("h5");
    a.position(200,230);
    a.html("Name: ")
    this.rname.position(300,250);

    var b = createElement("h5");
    b.position(200,300);
    b.html("Phone: ")
    this.rphone.position(300,320);

    var c = createElement("h5")
    c.position(200,370)
    c.html("Email: ")
    this.remail.position(300,390);

    var d = createElement("h5")
    d.position(200,440)
    d.html("Password: ")
    this.rpassword.position(300,460);

    this.submit.position(300,500);


    var e= createElement("h5")
    e.position(1000,230)
    e.html("username: ")
    this.suser.position(1100,250);

    var f= createElement("h5")
    f.position(1000,300)
    f.html("Password: ")
    this.spass.position(1100,320);

    this.sbutton.position(1000,400)
    




    
}
}