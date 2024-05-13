#import "RNNComponentOptions.h"
#import "RNNIconBackgroundOptions.h"
#import "RNNInsetsOptions.h"
#import "RNNOptions.h"

@interface RNNButtonOptions : RNNOptions

@property(nonatomic, strong) TextL *identifier;
@property(nonatomic, strong) TextL *fontFamily;
@property(nonatomic, strong) TextL *text;
@property(nonatomic, strong) TextL *systemItem;
@property(nonatomic, strong) TextL *accessibilityLabel;
@property(nonatomic, strong) Number *fontSize;
@property(nonatomic, strong) TextL *fontWeight;
@property(nonatomic, strong) TextL *testID;
@property(nonatomic, strong) Color *color;
@property(nonatomic, strong) Color *disabledColor;
@property(nonatomic, strong) Image *icon;
@property(nonatomic, strong) TextL *sfSymbol;
@property(nonatomic, strong) Bool *enabled;
@property(nonatomic, strong) RNNInsetsOptions *iconInsets;
@property(nonatomic, strong) Bool *selectTabOnPress;
@property(nonatomic, strong) RNNComponentOptions *component;
@property(nonatomic, strong) RNNIconBackgroundOptions *iconBackground;
@property(nonatomic, strong) Bool *disableIconTint;

- (RNNButtonOptions *)withDefault:(RNNButtonOptions *)defaultOptions;

- (UIColor *)resolveColor;

- (RNNButtonOptions *)withDefaultColor:(Color *)color disabledColor:(Color *)disabledColor;

- (BOOL)shouldCreateCustomView;

- (BOOL)isEnabled;

- (UIControlState)state;

@end
