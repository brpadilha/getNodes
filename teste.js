function getNodes() {
  const text = document.getElementById("text").value;
  // '<ol><li><a href="/node/4478188">Questão MAT 01</a></li><li><a href="/node/4478189">Questão MAT 02</a></li><li><a href="/node/4478190">Questão MAT 03</a></li><li><a href="/node/4478191">Questão MAT 04</a></li><li><a href="/node/4478192">Questão MAT 05</a></li><li><a href="/node/4478193">Questão MAT 06</a></li><li><a href="/node/4478194">Questão FÍS 01</a></li><li><a href="/node/4478195">Questão FÍS 02</a></li><li><a href="/node/4478196">Questão FÍS 03</a></li><li><a href="/node/4478197">Questão FÍS 04</a></li><li><a href="/node/4478198">Questão FÍS 05</a></li><li><a href="/node/4478199">Questão FÍS 06</a></li><li><a href="/node/4478200">Questão QUÍ 01</a></li><li><a href="/node/4478201">Questão QUÍ 02</a></li><li><a href="/node/4478202">Questão QUÍ 03</a></li><li><a href="/node/4478203">Questão QUÍ 04</a></li><li><a href="/node/4478204">Questão QUÍ 05</a></li><li><a href="/node/4478205">Questão QUÍ 06</a></li><li><a href="/node/4478206">Questão BIO 01</a></li><li><a href="/node/4478207">Questão BIO 02</a></li><li><a href="/node/4478208">Questão BIO 03</a></li><li><a href="/node/4478209">Questão BIO 04</a></li><li><a href="/node/4478210">Questão BIO 05</a></li><li><a href="/node/4478211">Questão BIO 06</a></li><li><a href="/node/4478212">Questão HIS 01</a></li><li><a href="/node/4478213">Questão HIS 02</a></li><li><a href="/node/4478214">Questão HIS 03</a></li><li><a href="/node/4478215">Questão HIS 04</a></li><li><a href="/node/4478216">Questão HIS 05</a></li><li><a href="/node/4478217">Questão HIS 06</a></li><li><a href="/node/4478218">Questão GEO 01</a></li><li><a href="/node/4478219">Questão GEO 02</a></li><li><a href="/node/4478220">Questão GEO 03</a></li><li><a href="/node/4478221">Questão GEO 04</a></li><li><a href="/node/4478222">Questão GEO 05</a></li><li><a href="/node/4478223">Questão GEO 06</a></li></ol>';
  var thenum = text.match(/\d+/g);
  let newarray = [];
  for (let index = 0; index < thenum.length; index++) {
    if (index % 2 == 0) {
      PostarTabela.innerHTML += `${thenum[index]} <br>`;
    }
  }
}
