jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SalesOrderSet in the list
// * All 3 SalesOrderSet have at least one ToLineItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"full/stack/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"full/stack/test/integration/pages/App",
	"full/stack/test/integration/pages/Browser",
	"full/stack/test/integration/pages/Master",
	"full/stack/test/integration/pages/Detail",
	"full/stack/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "full.stack.view."
	});

	sap.ui.require([
		"full/stack/test/integration/MasterJourney",
		"full/stack/test/integration/NavigationJourney",
		"full/stack/test/integration/NotFoundJourney",
		"full/stack/test/integration/BusyJourney",
		"full/stack/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});