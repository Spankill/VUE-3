<template>
    <footer>
        <div class="footer">
            <h1>Tasty foody Kenya</h1>

            <div class="container">
                <div class="containerX">
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet <br> consectetur adipisicing elit. At alias <br> quo corrupti
                        reprehenderit ab.</p>
                    <div class="social">
                        <div class="soc facebook"></div>
                        <div class="soc twitter"></div>
                        <div class="soc instagram"></div>
                        <div class="soc pinterest"></div>
                        <div class="soc linkedin"></div>

                    </div>
                </div>
                <div class="containerX ">
                    <h2>New Menu</h2>
                    <p>
                        Lorem ipsum dolor sit amet <br> consectetur adipisicing elit. Aperiam <br> voluptate tenetur
                        aliquid optio, <br> labore nisi dolore alias ratione sed unde.
                    </p>
                </div>
                <div class="containerX ">
                    <h2>Contact Us</h2>
                    <p><img src="#" alt="">77 Mountain park, California, <br>USA</p>
                    <p><img src="#" alt="">+254 736782638</p>
                    <p><img src="#" alt="">onesoft.support@gmail.com</p>
                </div>
                <div class="containerX ">
                    <h2>Opening Hours</h2>
                    <h3>Monday-Thursday</h3>
                    <p>7:30am - 5:00pm</p>
                    <h3>Thursday - Friday</h3>
                    <p>8:00am - 3:30pm</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
.footer {
    background: var(--gray-color);
    color: white;
    text-align: center;
    padding: 1rem;
    position: relative;
    bottom: 0;
    width: 100%;
    height: 20%;
}

/* .footer {
    width: 100%;
    height: 250px;
    background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("./images/LOGO FINAL.png");
    background-size: cover;
} */

.footer h1 {
    text-align: center;
    color: #ff7300;
    margin-top: 0px;
    font-size: 15px;
}

.container {
    background-color: #000000;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 2px;
}

.container .containerX {
    width: 100%;
    height: 100%;
    /* border: 1px solid #ffffff; */
}

.containerX h2 {
    color: #ff7300;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}

.containerX p {
    text-align: center;
    color: #ffffff;
}

.con1 .social {
    width: 100%;
    height: 160px;
    margin-top: 5px;
}

.social .soc {
    width: 20%;
    height: 100%;
}

.facebook {
    background-image: url("#");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.twitter {
    background-image: url("twitter.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.instagram {
    background-image: url("instagram.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.pinterest {
    background-image: url("pinterest.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.linkedin {
    background-image: url("linkedin.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.con3 p {
    text-align: start;
    margin-left: 20px;
}

.con3 p img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

.con4 h3 {
    color: #ffffff;
    text-align: start;
    margin-left: 15px;
}

.con4 p {
    color: #818181;
    text-align: start;
    margin-left: 15px;
}

@media screen and (max-width: 580px) {
    .footer {
        width: 100%;
        height: auto;
    }

    .footer .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-left: 0px;
        height: auto;
    }

    .footer h1 {
        font-size: 35px;
        margin-top: 30px;
        text-align: center;
    }

    .container .containerX {
        width: 100%;
    }

    .con1 .social {
        width: 100%;
    }

    .con3 p {
        text-align: center;
    }

    .con4 h3 {
        text-align: center;
    }

    .con4 p {
        text-align: center;
    }


}
</style>