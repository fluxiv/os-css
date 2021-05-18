<template>
    <div id="login">
        <div class="form">
            <img src="@/assets/profile/1.jpg" alt="user picture">
            <h2 class="title is-3">{{this.UserName}}</h2>
            <div class="flex">
                <b-field>
                    <b-input type="password"
                        placeholder="Password"
                        password-reveal>
                    </b-input>
                </b-field>
                
                <b-button type="is-primary">
                    <b-icon icon="chevron-right">
                    </b-icon>
                </b-button>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return{
                name: 'arroz',
                UserName: 'Teste',
                UrlPhotos: [
                    "../assets/login/1.jpg", 
                    "../assets/login/2.jpg", 
                    "../assets/login/3.jpg", 
                    "../assets/login/4.jpg"
                ]
            }
        },
        mounted: function () {
            let arroz = Math.floor(Math.random() * 3);
            let bg = document.querySelector("#login");
            bg.style.backgroundImage = `url(" ${this.UrlPhotos[arroz]} ")`;
        }
    }
</script>

<style lang="scss" scoped>
    #login{
        background-image: url();
        background-size: cover;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .form{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: column;
            width: 50vw;
            padding: 3vw;
            border-radius: 10px;
            height: 50vh;
            background-color: rgba(255, 255, 255, .15);  
            box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
            backdrop-filter: blur(5px);
            img{
                width: 84px;
                height: 84px;
                border-radius: 50%;
                border: 2px solid #fff;
                margin-bottom: 16px;
            }
            h2{
                font-family: 'Padauk', sans-serif;
                font-weight: bold;
                color: #fff;
            }
            .label:not(:last-child){
                text-align: center !important;
            }
            .flex{
                display: flex;
            }
        }
    }
</style>