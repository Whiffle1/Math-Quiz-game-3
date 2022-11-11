var canvas = new fabric.Canvas('myCanvas')
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_imge_object - Img;

        block_imge_object.scaleToWidth(block_imge_width);
        block_imge_object.scaleToHeight(block_imge_hight);
        block_imge_object.set({
            top:block_y,
            left:block_x
        });
        canvas.add(block_imge_object);
    });
}
if(keyPressed == '82')
{
    new_image('rrl.png');
    console.log("r");
}
if(keyPressed == '71')
{
    new_image('rrl.png');
    console.log("g");
}
if(keyPressed == '89')
{
    new_image('rrl.png');
    console.log("y");
}
if(keyPressed == '80')
{
    new_image('rrl.png');
    console.log("p");
}
if(keyPressed == '66')
{
    new_image('rrl.png');
    console.log("b");
}