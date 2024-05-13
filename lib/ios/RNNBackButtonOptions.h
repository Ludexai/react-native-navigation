#import "RNNOptions.h"

@interface RNNBackButtonOptions : RNNOptions

@property(nonatomic, strong) Image *icon;
@property(nonatomic, strong) TextL *sfSymbol;
@property(nonatomic, strong) TextL *title;
@property(nonatomic, strong) TextL *fontFamily;
@property(nonatomic, strong) Number *fontSize;
@property(nonatomic, strong) TextL *transition;
@property(nonatomic, strong) TextL *testID;
@property(nonatomic, strong) Color *color;
@property(nonatomic, strong) Bool *showTitle;
@property(nonatomic, strong) Bool *visible;
@property(nonatomic, strong) Bool *enableMenu;
@property(nonatomic, strong) TextL *displayMode;
@property(nonatomic, strong) TextL *identifier;
@property(nonatomic, strong) Bool *popStackOnPress;

- (BOOL)hasValue;

@end
