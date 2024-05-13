#import "RNNOptions.h"

@class DotIndicatorOptions;

@interface RNNBottomTabOptions : RNNOptions

@property(nonatomic) NSUInteger tag;
@property(nonatomic, strong) TextL *text;
@property(nonatomic, strong) TextL *badge;
@property(nonatomic, strong) Color *badgeColor;
@property(nonatomic, strong) DotIndicatorOptions *dotIndicator;
@property(nonatomic, strong) TextL *fontFamily;
@property(nonatomic, strong) TextL *fontWeight;
@property(nonatomic, strong) TextL *testID;
@property(nonatomic, strong) TextL *accessibilityLabel;
@property(nonatomic, strong) Image *icon;
@property(nonatomic, strong) Image *selectedIcon;
@property(nonatomic, strong) Color *iconColor;
@property(nonatomic, strong) Color *selectedIconColor;
@property(nonatomic, strong) Color *selectedTextColor;
@property(nonatomic, strong) RNNDictionary *iconInsets;
@property(nonatomic, strong) Color *textColor;
@property(nonatomic, strong) Number *fontSize;
@property(nonatomic, strong) Bool *visible;
@property(nonatomic, strong) Bool *selectTabOnPress;
@property(nonatomic, strong) TextL *sfSymbol;
@property(nonatomic, strong) TextL *sfSelectedSymbol;

- (BOOL)hasValue;

@end
