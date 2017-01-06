/**
 * @preserve
 *
 *                                      .,,,;;,'''..
 *                                  .'','...     ..',,,.
 *                                .,,,,,,',,',;;:;,.  .,l,
 *                               .,',.     ...     ,;,   :l.
 *                              ':;.    .'.:do;;.    .c   ol;'.
 *       ';;'                   ;.;    ', .dkl';,    .c   :; .'.',::,,'''.
 *      ',,;;;,.                ; .,'     .'''.    .'.   .d;''.''''.
 *     .oxddl;::,,.             ',  .'''.   .... .'.   ,:;..
 *      .'cOX0OOkdoc.            .,'.   .. .....     'lc.
 *     .:;,,::co0XOko'              ....''..'.'''''''.
 *     .dxk0KKdc:cdOXKl............. .. ..,c....
 *      .',lxOOxl:'':xkl,',......'....    ,'.
 *           .';:oo:...                        .
 *                .cd,      ╔═╗┌┬┐┬┌┬┐┌─┐┬─┐    .
 *                  .l;     ║╣  │││ │ │ │├┬┘    '
 *                    'l.   ╚═╝─┴┘┴ ┴ └─┘┴└─   '.
 *                     .o.                   ...
 *                      .''''','.;:''.........
 *                           .'  .l
 *                          .:.   l'
 *                         .:.    .l.
 *                        .x:      :k;,.
 *                        cxlc;    cdc,,;;.
 *                       'l :..   .c  ,
 *                       o.
 *                      .,
 *
 *              ╦ ╦┬ ┬┌┐ ┬─┐┬┌┬┐  ╔═╗┌┐  ┬┌─┐┌─┐┌┬┐┌─┐
 *              ╠═╣└┬┘├┴┐├┬┘│ ││  ║ ║├┴┐ │├┤ │   │ └─┐
 *              ╩ ╩ ┴ └─┘┴└─┴─┴┘  ╚═╝└─┘└┘└─┘└─┘ ┴ └─┘
 *
 *
 * Created by Valentin on 10/22/14.
 *
 * Copyright (c) 2015 Valentin Heun
 *
 * All ascii characters above must be included in any redistribution.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/*********************************************************************************************************************
 ******************************************** TODOS *******************************************************************
 **********************************************************************************************************************

 **
 * TODO -
 **

 **********************************************************************************************************************
 ******************************************** GUI content *********************+++*************************************
 **********************************************************************************************************************/


var freezeButtonImage = [];
var guiButtonImage = [];
var preferencesButtonImage = [];
var reloadButtonImage = [];
var resetButtonImage = [];
var unconstButtonImage = [];
var editingButtonImage = [];
var pocketButtonImage = [];
var loadNewUiImage = [];
var blockTabImage = [];
var memoryWebButtonImage = [];
var pocketButtonImage = [];

/**********************************************************************************************************************
 **********************************************************************************************************************/

/**
 * @desc
 **/

function GUI() {

    preload(freezeButtonImage,
        'png/freeze.png', 'png/freezeOver.png', 'png/freezeSelect.png', 'png/freezeEmpty.png'
    );
    preload(guiButtonImage,
        'png/intOneOver.png', 'png/intOneSelect.png', 'png/intTwoOver.png', 'png/intTwoSelect.png', 'png/intEmpty.png', 'png/intThree.png'
    );

    preload(pocketButtonImage,
        'png/pocket.png', 'png/pocketOver.png', 'png/pocketSelect.png', 'png/pocketEmpty.png', 'png/blockPocket.png', 'png/blockPocketOver.png', 'png/blockPocketSelect.png'
    );

    preload(preferencesButtonImage,
        'png/pref.png', 'png/prefOver.png', 'png/prefSelect.png', 'png/prefEmpty.png', 'png/blockPref.png', 'png/blockPrefOver.png', 'png/blockPrefSelect.png'
    );
    preload(reloadButtonImage,
        'png/reloadOver.png', 'png/reload.png', 'png/reloadEmpty.png'
    );
    preload(resetButtonImage,
        'png/reset.png', 'png/resetOver.png', 'png/resetSelect.png', 'png/resetEmpty.png'
    );

    preload(unconstButtonImage,
        'png/unconst.png', 'png/unconstOver.png', 'png/unconstSelect.png', 'png/unconstEmpty.png'
    );

    preload(loadNewUiImage,
        'png/load.png', 'png/loadOver.png'
    );

    preload(blockTabImage,
        'png/iconBlocks.png', 'png/iconEvents.png', 'png/iconSignals.png', 'png/iconMath.png', 'png/iconWeb.png'
    );

    preload(memoryWebButtonImage,
        'png/memoryWeb.png', 'png/memoryWebOver.png', 'png/memoryWebSelect.png'
    );

    document.getElementById("guiButtonImage1").addEventListener("touchstart", function () {
        document.getElementById('guiButtonImage').src = guiButtonImage[0].src;
        // kickoff();
    });
    ec++;

    document.getElementById("guiButtonImage1").addEventListener("touchend", function () {
        document.getElementById('guiButtonImage').src = guiButtonImage[1].src;

        globalStates.guiState = "ui";

        if (globalStates.guiState !== "logic") {
            if (DEBUG_DATACRAFTING) {
                craftingBoardVisible(); // TODO: BEN DEBUG - revert to previous line
            } else {
                craftingBoardHide();
            }
        }
    });
    ec++;

    document.getElementById("guiButtonImage2").addEventListener("touchstart", function () {
        document.getElementById('guiButtonImage').src = guiButtonImage[2].src;
    });
    ec++;

    document.getElementById("guiButtonImage2").addEventListener("touchend", function () {
        document.getElementById('guiButtonImage').src = guiButtonImage[3].src;
        globalStates.guiState = "node";

        craftingBoardHide();
    });
    ec++;

    document.getElementById("extendedTrackingSwitch").addEventListener("change", function () {
        if (document.getElementById("extendedTrackingSwitch").checked) {
            globalStates.extendedTracking = true;
            window.location.href = "of://extendedTrackingOn";
        } else {
            globalStates.extendedTracking = false;
            window.location.href = "of://extendedTrackingOff";
        }
    });
    ec++;

    document.getElementById("editingModeSwitch").addEventListener("change", function () {

        if (document.getElementById("editingModeSwitch").checked) {
            addEventHandlers();
            globalStates.editingMode = true;
            window.location.href = "of://developerOn";
            globalMatrix.matrixtouchOn = "";
        } else {
            removeEventHandlers();
            globalStates.editingMode = false;
            window.location.href = "of://developerOff";
        }
    });
    ec++;

    document.getElementById("turnOffUISwitch").addEventListener("change", function () {
        if (document.getElementById("turnOffUISwitch").checked) {
            globalStates.UIOffMode = true;
            timeForContentLoaded = 240000;
            window.location.href = "of://clearSkyOn";

            document.body.classList.add('clearSky');
        } else {
            globalStates.UIOffMode = false;
            timeForContentLoaded = 240;
            window.location.href = "of://clearSkyOff";

            document.body.classList.remove('clearSky');
        }
    });
    ec++;

    document.getElementById("resetButton").addEventListener("touchstart", function () {
        document.getElementById('resetButton').src = resetButtonImage[1].src;

    });
    ec++;

    document.getElementById("resetButton").addEventListener("touchend", function () {

        document.getElementById('resetButton').src = resetButtonImage[0].src;
      //  window.location.href = "of://loadNewUI"+globalStates.newURLText;


        for (var key in objects) {
            if (!globalObjects.hasOwnProperty(key)) {
                continue;
            }

            var tempResetObject = objects[key];

            if (globalStates.guiState ==="ui") {
                tempResetObject.matrix = [];

                tempResetObject.x = 0;
                tempResetObject.y = 0;
                tempResetObject.scale = 1;

                sendResetContent(key, key, "ui");
            }

            if (globalStates.guiState ==="node") {
            for (var subKey in tempResetObject.nodes) {
                var tempResetValue = tempResetObject.nodes[subKey];



                    tempResetValue.matrix = [];

                   // tempResetValue.x = randomIntInc(0, 200) - 100;
                   // tempResetValue.y = randomIntInc(0, 200) - 100;
                    tempResetValue.scale = 1;

                    sendResetContent(key, subKey, tempResetValue.type);
                }
            }

        }

    });
    ec++;

    /**
     * @desc
     * @param object
     * @param node
     **/

    function sendResetContent(object, node, type) {
// generate action for all links to be reloaded after upload

        var tempThisObject = {};
        if (type === "node") {
            tempThisObject = objects[object].nodes[node];
        } else if(type === "logic"){
            // todo might result in error??
            tempThisObject = objects[object].nodes[node];
        }
        else if (type === "ui"){
            tempThisObject = objects[object];
        }
        var content = {};
        content.x = tempThisObject.x;
        content.y = tempThisObject.y;
        content.scale = tempThisObject.scale;

        if (typeof tempThisObject.matrix === "object") {
            content.matrix = tempThisObject.matrix;
        }

        if (typeof content.x === "number" && typeof content.y === "number" && typeof content.scale === "number") {
            postData('http://' + objects[object].ip + ':' + httpPort + '/object/' + object + "/size/" + node, content);
        }

    }

    document.getElementById("unconstButton").addEventListener("touchstart", function () {
        document.getElementById('unconstButton').src = unconstButtonImage[1].src;
    });
    ec++;

    document.getElementById("unconstButton").addEventListener("touchend", function () {
        if (globalStates.unconstrainedPositioning === true) {
            document.getElementById('unconstButton').src = unconstButtonImage[0].src;
            globalStates.unconstrainedPositioning = false;

        }
        else {
            document.getElementById('unconstButton').src = unconstButtonImage[2].src;
            globalStates.unconstrainedPositioning = true;

        }

    });
    ec++;

    document.getElementById("loadNewUI").addEventListener("touchstart", function () {
        if (globalStates.extendedTracking === true) {
            document.getElementById('loadNewUI').src = loadNewUiImage[3].src;
        }
        else {
            document.getElementById('loadNewUI').src = loadNewUiImage[1].src;
        }
    });
    ec++;

    document.getElementById("loadNewUI").addEventListener("touchend", function () {
        document.getElementById('loadNewUI').src = loadNewUiImage[0].src;
            window.location.href = "of://loadNewUI"+globalStates.newURLText;

    });
    ec++;

    document.getElementById("preferencesButton").addEventListener("touchstart", function () {
        document.getElementById('preferencesButton').src = preferencesButtonImage[1].src;
    });
    ec++;

    document.getElementById("preferencesButton").addEventListener("touchend", function () {

        if (globalStates.guiState === "logic") {
            hideBlockSettings();
            document.getElementById('preferencesButton').src = preferencesButtonImage[4].src;
            return;
        }

        if (globalStates.preferencesButtonState === true) {
            preferencesHide();

            // todo why is it visibility and not display?

            overlayDiv.style.visibility = "visible";

            if (globalStates.editingMode) {
                document.getElementById('resetButton').style.visibility = "visible";
                document.getElementById('unconstButton').style.visibility = "visible";
                document.getElementById('resetButtonDiv').style.display = "inline";
                document.getElementById('unconstButtonDiv').style.display = "inline";
            }

            if (globalStates.UIOffMode) {
                // If clearSky is hiding the buttons, make sure the buttons are hidden as preferences exits
                document.body.classList.add('clearSky');
            }

        }
        else {

            document.getElementById('resetButton').style.visibility = "hidden";
            document.getElementById('unconstButton').style.visibility = "hidden";
            document.getElementById('resetButtonDiv').style.display = "none";
            document.getElementById('unconstButtonDiv').style.display = "none";

            addElementInPreferences();

            preferencesVisible();

            overlayDiv.style.visibility = "hidden";

            if (globalStates.UIOffMode) {
                // If clearSky is hiding the buttons, make sure the buttons are
                // hidden as preferences appears.
                document.body.classList.add('clearSky');
            }

        }

    });
    ec++;

    /**
    * Freeze Button
     */

    document.getElementById("freezeButton").addEventListener("touchstart", function () {
        document.getElementById('freezeButton').src = freezeButtonImage[1].src;
    });
    ec++;
    document.getElementById("freezeButton").addEventListener("touchend", function () {
        if (globalStates.freezeButtonState === true) {
            document.getElementById('freezeButton').src = freezeButtonImage[0].src;
            globalStates.freezeButtonState = false;
            var memoryBackground = document.querySelector('.memoryBackground');
            memoryBackground.innerHTML = '';
            window.location.href = "of://unfreeze";
        }
        else {
            document.getElementById('freezeButton').src = freezeButtonImage[2].src;
            globalStates.freezeButtonState = true;
            window.location.href = "of://freeze";
        }

    });
    ec++;

    document.getElementById("reloadButton").addEventListener("touchstart", function () {
        document.getElementById('reloadButton').src = reloadButtonImage[0].src;
        window.location.href = "of://reload";
    });
    ec++;

    document.getElementById("reloadButton").addEventListener("touchend", function () {
        // location.reload(true);
    });
    ec++;

    /**
     * Pocket Button
     */

    var thisPocket =  document.getElementById("pocketButton");

    thisPocket.addEventListener("pointerdown", function () {console.log("pointerdown");
        if (globalStates.guiState !== "node" && globalStates.guiState !== "logic") {
            return;
        }

        globalStates.pocketButtonDown = true;

    }, false);

    thisPocket.addEventListener("pointerup", function () { console.log("pointerup");
        if (globalStates.guiState !== "node" && globalStates.guiState !== "logic") {
            return;
        }

       if(globalStates.pocketButtonDown){
           pocketButtonAction()
       }
        globalStates.pocketButtonDown = false;
        globalStates.pocketButtonUp = true;
    }, false);

    thisPocket.addEventListener("pointerenter", function () { console.log("pointerenter");
        if (globalStates.guiState !== "node" && globalStates.guiState !== "logic") {
            return;
        }

        var indexChange = (globalStates.guiState === "logic") ? 4 : 0;
        if (!globalStates.UIOffMode) document.getElementById('pocketButton').src = pocketButtonImage[1+indexChange].src;

        // this is where the virtual point disapears!


        if (pocketItem.pocket.nodes[pocketItemId]) {
            pocketItem.pocket.objectVisible = false;


                hideTransformed("pocket", pocketItemId, pocketItem.pocket.nodes[pocketItemId], "logic");
                delete pocketItem.pocket.nodes[pocketItemId];
            }



    }, false);


    thisPocket.addEventListener("pointerleave", function (evt) { console.log("pointerleave");
        if (globalStates.guiState !== "node" && globalStates.guiState !== "logic") {
            return;
        }

        var indexChange = (globalStates.guiState === "logic") ? 4 : 0;
        if (globalStates.pocketButtonState === true) {
            if (!globalStates.UIOffMode)    document.getElementById('pocketButton').src = pocketButtonImage[0+indexChange].src;
        }
        else {
            if (!globalStates.UIOffMode)    document.getElementById('pocketButton').src = pocketButtonImage[2+indexChange].src;
        }

        // this is where the virtual point creates object

        // todo for testing only
        if (globalStates.pocketButtonDown === true && globalStates.guiState ==="node") {

            pocketItemId = uuidTime();
            console.log(pocketItemId);
            pocketItem.pocket.nodes[pocketItemId] = new Logic();

            var thisItem = pocketItem.pocket.nodes[pocketItemId];

            thisItem.x = globalStates.pointerPosition[0] - (globalStates.height / 2);
            thisItem.y = globalStates.pointerPosition[1] - (globalStates.width / 2);

            // else {
            // var matrixTouch =  screenCoordinatesToMatrixXY(thisItem, [evt.clientX,evt.clientY]);
            // thisItem.x = matrixTouch[0];
            // thisItem.y = matrixTouch[1];
            //}
            thisItem.loaded = false;

            var thisObject = pocketItem.pocket;
            // this is a work around to set the state of an objects to not being visible.
            thisObject.objectId = "pocket";
            thisObject.name = "pocket";
            thisObject.objectVisible = false;
            thisObject.screenZ = 1000;
            thisObject.fullScreen = false;
            thisObject.sendMatrix = false;
            thisObject.loaded = false;
            thisObject.integerVersion = 170;
            thisObject.matrix = [];
            // thisObject.nodes = {};
            thisObject.protocol = "R1";

           //
            //thisObject.visibleCounter = timeForContentLoaded;

            //addElement("pocket", pocketItemId, "nodes/" + thisItem.type + "/index.html",  pocketItem.pocket, "logic",globalStates);

        }
        setPocketPossition(evt);

        //TODO: this is a debug method to create random blocks by dragging out from the pocket button while in crafting mode. should be removed eventually.
        /*
        if (globalStates.pocketButtonDown === true && globalStates.guiState === "logic" && !globalStates.currentLogic.tempBlock) {
            console.log("create new block from pocket");

            // Returns a random integer between min (included) and max (excluded)
            // Using Math.round() will give you a non-uniform distribution!
            function getRandomInt(min, max) {
              min = Math.ceil(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min)) + min;
            }

            var blockWidth = getRandomInt(1,5); //1;
            var itemSelected = 0;

            createTempBlockOnPointer(blockWidth, evt.pageX, evt.pageY, itemSelected);
        }
        */

        // globalStates.pocketButtonDown = false;
       // globalStates.pocketButtonUp = false;
    }, false);
    ec++;

    function pocketButtonAction() {

        console.log("state: " + globalStates.pocketButtonState);

        var indexChange = (globalStates.guiState === "logic") ? 4 : 0;

        if (globalStates.pocketButtonState === true) {
            console.log("buttonon");
            if (!globalStates.UIOffMode)    document.getElementById('pocketButton').src = pocketButtonImage[0+indexChange].src;
            globalStates.pocketButtonState = false;

            if (globalStates.guiState === 'logic') {
                blockMenuVisible();
                console.log("blockMenuVisible");
            }
        }
        else {
            console.log("buttonoff");
            if (!globalStates.UIOffMode)    document.getElementById('pocketButton').src = pocketButtonImage[2+indexChange].src;
            globalStates.pocketButtonState = true;

            if (globalStates.guiState === 'logic') {
                blockMenuHide();
            }
        }

    }

    document.getElementById("reloadButton").addEventListener("touchstart", function () {
        if (!globalStates.UIOffMode)    document.getElementById('reloadButton').src = reloadButtonImage[0].src;
        window.location.href = "of://reload";
    });
    ec++;
    document.getElementById("reloadButton").addEventListener("touchend", function () {
        // location.reload(true);

        window.open("index.html?v=" + Math.floor((Math.random() * 100) + 1));
    });
    ec++;

    var memoryWebButton = document.getElementById('memoryWebButton');
    memoryWebButton.addEventListener('touchstart', function() {
        if (!globalStates.UIOffMode) {
            memoryWebButton.src = memoryWebButtonImage[1].src;
        }
    });

    ec++;
    memoryWebButton.addEventListener('touchend', function() {
        if (document.querySelector('.memoryWeb')) {
            if (!globalStates.UIOffMode) {
                memoryWebButton.src = memoryWebButtonImage[0].src
            }
            removeMemoryWeb();
        } else {
            if (!globalStates.UIOffMode) {
                memoryWebButton.src = memoryWebButtonImage[2].src
            }
            createMemoryWeb();
        }
    });
    ec++;

    cout("GUI");
}

/**
 * @desc
 **/



function preferencesHide() {
    document.getElementById('preferencesButton').src = preferencesButtonImage[0].src;
    globalStates.preferencesButtonState = false;
    document.getElementById("preferences").style.visibility = "hidden"; //= "hidden";
    document.getElementById("preferences").style.display = "none"; //= "hidden";
    clearInterval(globalStates.thisAndthat.interval);
    cout("preferencesHide");
}

/**
 * @desc
 **/

function preferencesVisible() {
    document.getElementById('preferencesButton').src = preferencesButtonImage[2].src;
    globalStates.preferencesButtonState = true;
    document.getElementById("preferences").style.visibility = "visible"; //
    document.getElementById("preferences").style.display = "inline"; //= "hidden";
   globalStates.thisAndthat.interval = setInterval(function() {
            addElementInPreferences();
    }, 200);
    cout("preferencesVisible");

}

/**********************************************************************************************************************
 ******************************************* datacrafting GUI  *******************************************************
 **********************************************************************************************************************/



/**********************************************************************************************************************
 **********************************************************************************************************************/

/**
 * @desc
 * @param array
 **/

function preload(array) {
    for (var i = 0; i < preload.arguments.length - 1; i++) {
        array[i] = new Image();
        array[i].src = preload.arguments[i + 1];
    }

    cout("preload");
}
