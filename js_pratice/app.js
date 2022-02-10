const h1 = document.querySelector(".text h1");

const superEventHandler = {
    MouseEnter:function() {
        h1.innerText = "The Mouse is here!";
        h1.style.color = "turquoise"
    },
    MouseLeave:function() {
        h1.innerText = "The Mouse is gone!";
        h1.style.color = "skyblue";
    },
    WindowResize:function() {
        h1.innerText = "You just resized!"
        h1.style.color = "purple";
    },
    ContextMenu:function() {
        h1.innerText = "That was a right click!";
        h1.style.color = "orangered";
    }
};
h1.addEventListener("mouseenter",superEventHandler.MouseEnter);
h1.addEventListener("mouseleave",superEventHandler.MouseLeave);
window.addEventListener("resize",superEventHandler.WindowResize);
window.addEventListener("contextmenu",superEventHandler.ContextMenu);