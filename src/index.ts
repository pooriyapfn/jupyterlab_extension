import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the 310_notebook extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '310_notebook:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension 310_notebook is activated!');
  }
};

export default plugin;
