package org.bimserver.jsapi;

import org.bimserver.plugins.PluginException;
import org.bimserver.plugins.PluginManager;
import org.bimserver.plugins.web.AbstractWebModulePlugin;

public class JavaScriptApiWebModulePlugin extends AbstractWebModulePlugin {

	private boolean initialized;

	@Override
	public void init(PluginManager pluginManager) throws PluginException {
		super.init(pluginManager);
		initialized = true;
	}

	@Override
	public String getDescription() {
		return "BIMserver JavaScript API";
	}

	@Override
	public String getDefaultName() {
		return "BIMserver JavaScript API";
	}

	@Override
	public String getVersion() {
		return "0.5";
	}

	@Override
	public boolean isInitialized() {
		return initialized;
	}

	@Override
	public String getDefaultContextPath() {
		return "/jsapi";
	}

	@Override
	public String getIdentifier() {
		return "jsapi";
	}
}
