// ==UserScript==
// @name         rand
// @namespace    none
// @version      v1.0-alpha1.2
// @description  try to take over the world, but with randomness!
// @author       ccjt
// @match        http://multiplayerpiano.org/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAAAXNSR0IArs4c6QAAAddJREFUeF7tW9GSwyAIPP//o+2kc85YBxCJoInbx1NTWXdZiL2Uc85/B38SAAADIAHkAC4HppTIoaIabrwsuuZdcziVlTHqOVHKFJMgt/l649rgqHnScyTgZpoWAJBscBYDOCkcwwAA8O+0LaMewQAq4Vhd4JEAjGbvAhh3ujUIj2AAACAq5dE6oAWxXU+5zavqAADAsOjKFz2LnFn1Uc8KqQS5PHI0AFfw2zdD3vTb4fl4JRb5TrD0/VG9voZhIQxoA98JCFcAeoH2xjUneHeOCwBcYKN/vxucZv10AHoNTvH+enOa0loTjGWOGwDF56mA646xHo+q/3/An+0CXGPTBioxwXKS1jVuDNAA0cpAYos1wN46VwC0p1zfC0TXCG4A1LU+lfDIzky4ROmdpHXcFQBNkNQrMmswlnVLAaAqxFdJQMMArTwsp6tZE8KA3d4EL60DpIz/ikKIqwAtJbKGwnfnTJdAr7hp5bCi+HGVAJf4SqArix5yb7N7AYmSO/T/7f5cJXBXnxHrAUCkBCJOdPQ7wAAwILr7GOWo83xIABKABPBrcfxa3DnRbv14uABcAC4AF4ALbJ2mnTcHF4ALwAXOcAHqPuJ7iXOKBLj/UTgCAOly9gMqtidxtwneUgAAAABJRU5ErkJggg==
// @grant        none
// ==/UserScript==

MPP.client.on("a", function (msg) {
    let args = msg.a.split(" ");
    let cmd = args[0].toLowerCase();
    // cmds
    if (msg.p.id === MPP.client.participantId) {
        if (cmd == "dice") {
            MPP.chat.send(`${Math.floor(Math.random() * 6)}`)
        }
        if (cmd == "rand") {
            if (args.length == 1 || args.length == 0) {
                MPP.chat.send("please specify 2 values *exactly!*")
                MPP.chat.send("example: rand 1 6")
                MPP.chat.send("^ this will pick a **random** number between from *1* to *6*")
            } else {
                MPP.chat.send(Math.floor(Math.random() * (parseInt(args[2]) - parseInt(args[1]) + 1) + parseInt(args[2])))
            }
        }
    }
});
