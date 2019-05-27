TreeGridLoaded ({ // JSONP header, to be possible to load from xxx_Jsonp data source
   
// Basic grid configuration
Cfg: {
   DefaultsVersion:"130101",
      
	AutoVersion:"1", SuppressCfg:"0", DefaultCfg:"3", DefaultCfgMenu:"1",
      
	Editing:"1", Adding:"1", Deleting:"1", ShowDeleted:"1", Copying:"1", Resizing:"1", 
   DynamicSpan:"0", DynamicBorder:"0", SpannedBorder:"3", BorderOut:"3,black", BorderIn:"1,black", DefaultBorder:"1",
   Selecting:"1", SelectingCells:"0", EditSelect:"7", ClearSelected:"4", SelectAllType:"0", SelectHidden:"0",
	Dragging:"1", Dropping:"1", ShowDrag:"1", DragObject:"1", ExpandOnDrag:"1", ScrollOnDrag:"50", ScrollColOnDrag:"100", TouchDragFocused:"2", TouchDragFocusedDependency:"2",
   ScrollOnButton:"20", ScrollOnBody:"200", ScrollColOnButton:"10", ScrollColOnBody:"100", NoScrollAfterExpand:"1", TouchScroll:"2", MomentumScroll:"3",
   ColResizing:"1", ColMoving:"1", SectionResizing:"1", ColAdding:"0", ColCopying:"7",
	Sorting:"1", Sorted:"1", AutoSort:"0", SortIcons:"1", MaxSort:"3",
	Grouping:"1", Grouped:"1", MaxGroupLength:"0", GroupChangeMoved:"1", GroupMoveFree:"1",
	Filtering:"1", Filtered:"1",
	Searching:"1", Searched:"1", SearchFocused:"3", SearchNotFound:"800", SearchExpand:"1", SearchMaxMark:"3",
	Calculated:"1", FormulaEditing:"0", FormulaNames:"0", FormulaType:"0", FormulaResults:"15", FormulaCircular:"1", FormulaMaxIterations:"1000", FormulaTip:"1",
   RowIndexType:"0", ColIndexType:"0",
   EditErrors:"2", EditErrorsMessageMax:"10", EditErrorsMessageTime:"1000",
   DetailOn:"1", DetailRowsVisible:"3",
   PivotUpdate:"3", PivotMaxCols:"100",
   CopyPasteTree:"0", CopyPasteInternal:"0", CopyPasteFormulas:"1",
   CopySelected:"1", CopyFocused:"1", CopyCols:"1", CopyEdit:"1", CopyTime:"",
   Pasting:"1", PasteSelected:"1", PasteFocused:"8", PasteCols:"4", PasteTree:"2",
   RoundNumbers:"0", RoundNumbersDigits:"5",
   AutoFillType:"3", MoveFocusType:"3",
   MaxAvailability:"100000",
   UndoMerge:"|Focus,Select,Scroll|ColsVisibility|Filter",
   UpdateHeightsTimeout:"0", MediaChange:"1",
   LongClick:"500",

   PageTime:"200", RemoveUnusedPages:"2", RemoveUnusedFixed:"3",
	Paging:"0", PageLength:"20", PageLengthDiv:"1", AllPages:"1", MaxPages:"20",
   ColPaging:"0", ColPageLength:"10", ColPageMin:"10", MaxColPages:"10",
	ChildPaging:"2", RemoveCollapsed:"0", RemoveChanged:"0",
   ChildParts:"", ChildPartLength:"20", ChildPartMin:"3", MaxChildParts:"0",
		
	LastId:"", IdPrefix:"", IdPostfix:"", IdChars:"_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", SetIds:"1", CaseSensitiveId:"1", AutoIdPrefix:"AR", GroupIdPrefix:"GR", ChildIdPrefix:"CR",
   TestIdSeparator:"-",
   AutoUpdate:"0",
   ReloadChanged:"5",
	CacheTimeout:"10",
   ChangesUpdate:"1",
	ExportCols:"2", ExportFormat:"xlsx", ExportType:"Expanded,Outline", ExportRows:"500", ExportVarHeight:"1", CSVValueSeparator:";", CSVRowSeparator:"\n", CSVQuote:'"', CSVLevel:"#", JSZip:"1",
	PrintCols:"2", PrintRows:"50", PrintFiltered:"0", PrintExpanded:"0", PrintIcons:"1", PrintPrint:"1", PrintGanttSplit:"1", PrintGanttSplitMin:"100", PrintGanttBackground:"2", PrintVarHeight:"1", PrintPageRootMin:"10", PrintZoomFit:"1",
   PrintPageWidth:"643", PrintPageHeight:"971", PrintPageSize:"8", PrintPageOrientation:"0", PrintDPI:"96", PrintDefaultDPI:"96", PrintMinDPI:"96", PrintMarginWidth:"40", PrintMarginHeight:"40", PrintPaddingWidth:"0", PrintPaddingHeight:"0", PrintMarginDiv:"1",
   ExportPDFCols:"2", PDFFitPage:"0", PDFText:"1", PDFFormat:"pdf",
   ImportAction:"3", ImportWidths:"1",
   ExpandAllLoaded:"0", ExpandAllLevels:"3",

   SuppressAnimations:"0", AnimateRows:"3", AnimateCells:"1", AnimateCols:"1", AnimateDialogs:"2", AnimateRowsMax:"10", AnimateRowsColorMax:"10", AnimateColsMax:"10", AnimateCellsMax:"200", AnimateUndo:"1",
      
   AbsoluteCursors:"", BorderCursors:"1",
   FocusWholeRow:"0", TabStop:"1",
	Hover:"2",
   ExactSize:"1", ExactWidth:"1", ConstWidth:"6",
   ColorState:"63",

   NoActionEscape:"1",
	StoreOriginalValues:"1",
	SynchroCount:"100",
   MessageWidth:"140", PageMessageWidth:"110", DeleteMessage:"1",
   HideMenuUnused:"1",
	NoTreeLines:"0", HideRootTree:"0",
   TipStart:"500",
   Silent:"1",
   BoolChars:" X?",
   DefaultsAlphabetWhite:" !\"#$%&'()*+,-./:;<=>?@[\\]^_{|}",
   ScrollLeftLap:"1", ScrollTopLap:"1",
   LeftCanResize:"1", RightCanResize:"1",
   FastPanel:"1", FastColumns:"1", FastMerge:"1", Alternate:"0",

   Style:"Standard", GanttStyle:"White", Size:"Normal", Scale:"", StyleLap:"1", SizeLap:"0", ScaleLap:"0",
   Styles:"{TS:{Name:'Standard',CSS:'*Styles/StandardGrid.css'},TW:{Name:'White',CSS:'*Styles/WhiteGrid.css'},TB:{Name:'Black',CSS:'*Styles/BlackGrid.css'},TM:{Name:'Material',CSS:'*Styles/MaterialGrid.css'},TT:{Name:'Turq',CSS:'*Styles/TurqGrid.css'},CF:{Name:'Relief',CSS:'Compatible/Relief',Compatible:1},CL:{Name:'Light',CSS:'Compatible/Light',Compatible:1},CO:{Name:'Office',CSS:'Compatible/Office',Compatible:1},CG:{Name:'Gradient',CSS:'Compatible/Gradient',Compatible:2},CB:{Name:'Borders',CSS:'Compatible/Borders',Compatible:1},CQ:{Name:'Query',CSS:'Compatible/Query',Compatible:1},CE:{Name:'ExtJS',CSS:'Compatible/ExtJS',Compatible:1},CS:{Name:'Sharp',CSS:'Compatible/Sharp',Compatible:1},CR:{Name:'Round',CSS:'Compatible/Round',Compatible:1},CP:{Name:'Plain',CSS:'Compatible/Plain',Compatible:1},CC:{Name:'Colors',CSS:'Compatible/Colors',Compatible:1}}",
   GanttStyles:"{GS:{Name:'Standard',CSS:'*Styles/StandardGantt.css'},GW:{Name:'White',CSS:'*Styles/WhiteGantt.css'},GB:{Name:'Black',CSS:'*Styles/BlackGantt.css'},GM:{Name:'Material',CSS:'*Styles/MaterialGantt.css'},GT:{Name:'Turq',CSS:'*Styles/TurqGantt.css'}}",
   Sizes:"{Tiny:'Tiny,Mini,Small,Low',Mini:'Mini,Small,Low',Small:'Small,Low',Low:'Low',Normal:'Normal',Wide:'Wide',High:'High,Wide',Big:'Big,High,Wide',Giant:'Giant,Big,High,Wide'}",
   Scales:"{'50%':0.5,'60%':0.60,'75%':0.75,'90%':0.9,'100%':1,'110%':1.1,'125%':1.25,'150%':1.5,'200%':2}",
   ShrinkStyle:"0", ShrinkStyleType:"31", MinBodyRows:"5", MinLeftWidth:"100", MinMidWidth:"100", MinRightWidth:"100", ShrinkStyleWidth:"Low,Normal,Wide,High,Big", LimitScroll:"0", StyleDependencyModifier:"1",

   TextColor:"#F00", TextColors:"|#F00|red|#080|green|#00F|blue|#A33|brown|#800|maroon|#888|gray||none",
   DefaultColor:"#FF0", DefaultColors:"|#FF0|yellow|#0F0|lime|#0FF|aqua|#FCC|pink|#FA0|orange|#CCC|silver||none",
   TextSize:"14", TextSizes:"||<span style='font-size:9px;color:silver;'>size</span>|8|8|9|9|10.5|10|12|12|14|14|17|17|22|22|30|30",
   TextFont:"'Times New Roman',serif", TextFonts:"|'Microsoft Sans Serif',Tahoma,'Trebuchet MS',sans-serif|sans serif|'Times New Roman',serif|serif|'Courier New',monospace|monospace||default",
   TextShadow:"1", TextShadows:"|0|default background|1|bold|2|bold with ghost|3|bold with background|4|bold with light background|5|ghost|6|ghost with bold|7|dark background|8|background with bold|9|light background",
   TextShadowColor:"maroon", TextShadowColors:"|black||red||green||blue||brown||maroon||gray||yellow||lime||aqua||pink||orange||silver|||none",
   BorderColors:"|black||red||green||blue||brown||maroon||gray||yellow||lime||aqua||pink||orange||silver",
   Indent:"1", Indents:"||<span style='font-size:9px;color:silver;'>indent</span>|0|0|1|1|2|2|3|3|4|4|5|5|6|6|7|7|8|8|9|9|10|10|15|15|20|20|25|25|30|30|35|35|40|40|45|45|50|50",
   Format:"1234.50", TextFormat:"text", NumberFormat:"general", DateFormat:"12/31/2000",
   Formats:{Items:[ 
      {Name:'general',Text:'General number or text',Type:'Float',Format:''}, 
      {Name:'-'},
      {Name:'@Enter',Text:'Enter custom format ...'},
      {Name:'@Custom',Text:'Custom formats',Menu:'1',Items:[
         {Name:'-'},
         {Name:'@Refresh',Text:'Remove unused formats'}
         ]},
      {Name:'-'},
      {Name:'text',Text:'Not formatted text',Type:'Text',Format:'@'},
      {Name:'-'},
      {Name:'integer',Text:'Integer number',Type:'Int',Format:'0'},
      {Name:'1234.50',Text:'Float number 1234.50',Type:'Float',Format:'f'}, 
      {Name:'1,234.50',Text:'Float number 1,234.50',Type:'Float',Format:',0.00'},
      {Name:'float',Text:'Next float numbers',Menu:'1',Items:[
         {Name:'1234.56',Text:'Float number 1234.5',Type:'Float',Format:'0.##'}, 
         {Name:'1,234.56',Text:'Float number 1,234.5',Type:'Float',Format:',0.##'},
         {Name:'1234.5_',Text:'Float number 1234.5_',Type:'Float',Format:'0.??'}, 
         {Name:'1,234.5_',Text:'Float number 1,234.5_',Type:'Float',Format:',0.??'},
         {Name:'<em>-1,234.50</em>',Text:'Float number <em>-1,234.50</em>',Type:'Float',Format:',0.00;[red],-0.00'},
         {Name:'(1,234.50)',Text:'Float number (1,234.50)',Type:'Float',Format:',0.00;,(0.00)'}, 
         {Name:'<em>(1,234.50)</em>',Text:'Float number <em>(1,234.50)</em>',Type:'Float',Format:',0.00;[red],(0.00)'},
         {Name:'-'},
         {Name:'1234.5000',Text:'Float number 1234.5678',Type:'Float',Format:'r'}, 
         {Name:'1234.5678',Text:'Float number 1234.5',Type:'Float',Format:'g'}, 
         {Name:'1234.5___',Text:'Float number 1234.5___',Type:'Float',Format:'0.????'}, 
         {Name:'-'},
         {Name:'$1,234.50',Text:'Currency number $1,234.50',Type:'Float',Format:',$0.00;,-$0.00;$0.??'},
         {Name:'<em>-$1,234.50</em>',Text:'Currency number <em>-$1,234.50</em>',Type:'Float',Format:',$0.00;[red],-$0.00;$0.??'},
         {Name:'$(1,234.50)',Text:'Currency number ($1,234.50)',Type:'Float',Format:',$0.00;,($0.00);$0.??'},
         {Name:'<em>($1,234.50)</em>',Text:'Currency number <em>($1,234.50)</em>',Type:'Float',Format:',$0.00;[red],($0.00);$0.??'},
         {Name:'-'},
         {Name:'percent',Text:'Float percent number',Type:'Float',Format:'p'}, 
         {Name:'percent int',Text:'Integer percent number',Type:'Float',Format:',0%'}
         ]}, 
      {Name:'-'},
      {Name:'12/31/2000',Text:'Short full date (12/31/2000)',Type:'Date',Format:'d'}, 
      {Name:'12/31',Text:'Short partial date (12/31)',Type:'Date',Format:'m'},
      {Name:'14:30:30',Text:'Long time (14:30:30)',Type:'Date',Format:'T'}, 
      {Name:'14:30',Text:'Short time (14:30)',Type:'Date',Format:'t'}, 
      {Name:'12/31/2000 14:30',Text:'Short date and time (12/31/2000 14:30)',Type:'Date',Format:'h'}, 
      {Name:'date',Text:'Next date times',Menu:'1',Items:[
         {Name:'12/2000',Text:'Short month and year (12/2000)',Type:'Date',Format:'y'},
         {Name:'12th Dec 2000',Text:'Long full date (12th Dec 2000)',Type:'Date',Format:'D'}, 
         {Name:'12th Dec',Text:'Long partial date (12th Dec)',Type:'Date',Format:'M'},
         {Name:'December 2000',Text:'Long month and year (December 2000)',Type:'Date',Format:'Y'},
         {Name:'2:30:30pm',Text:'Long time am/pm (2:30:30pm)',Type:'Date',Format:'I'},
         {Name:'2:30pm',Text:'Short time am/pm (2:30pm)',Type:'Date',Format:'i'},
         {Name:'12/31/2000 14:30:30',Text:'Short date and long time (12/31/2000 14:30:30)',Type:'Date',Format:'H'},
         {Name:'12/31/2000 2:30pm',Text:'Short date and time am/pm (12/31/2000 2:30pm)',Type:'Date',Format:'j'}, 
         {Name:'12/31/2000 2:30:30pm',Text:'Short date and long time am/pm (12/31/2000 2:30:30pm)',Type:'Date',Format:'J'},
         {Name:'12th Dec 2000 42:30',Text:'Long date and time (12th Dec 2000 42:30)',Type:'Date',Format:'l'}, 
         {Name:'12th Dec 42:30:30',Text:'Long date and long time (12th Dec 42:30:30)',Type:'Date',Format:'L'},
         {Name:'12th Dec 2000 2:30pm',Text:'Long date and time am/pm (12th Dec 2000 2:30pm)',Type:'Date',Format:'k'}, 
         {Name:'12th Dec 2:30:30pm',Text:'Long date and long time am/pm (12th Dec 2:30:30pm)',Type:'Date',Format:'K'}
         ]}
      ]}
	},

// Keys and mouse actions
Actions: {
   OnDragOverCell:"CursorDrag",
   OnMouseOverContent:"ShowHint", OnMouseOverCaption:"ShowHint",
   OnMouseOverHeaderLeft:"CursorResize", OnMouseOverHeaderRight:"CursorResize", OnMouseOverPagerHeaderLeft:"CursorResize", OnMouseOverPagerHeaderRight:"CursorResize",
   OnMouseOverHScrollLeft:"CursorResize", OnMouseOverHScrollRight:"CursorResize",
   OnMouseOverLeftSplitter:"CursorResize", OnMouseOverRightSplitter:"CursorResize",
   OnMouseOverHeaderTop:"CursorResizeRow", OnMouseOverHeaderBottom:"CursorResizeRow",
   OnMouseOverButton:"CursorPointer",
   OnMouseOverPanel:"CursorPointer",
   OnMouseOverSide:"CursorPointer",
   OnMouseOverSideDefaults:"CursorPointer",
   OnMouseOverSideFile:"CursorPointer",
   OnMouseOverSideClear:"CursorPointer",
   OnMouseOverPanelMove:"CursorMove", OnMouseOverPanelMoveAll:"CursorMove", OnMouseOverPanelColMove:"CursorMove", OnMouseOverPanelColMoveAll:"CursorMove",
   OnMouseOverPanelOff:"CursorDefault",
   OnMouseOverSpaceOff:"CursorDefault",
   OnMouseOverEditable:"CursorText",
   OnMouseOverEditBool:"CursorPointer", OnMouseOverEditEnum:"CursorPointer", OnMouseOverEditRadio:"CursorPointer",
   OnMouseOverSort:"CursorPointer", OnMouseOverSortUp:"CursorPointer", OnMouseOverSortDown:"CursorPointer",
   OnMouseOverExpand:"CursorPointer", OnMouseOverTree:"CursorDefault",
   OnMouseOverNoFocus:"CursorDefault", OnMouseOverReadOnly:"CursorDefault", OnMouseOverNothing:"CursorDefault",
   OnMouseOverResize:"CursorResizeGrid",

   OnMouseDownButton:"ButtonDown", OnMouseUpButton:"ButtonUp",
      
   OnClickCell:"FocusEdit",
   OnDblClickCell:"Focus AND StartEdit",
   OnClickNoFocus:"ChangeFocusRow OR ChangeFocusCol,0",
   OnRightClick:"ShowPopupMenu",
   OnRightClickCell:"100",
   OnCtrlClickCell:"ChooseCellInsert OR DeselectCell OR SelectCell OR DeselectRow OR SelectRow,1",
	OnShiftClickCell:"ChooseCellReplaceAll OR FocusCellRange OR InvertCellRangeFirst OR InvertRowRangeFirst,1",
   OnCtrlClickNoFocus:"ChooseCellInsert",
	OnShiftClickNoFocus:"ChooseCellReplaceAll",
      
   OnClickSort:"SortAsc OR SortDesc", OnClickSortUp:"SortAsc", OnClickSortDown:"SortDesc",
  	OnCtrlClickSort:"SortAscAdd OR SortDescAdd", OnCtrlClickSortUp:"SortAscAdd", OnCtrlClickSortDown:"SortDescAdd",

   OnClickButtonSave:"Validate AND Save",
	OnClickButtonReload:"Reload",
	OnClickButtonRepaint:"RenderPages",
	OnClickButtonCalc:"CalcOn OR CalcOff",
	OnClickButtonSort:"SortOn OR SortOff",
	OnClickButtonPrint:"Print",
	OnClickButtonExport:"Export",
   OnClickButtonImport:"Import",
   OnClickButtonExportPDF:"ExportPDF",
	OnClickButtonExpandAll:"ExpandAll",
	OnClickButtonCollapseAll:"CollapseAll",
   OnClickButtonUndo:"Undo",
   OnClickButtonRedo:"Redo",
	OnClickButtonAdd:"ShowMenuF OR AddRowF OR AddRowEnd",
	OnClickButtonAddChild:"ShowMenuF OR AddChildEndF",
   OnClickButtonAddCol:"ShowMenuF OR AddColF OR AddColEnd",
   OnClickButtonJoin:"SpanSelectedF",
   OnClickButtonSplit:"SplitSelectedF OR SplitCellF",
   OnClickButtonOutdent:"OutdentSelectedF OR OutdentF",
   OnClickButtonIndent:"IndentSelectedF OR IndentF",

   OnClickButtonLeft:"AlignLeftSelectedF OR NoAlignSelectedF OR AlignLeftCellsF OR NoAlignCellsF",
   OnClickButtonCenter:"AlignCenterSelected OR NoAlignSelected OR AlignCenterCellsF OR NoAlignCellsF",
   OnClickButtonRight:"AlignRightSelectedF OR NoAlignSelectedF OR AlignRightCellsF OR NoAlignCellsF",
   OnClickButtonTop:"VAlignTopSelectedF OR NoVAlignSelectedF OR VAlignTopCellsF OR NoVAlignCellsF",
   OnClickButtonMiddle:"VAlignMiddleSelectedF OR NoVAlignSelectedF OR VAlignMiddleCellsF OR NoVAlignCellsF",
   OnClickButtonBottom:"VAlignBottomSelectedF OR NoVAlignSelectedF OR VAlignBottomCellsF OR NoVAlignCellsF",
   OnClickButtonBold:"BoldOffSelectedF OR BoldOnSelectedF OR BoldOffCellsF OR BoldOnCellsF",
   OnClickButtonItalic:"ItalicOffSelectedF OR ItalicOnSelectedF OR ItalicOffCellsF OR ItalicOnCellsF",
   OnClickButtonUnderline:"UnderlineOffSelectedF OR UnderlineOnSelectedF OR UnderlineOffCellsF OR UnderlineOnCellsF",
   OnClickButtonStrike:"StrikeOffSelectedF OR StrikeOnSelectedF OR StrikeOffCellsF OR StrikeOnCellsF",
   OnClickButtonRotateLeft:"RotateLeftSelectedF OR NoRotateSelectedF OR RotateLeftF OR NoRotateF",
   OnClickButtonRotateRight:"RotateRightSelectedF OR NoRotateSelectedF OR RotateRightF OR NoRotateF",
   OnClickButtonWrapText:"WrapOffSelectedF OR WrapOnSelectedF OR WrapOffCellsF OR WrapOnCellsF",
   OnClickButtonColorText:"SetTextColorSelectedF OR SetTextColorCellsF",
   OnClickButtonColorShadow:"SetTextShadowColorSelectedF OR SetTextShadowColorCellsF",
   OnClickButtonColorBackground:"SetColorSelectedF OR SetColorCellsF",
   OnClickButtonBorder:"SetSelectedBordersF OR SetBordersF",

	OnClickButtonCfg:"ShowCfg",
	OnClickButtonColumns:"ShowColumns",
	OnClickButtonHelp:"ShowHelp",
   OnClickButtonDebug:"ShowDebug",
   OnClickButton:"Button",
	OnDblClickResize:"GridResizeDefault",
      
   OnClickButtonCorrect:"CorrectAllDependencies",
   OnClickButtonZoomFit:"ZoomFit",
   OnClickButtonZoomIn:"ZoomIn",
   OnClickButtonZoomOut:"ZoomOut",

   OnClickSideDefaults:"Focus,ShowDefaults",
   OnClickSideFile:"Focus,ShowFile",
   OnClickSideClear:"Focus,ClearValue",
   OnClickSideDate:"Focus,ShowCalendar",
   OnClickSideDates:"Focus,ShowDates",
   OnClickSideFilter:"Focus,ShowFilterMenu",
   OnClickSideCheck:"Focus,SetChecked",
   OnDblClickSideCheck:"SetChecked",
   OnClickSideExpand:"Focus,ExpandCell",
   OnDblClickSideExpand:"1",
   OnClickExpand:"Focus,Expand OR Collapse",
   OnDblClickExpand:"1",
   OnClickLevels:"ShowTreeLevel",
   OnDblClickButton:"Focus AND StartEdit",
   OnCtrlClickButton:"DeleteTab",
   OnClickClose:"DeleteTab",

   OnClickPanelSelect:"DeselectRow OR SelectRow",
   OnClickPanelSelectAll:"DeselectAll OR SelectAll",
   OnCtrlClickPanelSelectAll:"InvertAll",
	OnClickPanelDelete:"DeleteRow OR UndeleteRow",
   OnClickPanelDeleteAll:"UndeleteSelectedF OR DeleteSelectedF",
   OnClickPanelCopy:"ShowMenu",
   OnClickPanelCopyAll:"ShowMenuF OR AddRowF OR AddRowEnd",
   OnClickPanelColSelect:"DeselectCol OR SelectCol OR DeselectColCells OR SelectColCells",
   OnClickPanelColSelectAll:"DeselectAllCols OR SelectAllCols",
   OnClickPanelColDelete:"DeleteCol OR UndeleteCol",
   OnClickPanelColDeleteAll:"UndeleteSelectedColsF OR DeleteSelectedColsF",
   OnClickPanelColCopy:"ShowMenu",
   OnClickPanelColCopyAll:"ShowMenuF OR AddColF OR AddColEnd",
   OnClickSideIcon:"IconClick",
   OnClickSideButton:"ButtonClick",
   OnClickSidePopup:"ButtonClick",
   OnClickPanelGrouped:"GroupOn OR GroupOff",
   OnClickPanelFiltered:"FilterOn OR FilterOff",
	OnClickPanelSearched:"SearchOn OR SearchOff",

   OnClickEditEnum:"Focus AND StartEdit",
   OnClickEditBool:"Focus,Grid.EditMode?1:ChangeBool",
   OnClickEditRadio:"Focus,Grid.EditMode?1:ChangeRadio",
   OnClickLink:"Focus,Grid.EditMode?1:ShowLink",
      
   OnClickOutside:"Blur",
   OnClickPagerPage:"ShowPage",

   OnDragHeaderLeft:"ColResize",
	OnDragHeaderRight:"ColResize",
   OnDragPagerHeaderLeft:"ColResize",
   OnDragPagerHeaderRight:"ColResize",
   OnDragHeaderTop:"RowResize",
	OnDragHeaderBottom:"RowResize",
   OnDragHeader:"ColMoveSelected OR ColMove",
   OnCtrlDragHeader:"ColCopySelected OR ColCopy",
   OnDragDropCol:"DropColMove",
   OnDragButton:"TabMove",
   OnRightDragButton:"TabCopy",
   OnDragPanelMove:"DragRow",
   OnRightDragPanelMove:"DragCopy",
   OnCtrlRightDragPanelMove:"DragCopyChildren",
   OnDragPanelSelect:"InvertOddRows",
   OnDragPanelColSelect:"InvertOddCols",
   OnDragRow:"ChooseCellsReplaceAll OR FocusCells OR DragSelected OR DragRow OR InvertCellsFirst OR InvertRowsFirst",
   OnRightDragRow:"Scroll",
   OnDragResize:"GridResize",
	OnCtrlDragRow:"ChooseCellsInsert OR InvertCellsFirst OR DragSelectedCopy OR DragCopy OR InvertRowsFirst",
   OnShiftDragRow:"FillCells",
   OnDragCorner:"FocusFillRowCol",
   OnDragHScrollLeft:"SectionResize",
   OnDragHScrollRight:"SectionResize",
   OnDragLeftSplitter:"SectionResize",
   OnDragRightSplitter:"SectionResize",

   OnDragGantt:"ResizeGanttMain OR ResizeGanttRun OR MoveGanttMainFirst OR MoveGanttRun OR MoveGanttFlag OR MoveGanttPoint OR MoveGanttConstraint OR MoveGanttLine OR CreateGanttBar OR DragGanttDependency OR 1",
   OnRightDragGantt:"SelectGanttRunRect OR ResizeGanttRun OR MoveGanttRun OR MoveGanttMain OR 1",
   OnCtrlClickGantt:"DeleteGanttConstraint OR DeleteGanttFlag OR DeleteGanttPoint OR DeleteGanttMain OR DeleteGanttRun OR DeleteGanttRunContainerOnly OR DeleteGanttDependency OR DeleteGanttBase OR DeleteGanttFinish OR 1",
   OnDblClickGantt:"SelectGanttRun OR EditGanttFlag OR EditGanttResource OR EditGanttText OR EditGanttRun OR EditGanttRunTip OR EditGanttDependencyLag OR NewGanttMilestone OR NewGanttFlag OR NewGanttPoint",
   OnShiftClickGantt:"SplitGanttMain OR SplitGanttRun",
   OnCtrlRightClickGantt:"SetGanttPercent OR SetGanttRunPercent",
   OnShiftRightClickGantt:"EditGanttPercent OR EditGanttRunPercent",
   OnRightClickGantt:"GanttMenu,1",
   OnDragGanttHeader:"ZoomGantt,1", OnClickGanttHeader:"ZoomHeader OR ZoomIn", OnRightClickGanttHeader:"UndoZoom OR ZoomOut,1", OnRightDragGanttHeader:"SelectGanttRunRange,1",

   OnClick1Cell:"HoverGantt,FocusEdit",
   OnClick2Cell:"ShowPopupMenu OR Focus AND StartEdit",
	OnClick2Resize:"GridResizeDefault",
   OnLongClick1:"ShowPopupMenu",
   OnDrag1Row:"ChooseCellsReplaceAll OR FocusCells OR DragSelected OR DragRow", OnDrag2Row:"0", OnDrag3Row:"0",
   OnDrag2Grid:"0",
   OnDrag2PanelMove:"DragCopy",
   OnDrag3PanelMove:"DragCopyChildren",
   OnDrag2Pager:"ScrollPager",

   OnDrag1Gantt:"ResizeGanttMain OR ResizeGanttRun OR MoveGanttMainFirst OR MoveGanttRun OR MoveGanttFlag OR MoveGanttPoint OR MoveGanttConstraint OR MoveGanttLine OR CreateGanttBar OR DragGanttDependency",
   OnDrag2Gantt:"0",
   OnDrag3Gantt:"0",
   OnClick1Gantt:"GanttMenu",
   OnClick2Gantt:"0",
   OnClick3Gantt:"0",
   OnDrag1GanttHeader:"100", OnDrag2GanttHeader:"PinchZoomGantt,1", OnClick1GanttHeader:"GanttMenu", OnLongClick1GanttHeader:"UndoZoom OR ZoomOut,1", OnMouseDown2GanttHeader:"1",

   OnKey:"!StartEditEmpty", OnBackspace:"!StartEditEmpty",

   OnCtrlEnter:"ExpandF OR CollapseF",
	OnEnter:"ChangeBoolF OR ChangeRadioRightCycleF OR StartEdit OR ShowLinkF OR ShowDefaultsF OR ShowFileF OR ShowCalendarF OR EditGanttResourceF",
	OnF2:"StartEdit",
		
   OnTab:"TabRight?1:!Grid.TabStop", OnShiftTab:"TabLeft?1:!Grid.TabStop",
	OnUp:"GoUp,1", OnDown:"GoDown,1", OnLeft:"GoLeft,1", OnRight:"GoRight,1",
   OnShiftUp:"FocusUp,1", OnShiftDown:"FocusDown,1", OnShiftLeft:"FocusLeft,1", OnShiftRight:"FocusRight,1",
	OnHome:"GoFirst,1", OnEnd:"GoLast,1", OnPageUp:"PageUp,1", OnPageDown:"PageDown,1",
      
   OnTabEnum:"TabRightEdit AND StartEdit?1:!Grid.TabStop", OnShiftTabEnum:"TabLeftEdit AND StartEdit?1:!Grid.TabStop",
   OnTabEdit:"TabRightEdit AND StartEdit?1:!Grid.TabStop", OnShiftTabEdit:"TabLeftEdit AND StartEdit?1:!Grid.TabStop",
	OnUpEdit:"GoUpEdit AND StartEdit,1", OnDownEdit:"GoDownEdit AND StartEdit,1",
   OnCtrlLeft:"ChangeRadioLeft", OnCtrlRight:"ChangeRadioRight",
	OnEnterEdit:"AcceptEdit,1", OnEscEdit:"CancelEdit",
	OnCtrlEnterEdit:"AcceptEdit", OnAltEnterEdit:"AcceptEdit", OnShiftEnterEdit:"AcceptEdit",
	OnSpaceEdit:"ChangeBoolF",
   OnF4Edit:"SwitchRowColAbsolute",
      
   OnSpace:"SelectRowF OR DeselectRowF", OnCtrlSpace:"SelectAll OR DeselectAll",
	OnDel:"DeleteRowsF OR UndeleteRowsF,1", OnCtrlDel:"UndeleteSelectedF OR DeleteSelectedF,1",
	OnIns:"AddRowF", OnCtrlIns:"AddChildEndF", OnShiftIns:"CopyRowF", OnShiftCtrlIns:"CopyTreeF",
	OnCtrlDown:"ShowDefaultsF OR ShowFileF OR ShowFilterMenuF OR ShowCalendarF OR ButtonClickF",
   OnCtrlZ:"Undo", OnCtrlY:"Redo",
	OnCtrlC:"Copy,0", OnCtrlX:"Exclude,0", OnCtrlV:"Paste,0",
   OnMetaZ:"Undo", OnMetaY:"Redo",
   OnMetaC:"Copy,0", OnMetaX:"Exclude,0", OnMetaV:"Paste,0",
   OnCtrlAltD:"DebugUndo",
      
  	KeyCodes1:"Space=32,Enter=13,Esc=27,Backspace=8,Tab=9",
	KeyCodes2:"Tilde=192,Minus=189,Equal=187,Backslash=220,LeftBracket=219,RightBracket=221",
	KeyCodes3:"Semicolon=186,Apostrophe=222,Comma=188,Point=190,Slash=191",
	KeyCodes4:"F1=112,F2=113,F3=114,F4=115,F5=116,F6=117,F7=118,F8=119,F9=120,F10=121,F11=122,F12=123",
	KeyCodes5:"Ins=45,Del=46,Home=36,End=35,PageUp=33,PageDown=34,Up=38,Down=40,Left=37,Right=39,Pause=19",
	KeyCodes6:"NumDivide=111,NumStar=106,NumMinus=109,NumPlus=107,NumPoint=110",
	KeyCodes7:"Num0=96,Num1=97,Num2=98,Num3=99,Num4=100,Num5=101,Num6=102,Num7=103,Num8=104,Num9=105",
	KeyCodes8:"CapsLock=20,ScrollLock=145,NumLock=144",
      
	EdgeSize:"5", RowSize:"5", GanttSize:"5", GanttSizeOnly:"10", DragSize:"5", ClickSize:"5", GridSize:"", GanttSizeOver:"0", ScrollColSize:"10",
   EdgeSizeTouch:"20", RowSizeTouch:"10", GanttSizeTouch:"20", GanttSizeOnlyTouch:"1000", DragSizeTouch:"5", ClickSizeTouch:"20", GridSizeTouch:"", GanttSizeOverTouch:"3", GanttSizeOverTouchFocused:"10", ScrollColSizeTouch:"20",
   LeftPrefix:"", RightPrefix:"Right", MiddlePrefix:"Middle", CtrlPrefix:"Ctrl", AltPrefix:"Alt", ShiftPrefix:"Shift", MetaPrefix:"Ctrl"
   },
        
// Default rows
Def: {
	// Default row for all rows except Space and Header
	R: { 
      Kind:"Data", CDef:"R", AddDefChildren:"1",
		CanFocus:"1", CanEdit:"1", CanDelete:"1", CanSelect:"1", CanResize:"1", CanHide:"1",
      CanDrag:"1", AcceptChild:"1", CanExpand:"1",
		CanFilter:"1", CanGroup:"1", CanSort:"1",
		CanCopy:"1", CanCopyPaste:"1", CanExport:"1", CanPrint:"1",
		HoverCell:"Border,Color", HoverRow:"Border,Background", FocusCell:"Border,Color,Class", FocusRow:"Border,Background",
		Deleted:"0", Selected:"0", Changed:"0", Added:"0", Moved:"0",
		Visible:"1", Expanded:"1",
		Calculated:"0", Recalc:"3", FormulaCanUse:"1",
		MaxChildren:"10000", MaxChildrenDiff:"20",
      NoBorder:"0", NoStyle:"0"
		},
      
	// Default row for fixed rows
	Fixed: { 
      Def:"R",
		CanDelete:"0", CanSelect:"0", CanDrag:"0", CanFilter:"0", CanCopy:"0", AcceptChild:"0", CanHide:"1"
		},

   // Default row for filter rows
   Filter: { 
      Def:"Fixed",
		FormulaCanUse:"0", FormulaCanEdit:"0", CanHide:"1"
		},

   // Default row for column panel rows
   Panel: { 
      Def:"Fixed", 
      Buttons:"ColSelect,ColDelete,ColCopy", CanFocus:"0", NoBorder:"3", NoStyle:"2", NoFormat:"2", CanPrint:"0", CanExport:"0", CanHide:"1",
      PanelColCopyMenu:"CopyCol,CopyCols,CopySelectedCols,-,AddCol,AddCols@2,AddSelectedCols",
      PanelColCopyAllMenu:"CopyColF,CopyCols@2,CopySelectedCols,-,AddColF,AddCols@2,AddSelectedCols,-,AddColEnd"
      },

   // Default row created when grouping
   Group: { 
      Def:"R", Group:"1",
      CanEdit:"0", CanFilter:"0", CanDrag:"0", CanCopy:"0", CanDelete:"0",
		Expanded:"0", NoUpload:"1"
		},
      
	// Default row for all space rows
	Solid: { 
      Def:"",
      Visible:"1",
		CalcOrder:"",
      CanFocus:"1", CanDelete:"0", CanSelect:"0", CanDrag:"0", CanFilter:"0", CanCopy:"0", CanPrint:"1", CanResize:"1", FormulaCanUse:"0", CanHide:"1",
		AcceptDef:"",
		HoverCell:"Color", HoverRow:"", FocusCell:"Border,Color,Class", FocusRow:""
		},

   // Default header row
   Header: { 
      Def:"", Visible:"1", Wrap:"0", CanHide:"1",
   	CanDelete:"0", CanEdit:"0", CanFocus:"0", CanFilter:"0", AcceptChild:"0", CanExport:"1", CanCopyPaste:"3", CanPrint:"2", FormulaCanUse:"1", NoBorder:"3", NoStyle:"2", NoFormat:"2",
   	Deleted:"0", Selected:"0", Changed:"0", Added:"0", Moved:"0",
		Expanded:"0", Calculated:"0",
		HoverCell:"Color", HoverRow:"Background", FocusCell:"Border,Color,Class", FocusRow:""
      },

   // Default CPage (MaxChildren)
   CPage: { Def:"" }

   }, // Def

// Default columns
DefCols : {
   // Default column
   C: {
		Visible:"1", Type:"Text", Format:"", EditFormat:"",
		CanResize:"1", CanMove:"2", CanCopy:"2", CanFilter:"1", CanSort:"1", CanHide:"1", CanSelect:"1", CanDelete:"1", FormulaCanUse:"1",
		CanCopyPaste:"1", CanExport:"1", CanPrint:"1", CanGroup:"1", CanSearch:"1", CanDrag:"1",
      GroupEmpty:"2", GroupSingle:"1", GroupSole:"1", GroupDeleted:"1",
      CaseSensitive:"1",
      ShowHint:"1",
      EmptyValue:"",
      NoBorder:"0", NoStyle:"0", NoFormat:"0"
		},

   // Auto generated column by AutoCols
   Auto: { Def:"C", CanMove:"1", CanCopy:"1" },

   // Auto generated column for RowIndex
   Index: { 
      Def:"C", Type:"Text", HoverCell:"Color", Width:"60",
      CanSort:"0", CanEdit:"0", CanFocus:"0", CanSelect:"0", CanDelete:"0", CanMove:"0", CanCopy:"0", CanCopyPaste:"0", CanEmpty:"1", CanSearch:"0", CanSearch:"0", FormulaCanUse:"0", NoIndex:"1", NoBorder:"3", NoStyle:"2", NoFormat:"2"
      },

   // Auto generated column for ConstWidth
   ConstWidth: { 
      Def:"", CanSelect:"0", Type:"Html",
      ConstWidth:"1", NoIndex:"1", NoBorder:"3", NoStyle:"2", NoFormat:"2"
      },

   // Default column for type Gantt
   Gantt: { 
      Def:"C", MenuName:"Gantt chart",
      CanSort:"0", CanEdit:"0", CanResize:"0", CanFilter:"0", CanCopyPaste:"0", CanGroup:"0", CanSearch:"0", CanExport:"0", WidthPad:"", ShowHint:"0", CanDrag:"0", CanSelect:"0", CanDelete:"0", NoUpload:"1", FormulaCanUse:"0",
      GanttOrder:"Chart,Availability,Constraints,Run,Main,Mark,Dependency,Flags,Points", GanttHeaderCount:"6", GanttMilestoneTopMin:"0",
      GanttCount:"1", GanttFlagsType:"1", GanttFlagsMove:"1", GanttShift:"3", GanttFormatObject:"Last",
      GanttSize:"", GanttWidth:"22", GanttUnits:"d", GanttLeft:"0", GanttRight:"0", GanttRoundUnits:"0", GanttPagingFixed:"6", GanttPageWidth:"200%",
      GanttDataUnits:"d", GanttLastUnit:"", GanttResourcesAssign:"4", GanttAvailabilityFormat:"0.##", GanttAvailabilityTransparent:"1", GanttAvailabilityJoin:"1", GanttAvailabilityShow:"3", GanttAvailabilityTextRepeat:"500",
      GanttHover:"1", GanttEdit:"All", GanttResizeDelete:"1", GanttResizeBeforeMove:"2", GanttUseConstraints:"2", GanttShowConstraints:"1", GanttShowHtml:"1", GanttDragLine:"1",
      GanttSmoothZoom:"1", GanttHideExclude:"0", GanttChangeExclude:"0", GanttMaxExclude:"10000000", GanttBase:"", GanttBaseCanEdit:"1", GanttFinish:"", GanttFinishCanEdit:"1", GanttFitVisible:"0",
      GanttCheck:"4", GanttCheckTime:"1000", GanttCheckExclude:"1", GanttStrict:"1", GanttBasePreferred:"0", GanttFinishPreferred:"0", GanttEditStartMove:"1", GanttMinSlack:"0", GanttErrSlack:"0", GanttSeparateSlack:"0", GanttManualChange:"2", GanttManualSide:"2",
      GanttDependencyIcons:"3", GanttAllDependencies:"2", GanttDragDependenciesMove:"1", GanttDragDependenciesMore:"1", GanttCheckDependencies:"2",
      GanttDirection:"0", GanttCorrectDependencies:"2", GanttIncorrectDependencies:"1", GanttCorrectDependenciesFixed:"0", GanttFixComplete:"0", GanttMaxCorrectingLoops:"40", GanttRunMaxCorrectingLoops:"5", GanttCorrectDependenciesButtons:"Yes,No,Always,Never",
      GanttMarkIncorrectDependencies:"2", GanttColorIncorrectDependencies:"9", GanttMarkDisabledDependencies:"2", GanttColorDisabledDependencies:"8", GanttAssignDependencies:"0", GanttDependencyColor:"0", GanttAdjacentDependencies:"1",
      GanttRunResize:"Resize", GanttRunMove:"Slide", GanttRunAdjust:"Shift", GanttRunAdjustStart:"Slip", GanttRunAdjustCorrect:"Slip", GanttRunError:"Sort", GanttRunErrors:"1", GanttRunJoined:"0", GanttRunJoinedNbsp:"255", GanttRunSelect:"0", GanttRunTip:"*Text*",
      GanttRunNew:"0.0001,Box", GanttRunNewStart:"0.0001,Box", GanttRunGroupHover:"1", GanttRunStates:"2", GanttRunCorrectFixed:"1", GanttRunMilestones:"1", GanttRunBoxMinType:"1",
      GanttRunIds:"1", GanttRunIdPrefix:"new", GanttRunIdPostfix:"", GanttRunLastId:"", GanttRunDragObject:"2", GanttRunContainersResize:"1", GanttRunContainersDelete:"1",
      GanttMenu:"SplitGanttConstraint,ChangeGanttConstraint,EditGanttFlag,ChooseGanttFlagIcon,SetGanttMilestone,LockGanttMain,DisableGanttMain,SplitGanttMain,SetGanttPercent,EditGanttPercent,EditGanttText,SelectGanttRunPart,LockGanttRun,LockGanttRunContainer,DisableGanttRun,DisableGanttRunContainer,EnableGanttRunContainer,SplitGanttRun,EditGanttRun,EditGanttRunTip,ChooseGanttRunType,ChooseGanttRunContainer,AddGanttRunContainer,-,SelectGanttRun,UnselectGanttRun,JoinGanttRunSelected,SplitGanttRunJoined,JoinGanttRunAdjacent,SplitGanttRunAdjacent,ChooseGanttRunSelectedType,ChooseGanttRunGroupType,ChooseGanttRunGroupAllType,ChooseGanttRunContainerType,ChooseGanttRunRowType,-,SetGanttRunMilestone,SetGanttRunPercent,EditGanttRunPercent,EditGanttRunText,-,EditGanttResource,GanttDepLagChange,-,DelGanttDep,DelGanttConstraint,DelGanttFlag,DelGanttPoint,DelGanttMilestone,DelGanttMainPart,DelGanttMain,DelGanttRunPart,DelGanttRunContainerOnly,-,DelAllGanttDep,DelGanttMainAll,DelGanttMainBar,DelGanttRunSelected,DelGanttRunGroup,DelGanttRunGroupAll,DelGanttRunContainer,DelGanttRun,DelGanttFlags,DelGanttPoints,DelGanttConstraints,DelGanttAll,-,NewGanttFlag,NewGanttPoint,NewGanttConstraint,NewGanttMilestone,NewGanttEndMilestone,NewGanttRunStop,-,SetGanttBase,DelGanttBase,SetGanttFinish,DelGanttFinish,CorrectRelatedDependencies,CorrectAllDependencies,-,ZoomBar,ZoomAll,ZoomHeader,ZoomUndo,ZoomIn,ZoomOut,ZoomFit"
      }
   }, // DefCols

// First Header row = column captions
Header: { 
   Kind:"Header",Def:"Header", id:"Header",
	CanDrag:"0", CanCopy:"1", CanSelect:"1", CanDelete:"1", CanExport:"1"
   },
   
// Root settings
Root: {
   CDef:"R",
   CanSort:"1",
   FocusCell:"Border", FocusRow:"Border,Background",
   AddParent:"0"
   },

// Row left panel
Panel : {
	Def:"", Visible:"1", Move:"0", Select:"1", Delete:"1", Copy:"0", Prepared:"1",
   CanHide:"1", CanResize:"0", CanMove:"0", CanDrag:"1", CanExport:"0", CanCopyPaste:"0", CanSelect:"0", CanPrint:"0", NoUpload:"1", FormulaCanUse:"0", NoBorder:"3", NoStyle:"2", NoFormat:"2",
	HoverCell:"Color",
   PanelCopyMenu:"CopyRow,CopyRows,CopyTree,CopyRowsTree,CopySelected,CopySelectedTree,CopySelectedChildEnd,CopySelectedTreeChildEnd,-,AddRow,AddRows@2,CopyEmpty,CopyRowsEmpty,CopySelectedEmpty,CopySelectedEmptyChildEnd,-,AddChildEnd",
   PanelCopyAllMenu:"CopyRowF,CopyRows@2,CopyTree,CopyRowsTree,CopySelected,CopySelectedTree,CopySelectedChildEnd,CopySelectedTreeChildEnd,-,AddRowF,AddRows@2,CopyEmpty,CopyRowsEmpty,CopySelectedEmpty,CopySelectedEmptyChildEnd,-,AddChildEnd,AddRowEnd"
	},

// Right side pager
Pager : {
	Visible:"1", Width:"100", MinWidth:"35", CanResize:"1", CanHide:"1", Hover:"1", Name:"Pager"
	},

// Row displayed when no variable rows are visible
// To not show it define Html:"" for it in Text.xml
Solid : [
   { id:"NoData", Panel:"0", Space:"2", Kind:"NoData", Visible:"0", CanPrint:"5", CanHide:"0" }
   ],

// Bottom toolbar
Toolbar: { 
   id:"Toolbar", CanPrint:"0", Space:"4", Tag:"", Visible:"1", CanHide:"0", LastVisible:"Cfg",

   Cells20Data:"Import,Save,Reload,Repaint,Print,ExportPDF,Export",
   SaveButton:"Class", SaveOnEnter:"Validate AND Save", SaveVisibleFormula:"(Grid.Source.Upload.Url||Grid.Source.Upload.Tag||Grid.Source.Upload.Data||Grid.Source.Upload.Script)&&!Grid.Detail?1:0",
   ReloadButton:"Class", ReloadOnEnter:"Reload", ReloadVisibleFormula:"!Grid.Detail",
   RepaintButton:"Class", RepaintOnEnter:"RenderPages", RepaintVisibleFormula:"(Grid.Paging==1||Grid.Paging==2)&&Grid.AllPages||Grid.ColPaging||Grid.ChildParts&&Grid.ChildPaging!=3", RepaintFormula:"Grid.Paging==2||Grid.ColPaging==2||Grid.ChildParts==2?0:1",
   PrintButton:"Class", PrintOnEnter:"Print",
   ExportPDFButton:"Class", ExportPDFOnEnter:"ExportPDF", ExportPDFVisibleFormula:"!!(Grid.Source.ExportPDF.Url||Grid.Source.ExportPDF.Script)",
   ExportButton:"Class", ExportOnEnter:"Export", ExportVisibleFormula:"Grid.ExportFormat && (!Grid.Source.Export.Type || Grid.Source.Export.Url || Grid.Source.Export.Script) ? 1 : 0",
   ImportButton:"Class", ImportOnEnter:"Import", ImportVisibleFormula:"Grid.ImportAction&1 && window.File ? 1 : 0",

   Cells30Manipulate:"Undo,Redo,Add,AddChild,AddCol,Join,Split,Outdent,Indent,ExpandAll,CollapseAll",
   UndoButton:"Class", UndoVisibleFormula:"Grid.Undo?1:0", UndoFormula:"Grid.CanUndo()", UndoOnEnter:"Undo",
   RedoButton:"Class", RedoVisibleFormula:"Grid.Undo?1:0", RedoFormula:"Grid.CanRedo()", RedoOnEnter:"Redo",
   AddButton:"Class", AddOnEnter:"ShowMenuF OR AddRowF OR AddRowEnd", AddVisibleFormula:"Grid.Adding",
   AddMenu:"CopyRow,CopyRows,CopyTree,CopyRowsTree,CopySelected,CopySelectedTree,CopySelectedEnd,CopySelectedTreeEnd,-,AddRow,AddRows,CopyEmpty,CopyRowsEmpty,CopySelectedEmpty,CopySelectedEmptyEnd,-,AddRowEnd",
   AddChildButton:"Class", AddChildOnEnter:"ShowMenuF OR AddChildEndF", AddChildVisibleFormula:"Grid.Adding && !!Grid.MainCol",
   AddChildMenu:"CopySelectedChildEnd,CopySelectedTreeChildEnd,CopySelectedEmptyChildEnd,AddChildEnd",
   AddColButton:"Class", AddColOnEnter:"ShowMenuF OR AddColF OR AddColEnd", AddColVisibleFormula:"Grid.ColAdding",
   AddColMenu:"CopyColF,CopyCols@2,AddColF,AddCols@2,AddColEnd",
   JoinButton:"Class", JoinOnEnter:"SpanSelectedF", JoinVisibleFormula:"Grid.SelectingCells && Grid.DynamicSpan",
   SplitButton:"Class", SplitOnEnter:"SplitSelectedF OR SplitCellF", SplitVisibleFormula:"Grid.SelectingCells && Grid.DynamicSpan",
   OutdentButton:"Class", OutdentOnEnter:"OutdentSelectedF OR OutdentF", OutdentVisibleFormula:"!!Grid.MainCol && !!Grid.Dragging",
   IndentButton:"Class", IndentOnEnter:"IndentSelectedF OR IndentF", IndentVisibleFormula:"!!Grid.MainCol && !!Grid.Dragging",
   ExpandAllButton:"Class", ExpandAllOnEnter:"ExpandAllLoaded", ExpandAllVisibleFormula:"!!Grid.MainCol",
   CollapseAllButton:"Class", CollapseAllOnEnter:"CollapseAll", CollapseAllVisibleFormula:"!!Grid.MainCol",

   Cells40Sheet:"Left,Center,Right,TextIndent,Top,Middle,Bottom,Bold,Italic,Underline,Strike,RotateLeft,RotateRight,WrapText,Size,ColorText,ColorShadow,ColorBackground,Border,Format",
   LeftButton:"Class", LeftSwitch:"1", LeftOnEnter:"AlignLeftSelectedF OR AlignLeftCellsF", LeftVisibleFormula:"!!Grid.DynamicStyle", LeftFormula:"(Grid.GetAttribute(Grid.FRow,Grid.FCol,'Align')+'').toLowerCase()=='left'?1:0",
   CenterButton:"Class", CenterSwitch:"1", CenterOnEnter:"AlignCenterSelectedF OR AlignCenterCellsF", CenterVisibleFormula:"!!Grid.DynamicStyle", CenterFormula:"(Grid.GetAttribute(Grid.FRow,Grid.FCol,'Align')+'').toLowerCase()=='center'?1:0",
   RightButton:"Class", RightSwitch:"1", RightOnEnter:"AlignRightSelectedF OR AlignRightCellsF", RightVisibleFormula:"!!Grid.DynamicStyle", RightFormula:"(Grid.GetAttribute(Grid.FRow,Grid.FCol,'Align')+'').toLowerCase()=='right'?1:0",
   TextIndentType:"Enum", TextIndentCanFocus:"2", TextIndentWidth:"58", TextIndentIconAlign:"Right", TextIndentOnClick:"StartEditCellAccept", TextIndentVisibleFormula:"!!Grid.DynamicStyle",
   TextIndentOnChange:"Grid.Indent=Value;return SetIndentSelectedF OR SetIndentCellsF", TextIndentOnSame:"SetIndentSelectedF OR SetIndentCellsF",
   TextIndentFormula:"var v=Grid.GetAttribute(Grid.FRow,Grid.FCol,'Indent');return v>50?50:v>10?Math.round(v/5)*5:v||v=='0'?v:'';", TextIndentCanEdit:"1",
   TextIndentEnumFormula:"var s=Grid.Indents,c=s.charAt(0);s=s.slice(1).split(c),o=[];for(var i=1;i<s.length;i+=2)o[o.length]=s[i];return c+o.join(c)",
   TextIndentEnumKeysFormula:"var s=Grid.Indents,c=s.charAt(0);s=s.slice(1).split(c),o=[];for(var i=0;i<s.length;i+=2)o[o.length]=s[i];return c+o.join(c)",
   TopButton:"Class", TopSwitch:"1", TopOnEnter:"AValignTopSelectedF OR AValignTopCellsF", TopVisibleFormula:"!!Grid.DynamicStyle", TopFormula:"(Grid.GetAttribute(Grid.FRow,Grid.FCol,'VAlign')+'').toLowerCase()=='top'?1:0",
   MiddleButton:"Class", MiddleSwitch:"1", MiddleOnEnter:"AValignTopSelectedF OR AValignTopCellsF", MiddleVisibleFormula:"!!Grid.DynamicStyle", MiddleFormula:"(Grid.GetAttribute(Grid.FRow,Grid.FCol,'VAlign')+'').toLowerCase()=='middle'?1:0",
   BottomButton:"Class", BottomSwitch:"1", BottomOnEnter:"AValignTopSelectedF OR AValignTopCellsF", BottomVisibleFormula:"!!Grid.DynamicStyle", BottomFormula:"(Grid.GetAttribute(Grid.FRow,Grid.FCol,'VAlign')+'').toLowerCase()=='bottom'?1:0",
   BoldButton:"Class", BoldSwitch:"1", BoldOnEnter:"BoldOffSelectedF OR BoldOnSelectedF OR BoldOffCellsF OR BoldOnCellsF", BoldVisibleFormula:"!!Grid.DynamicStyle", BoldFormula:"Grid.GetAttribute(Grid.FRow,Grid.FCol,'TextStyle')&1?1:0",
   ItalicButton:"Class", ItalicSwitch:"1", ItalicOnEnter:"ItalicOffSelectedF OR ItalicOnSelectedF OR ItalicOffCellsF OR ItalicOnCellsF", ItalicVisibleFormula:"!!Grid.DynamicStyle" ,ItalicFormula:"Grid.GetAttribute(Grid.FRow,Grid.FCol,'TextStyle')&2?1:0",
   UnderlineButton:"Class", UnderlineSwitch:"1", UnderlineOnEnter:"UnderlineOffSelectedF OR UnderlineOnSelectedF OR UnderlineOffCellsF OR UnderlineOnCellsF", UnderlineVisibleFormula:"!!Grid.DynamicStyle", UnderlineFormula:"Grid.GetAttribute(Grid.FRow,Grid.FCol,'TextStyle')&4?1:0",
   StrikeButton:"Class", StrikeSwitch:"1", StrikeOnEnter:"StrikeOffSelectedF OR StrikeOnSelectedF OR StrikeOffCellsF OR StrikeOnCellsF", StrikeVisibleFormula:"!!Grid.DynamicStyle", StrikeFormula:"Grid.GetAttribute(Grid.FRow,Grid.FCol,'TextStyle')&8?1:0",
   RotateLeftButton:"Class", RotateLeftSwitch:"1", RotateLeftOnEnter:"RotateLeftSelectedF OR NoRotateSelectedF OR RotateLeftF OR NoRotateF", RotateLeftVisibleFormula:"!!Grid.DynamicStyle", RotateLeftFormula:"Grid.GetAttribute(Grid.FRow,Grid.FCol,'Rotate')==1?1:0",
   RotateRightButton:"Class", RotateRightSwitch:"1", RotateRightOnEnter:"RotateRightSelectedF OR NoRotateSelectedF OR RotateRightF OR NoRotateF", RotateRightVisibleFormula:"!!Grid.DynamicStyle", RotateRightFormula:"Grid.GetAttribute(Grid.FRow,Grid.FCol,'Rotate')==2?1:0",
   WrapTextButton:"Class", WrapTextSwitch:"1", WrapTextOnEnter:"WrapOffSelectedF OR WrapOnSelectedF OR WrapOffCellsF OR WrapOnCellsF", WrapTextVisibleFormula:"!!Grid.DynamicStyle", WrapTextFormula:"Grid.GetAttribute(Grid.FRow,Grid.FCol,'Wrap')?1:0",
   SizeType:"Enum", SizeCanFocus:"2", SizeWidth:"58", SizeIconAlign:"Right", SizeOnClick:"StartEditCellAccept", SizeVisibleFormula:"!!Grid.DynamicStyle",
   SizeOnChange:"Grid.TextSize=Value;return SetTextSizeSelectedF OR SetTextSizeCellsF", SizeOnSame:"var v=Grid.GetAttribute(Grid.FRow,Grid.FCol,'TextSize');Grid.TextSize=v?v:'';SetTextSizeSelectedF OR SetTextSizeCellsF",
   SizeEnumFormula:"var s=Grid.TextSizes,c=s.charAt(0);s=s.slice(1).split(c),o=[];for(var i=1;i<s.length;i+=2)o[o.length]=s[i];return c+o.join(c)",
   SizeEnumKeysFormula:"var s=Grid.TextSizes,c=s.charAt(0);s=s.slice(1).split(c),o=[];for(var i=0;i<s.length;i+=2)o[o.length]=s[i];return c+o.join(c)",
   SizeFormula:"var v=Grid.GetAttribute(Grid.FRow,Grid.FCol,'TextSize');return v?v:'';", SizeCanEdit:"1",
   ColorTextButton:"Class", ColorTextOnEnter:"SetTextColorSelectedF OR SetTextColorCellsF", ColorTextVisibleFormula:"!!Grid.DynamicStyle", ColorTextUnderlineFormula:"Grid.TextColor?Grid.TextColor:''",
   ColorTextLeft:"1", ColorTextLeftVisibleFormula:"!!Grid.DynamicStyle",
   ColorTextSwitch:"1", ColorTextPopupIcon:"3", ColorTextOnClickPopup:"ChooseTextColorSelectedF OR ChooseTextColorCellsF OR ChooseTextColorF OR 1",
   ColorShadowButton:"Class", ColorShadowOnEnter:"SetTextShadowColorSelectedF OR SetTextShadowColorCellsF", ColorShadowVisibleFormula:"!!Grid.DynamicStyle", ColorShadowUnderlineFormula:"Grid.TextShadowColor?Grid.TextShadowColor:''",
   ColorShadowSwitch:"1", ColorShadowPopupIcon:"3", ColorShadowOnClickPopup:"ChooseTextShadowColorSelectedF OR ChooseTextShadowColorCellsF OR ChooseTextShadowColorF OR 1",
   ColorBackgroundButton:"Class", ColorBackgroundOnEnter:"SetColorSelectedF OR SetColorCellsF", ColorBackgroundVisibleFormula:"!!Grid.DynamicStyle", ColorBackgroundUnderlineFormula:"Grid.DefaultColor?Grid.DefaultColor:''",
   ColorBackgroundSwitch:"1", ColorBackgroundPopupIcon:"3", ColorBackgroundOnClickPopup:"ChooseColorSelectedF OR ChooseColorCellsF OR ChooseColorF OR 1",
   BorderButton:"Class", BorderOnEnter:"AlignLeftF", BorderVisibleFormula:"!!Grid.DynamicBorder", BorderSwitch:"1", BorderPopupIcon:"3",
   BorderButtonClassFormula:"var o=Grid.BorderOut?(Grid.BorderOut+'').split(','):null,i=Grid.BorderIn?(Grid.BorderIn+'').split(','):null;return 'Border,Border'+(o?(i?'All':'O'+(o[3]?o[3]:15)):(i?'I'+(i[3]?(i[3]&5?1:0)+(i[3]&10?2:0):3):''))",
   BorderUnderlineFormula:"var o=Grid.BorderOut?Grid.BorderOut:Grid.BorderIn;if(o)o=(o+'').split(',')[1];return o?o:''",
   BorderUnderlineStyleFormula:"var o=Grid.BorderOut?Grid.BorderOut:Grid.BorderIn;if(o)o=(o+'').split(',')[0];return o?o:'Empty'",
   BorderOnClickPopup:"ChooseSelectedBordersF OR ChooseBordersF OR ChooseBorderF OR 1",
   FormatType:"Html", FormatCanEdit:"1", FormatCanFocus:"2", FormatWrap:"0", FormatWidth:"92", FormatIcon:"Enum", FormatIconAlign:"Right", FormatCursor:"Pointer", FormatVisibleFormula:"!!Grid.DynamicFormat", FormatOnClick:"ShowDefaults", FormatOnDblClick:"1",
   FormatFormula:"Grid.FindFormat(Grid.FRow,Grid.FCol,Grid.Formats,'<span style=\"font-size:9px;color:silver;\">format</span>')", FormatDefaultsFormula:"return Grid.Formats", FormatTip:"1",
   FormatOnChange:"Grid.Format=Value;return SetFormatSelectedF OR SetFormatCellsF", FormatOnSame:"SetFormatSelectedF OR SetFormatCellsF",

   Cells10Gantt:"Correct",
   Cells50GanttZoom:"ZoomIn,ZoomOut,ZoomFit",
   CorrectButton:"Class", CorrectVisibleFormula:"Grid.HasDependencies()", CorrectFormula:"Grid.HasDependencies()?(ganttdependencyerrors()?1:0):0", CorrectOnEnter:"CorrectAllDependencies",
   ZoomInButton:"Class", ZoomInVisibleFormula:"Grid.HasGantt()", ZoomInFormula:"Grid.CanZoomIn()", ZoomInOnEnter:"ZoomIn",
   ZoomOutButton:"Class", ZoomOutVisibleFormula:"Grid.HasGantt()", ZoomOutFormula:"Grid.CanZoomOut()", ZoomOutOnEnter:"ZoomOut",
   ZoomFitButton:"Class", ZoomFitVisibleFormula:"Grid.HasGantt()", ZoomFitOnEnter:"ZoomFitAll",

   Cells60Cfg:"Sort,Calc,Columns,Cfg,Help,Debug",
   SortButton:"Class", SortOnEnter:"SortOn OR SortOff", SortVisibleFormula:"Grid.Sorting && (Grid.Paging==3||Grid.ChildPaging==3||Grid.Paging==1 && Grid.LoadedCount>300)", SortFormula:"Grid.Sorted?1:0",
   CalcButton:"Class", CalcOnEnter:"CalcOn OR CalcOff", CalcVisibleFormula:"Grid.Calculating && !Grid.Gantt", CalcFormula:"Grid.Calculated?1:0",
   ColumnsButton:"Class", ColumnsOnEnter:"ShowColumns",
   CfgButton:"Class", CfgOnEnter:"ShowCfg",
   HelpButton:"Class", HelpOnEnter:"ShowHelp",
   DebugButton:"Class", DebugOnEnter:"ShowDebug", DebugVisibleFormula:"!!Grid.DebugFlags.length",
      
   Cells70Styles:"Styles,GanttStyles,Sizes,Scales",
   StylesType:"Styles", Styles:"2",
   GanttStylesType:"GanttStyles", GanttStyles:"2",
   SizesType:"Sizes", Sizes:"2",
   ScalesType:"Scales", Scales:"2",

   Cells80Right:"Empty,Formula,Resize",
   EmptyRelWidth:"1", EmptyNoColor:"1",
   FormulaWidth:"-2", FormulaNoColor:"1", FormulaCanFocus:"0", FormulaType:"Html", FormulaWrap:"0",
   ResizeWidth:"1", ResizeVisibleFormula:"!!Grid.ResizingMain", ResizeCanFocus:"0", ResizeVAlign:""
   },

// Configuration menus
MenuCfg : {
	Items:"GanttCaption,GanttCfg,CfgCaption,Cfg,StylesCaption,Styles", Attribute:"CanHide", HideUnused:"1"
	},
MenuColumns : {
   Items:"Cols,-,Pagers,-,Head,-,Foot,-,Space", Attribute:"CanHide", HideUnused:"1"
   },
MenuPrint : {
   Items:"ColsCaption,Cols,SpaceCaption,Space,RowsCaption,Head,Foot,OptionsCaption,Options,SizeCaption,Size", Attribute:"CanPrint", HideUnused:"1"
   },
MenuExport : {
      Items:"ColsCaption,Cols,RowsCaption,Head,Foot,OptionsCaption,Options", Attribute:"CanExport", HideUnused:"1"
   },

// Animations
Animations : {
   Show:"#AnimateCenterTop, #ZoomInH 500ms", Hide:"#AnimateCenterTop, #ZoomOutH 500ms", ShowFilter:"@#AnimateCenterTop, #ZoomInH 500ms, #HighlightAdd 500ms", HideFilter:"@#HighlightDelete 500ms, #AnimateCenterTop, #ZoomOutH 500ms",
   Add:"#ZoomIn 500ms",
   CopyTo:"#ZoomIn 500ms", CopyFrom:"@#Mark 500ms", CopyRowsFrom:"@#Mark,500", CopyToOutside:"#ZoomIn 500ms", CopyFromOutside:"@#Highlight 500ms",
   MoveTo:"#ZoomIn 250ms", MoveFrom:"#ZoomOut 250ms", MoveToOutside:"#ZoomIn 500ms", MoveFromOutside:"#ZoomOut 500ms",
   Delete:"#ZoomOut 500ms, #AnimateCenterTop, #AnimateTransparent, #ZoomOutH 200ms", DeleteVisible:"#ZoomOut 500ms", Undelete:"#ZoomIn 500ms",
   Select:"#RotateX90 300ms", Deselect:"#RotateX90 300ms",
   ExpandChildren:"#AnimateCenterTop, #ZoomInH 200ms", CollapseChildren:"#AnimateCenterTop, #ZoomOutH 200ms",

   UndoShow:"@#Highlight 500ms, #ZoomOut 500ms", RedoShow:"@#ZoomIn 500ms, #Highlight 500ms", UndoHide:"@#ZoomIn 500ms, #Highlight 500ms", RedoHide:"@#Highlight 500ms,#ZoomOut 500ms",
   UndoAdd:"@#HighlightDelete 500ms, #ZoomOut 500ms", RedoAdd:"@#ZoomIn 500ms, #HighlightAdd 500ms",
   UndoMove:"@#ZoomIn 500ms, #HighlightMove 500ms", RedoMove:"@#ZoomIn 500ms, #HighlightMove 500ms",
   UndoDelete:"@#ZoomIn 500ms, #HighlightAdd 500ms", RedoDelete:"@#HighlightDelete 500ms, #ZoomOut 500ms", UndoUndelete:"@#HighlightDelete 500ms, #ZoomOut 500ms", RedoUndelete:"@#ZoomIn 500ms, #HighlightAdd 500ms",
   UndoSelect:"#RotateX90 300ms", RedoSelect:"#RotateX90 300ms", UndoDeselect:"#RotateX90 300ms", RedoDeselect:"#RotateX90 300ms",
   UndoResize:"@#Highlight 500ms", RedoResize:"@#Highlight 500ms",

   Added:"@#ZoomIn 500ms, #HighlightAdd 500ms",
   Moved:"@#ZoomIn 500ms, #HighlightMove 500ms",
   Deleted:"@#HighlightDelete 500ms, #ZoomOut 500ms",
   Selected:"@#HighlightSelect 500ms,#ColorSelected,#RotateX90 500ms", Deselected:"@#HighlightDeselect 500ms,#RotateX90 500ms",
   Expanded:"@#Highlight 500ms", ExpandedChildren:"#AnimateHidden, 500, #AnimateVisible, #AnimateCenterTop, #ZoomInH 500ms", Collapsed:"@#Highlight 500ms", CollapsedChildren:"500, #AnimateCenterTop, #ZoomOutH 500ms",
   ChangedFrom:"#HighlightChange 500ms, #RotateX90To 200ms", ChangedTo:"#RotateX90From 200ms",

   ShowCol:"#ZoomInX 500ms", HideCol:"#ZoomOutX 500ms",
   AddCol:"#ZoomIn 500ms",
   CopyColTo:"#ZoomIn 500ms", CopyColFrom:"#Mark 500ms", CopyColsFrom:"#Mark,500",
   MoveColTo:"#ZoomIn 250ms", MoveColFrom:"#ZoomOut 250ms",
   DeleteCol:"#ZoomOut 500ms", UndeleteCol:"#ZoomIn 500ms",
   SelectCol:"#RotateY90 300ms", DeselectCol:"#RotateY90 300ms",

   UndoShowCol:"#Highlight 500ms, #ZoomOutX 500ms", RedoShowCol:"#ZoomInX 500ms, #Highlight 500ms", UndoHideCol:"#ZoomInX 500ms, #Highlight 500ms", RedoHideCol:"#Highlight 500ms,#ZoomOutX 500ms",
   UndoAddCol:"#HighlightDelete 500ms, #ZoomOut 500ms", RedoAddCol:"#ZoomIn 500ms, #HighlightAdd 500ms",
   UndoMoveCol:"@#ZoomIn 500ms, #HighlightMove 500ms", RedoMoveCol:"@#ZoomIn 500ms, #HighlightMove 500ms",
   UndoDeleteCol:"#ZoomIn 500ms, #HighlightAdd 500ms", RedoDeleteCol:"#HighlightDelete 500ms, #ZoomOut 500ms", UndoUndeleteCol:"#HighlightDelete 500ms, #ZoomOut 500ms", RedoUndeleteCol:"#ZoomIn 500ms, #HighlightAdd 500ms",
   UndoSelectCol:"#RotateY90 300ms", RedoSelectCol:"#RotateY90 300ms", UndoDeselectCol:"#RotateY90 300ms", RedoDeselectCol:"#RotateY90 300ms",
   UndoResizeCol:"#Highlight 500ms", RedoResizeCol:"#Highlight 500ms",

   Focus:"#Focus 200ms", FocusGantt:"", FocusLines:"",
   Find:"#HighlightSelect 500ms",
   Copy:"#AnimateLeftCenter,#Copy 200ms",
   EditFrom:"#RotateX90To 200ms", EditTo:"#RotateX90From 200ms", EditBoolFrom:"#RotateY90To 200ms", EditBoolTo:"#RotateY90From 200ms",
   CalculateFrom:"#RotateX90To 200ms", CalculateTo:"#RotateX90From 200ms",
   ChangeFrom:"#RotateX90To 200ms", ChangeTo:"#RotateX90From 200ms",
   FillFrom:"#RotateX90To 200ms", FillTo:"#RotateX90From 200ms",
   PasteFrom:"#RotateX90To 200ms", PasteTo:"#RotateX90From 200ms",
   MarkFrom:"#RotateX90To 200ms", MarkTo:"#RotateX90From 200ms",
   ClearFrom:"#RotateX90To 200ms", ClearTo:"",

   UndoChangeFrom:"#RotateX90To 200ms", UndoChangeTo:"#RotateX90From 200ms", RedoChangeFrom:"#RotateX90To 200ms", RedoChangeTo:"#RotateX90From 200ms",
   UndoBorder:"#Highlight 500ms", RedoBorder:"#Highlight 500ms",
   UndoStyle:"#Highlight 500ms", RedoStyle:"#Highlight 500ms",

   ShowMenu:"#AnimateCenterTop, #ZoomInY 200ms", ShowMenuUp:"#AnimateCenterBottom, #ZoomInY 200ms", HideMenu:"#AnimateCenterTop, #ZoomOutY 200ms", HideMenuUp:"#AnimateCenterBottom, #ZoomOutY 200ms",
   ShowPopup:"#AnimateLeftTop, #ZoomIn 200ms", ShowPopupUp:"#AnimateLeftBottom, #ZoomIn 200ms", HidePopup:"#AnimateLeftTop, #ZoomOut 200ms", HidePopupUp:"#AnimateLeftBottom, #ZoomOut 200ms",
   ShowCfg:"#ZoomIn 200ms", HideCfg:"#ZoomOut 200ms",
   ShowTip:"#AnimateLeftTop, #ZoomIn 200ms", ShowTipRight:"#AnimateRightTop, #ZoomIn 200ms", HideTip:"#AnimateLeftTop, #ZoomOut 200ms", HideTipRight:"#AnimateRightTop, #ZoomOut 200ms",
   ShowHint:"#Show 200ms", HideHint:"#Hide 200ms", ShowHintVert:"#Show 200ms", HideHintVert:"#Hide 200ms",
   ShowMessage:"#ZoomIn 200ms", HideMessage:"#ZoomOut 200ms",
   ShowCalendar:"#AnimateRightTop, #ZoomIn 200ms", ShowCalendarUp:"#AnimateRightBottom, #ZoomIn 200ms", HideCalendar:"#AnimateRightTop, #ZoomOut 200ms", HideCalendarUp:"#AnimateRightBottom, #ZoomOut 200ms",
   ShowCalendarLeft:"#AnimateLeftTop, #ZoomIn 200ms", ShowCalendarLeftUp:"#AnimateLeftBottom, #ZoomIn 200ms", HideCalendarLeft:"#AnimateLeftTop, #ZoomOut 200ms", HideCalendarLeftUp:"#AnimateLeftBottom, #ZoomOut 200ms",
   CalendarDaysFrom:"#RotateX90To 200ms", CalendarDaysTo:"#RotateX90From 200ms", CalendarMonthsFrom:"#RotateX90To 200ms", CalendarMonthsTo:"#RotateX90From 200ms",
   CalendarMonthFrom:"#RotateY90To 200ms", CalendarMonthTo:"#RotateY90From 200ms", CalendarYearFrom:"", CalendarYearTo:""
   },

// Configuration preset per CSS style
Media : [
   { Style:"TT", 
      Cfg : { Alternate:"2", AlternateType:"3", ColorPanel:"1" }
      },
   { Style:"CB,CC,CE,CG,CL,CS,CO,CP,CQ,CR,CF",
      Cfg:{ ShrinkStyleType:"0" },
      Rows : [
         { id:"Toolbar", SizesVisible:"0", SizesLabelVisible:"0", GanttStylesVisible:"0", GanttStylesLabelVisible:"0" }
         ]
      }
   ]

}) // End of JSONP header