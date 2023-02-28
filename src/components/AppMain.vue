<script>
</script>

<template>
    <main class="container-fluid">
        <div class="row row-cols-2">

            <div class="col jumbo-img">
                <img src="../assets/274553154_1105430140257157_3928321238149580122_n.jpg" alt="blacksmith">
            </div>

            <div class="col pt-5 ">
                <div class="jumbo-text">
                    <h5 class="text-light pt-5">HANDMADE CUSTOM KITCHEN KNIVES AND TOOLS</h5>
                </div>
            </div>

        </div>
    </main>
</template>

<style lang="scss" scoped>
main{
    background-color: #030102;
    height: 100vh;


    .row{
         
        .jumbo-text{
            position: relative;

            h5{
                position: absolute;
                right: 10rem;
                top: 300px; 
            }
        }

        .jumbo-img img{
            
            max-height: 100vh;
        }

    }
}

</style>