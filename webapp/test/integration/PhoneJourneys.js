jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"full/stack/test/integration/NavigationJourneyPhone",
		"full/stack/test/integration/NotFoundJourneyPhone",
		"full/stack/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});