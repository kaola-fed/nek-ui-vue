
<template>
    <div>
        <pre ><code ref="code"><slot></slot></code></pre>
        <el-button size="mini" class="kl-example__code-copy" @click="clip">
            复制代码
        </el-button>
    </div>
</template>
<script>
    import hljs from 'hljs';
    import Clipboard from 'clipboard';
    import tag_map from './tag-map';

    function replaceTag(source, tagMap) {
        Object.keys(tagMap).forEach((i) => {
            source = source
                .replace(new RegExp(`<${i}\(\\W+\)`, 'g'), `<${tagMap[i]}$1`)
                .replace(new RegExp(`<\/${i}>`, 'g'), `<\/${tagMap[i]}>`);
        });
        return source;
    }

    export default {
        name: 'klCode',
        props: {
            lang: {
                type: String,
                default: 'javascript'
            },
            bg: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                openScale: false,
                code: '',
                copied: false,
                docLang: this.$lang,
                title: 'Code'
            };
        },
        computed: {
            language() {
                if (this.lang == 'auto') {
                    return '';
                } 
                return this.lang;
            
            }
        },
        mounted() {
            this.code = this.$refs.code.innerHTML.replace(/\n/, '');
            this.$refs.code.innerHTML = this.code;
            hljs.highlightBlock(this.$refs.code);
        },
        methods: {
            /*复制*/
            clip () {
                const code = this.code.replace(/&lt;/g,'<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
                const clipboard = new Clipboard('.kl-example__code-copy', {
                    text () {
                        return code
                    }
                });

                clipboard.on('success', (e) => {
                    e.clearSelection();
                    clipboard.destroy();
                    this.copied = true;
                    this.$message.success('代码已复制到剪贴板');
                    setTimeout(() => {
                        this.copied = false;
                    }, 2000);
                });
            }
        }
    };
</script>
<style module>
@componet-namespace kl {

}
</style>