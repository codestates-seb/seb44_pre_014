// package com.server.audit;

// import java.util.Optional;

// import org.springframework.data.domain.AuditorAware;
// import org.springframework.stereotype.Component;

// @Component
// public class AuditorAwareImpl implements AuditorAware<String> {
//     @Override
//     public Optional<String> getCurrentAuditor() {
//         Authentication authentication =
//                 SecurityContextHolder.getContext().getAuthentication();
//         String userId = "";
//         if(authentication != null){
//             userId = authentication.getName(); // 로그인한 사용자의 정보를 조회하여 사용자의 이름을 등록자와 수정자로 지정
//             // username(nickname)으로 구현 필요
//         }
//         return Optional.of(userId);
//     }
// }
