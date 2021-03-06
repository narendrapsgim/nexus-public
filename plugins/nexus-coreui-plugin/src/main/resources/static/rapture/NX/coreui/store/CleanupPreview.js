/*
 * Sonatype Nexus (TM) Open Source Version
 * Copyright (c) 2008-present Sonatype, Inc.
 * All rights reserved. Includes the third-party code listed at http://links.sonatype.com/products/nexus/oss/attributions.
 *
 * This program and the accompanying materials are made available under the terms of the Eclipse Public License Version 1.0,
 * which accompanies this distribution and is available at http://www.eclipse.org/legal/epl-v10.html.
 *
 * Sonatype Nexus (TM) Professional Version is available from Sonatype, Inc. "Sonatype" and "Sonatype Nexus" are trademarks
 * of Sonatype, Inc. Apache Maven is a trademark of the Apache Software Foundation. M2eclipse is a trademark of the
 * Eclipse Foundation. All other trademarks are the property of their respective owners.
 */
/*global Ext, NX*/

/**
 * Cleanup preview.
 *
 * @since 3.14
 */
Ext.define('NX.coreui.store.CleanupPreview', {
  extend: 'Ext.data.Store',
  model: 'NX.coreui.model.ComponentPreview',

  proxy: {
    type: 'direct',

    api: {
      read: 'NX.direct.cleanup_CleanupPreview.previewCleanup'
    },

    reader: {
      type: 'json',
      rootProperty: 'data',
      successProperty: 'success'
    }
  },

  remote: true,
  autoLoad: false,

  buffered: true,
  pageSize: 50,

  remoteFilter: true,
  remoteSort: true,

  sorters: { property: 'name', direction: 'ASC' }
});
