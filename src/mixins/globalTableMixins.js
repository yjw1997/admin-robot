let mixins = {
    data(){

    },
    methods:{
        deleteMixins(){
            this.dialogVisible=true
        },
        closeDialog(){
            this.dialogVisible=false
        },
        jumpPage(routerName,param){
            if(param){
                this.$router.push({path:routerName,query:param});
            }else{
                this.$router.push({path:routerName});
            }
        }
    }
}
export default mixins;
