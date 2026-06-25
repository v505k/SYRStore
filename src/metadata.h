#pragma once
#include "common.h"

/**
 * strIpaFile: passthrough for .ipa basename/size in metadata.
 * bWriteJson: if false (-x p:<dir>), skip metadata.json but still write icon + manifest.plist when possible.
 */
bool GetMetadata(const string& strAppFolder, const string& strOutputDir, const string& strIpaFile, bool bWriteJson = true);
