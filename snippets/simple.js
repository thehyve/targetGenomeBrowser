var gB = tnt.board.genome()
    .species("human")
    .gene("ENSG00000157764")
    .width(950);

var cttvGenomeBrowser = targetGenomeBrowser();
cttvGenomeBrowser(gB, yourDiv);
