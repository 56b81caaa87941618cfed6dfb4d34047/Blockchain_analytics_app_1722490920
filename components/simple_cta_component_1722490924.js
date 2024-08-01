/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722490924", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto lg:py-16 backdrop-blur-md bg-white/30 rounded-xl shadow-lg p-8">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white text-opacity-90 drop-shadow-lg">Unlock Real-Time Blockchain Analytics</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-medium text-white text-opacity-80 md:text-lg">Gain valuable insights into the latest blockchain data with our powerful analysis tools.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-800 bg-white bg-opacity-50 hover:bg-opacity-70 focus:ring-4 focus:ring-purple-300 font-bold rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105">Explore Blockchain Analytics</a>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
