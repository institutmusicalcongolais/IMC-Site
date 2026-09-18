/* =========================================================
   INSTITUT MUSICAL CONGOLAIS — IMC
   SCRIPT PRINCIPAL
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ÉLÉMENTS DU MENU
    ===================================================== */

    const menuButton = document.getElementById("menuButton");
    const mainMenu = document.getElementById("mainMenu");

    const topsButton = document.getElementById("topsButton");
    const topsSubmenu = document.getElementById("topsSubmenu");
    const topsArrow = document.getElementById("topsArrow");

    const certificationsButton =
        document.getElementById("certificationsButton");

    const certificationsSubmenu =
        document.getElementById("certificationsSubmenu");

    const certificationsArrow =
        document.getElementById("certificationsArrow");


    /* =====================================================
       OUVRIR / FERMER LE MENU PRINCIPAL
    ===================================================== */

    if (menuButton && mainMenu) {

        menuButton.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen =
                mainMenu.classList.contains("active");


            if (isOpen) {

                closeMainMenu();

            } else {

                openMainMenu();

            }

        });

    }


    /* =====================================================
       OUVRIR LE MENU
    ===================================================== */

    function openMainMenu() {

        mainMenu.classList.add("active");

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

    }


    /* =====================================================
       FERMER LE MENU
    ===================================================== */

    function closeMainMenu() {

        mainMenu.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        closeTops();

        closeCertifications();

    }


    /* =====================================================
       LES TOPS IMC
    ===================================================== */

    if (topsButton && topsSubmenu) {

        topsButton.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen =
                topsSubmenu.classList.contains("active");


            /* Fermer les certifications */

            closeCertifications();


            if (isOpen) {

                closeTops();

            } else {

                openTops();

            }

        });

    }


    function openTops() {

        topsSubmenu.classList.add("active");

        topsButton.classList.add("active");

        topsButton.setAttribute(
            "aria-expanded",
            "true"
        );

        if (topsArrow) {

            topsArrow.textContent = "⌃";

        }

    }


    function closeTops() {

        topsSubmenu.classList.remove("active");

        topsButton.classList.remove("active");

        topsButton.setAttribute(
            "aria-expanded",
            "false"
        );

        if (topsArrow) {

            topsArrow.textContent = "⌄";

        }

    }


    /* =====================================================
       LES CERTIFICATIONS IMC
    ===================================================== */

    if (
        certificationsButton &&
        certificationsSubmenu
    ) {

        certificationsButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const isOpen =
                    certificationsSubmenu.classList.contains(
                        "active"
                    );


                /* Fermer les Tops */

                closeTops();


                if (isOpen) {

                    closeCertifications();

                } else {

                    openCertifications();

                }

            }
        );

    }


    function openCertifications() {

        certificationsSubmenu.classList.add(
            "active"
        );

        certificationsButton.classList.add(
            "active"
        );

        certificationsButton.setAttribute(
            "aria-expanded",
            "true"
        );

        if (certificationsArrow) {

            certificationsArrow.textContent = "⌃";

        }

    }


    function closeCertifications() {

        certificationsSubmenu.classList.remove(
            "active"
        );

        certificationsButton.classList.remove(
            "active"
        );

        certificationsButton.setAttribute(
            "aria-expanded",
            "false"
        );

        if (certificationsArrow) {

            certificationsArrow.textContent = "⌄";

        }

    }


    /* =====================================================
       FERMER LE MENU EN CLIQUANT À L'EXTÉRIEUR
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {


            if (
                mainMenu &&
                menuButton &&
                !mainMenu.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {

                closeMainMenu();

            }

        }
    );


    /* =====================================================
       FERMER LE MENU AVEC LA TOUCHE ÉCHAP
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeMainMenu();

            }

        }
    );


    /* =====================================================
       FERMER LE MENU APRÈS AVOIR CLIQUÉ SUR UN LIEN
    ===================================================== */

    if (mainMenu) {

        const menuLinks =
            mainMenu.querySelectorAll("a");


        menuLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    closeMainMenu();

                }
            );

        });

    }


});