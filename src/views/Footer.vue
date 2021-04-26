<template>
    <footer id="footerSection">
            
            <div id="footer">
               
                <nav>
                    <ul id="footerNavibar">
                        <a href="/#/" target="_blank"><li>Home</li></a>
                        <a href="/#/emoji-messenger" target="_blank"><li>My app</li></a>
                    </ul>
                </nav>
                
                
                <div id="stopka">Copyright &copy; 2021 Michał Płócienniczak. <br>All rights reserved.</div>
                <div id="stopka2">Business email address: <a href="mailto:biuro@mpcoding.pl" target="_blank">biuro@mpcoding.pl</a></div>
                
            </div>
        </footer>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style scoped>
#footer {
       max-width: 800px;
       text-align: center;
       align-self: center;
         margin-left: auto;
         margin-right: auto;
        
    }
    #footerSection {
         width: 100%;
        padding-top: 90px;
        padding-bottom: 90px;
        background: rgb(40,40,40);
        color: white;
    }
    #footerNavibar {
        padding: 0;
        clear: both;
        max-width: 220px;
        list-style-type: none;
        text-align: center;
        align-self: center;
        margin-left: auto;
        margin-right: auto;
    }
    #footerNavibar li {
        width: 100px;
        margin: 5px;
        color: gray;
        transition-duration: 400ms;
        cursor: pointer;
        font-family: 'Nunito', sans-serif;
        font-size: 17px;
        float: left;
        text-align: center;
        background: rgb(40, 40, 40);
    }
    #footerNavibar li:hover {
        transition-duration: 400ms;
        color: rgb(255, 189, 0);
    }
    #stopka {
        clear: both;
    }
    #stopka2 {
        color: lightgray;
        font-size: 13px;
    }
    #stopka2 a {
        text-decoration: underline;
        color: lightgray;
    }
    @media screen and (max-width: 599px) {
            #footerNavibar {
                padding: 0;
                width: 220px;
                align-self: center;
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                float: none;
                clear: both;
            }

            #footerNavibar li{
                width: 100px;
                font-size: 14px;
                margin: 2.5;
            }
            
        }
</style>