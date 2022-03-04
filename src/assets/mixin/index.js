// 全局混入
import varScss from "@/assets/scss/var.scss"; //scss全局变量
import {mapState} from "vuex";
import response from "@/api/response";

export default {
    data() {
        return {
            varCss: varScss,
        };
    },
    mounted() {
        this.$bus.$on('socketRes', (data) => {
            response(data,this,this.$options.name)
        })
    },
    destroyed() {
        this.$bus.$off('socketRes')
    },
    computed: {
        ...mapState("layout", {
            isMob: (state) => {
                return state.device === "mobile";
            },
        }),
    },
    methods: {
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex % 2 == 0) {
                return "warning-row";
            } else {
                return "success-row";
            }
        },
    },
};
