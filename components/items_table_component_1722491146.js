/* Summary: Contains a section with:
- A title for the table
- A table with 6 rows and 2 columns. The first column of each row contains the item name on top and description under it. The second column of each row contains the item's price.
- If the user hovers over a price, it shows a blue button on the row labelled "Details"
*/

Vue.component("items_table_component_1722491146", {
    template: `
    <section id="items-table-component" class="py-8 bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500">
        <div class="max-w-4xl mx-auto px-4">
            <h2 id="costs-title" class="text-2xl font-bold mb-6 text-white text-center">Blockchain Analytics Solutions</h2>
            <div id="costs-table-container" class="overflow-x-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg">
                <table id="costs-table" class="table-auto w-full text-sm">
                    <thead id="costs-table-header">
                        <tr class="border-b border-white border-opacity-20">
                            <th id="description-header" class="px-6 py-4 text-left text-white font-semibold">Description</th>
                            <th id="cost-header" scope="col" class="px-6 py-4 text-right text-white font-semibold">Cost</th>
                        </tr>
                    </thead>
                    <tbody id="costs-table-body">
                        <tr class="group hover:bg-white hover:bg-opacity-10 transition-all duration-300" id="costs-row-1">
                            <th scope="row" class="px-6 py-4 text-left font-normal" id="costs-cell-description-1">
                                <div class="font-semibold mb-1 text-white" id="costs-link-1">
                                    <a class="hover:text-pink-200 transition-colors duration-300" href="details.html">Node Monitoring</a>
                                </div>
                                <p class="text-pink-100" id="costs-description-1">Real-time monitoring of blockchain nodes for uptime and performance.</p>
                            </th>
                            <td class="px-6 py-4 text-right font-semibold text-white" id="costs-cell-cost-1">
                                <span class="group-hover:opacity-0 transition-opacity">$499/mo</span>
                                <a href="details.html" class="absolute inset-0 flex items-center justify-end px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span class="bg-pink-500 text-white px-3 py-1 rounded-full text-xs">Details</span>
                                </a>
                            </td>
                        </tr>
                        <tr class="group hover:bg-white hover:bg-opacity-10 transition-all duration-300" id="costs-row-2">
                            <th scope="row" class="px-6 py-4 text-left font-normal" id="costs-cell-description-2">
                                <div class="font-semibold mb-1 text-white" id="costs-link-2">
                                    <a class="hover:text-pink-200 transition-colors duration-300" href="details.html">Smart Contract Auditing</a>
                                </div>
                                <p class="text-pink-100" id="costs-description-2">In-depth security reviews of smart contracts before deployment.</p>
                            </th>
                            <td class="px-6 py-4 text-right font-semibold text-white" id="costs-cell-cost-2">
                                <span class="group-hover:opacity-0 transition-opacity">$1999 per audit</span>
                                <a href="details.html" class="absolute inset-0 flex items-center justify-end px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span class="bg-pink-500 text-white px-3 py-1 rounded-full text-xs">Details</span>
                                </a>
                            </td>
                        </tr>
                        <tr class="group hover:bg-white hover:bg-opacity-10 transition-all duration-300" id="costs-row-3">
                            <th scope="row" class="px-6 py-4 text-left font-normal" id="costs-cell-description-3">
                                <div class="font-semibold mb-1 text-white" id="costs-link-3">
                                    <a class="hover:text-pink-200 transition-colors duration-300" href="details.html">On-Chain Data Analysis</a>
                                </div>
                                <p class="text-pink-100" id="costs-description-3">Gain insights from on-chain data like transactions, addresses, and tokens.</p>
                            </th>
                            <td class="px-6 py-4 text-right font-semibold text-white" id="costs-cell-cost-3">
                                <span class="group-hover:opacity-0 transition-opacity">$999/mo</span>
                                <a href="details.html" class="absolute inset-0 flex items-center justify-end px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span class="bg-pink-500 text-white px-3 py-1 rounded-full text-xs">Details</span>
                                </a>
                            </td>
                        </tr>
                        <tr class="group hover:bg-white hover:bg-opacity-10 transition-all duration-300" id="costs-row-4">
                            <th scope="row" class="px-6 py-4 text-left font-normal" id="costs-cell-description-4">
                                <div class="font-semibold mb-1 text-white" id="costs-link-4">
                                    <a class="hover:text-pink-200 transition-colors duration-300" href="details.html">Transaction Monitoring</a>
                                </div>
                                <p class="text-pink-100" id="costs-description-4">Track suspicious transactions and identify fraud patterns.</p>
                            </th>
                            <td class="px-6 py-4 text-right font-semibold text-white" id="costs-cell-cost-4">
                                <span class="group-hover:opacity-0 transition-opacity">$699/mo</span>
                                <a href="details.html" class="absolute inset-0 flex items-center justify-end px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span class="bg-pink-500 text-white px-3 py-1 rounded-full text-xs">Details</span>
                                </a>
                            </td>
                        </tr>
                        <tr class="group hover:bg-white hover:bg-opacity-10 transition-all duration-300" id="costs-row-5">
                            <th scope="row" class="px-6 py-4 text-left font-normal" id="costs-cell-description-5">
                                <div class="font-semibold mb-1 text-white" id="costs-link-5">
                                    <a class="hover:text-pink-200 transition-colors duration-300" href="details.html">Token Metrics</a>
                                </div>
                                <p class="text-pink-100" id="costs-description-5">Analyze token metrics like market cap, liquidity, and holder composition.</p>
                            </th>
                            <td class="px-6 py-4 text-right font-semibold text-white" id="costs-cell-cost-5">
                                <span class="group-hover:opacity-0 transition-opacity">$299/mo</span>
                                <a href="details.html" class="absolute inset-0 flex items-center justify-end px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span class="bg-pink-500 text-white px-3 py-1 rounded-full text-xs">Details</span>
                                </a>
                            </td>
                        </tr>
                        <tr class="group hover:bg-white hover:bg-opacity-10 transition-all duration-300" id="costs-row-6">
                            <th scope="row" class="px-6 py-4 text-left font-normal" id="costs-cell-description-6">
                                <div class="font-semibold mb-1 text-white" id="costs-link-6">
                                    <a class="hover:text-pink-200 transition-colors duration-300" href="details.html">Custom Analytics</a>
                                </div>
                                <p class="text-pink-100" id="costs-description-6">Build custom analytics dashboards for your unique blockchain needs.</p>
                            </th>
                            <td class="px-6 py-4 text-right font-semibold text-white" id="costs-cell-cost-6">
                                <span class="group-hover:opacity-0 transition-opacity">Custom pricing</span>
                                <a href="details.html" class="absolute inset-0 flex items-center justify-end px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span class="bg-pink-500 text-white px-3 py-1 rounded-full text-xs">Details</span>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot id="costs-table-footer">
                        <tr>
                            <th id="total-description" scope="row" class="px-6 py-4 text-left font-normal">
                                <p id="total-description-text" class="italic text-pink-200">Total in USD</p>
                            </th>
                            <td id="total-cost" class="px-6 py-4 text-right font-semibold text-lg text-white">Contact us for enterprise pricing</td>
                        </tr>
                    </tfoot>
                </table>
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
