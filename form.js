/*class Form{
    constructor(){
        username = createInput("username");
        password = createInput("password");

        this.loginbtn = createButton("Login");
        this.signUpLink = createButton("Create An Account");

        this.loginLink = createButton("Already have an account ?<br> click  here");
        this.signUpBtn = createButton("Sign Up");

        this.logo = loadImage("Screenshot (71).png");

        this.background2 = loadImage("download.jpg");

        //this.welcomeSign = createElement("h3", "Welcome : " + username.value());

    }
    display(){
        background(this.logo);
        if(gameState == "login"){
            this.loginLink.hide();
            this.signUpBtn.hide();

            username.position(displayWidth/2-50, displayHeight/2+90);
            password.position(displayWidth/2-50, (displayHeight/2)+120);
            this.loginbtn.position((displayWidth/2-50) + 40, displayHeight-170);
            this.signUpLink.position((displayWidth/2-50) + 5, displayHeight-150);
            this.signUpLink.mousePressed(()=>{
                gameState = "signUp";
                this.loginbtn.hide();
                this.signUpLink.hide();
            })

            this.loginbtn.mousePressed(()=>{ 
                gameState = "Home page";
            })
            this.signUpBtn.mousePressed(()=>{
                gameState = "Home page";
            })
        }
        if(gameState == "signUp"){
            username.position(displayWidth/2-50, displayHeight/2+90);
            password.position(displayWidth/2-50, (displayHeight/2)+120);
            
            this.signUpBtn.show();
            this.signUpBtn.position((displayWidth/2-50) + 40, displayHeight-170);
            this.loginbtn.show();
            this.loginLink.position((displayWidth/2-50) - 5, displayHeight-150);

            this.loginLink.mousePressed(()=>{
                gameState = "login";
                this.loginLink.hide();
                this.signUpBtn.hide();

                this.loginbtn.show();
                this.signUpLink.show();
                /*this.login.hide();
                this.signUpLink.hide();
            })
            
        }

        /*if(gameState == "Home page"){
            password.hide();
            username.hide();
            this.loginbtn.hide();
            this.loginLink.hide();
            this.signUpBtn.hide();
            this.signUpLink.hide();

            //this.welcomeSign.position();
            //console.log("yup");
            background(this.background2);
        }
    }

}*/