export const json = '{\n' +
  '\t"type": "team",\n' +
  '\t"test": {\n' +
  '\t\t"testPage": "tools/testing/run-tests.htm",\n' +
  '\t\t"enabled": true\n' +
  '\t},\n' +
  '    "search": {\n' +
  '        "excludeFolders": [\n' +
  '\t\t\t".git",\n' +
  '\t\t\t"node_modules",\n' +
  '\t\t\t"tools/bin",\n' +
  '\t\t\t"tools/counts",\n' +
  '\t\t\t"tools/policheck",\n' +
  '\t\t\t"tools/tfs_build_extensions",\n' +
  '\t\t\t"tools/testing/jscoverage",\n' +
  '\t\t\t"tools/testing/qunit",\n' +
  '\t\t\t"tools/testing/chutzpah",\n' +
  '\t\t\t"server.net"\n' +
  '        ]\n' +
  '    },\n' +
  '\t"languages": {\n' +
  '\t\t"vs.languages.typescript": {\n' +
  '\t\t\t"validationSettings": [{\n' +
  '\t\t\t\t"scope":"/",\n' +
  '\t\t\t\t"noImplicitAny":true,\n' +
  '\t\t\t\t"noLib":false,\n' +
  '\t\t\t\t"extraLibs":[],\n' +
  '\t\t\t\t"semanticValidation":true,\n' +
  '\t\t\t\t"syntaxValidation":true,\n' +
  '\t\t\t\t"codeGenTarget":"ES5",\n' +
  '\t\t\t\t"moduleGenTarget":"",\n' +
  '\t\t\t\t"lint": {\n' +
  '                    "emptyBlocksWithoutComment": "warning",\n' +
  '                    "curlyBracketsMustNotBeOmitted": "warning",\n' +
  '                    "comparisonOperatorsNotStrict": "warning",\n' +
  '                    "missingSemicolon": "warning",\n' +
  '                    "unknownTypeOfResults": "warning",\n' +
  '                    "semicolonsInsteadOfBlocks": "warning",\n' +
  '                    "functionsInsideLoops": "warning",\n' +
  '                    "functionsWithoutReturnType": "warning",\n' +
  '                    "tripleSlashReferenceAlike": "warning",\n' +
  '                    "unusedImports": "warning",\n' +
  '                    "unusedVariables": "warning",\n' +
  '                    "unusedFunctions": "warning",\n' +
  '                    "unusedMembers": "warning"\n' +
  '                }\n' +
  '\t\t\t}, \n' +
  '\t\t\t{\n' +
  '\t\t\t\t"scope":"/client",\n' +
  '\t\t\t\t"baseUrl":"/client",\n' +
  '\t\t\t\t"moduleGenTarget":"amd"\n' +
  '\t\t\t},\n' +
  '\t\t\t{\n' +
  '\t\t\t\t"scope":"/server",\n' +
  '\t\t\t\t"moduleGenTarget":"commonjs"\n' +
  '\t\t\t},\n' +
  '\t\t\t{\n' +
  '\t\t\t\t"scope":"/build",\n' +
  '\t\t\t\t"moduleGenTarget":"commonjs"\n' +
  '\t\t\t},\n' +
  '\t\t\t{\n' +
  '\t\t\t\t"scope":"/node_modules/nake",\n' +
  '\t\t\t\t"moduleGenTarget":"commonjs"\n' +
  '\t\t\t}],\n' +
  '\t\t\t"allowMultipleWorkers": true\n' +
  '\t\t}\n' +
  '\t}\n' +
  '}'
export const yaml ='%TAG ! tag:clarkevans.com,2002:\n' +
  '--- !shape\n' +
  '  # Use the ! handle for presenting\n' +
  '  # tag:clarkevans.com,2002:circle\n' +
  '- !circle\n' +
  '  center: &ORIGIN {x: 73, y: 129}\n' +
  '  radius: 7\n' +
  '- !line\n' +
  '  start: *ORIGIN\n' +
  '  finish: { x: 89, y: 102 }\n' +
  '- !label\n' +
  '  start: *ORIGIN\n' +
  '  color: 0xFFEEBB\n' +
  '  text: Pretty vector drawing.\n'
export const javascript = '/*\n' +
  '  © Microsoft. All rights reserved.\n' +
  '\n' +
  '  This library is supported for use in Windows Tailored Apps only.\n' +
  '\n' +
  '  Build: 6.2.8100.0 \n' +
  '  Version: 0.5 \n' +
  '*/\n' +
  '\n' +
  '(function (global, undefined) {\n' +
  '\t"use strict";\n' +
  '\tundefinedVariable = {};\n' +
  '\tundefinedVariable.prop = 5;\n' +
  '\n' +
  '\tfunction initializeProperties(target, members) {\n' +
  '\t\tvar keys = Object.keys(members);\n' +
  '\t\tvar properties;\n' +
  '\t\tvar i, len;\n' +
  '\t\tfor (i = 0, len = keys.length; i < len; i++) {\n' +
  '\t\t\tvar key = keys[i];\n' +
  '\t\t\tvar enumerable = key.charCodeAt(0) !== /*_*/95;\n' +
  '\t\t\tvar member = members[key];\n' +
  '\t\t\tif (member && typeof member === \'object\') {\n' +
  '\t\t\t\tif (member.value !== undefined || typeof member.get === \'function\' || typeof member.set === \'function\') {\n' +
  '\t\t\t\t\tif (member.enumerable === undefined) {\n' +
  '\t\t\t\t\t\tmember.enumerable = enumerable;\n' +
  '\t\t\t\t\t}\n' +
  '\t\t\t\t\tproperties = properties || {};\n' +
  '\t\t\t\t\tproperties[key] = member;\n' +
  '\t\t\t\t\tcontinue;\n' +
  '\t\t\t\t} \n' +
  '\t\t\t}\n' +
  '\t\t\tif (!enumerable) {\n' +
  '\t\t\t\tproperties = properties || {};\n' +
  '\t\t\t\tproperties[key] = { value: member, enumerable: enumerable, configurable: true, writable: true }\n' +
  '\t\t\t\tcontinue;\n' +
  '\t\t\t}\n' +
  '\t\t\ttarget[key] = member;\n' +
  '\t\t}\n' +
  '\t\tif (properties) {\n' +
  '\t\t\tObject.defineProperties(target, properties);\n' +
  '\t\t}\n' +
  '\t}\n' +
  '\n' +
  '\t(function (rootNamespace) {\n' +
  '\n' +
  '\t\t// Create the rootNamespace in the global namespace\n' +
  '\t\tif (!global[rootNamespace]) {\n' +
  '\t\t\tglobal[rootNamespace] = Object.create(Object.prototype);\n' +
  '\t\t}\n' +
  '\n' +
  '\t\t// Cache the rootNamespace we just created in a local variable\n' +
  '\t\tvar _rootNamespace = global[rootNamespace];\n' +
  '\t\tif (!_rootNamespace.Namespace) {\n' +
  '\t\t\t_rootNamespace.Namespace = Object.create(Object.prototype);\n' +
  '\t\t}\n' +
  '\n' +
  '\t\tfunction defineWithParent(parentNamespace, name, members) {\n' +
  '\t\t\t/// <summary locid="1">\n' +
  '\t\t\t/// Defines a new namespace with the specified name, under the specified parent namespace.\n' +
  '\t\t\t/// </summary>\n' +
  '\t\t\t/// <param name="parentNamespace" type="Object" locid="2">\n' +
  '\t\t\t/// The parent namespace which will contain the new namespace.\n' +
  '\t\t\t/// </param>\n' +
  '\t\t\t/// <param name="name" type="String" locid="3">\n' +
  '\t\t\t/// Name of the new namespace.\n' +
  '\t\t\t/// </param>\n' +
  '\t\t\t/// <param name="members" type="Object" locid="4">\n' +
  '\t\t\t/// Members in the new namespace.\n' +
  '\t\t\t/// </param>\n' +
  '\t\t\t/// <returns locid="5">\n' +
  '\t\t\t/// The newly defined namespace.\n' +
  '\t\t\t/// </returns>\n' +
  '\t\t\tvar currentNamespace = parentNamespace,\n' +
  '\t\t\t\tnamespaceFragments = name.split(".");\n' +
  '\n' +
  '\t\t\tfor (var i = 0, len = namespaceFragments.length; i < len; i++) {\n' +
  '\t\t\t\tvar namespaceName = namespaceFragments[i];\n' +
  '\t\t\t\tif (!currentNamespace[namespaceName]) {\n' +
  '\t\t\t\t\tObject.defineProperty(currentNamespace, namespaceName, \n' +
  '\t\t\t\t\t\t{ value: {}, writable: false, enumerable: true, configurable: true }\n' +
  '\t\t\t\t\t);\n' +
  '\t\t\t\t}\n' +
  '\t\t\t\tcurrentNamespace = currentNamespace[namespaceName];\n' +
  '\t\t\t}\n' +
  '\n' +
  '\t\t\tif (members) {\n' +
  '\t\t\t\tinitializeProperties(currentNamespace, members);\n' +
  '\t\t\t}\n' +
  '\n' +
  '\t\t\treturn currentNamespace;\n' +
  '\t\t}\n' +
  '\n' +
  '\t\tfunction define(name, members) {\n' +
  '\t\t\t/// <summary locid="6">\n' +
  '\t\t\t/// Defines a new namespace with the specified name.\n' +
  '\t\t\t/// </summary>\n' +
  '\t\t\t/// <param name="name" type="String" locid="7">\n' +
  '\t\t\t/// Name of the namespace.  This could be a dot-separated nested name.\n' +
  '\t\t\t/// </param>\n' +
  '\t\t\t/// <param name="members" type="Object" locid="4">\n' +
  '\t\t\t/// Members in the new namespace.\n' +
  '\t\t\t/// </param>\n' +
  '\t\t\t/// <returns locid="5">\n' +
  '\t\t\t/// The newly defined namespace.\n' +
  '\t\t\t/// </returns>\n' +
  '\t\t\treturn defineWithParent(global, name, members);\n' +
  '\t\t}\n' +
  '\n' +
  '\t\t// Establish members of the "WinJS.Namespace" namespace\n' +
  '\t\tObject.defineProperties(_rootNamespace.Namespace, {\n' +
  '\n' +
  '\t\t\tdefineWithParent: { value: defineWithParent, writable: true, enumerable: true },\n' +
  '\n' +
  '\t\t\tdefine: { value: define, writable: true, enumerable: true }\n' +
  '\n' +
  '\t\t});\n' +
  '\n' +
  '\t})("WinJS");\n' +
  '\n' +
  '\t(function (WinJS) {\n' +
  '\n' +
  '\t\tfunction define(constructor, instanceMembers, staticMembers) {\n' +
  '\t\t\t/// <summary locid="8">\n' +
  '\t\t\t/// Defines a class using the given constructor and with the specified instance members.\n' +
  '\t\t\t/// </summary>\n' +
  '\t\t\t/// <param name="constructor" type="Function" locid="9">\n' +
  '\t\t\t/// A constructor function that will be used to instantiate this class.\n' +
  '\t\t\t/// </param>\n' +
  '\t\t\t/// <param name="instanceMembers" type="Object" locid="10">\n' +
  '\t\t\t/// The set of instance fields, properties and methods to be made available on the class.\n' +
  '\t\t\t/// </param>\n' +
  '\t\t\t/// <param name="staticMembers" type="Object" locid="11">\n' +
  '\t\t\t/// The set of static fields, properties and methods to be made available on the class.\n' +
  '\t\t\t/// </param>\n' +
  '\t\t\t/// <returns type="Function" locid="12">\n' +
  '\t\t\t/// The newly defined class.\n' +
  '\t\t\t/// </returns>\n' +
  '\t\t\tconstructor = constructor || function () { };\n' +
  '\t\t\tif (instanceMembers) {\n' +
  '\t\t\t\tinitializeProperties(constructor.prototype, instanceMembers);\n' +
  '\t\t\t}\n' +
  '\t\t\tif (staticMembers) {\n' +
  '\t\t\t\tinitializeProperties(constructor, staticMembers);\n' +
  '\t\t\t}\n' +
  '\t\t\treturn constructor;\n' +
  '\t\t}\n' +
  '\n' +
  '\t\tfunction derive(baseClass, constructor, instanceMembers, staticMembers) {\n' +
  '\t\t\t/// <summary locid="13">\n' +
  '\t\t\t/// Uses prototypal inheritance to create a sub-class based on the supplied baseClass parameter.\n' +
  '\t\t\t/// </summary>\n' +
  '\t\t\t/// <param name="baseClass" type="Function" locid="14">\n' +
  '\t\t\t/// The class to inherit from.\n' +
  '\t\t\t/// </param>\n' +
  '\t\t\t/// <param name="constructor" type="Function" locid="9">\n' +
  '\t\t\t/// A constructor function that will be used to instantiate this class.\n' +
  '\t\t\t/// </param>\n' +
  '\t\t\t/// <param name="instanceMembers" type="Object" locid="10">\n' +
  '\t\t\t/// The set of instance fields, properties and methods to be made available on the class.\n' +
  '\t\t\t/// </param>\n' +
  '\t\t\t/// <param name="staticMembers" type="Object" locid="11">\n' +
  '\t\t\t/// The set of static fields, properties and methods to be made available on the class.\n' +
  '\t\t\t/// </param>\n' +
  '\t\t\t/// <returns type="Function" locid="12">\n' +
  '\t\t\t/// The newly defined class.\n' +
  '\t\t\t/// </returns>\n' +
  '\t\t\tif (baseClass) {\n' +
  '\t\t\t\tconstructor = constructor || function () { };\n' +
  '\t\t\t\tvar basePrototype = baseClass.prototype;\n' +
  '\t\t\t\tconstructor.prototype = Object.create(basePrototype);\n' +
  '\t\t\t\tObject.defineProperty(constructor.prototype, "_super", { value: basePrototype });\n' +
  '\t\t\t\tObject.defineProperty(constructor.prototype, "constructor", { value: constructor });\n' +
  '\t\t\t\tif (instanceMembers) {\n' +
  '\t\t\t\t\tinitializeProperties(constructor.prototype, instanceMembers);\n' +
  '\t\t\t\t}\n' +
  '\t\t\t\tif (staticMembers) {\n' +
  '\t\t\t\t\tinitializeProperties(constructor, staticMembers);\n' +
  '\t\t\t\t}\n' +
  '\t\t\t\treturn constructor;\n' +
  '\t\t\t} else {\n' +
  '\t\t\t\treturn define(constructor, instanceMembers, staticMembers);\n' +
  '\t\t\t}\n' +
  '\t\t}\n' +
  '\n' +
  '\t\tfunction mix(constructor) {\n' +
  '\t\t\t/// <summary locid="15">\n' +
  '\t\t\t/// Defines a class using the given constructor and the union of the set of instance members\n' +
  '\t\t\t/// specified by all the mixin objects.  The mixin parameter list can be of variable length.\n' +
  '\t\t\t/// </summary>\n' +
  '\t\t\t/// <param name="constructor" locid="9">\n' +
  '\t\t\t/// A constructor function that will be used to instantiate this class.\n' +
  '\t\t\t/// </param>\n' +
  '\t\t\t/// <returns locid="12">\n' +
  '\t\t\t/// The newly defined class.\n' +
  '\t\t\t/// </returns>\n' +
  '\t\t\tconstructor = constructor || function () { };\n' +
  '\t\t\tvar i, len;\n' +
  '\t\t\tfor (i = 0, len = arguments.length; i < len; i++) {\n' +
  '\t\t\t\tinitializeProperties(constructor.prototype, arguments[i]);\n' +
  '\t\t\t}\n' +
  '\t\t\treturn constructor;\n' +
  '\t\t}\n' +
  '\n' +
  '\t\t// Establish members of "WinJS.Class" namespace\n' +
  '\t\tWinJS.Namespace.define("WinJS.Class", {\n' +
  '\t\t\tdefine: define,\n' +
  '\t\t\tderive: derive,\n' +
  '\t\t\tmix: mix\n' +
  '\t\t});\n' +
  '\n' +
  '\t})(WinJS);\n' +
  '\n' +
  '})(this);'
export const html = '<!DOCTYPE HTML>\n' +
  '<!--Example of comments in HTML-->\n' +
  '<html>\n' +
  '<head>\n' +
  '\t<!--This is the head section-->\n' +
  '\t<title>HTML Sample</title>\n' +
  '\t<meta charset="utf-8">\n' +
  '\n' +
  '\t<!--This is the style tag to set style on elements-->\n' +
  '\t<style type="text/css">\n' +
  '\t\th1\n' +
  '\t\t{\n' +
  '\t\t\tfont-family: Tahoma;\n' +
  '\t\t\tfont-size: 40px;\n' +
  '\t\t\tfont-weight: normal;\n' +
  '\t\t\tmargin: 50px;\n' +
  '\t\t\tcolor: #a0a0a0;\n' +
  '\t\t}\n' +
  '\n' +
  '\t\th2\n' +
  '\t\t{\n' +
  '\t\t\tfont-family: Tahoma;\n' +
  '\t\t\tfont-size: 30px;\n' +
  '\t\t\tfont-weight: normal;\n' +
  '\t\t\tmargin: 50px;\n' +
  '\t\t\tcolor: #fff;\n' +
  '\t\t}\n' +
  '\n' +
  '\t\tp\n' +
  '\t\t{\n' +
  '\t\t\tfont-family: Tahoma;\n' +
  '\t\t\tfont-size: 17px;\n' +
  '\t\t\tfont-weight: normal;\n' +
  '\t\t\tmargin: 0px 200px;\n' +
  '\t\t\tcolor: #fff;\n' +
  '\t\t}\n' +
  '\n' +
  '\t\tdiv.Center\n' +
  '\t\t{\n' +
  '\t\t\ttext-align: center;\n' +
  '\t\t}\n' +
  '\n' +
  '\t\tdiv.Blue\n' +
  '\t\t{\n' +
  '\t\t\tpadding: 50px;\n' +
  '\t\t\tbackground-color: #7bd2ff;\n' +
  '\t\t}\n' +
  '\n' +
  '\t\tbutton.Gray\n' +
  '\t\t{\n' +
  '\t\t\tfont-family: Tahoma;\n' +
  '\t\t\tfont-size: 17px;\n' +
  '\t\t\tfont-weight: normal;\n' +
  '\t\t\tmargin-top: 100px;\n' +
  '\t\t\tpadding: 10px 50px;\n' +
  '\t\t\tbackground-color: #727272;\n' +
  '\t\t\tcolor: #fff;\n' +
  '\t\t\toutline: 0;\n' +
  '    \t\t\tborder: none;\n' +
  '    \t\t\tcursor: pointer;\n' +
  '\t\t}\n' +
  '\n' +
  '\t\tbutton.Gray:hover\n' +
  '\t\t{\n' +
  '\t\t\tbackground-color: #898888;\n' +
  '\t\t}\n' +
  '\n' +
  '\t\tbutton.Gray:active\n' +
  '\t\t{\n' +
  '\t\t\tbackground-color: #636161;\n' +
  '\t\t}\n' +
  '\n' +
  '\t</style>\n' +
  '\n' +
  '\t<!--This is the script tag-->\n' +
  '\t<script type="text/javascript">\n' +
  '\t\tfunction ButtonClick(){\n' +
  '\t\t\t// Example of comments in JavaScript\n' +
  '\t\t\twindow.alert("I\'m an alert sample!");\n' +
  '\t\t}\n' +
  '\t</script>\n' +
  '</head>\n' +
  '<body>\n' +
  '\t<!--This is the body section-->\n' +
  '\t<div class="Center">\n' +
  '\t\t<h1>NAME OF SITE</h1>\n' +
  '\t</div>\n' +
  '\t<div class="Center Blue">\n' +
  '\t\t\t<h2>I\'m h2 Header! Edit me in &lt;h2&gt;</h2>\n' +
  '\t\t\t<p>\n' +
  '\t\t\t\tI\'m a paragraph! Edit me in &lt;p&gt;\n' +
  '\t\t\t\tto add your own content and make changes to the style and font.\n' +
  '\t\t\t\tIt\'s easy! Just change the text between &lt;p&gt; ... &lt;/p&gt; and change the style in &lt;style&gt;.\n' +
  '\t\t\t\tYou can make it as long as you wish. The browser will automatically wrap the lines to accommodate the\n' +
  '\t\t\t\tsize of the browser window.\n' +
  '\t\t\t</p>\n' +
  '\t\t\t<button class="Gray" onclick="ButtonClick()">Click Me!</button>\n' +
  '\t</div>\n' +
  '</body>\n' +
  '</html>\n'
export const css = 'html {\n' +
  '    background-color: #e2e2e2;\n' +
  '    margin: 0;\n' +
  '    padding: 0;\n' +
  '}\n' +
  '\n' +
  'body {\n' +
  '    background-color: #fff;\n' +
  '    border-top: solid 10px #000;\n' +
  '    color: #333;\n' +
  '    font-size: .85em;\n' +
  '    font-family: "Segoe UI","HelveticaNeue-Light", sans-serif;\n' +
  '    margin: 0;\n' +
  '    padding: 0;\n' +
  '}\n' +
  '\n' +
  'a:link, a:visited, \n' +
  'a:active, a:hover {\n' +
  '    color: #333;\n' +
  '    outline: none;\n' +
  '    padding-left: 0;\n' +
  '    padding-right: 3px;\n' +
  '    text-decoration: none;\n' +
  '        \n' +
  '}\n' +
  '\n' +
  '\n' +
  'a:hover {\n' +
  '    background-color: #c7d1d6;\n' +
  '}\n' +
  '\n' +
  '\n' +
  'header, footer, hgroup\n' +
  'nav, section {\n' +
  '    display: block;\n' +
  '}\n' +
  '\n' +
  '.float-left {\n' +
  '    float: left;\n' +
  '}\n' +
  '\n' +
  '.float-right {\n' +
  '    float: right;\n' +
  '}\n' +
  '\n' +
  '.highlight {\n' +
  '/*    background-color: #a6dbed;\n' +
  '    padding-left: 5px;\n' +
  '    padding-right: 5px;*/\n' +
  '}\n' +
  '\n' +
  '.clear-fix:after {\n' +
  '    content: ".";\n' +
  '    clear: both;\n' +
  '    display: block;\n' +
  '    height: 0;\n' +
  '    visibility: hidden;\n' +
  '}\n' +
  '\n' +
  'h1, h2, h3, \n' +
  'h4, h5, h6 {\n' +
  '    color: #000;\n' +
  '    margin-bottom: 0;\n' +
  '    padding-bottom: 0;\n' +
  '    \n' +
  '}\n' +
  '\n' +
  'h1 {\n' +
  '    font-size: 2em; \n' +
  '}\n' +
  '\n' +
  'h2 {\n' +
  '    font-size: 1.75em;\n' +
  '}\n' +
  '\n' +
  'h3 {\n' +
  '    font-size: 1.2em;\n' +
  '}\n' +
  '\n' +
  'h4 {\n' +
  '    font-size: 1.1em;\n' +
  '}\n' +
  '\n' +
  'h5, h6 {\n' +
  '    font-size: 1em;\n' +
  '}\n' +
  '\n' +
  '\n' +
  '.tile {\n' +
  '    /* 2px solid #7ac0da; */\n' +
  '    border: 0;\n' +
  '    \n' +
  '    float: left;\n' +
  '    width: 200px;\n' +
  '    height: 325px;\n' +
  '    \n' +
  '    padding: 5px;\n' +
  '    margin-right: 5px;\n' +
  '    margin-bottom: 20px;\n' +
  '    margin-top: 20px;\n' +
  '    -webkit-perspective: 0;\n' +
  '    -webkit-transform-style: preserve-3d;\n' +
  '    -webkit-transition: -webkit-transform 0.2s;\n' +
  '    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.3);\n' +
  '    background-position: center center;\n' +
  '    background-repeat: no-repeat;\n' +
  '    \n' +
  '    background-color:  #fff;\n' +
  '}\n' +
  '\n' +
  '.tile-item {\n' +
  '    /* 2px solid #7ac0da; */\n' +
  '    border-color: inherit;\n' +
  '    float: left;\n' +
  '    width: 50px;\n' +
  '    height: 70px;\n' +
  '    margin-right: 20px;\n' +
  '    margin-bottom: 20px;\n' +
  '    margin-top: 20px;\n' +
  '    background-image: url(\'../Images/documents.png\');\n' +
  '    background-repeat: no-repeat;\n' +
  '    \n' +
  '}\n' +
  '\n' +
  '.tile-wrapper {\n' +
  '    width: 100%;\n' +
  '    font-family: "Segoe UI" , Tahoma, Geneva, Verdana, sans-serif;\n' +
  '    line-height: 21px;\n' +
  '    font-size: 14px;\n' +
  '}\n' +
  '\n' +
  'a.blue-box {\n' +
  '    font-size: 28px;\n' +
  '    height: 100px;\n' +
  '    display: block;\n' +
  '    border-style: solid;\n' +
  '    border-width: 1px 1px 4px 1px;\n' +
  '    border-color: #C0C0C0 #C0C0C0 #8ABAE4 #C0C0C0;\n' +
  '    padding-top: 15px;\n' +
  '    padding-left: 15px;\n' +
  '}\n' +
  '\n' +
  '    a.blue-box:hover {\n' +
  '    border: 4px solid #8ABAE4; \n' +
  '    padding-top: 12px;\n' +
  '    padding-left: 12px;\n' +
  '    background-color: #FFFFFF;\n' +
  '}\n' +
  '    \n' +
  'a.green-box {\n' +
  '    font-size: 28px;\n' +
  '    height: 100px;\n' +
  '    display: block;\n' +
  '    border-style: solid;\n' +
  '    border-width: 1px 1px 4px 1px;\n' +
  '    border-color: #C0C0C0 #C0C0C0 #9CCF42 #C0C0C0;\n' +
  '    padding-top: 15px;\n' +
  '    padding-left: 15px;\n' +
  '}\n' +
  '\n' +
  '    a.green-box:hover {\n' +
  '        border: 4px solid #9CCF42; \n' +
  '        padding-top: 12px;\n' +
  '        padding-left: 12px;\n' +
  '        background-color: #FFFFFF;\n' +
  '}\n' +
  '\n' +
  '\n' +
  'a.green-box2 {\n' +
  '    font-size: 14px;\n' +
  '    height: 48px;\n' +
  '    width: 48px;\n' +
  '    display: block; /* border-color: #C0C0C0; */\n' +
  '    padding-top: 6px;\n' +
  '    font-weight: bold;\n' +
  '    \n' +
  '}\n' +
  '\n' +
  '    a.green-box2:hover {\n' +
  '    border: solid #8ABAE4;\n' +
  '    padding-top: 0px;\n' +
  '    padding-left: 0px;\n' +
  '    background-image: url(\'../Images/documents.png\');\n' +
  '    background-color: #EFEFEF;\n' +
  '}\n' +
  '\n' +
  'a.yellow-box {\n' +
  '    font-size: 28px;\n' +
  '    height: 100px;\n' +
  '    display: block;\n' +
  '    border-style: solid;\n' +
  '    border-width: 1px 1px 4px 1px;\n' +
  '    border-color: #C0C0C0 #C0C0C0 #DECF6B #C0C0C0;\n' +
  '    padding-top: 15px;\n' +
  '    padding-left: 15px;\n' +
  '}\n' +
  '\n' +
  '    a.yellow-box:hover {\n' +
  '        border: 4px solid #DECF6B; \n' +
  '        padding-top: 12px;\n' +
  '        padding-left: 12px;\n' +
  '        background-color: #FFFFFF;\n' +
  '}\n' +
  '    \n' +
  '    \n' +
  'a.red-box {\n' +
  '    font-size: 28px;\n' +
  '    height: 100px;\n' +
  '    display: block;\n' +
  '    border-style: solid;\n' +
  '    border-width: 1px 1px 4px 1px;\n' +
  '    border-color: #C0C0C0 #C0C0C0 #F79E84 #C0C0C0;\n' +
  '    padding-top: 15px;\n' +
  '    padding-left: 15px;\n' +
  '}\n' +
  '\n' +
  '    a.red-box:hover {\n' +
  '    border: 4px solid #F79E84; \n' +
  '    padding-top: 12px;\n' +
  '    padding-left: 12px;\n' +
  '    background-color: #FFFFFF;\n' +
  '}\n' +
  '    \n' +
  '/* main layout \n' +
  '----------------------------------------------------------*/\n' +
  '.content-wrapper {\n' +
  '    margin: 0 auto;\n' +
  '    max-width: 960px;\n' +
  '}\n' +
  '\n' +
  '#body {\n' +
  '    background-color: #efeeef;\n' +
  '    clear: both;\n' +
  '    padding-bottom: 35px;\n' +
  '}\n' +
  '\n' +
  '    .main-content {\n' +
  '        background: url("../images/accent.png") no-repeat;\n' +
  '        padding-left: 10px;\n' +
  '        padding-top: 30px;\n' +
  '    }\n' +
  '\n' +
  '    .featured + .main-content {\n' +
  '        background: url("../images/heroaccent.png") no-repeat;\n' +
  '    }\n' +
  '\n' +
  'footer {\n' +
  '    clear: both;\n' +
  '    background-color: #e2e2e2;\n' +
  '    font-size: .8em;\n' +
  '    height: 100px;\n' +
  '}\n' +
  '\n' +
  '\n' +
  '/* site title\n' +
  '----------------------------------------------------------*/\n' +
  '.site-title {\n' +
  '    color: #0066CC; /* font-family: Rockwell, Consolas, "Courier New", Courier, monospace; */\n' +
  '    font-size: 3.3em;\n' +
  '    margin-top: 40px;\n' +
  '    margin-bottom: 0;\n' +
  '}\n' +
  '\n' +
  '.site-title a, .site-title a:hover, .site-title a:active  {\n' +
  '    background: none;\n' +
  '    color: #0066CC;\n' +
  '    outline: none;\n' +
  '    text-decoration: none;\n' +
  '}\n' +
  '\n' +
  '\n' +
  '/* login  \n' +
  '----------------------------------------------------------*/\n' +
  '#login {\n' +
  '    display: block;\n' +
  '    font-size: .85em;\n' +
  '    margin-top: 20px;\n' +
  '    text-align: right;\n' +
  '}\n' +
  '\n' +
  '    #login a {\n' +
  '        background-color: #d3dce0;\n' +
  '        margin-left: 10px;\n' +
  '        margin-right: 3px;\n' +
  '        padding: 2px 3px;\n' +
  '        text-decoration: none;\n' +
  '    }\n' +
  '    \n' +
  '    #login a.username {\n' +
  '        background: none;\n' +
  '        margin-left: 0px;\n' +
  '        text-decoration: underline;\n' +
  '    }\n' +
  '\n' +
  '    #login li {\n' +
  '        display: inline;\n' +
  '        list-style: none;\n' +
  '    }\n' +
  '    \n' +
  '    \n' +
  '/* menu  \n' +
  '----------------------------------------------------------*/\n' +
  'ul#menu {\n' +
  '    font-size: 1.3em;\n' +
  '    font-weight: 600;\n' +
  '    margin: 0;\n' +
  '    text-align: right;\n' +
  '            text-decoration: none;\n' +
  '\n' +
  '}\n' +
  '\n' +
  '    ul#menu li {\n' +
  '        display: inline;\n' +
  '        list-style: none;\n' +
  '        padding-left: 15px;\n' +
  '    }\n' +
  '\n' +
  '        ul#menu li a {\n' +
  '            background: none;\n' +
  '            color: #999;\n' +
  '            text-decoration: none;\n' +
  '        }\n' +
  '\n' +
  '        ul#menu li a:hover {\n' +
  '            color: #333;\n' +
  '            text-decoration: none;\n' +
  '        }\n' +
  '\n' +
  '\n' +
  '\n' +
  '/* page elements  \n' +
  '----------------------------------------------------------*/\n' +
  '/* featured */\n' +
  '.featured {\n' +
  '    background-color: #fff;\n' +
  '}\n' +
  '\n' +
  '    .featured .content-wrapper {\n' +
  '        /*background-color: #7ac0da;\n' +
  '        background-image: -ms-linear-gradient(left, #7AC0DA 0%, #A4D4E6 100%);\n' +
  '        background-image: -o-linear-gradient(left, #7AC0DA 0%, #A4D4E6 100%);\n' +
  '        background-image: -webkit-gradient(linear, left top, right top, color-stop(0, #7AC0DA), color-stop(1, #A4D4E6));\n' +
  '        background-image: -webkit-linear-gradient(left, #7AC0DA 0%, #A4D4E6 100%);\n' +
  '        background-image: linear-gradient(left, #7AC0DA 0%, #A4D4E6 100%);\n' +
  '        color: #3e5667;\n' +
  '        */\n' +
  '        padding:  0px 40px 30px 40px;\n' +
  '    }\n' +
  '\n' +
  '        .featured hgroup.title h1, .featured hgroup.title h2 {\n' +
  '            /* color: #fff;\n' +
  '                */\n' +
  '        }\n' +
  '\n' +
  '        .featured p {\n' +
  '            font-size: 1.1em;\n' +
  '        }\n' +
  '\n' +
  '/* page titles */ \n' +
  'hgroup.title {\n' +
  '    margin-bottom: 10px;\n' +
  '}\n' +
  '\n' +
  'hgroup.title h1, hgroup.title h2 {\n' +
  'display: inline;\n' +
  '}\n' +
  '\n' +
  'hgroup.title h2 {\n' +
  '    font-weight: normal;\n' +
  '}\n' +
  '\n' +
  '/* releases */\n' +
  '.milestone {\n' +
  '    color: #fff;\n' +
  '    background-color: #8ABAE4;\n' +
  '    font-weight:  normal;\n' +
  '    padding:  10px 10px 10px 10px;\n' +
  '    margin: 0 0 0 0;\n' +
  '}\n' +
  '    .milestone .primary {\n' +
  '        font-size: 1.75em;\n' +
  '    }\n' +
  '\n' +
  '    .milestone .secondary {\n' +
  '    font-size: 1.2em;\n' +
  '    font-weight: normal;\n' +
  '    /* padding: 5px 5px 5px 10px;*/\n' +
  '        }\n' +
  '    \n' +
  '/* features */\n' +
  'section.feature {\n' +
  '    width: 200px;\n' +
  '    float: left;\n' +
  '    padding: 10px;\n' +
  '}\n' +
  '\n' +
  '/* ordered list */\n' +
  'ol.round {\n' +
  '    list-style-type: none;\n' +
  '    padding-left: 0;\n' +
  '}\n' +
  '\n' +
  '    ol.round li {\n' +
  '        margin: 25px 0;\n' +
  '        padding-left: 45px;\n' +
  '    }\n' +
  '    \n' +
  '        ol.round li.one {\n' +
  '            background: url("../images/orderedlistOne.png") no-repeat;        \n' +
  '        }\n' +
  '    \n' +
  '        ol.round li.two {\n' +
  '            background: url("../images/orderedlistTwo.png") no-repeat;        \n' +
  '        }\n' +
  '    \n' +
  '        ol.round li.three {\n' +
  '            background: url("../images/orderedlistThree.png") no-repeat;        \n' +
  '        }\n' +
  '    \n' +
  '/* content */  \n' +
  'article {\n' +
  '    float: left;\n' +
  '    width: 70%;\n' +
  '}\n' +
  '\n' +
  'aside {\n' +
  '    float: right;\n' +
  '    width: 25%;\n' +
  '}\n' +
  '\n' +
  '    aside ul {\n' +
  '        list-style: none;\n' +
  '        padding: 0;\n' +
  '    }\n' +
  '    \n' +
  '     aside ul li {\n' +
  '        background: url("../images/bullet.png") no-repeat 0 50%;\n' +
  '        padding: 2px 0 2px 20px;\n' +
  '     }\n' +
  '     \n' +
  '.label {\n' +
  '    font-weight: 700;\n' +
  '}\n' +
  '\n' +
  '/* login page */ \n' +
  '#loginForm {\n' +
  '    border-right: solid 2px #c8c8c8;\n' +
  '    float: left;\n' +
  '    width: 45%;\n' +
  '}\n' +
  '\n' +
  '    #loginForm .validation-error {\n' +
  '        display: block;\n' +
  '        margin-left: 15px;\n' +
  '    }\n' +
  '\n' +
  '#socialLoginForm {\n' +
  '    margin-left: 40px;\n' +
  '    float: left;\n' +
  '    width: 50%;\n' +
  '}\n' +
  '\n' +
  '/* contact */\n' +
  '.contact h3 {\n' +
  '    font-size: 1.2em;\n' +
  '}\n' +
  '\n' +
  '.contact p {\n' +
  '    margin: 5px 0 0 10px;\n' +
  '}\n' +
  '\n' +
  '.contact iframe {\n' +
  '    border: solid 1px #333;\n' +
  '    margin: 5px 0 0 10px;\n' +
  '}\n' +
  '\n' +
  '/* forms */\n' +
  'fieldset {\n' +
  '    border: none;\n' +
  '    margin: 0;\n' +
  '    padding: 0;\n' +
  '}\n' +
  '\n' +
  '    fieldset legend {\n' +
  '        display: none;\n' +
  '    }\n' +
  '    \n' +
  '    fieldset ol {\n' +
  '        padding: 0;\n' +
  '        list-style: none;\n' +
  '    }\n' +
  '    \n' +
  '        fieldset ol li {\n' +
  '            padding-bottom: 5px;\n' +
  '        }\n' +
  '    \n' +
  '    fieldset label {\n' +
  '        display: block;\n' +
  '        font-size: 1.2em;\n' +
  '        font-weight: 600;\n' +
  '    }\n' +
  '    \n' +
  '    fieldset label.checkbox {\n' +
  '        display: inline;\n' +
  '    }\n' +
  '    \n' +
  '    fieldset input[type="text"], \n' +
  '    fieldset input[type="password"] {\n' +
  '        border: 1px solid #e2e2e2;\n' +
  '        color: #333;\n' +
  '        font-size: 1.2em;\n' +
  '        margin: 5px 0 6px 0;\n' +
  '        padding: 5px;\n' +
  '        width: 300px;\n' +
  '    }\n' +
  '    \n' +
  '        fieldset input[type="text"]:focus, \n' +
  '        fieldset input[type="password"]:focus {\n' +
  '            border: 1px solid #7ac0da;\n' +
  '        }\n' +
  '    \n' +
  '    fieldset input[type="submit"] {\n' +
  '        background-color: #d3dce0;\n' +
  '        border: solid 1px #787878;\n' +
  '        cursor: pointer;\n' +
  '        font-size: 1.2em;\n' +
  '        font-weight: 600;\n' +
  '        padding: 7px;\n' +
  '    }\n' +
  '\n' +
  '/* ajax login/registration dialog */\n' +
  '.modal-popup {\n' +
  '    font-size: 0.7em;\n' +
  '}\n' +
  '\n' +
  '/* info and errors */  \n' +
  '.message-info {\n' +
  '    border: solid 1px;\n' +
  '    clear: both;\n' +
  '    padding: 10px 20px;\n' +
  '}\n' +
  '\n' +
  '.message-error {\n' +
  '    clear: both;\n' +
  '    color: #e80c4d;\n' +
  '    font-size: 1.1em;\n' +
  '    font-weight: bold;\n' +
  '    margin: 20px 0 10px 0;\n' +
  '}\n' +
  '\n' +
  '.message-success {\n' +
  '    color: #7ac0da;\n' +
  '    font-size: 1.3em;\n' +
  '    font-weight: bold;\n' +
  '    margin: 20px 0 10px 0;\n' +
  '}\n' +
  '\n' +
  '.success {\n' +
  '    color: #7ac0da;\n' +
  '}\n' +
  '\n' +
  '.error {\n' +
  '    color: #e80c4d;\n' +
  '}\n' +
  '\n' +
  '/* styles for validation helpers */\n' +
  '.field-validation-error {\n' +
  '    color: #e80c4d;\n' +
  '    font-weight: bold;\n' +
  '}\n' +
  '\n' +
  '.field-validation-valid {\n' +
  '    display: none;\n' +
  '}\n' +
  '\n' +
  'input[type="text"].input-validation-error,\n' +
  'input[type="password"].input-validation-error {\n' +
  '    border: solid 1px #e80c4d;\n' +
  '}\n' +
  '\n' +
  '.validation-summary-errors {\n' +
  '    color: #e80c4d;\n' +
  '    font-weight: bold;\n' +
  '    font-size: 1.1em;\n' +
  '}\n' +
  '\n' +
  '.validation-summary-valid {\n' +
  '    display: none;\n' +
  '}\n' +
  '\n' +
  '\n' +
  '/* social */\n' +
  'ul#social li {\n' +
  '    display: inline;\n' +
  '    list-style: none;\n' +
  '}\n' +
  '\n' +
  '    ul#social li a {\n' +
  '        color: #999;\n' +
  '        text-decoration: none;\n' +
  '    }\n' +
  '        \n' +
  '    a.facebook, a.twitter {\n' +
  '        display: block;\n' +
  '        float: left;\n' +
  '        height: 24px;\n' +
  '        padding-left: 17px;\n' +
  '        text-indent: -9999px;\n' +
  '        width: 16px;\n' +
  '    }\n' +
  '        \n' +
  '    a.facebook {\n' +
  '        background: url("../images/facebook.png") no-repeat;\n' +
  '    }\n' +
  '        \n' +
  '    a.twitter {\n' +
  '        background: url("../images/twitter.png") no-repeat;\n' +
  '    }\n' +
  '        \n' +
  '        \n' +
  '        \n' +
  '/********************\n' +
  '*   Mobile Styles   *\n' +
  '********************/\n' +
  '@media only screen and (max-width: 850px) {\n' +
  '    \n' +
  '    /* header  \n' +
  '    ----------------------------------------------------------*/\n' +
  '    header .float-left, \n' +
  '    header .float-right {\n' +
  '        float: none;\n' +
  '    }\n' +
  '    \n' +
  '    /* logo */\n' +
  '    header .site-title {\n' +
  '        /*margin: 0; */\n' +
  '        /*margin: 10px;*/\n' +
  '        text-align: left;\n' +
  '        padding-left: 0;\n' +
  '    }\n' +
  '\n' +
  '    /* login */\n' +
  '    #login {\n' +
  '        font-size: .85em;\n' +
  '        margin-top: 0;\n' +
  '        text-align: center;\n' +
  '    }\n' +
  '    \n' +
  '        #login ul {\n' +
  '            margin: 5px 0;\n' +
  '            padding: 0;\n' +
  '        }\n' +
  '        \n' +
  '        #login li {\n' +
  '            display: inline;\n' +
  '            list-style: none;\n' +
  '            margin: 0;\n' +
  '            padding:0;\n' +
  '        }\n' +
  '\n' +
  '        #login a {\n' +
  '            background: none;\n' +
  '            color: #999;\n' +
  '            font-weight: 600;\n' +
  '            margin: 2px;\n' +
  '            padding: 0;\n' +
  '        }\n' +
  '        \n' +
  '        #login a:hover {\n' +
  '            color: #333;\n' +
  '        }\n' +
  '\n' +
  '    /* menu */\n' +
  '    nav {\n' +
  '        margin-bottom: 5px;\n' +
  '    }\n' +
  '    \n' +
  '    ul#menu {\n' +
  '        margin: 0;\n' +
  '        padding:0;\n' +
  '        text-align: center;\n' +
  '    }\n' +
  '\n' +
  '        ul#menu li {\n' +
  '            margin: 0;\n' +
  '            padding: 0;\n' +
  '        }\n' +
  '\n' +
  '        \n' +
  '    /* main layout  \n' +
  '    ----------------------------------------------------------*/\n' +
  '    .main-content,\n' +
  '    .featured + .main-content {\n' +
  '        background-position: 10px 0;\n' +
  '    }\n' +
  '    \n' +
  '    .content-wrapper {\n' +
  '        padding-right: 10px;\n' +
  '        padding-left: 10px;\n' +
  '    }\n' +
  '\n' +
  '    .featured .content-wrapper {\n' +
  '        padding: 10px;\n' +
  '    }\n' +
  '    \n' +
  '    /* page content */  \n' +
  '    article, aside {\n' +
  '        float: none;\n' +
  '        width: 100%;\n' +
  '    }\n' +
  '    \n' +
  '    /* ordered list */\n' +
  '    ol.round {\n' +
  '        list-style-type: none;\n' +
  '        padding-left: 0;\n' +
  '    }\n' +
  '\n' +
  '        ol.round li {\n' +
  '            padding-left: 10px;\n' +
  '            margin: 25px 0;\n' +
  '        }\n' +
  '    \n' +
  '            ol.round li.one,\n' +
  '            ol.round li.two,\n' +
  '            ol.round li.three {\n' +
  '                background: none;        \n' +
  '            }\n' +
  '     \n' +
  '     /* features */\n' +
  '     section.feature {\n' +
  '        float: none;\n' +
  '        padding: 10px;\n' +
  '        width: auto;\n' +
  '     }\n' +
  '     \n' +
  '        section.feature img {\n' +
  '            color: #999;\n' +
  '            content: attr(alt);\n' +
  '            font-size: 1.5em;\n' +
  '            font-weight: 600;\n' +
  '        }\n' +
  '        \n' +
  '    /* forms */    \n' +
  '    fieldset input[type="text"], \n' +
  '    fieldset input[type="password"] {\n' +
  '        width: 90%;\n' +
  '    }\n' +
  '    \n' +
  '    /* login page */ \n' +
  '    #loginForm {\n' +
  '        border-right: none;\n' +
  '        float: none;\n' +
  '        width: auto;\n' +
  '    }\n' +
  '\n' +
  '        #loginForm .validation-error {\n' +
  '            display: block;\n' +
  '            margin-left: 15px;\n' +
  '        }\n' +
  '\n' +
  '    #socialLoginForm {\n' +
  '        margin-left: 0;\n' +
  '        float: none;\n' +
  '        width: auto;\n' +
  '    }\n' +
  '\n' +
  '    /* footer  \n' +
  '    ----------------------------------------------------------*/    \n' +
  '    footer .float-left,\n' +
  '    footer .float-right {\n' +
  '        float: none;\n' +
  '    }\n' +
  '    \n' +
  '    footer {\n' +
  '        text-align: center;\n' +
  '        height: auto;\n' +
  '        padding: 10px 0;\n' +
  '    }\n' +
  '    \n' +
  '        footer p {\n' +
  '            margin: 0;\n' +
  '        }\n' +
  '    \n' +
  '        ul#social {\n' +
  '            padding:0;\n' +
  '            margin: 0;\n' +
  '        }\n' +
  '    \n' +
  '         a.facebook, a.twitter {\n' +
  '            background: none;\n' +
  '            display: inline;\n' +
  '            float: none;\n' +
  '            height: auto;\n' +
  '            padding-left: 0;\n' +
  '            text-indent: 0;\n' +
  '            width: auto;\n' +
  '        }    \n' +
  '}\n' +
  '\n' +
  '.subsite {\n' +
  '\tcolor: #444;\n' +
  '}\n' +
  '\n' +
  'h3 {\n' +
  '\tfont-weight: normal;\n' +
  '\tfont-size: 24px;\n' +
  '\tcolor: #444;\n' +
  '\tmargin-bottom: 20px;\n' +
  '}\n' +
  '\n' +
  '.tiles {\n' +
  '\tpadding-bottom: 20px;\n' +
  '\tbackground-color: #e3e3e3;\n' +
  '}\n' +
  '\n' +
  '#editor {\n' +
  '\tmargin: 0 auto;\n' +
  '\theight: 500px;\n' +
  '\tborder: 1px solid #ccc;\n' +
  '}\n' +
  '\n' +
  '.monaco-editor.monaco, .monaco-editor.vs, .monaco-editor.eclipse {\n' +
  '\tbackground: #F9F9F9;\n' +
  '}\n' +
  '\n' +
  '.monaco-editor.monaco .monaco-editor-background, .monaco-editor.vs .monaco-editor-background, .monaco-editor.eclipse .monaco-editor-background {\n' +
  '\tbackground: #F9F9F9;\n' +
  '}'
export const markdown = '# Header 1 #\n' +
  '## Header 2 ##\n' +
  '### Header 3 ###             (Hashes on right are optional)\n' +
  '## Markdown plus h2 with a custom ID ##   {#id-goes-here}\n' +
  '[Link back to H2](#id-goes-here)\n' +
  '\n' +
  '```js\n' +
  'var x = "string";\n' +
  'function f() {\n' +
  '  return x;\n' +
  '}\n' +
  '```\n' +
  '\n' +
  '<!-- html madness -->\n' +
  '<div class="custom-class" markdown="1">\n' +
  '  <div>\n' +
  '    nested div\n' +
  '  </div>\n' +
  '  <script type=\'text/x-koka\'>\n' +
  '    function( x: int ) { return x*x; }\n' +
  '  </script>\n' +
  '  This is a div _with_ underscores\n' +
  '  and a & <b class="bold">bold</b> element.\n' +
  '  <style>\n' +
  '    body { font: "Consolas" }\n' +
  '  </style>\n' +
  '</div>\n' +
  '\n' +
  '* Bullet lists are easy too\n' +
  '- Another one\n' +
  '+ Another one\n' +
  '\n' +
  'This is a paragraph, which is text surrounded by\n' +
  'whitespace. Paragraphs can be on one\n' +
  'line (or many), and can drone on for hours.\n' +
  '\n' +
  'Now some inline markup like _italics_,  **bold**,\n' +
  'and `code()`. Note that underscores\n' +
  'in_words_are ignored.\n' +
  '\n' +
  '````application/json\n' +
  '  { value: ["or with a mime type"] }\n' +
  '````\n' +
  '\n' +
  '> Blockquotes are like quoted text in email replies\n' +
  '>> And, they can be nested\n' +
  '\n' +
  '1. A numbered list\n' +
  '2. Which is numbered\n' +
  '3. With periods and a space\n' +
  '\n' +
  'And now some code:\n' +
  '\n' +
  '    // Code is just text indented a bit\n' +
  '    which(is_easy) to_remember();\n' +
  '\n' +
  'And a block\n' +
  '\n' +
  '~~~\n' +
  '// Markdown extra adds un-indented code blocks too\n' +
  '\n' +
  'if (this_is_more_code == true && !indented) {\n' +
  '    // tild wrapped code blocks, also not indented\n' +
  '}\n' +
  '~~~\n' +
  '\n' +
  'Text with\n' +
  'two trailing spaces\n' +
  '(on the right)\n' +
  'can be used\n' +
  'for things like poems\n' +
  '\n' +
  '### Horizontal rules\n' +
  '\n' +
  '* * * *\n' +
  '****\n' +
  '--------------------------\n' +
  '\n' +
  '![picture alt](/images/photo.jpeg "Title is optional")\n' +
  '\n' +
  '## Markdown plus tables ##\n' +
  '\n' +
  '| Header | Header | Right  |\n' +
  '| ------ | ------ | -----: |\n' +
  '|  Cell  |  Cell  |   $10  |\n' +
  '|  Cell  |  Cell  |   $20  |\n' +
  '\n' +
  '* Outer pipes on tables are optional\n' +
  '* Colon used for alignment (right versus left)\n' +
  '\n' +
  '## Markdown plus definition lists ##\n' +
  '\n' +
  'Bottled water\n' +
  ': $ 1.25\n' +
  ': $ 1.55 (Large)\n' +
  '\n' +
  'Milk\n' +
  'Pop\n' +
  ': $ 1.75\n' +
  '\n' +
  '* Multiple definitions and terms are possible\n' +
  '* Definitions can include multiple paragraphs too\n' +
  '\n' +
  '*[ABBR]: Markdown plus abbreviations (produces an <abbr> tag)'
export const mysql = 'CREATE TABLE shop (\n' +
  '    article INT(4) UNSIGNED ZEROFILL DEFAULT \'0000\' NOT NULL,\n' +
  '    dealer  CHAR(20)                 DEFAULT \'\'     NOT NULL,\n' +
  '    price   DOUBLE(16,2)             DEFAULT \'0.00\' NOT NULL,\n' +
  '    PRIMARY KEY(article, dealer));\n' +
  'INSERT INTO shop VALUES\n' +
  '    (1,\'A\',3.45),(1,\'B\',3.99),(2,\'A\',10.99),(3,\'B\',1.45),\n' +
  '    (3,\'C\',1.69),(3,\'D\',1.25),(4,\'D\',19.95);'
export const xml = '<?xml version="1.0"?>\n' +
  '<configuration xmlns:xdt="http://schemas.microsoft.com/XML-Document-Transform">\n' +
  '  <connectionStrings>\n' +
  '    <add name="MyDB" \n' +
  '      connectionString="value for the deployed Web.config file" \n' +
  '      xdt:Transform="SetAttributes" xdt:Locator="Match(name)"/>\n' +
  '  </connectionStrings>\n' +
  '  <system.web>\n' +
  '    <customErrors defaultRedirect="GenericError.htm"\n' +
  '      mode="RemoteOnly" xdt:Transform="Replace">\n' +
  '      <error statusCode="500" redirect="InternalError.htm"/>\n' +
  '    </customErrors>\n' +
  '  </system.web>\n' +
  '</configuration>'

